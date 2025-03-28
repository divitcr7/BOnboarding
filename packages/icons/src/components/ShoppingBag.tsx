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
function SvgShoppingBag({
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
      <path d="M19 5H5l1.5-2h11zm2.794.392L18.8 1.4A1 1 0 0 0 18 1H6a1 1 0 0 0-.8.4L2.206 5.392A.978.978 0 0 0 2 6v14a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3V6a.997.997 0 0 0-.189-.585L21.8 5.4zM4 7h16v13c0 .276-.111.525-.293.707S19.276 21 19 21H5c-.276 0-.525-.111-.707-.293S4 20.276 4 20zm11 3c0 .829-.335 1.577-.879 2.121S12.829 13 12 13s-1.577-.335-2.121-.879S9 10.829 9 10a1 1 0 0 0-2 0c0 1.38.561 2.632 1.464 3.536S10.62 15 12 15s2.632-.561 3.536-1.464S17 11.38 17 10a1 1 0 0 0-2 0z" />
    </svg>
  );
}
export default SvgShoppingBag;
