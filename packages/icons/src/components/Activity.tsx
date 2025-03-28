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
function SvgActivity({
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
      <path d="M22 11h-4c-.439 0-.812.283-.949.684L15 17.838 9.949 2.684a1.001 1.001 0 0 0-1.898 0L5.279 11H2a1 1 0 0 0 0 2h4c.423-.003.81-.267.949-.684L9 6.162l5.051 15.154a.999.999 0 0 0 1.897 0L18.721 13H22a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgActivity;
