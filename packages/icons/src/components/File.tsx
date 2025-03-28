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
function SvgFile({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M17.586 8H14V4.414zm3.121.293-7-7A1.008 1.008 0 0 0 13 1H6a2.997 2.997 0 0 0-3 3v16a2.997 2.997 0 0 0 3 3h12a2.997 2.997 0 0 0 3-3V9a.997.997 0 0 0-.293-.707zM12 3v6a1 1 0 0 0 1 1h6v10c0 .276-.111.525-.293.707S18.276 21 18 21H6c-.276 0-.525-.111-.707-.293S5 20.276 5 20V4c0-.276.111-.525.293-.707S5.724 3 6 3z" />
    </svg>
  );
}
export default SvgFile;
