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
function SvgAlignLeft({
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
      <path d="M17 9H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm4-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2zm0 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2zm-4 4H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgAlignLeft;
