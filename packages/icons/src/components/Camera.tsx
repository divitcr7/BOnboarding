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
function SvgCamera({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M24 19V8a2.997 2.997 0 0 0-3-3h-3.465l-1.703-2.555A1 1 0 0 0 15 2H9c-.326.002-.64.158-.832.445L6.465 5H3a2.997 2.997 0 0 0-3 3v11a2.997 2.997 0 0 0 3 3h18a2.997 2.997 0 0 0 3-3zm-2 0c0 .276-.111.525-.293.707S21.276 20 21 20H3c-.276 0-.525-.111-.707-.293S2 19.276 2 19V8c0-.276.111-.525.293-.707S2.724 7 3 7h4a1 1 0 0 0 .832-.445L9.535 4h4.93l1.703 2.555c.192.287.506.443.832.445h4c.276 0 .525.111.707.293S22 7.724 22 8zm-5-6c0-1.38-.561-2.632-1.464-3.536S13.38 8 12 8s-2.632.561-3.536 1.464S7 11.62 7 13s.561 2.632 1.464 3.536S10.62 18 12 18s2.632-.561 3.536-1.464S17 14.38 17 13zm-2 0c0 .829-.335 1.577-.879 2.121S12.829 16 12 16s-1.577-.335-2.121-.879S9 13.829 9 13s.335-1.577.879-2.121S11.171 10 12 10s1.577.335 2.121.879S15 12.171 15 13z" />
    </svg>
  );
}
export default SvgCamera;
