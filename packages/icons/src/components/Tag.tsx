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
function SvgTag({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M21.297 14.117a2.991 2.991 0 0 0 .874-2.115 2.996 2.996 0 0 0-.874-2.12l-8.59-8.59A1 1 0 0 0 12 1H2a1 1 0 0 0-1 1v10c0 .256.098.512.293.708l8.592 8.582c.586.585 1.356.878 2.122.877s1.536-.294 2.12-.879zm-1.414-1.414-7.17 7.17c-.196.196-.45.294-.707.294s-.512-.097-.707-.292L3 11.585V3h8.586l8.297 8.297c.192.193.289.447.289.704s-.097.509-.289.702zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgTag;
