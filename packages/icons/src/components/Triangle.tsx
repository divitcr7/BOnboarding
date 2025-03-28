import * as React from 'react';
import type { SVGProps } from 'react';
import useWithViewbox from '../useWithViewbox';
const mapSize = {
  sm: 16,
  md: 24,
  lg: 32,
};
interface SvgIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}
function SvgTriangle({
  size = 'md',
  color = '#000000',
  ...props
}: SvgIconProps) {
  const ref: React.RefObject<SVGSVGElement> = React.useRef(null);
  useWithViewbox(ref);
  const actualSize = mapSize[size] || 24;
  props = {
    fill: color,
    width: actualSize,
    height: actualSize,
    ref,
    ...props,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path d="M11.148 4.374a.973.973 0 0 1 .334-.332c.236-.143.506-.178.756-.116s.474.216.614.448l8.466 14.133c.07.12.119.268.128.434-.015.368-.119.591-.283.759a.988.988 0 0 1-.693.301L3.533 20a.997.997 0 0 1-.855-1.486zM9.432 3.346l-8.47 14.14c-.422.731-.506 1.55-.308 2.29s.68 1.408 1.398 1.822c.464.268.976.4 1.475.402H20.47a3 3 0 0 0 2.572-4.507L14.568 3.346a2.995 2.995 0 0 0-4.123-1.014c-.429.26-.775.615-1.012 1.014z" />
    </svg>
  );
}
export default SvgTriangle;
