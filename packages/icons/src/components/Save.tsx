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
function SvgSave({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M19 22a2.997 2.997 0 0 0 3-3V8a.997.997 0 0 0-.293-.707l-5-5A.997.997 0 0 0 16 2H5a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3zM8 20v-6h8v6zM6 4v4a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H8V4h7.586L20 8.414V19c0 .276-.111.525-.293.707S19.276 20 19 20h-1v-7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19V5c0-.276.111-.525.293-.707S4.724 4 5 4z" />
    </svg>
  );
}
export default SvgSave;
