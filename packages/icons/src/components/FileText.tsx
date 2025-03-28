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
function SvgFileText({
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
      <path d="M17.586 7H15V4.414zm3.121.293-6-6A1.008 1.008 0 0 0 14 1H6a2.997 2.997 0 0 0-3 3v16a2.997 2.997 0 0 0 3 3h12a2.997 2.997 0 0 0 3-3V8a.997.997 0 0 0-.293-.707zM13 3v5a1 1 0 0 0 1 1h5v11c0 .276-.111.525-.293.707S18.276 21 18 21H6c-.276 0-.525-.111-.707-.293S5 20.276 5 20V4c0-.276.111-.525.293-.707S5.724 3 6 3zm3 9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm0 4H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-6-8H8a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgFileText;
