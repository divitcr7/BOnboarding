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
function SvgSpeaker({
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
      <path d="M6 1a2.997 2.997 0 0 0-3 3v16a2.997 2.997 0 0 0 3 3h12a2.997 2.997 0 0 0 3-3V4a2.997 2.997 0 0 0-3-3zm0 2h12c.276 0 .525.111.707.293S19 3.724 19 4v16c0 .276-.111.525-.293.707S18.276 21 18 21H6c-.276 0-.525-.111-.707-.293S5 20.276 5 20V4c0-.276.111-.525.293-.707S5.724 3 6 3zm11 11c0-1.38-.561-2.632-1.464-3.536S13.38 9 12 9s-2.632.561-3.536 1.464S7 12.62 7 14s.561 2.632 1.464 3.536S10.62 19 12 19s2.632-.561 3.536-1.464S17 15.38 17 14zm-2 0c0 .829-.335 1.577-.879 2.121S12.829 17 12 17s-1.577-.335-2.121-.879S9 14.829 9 14s.335-1.577.879-2.121S11.171 11 12 11s1.577.335 2.121.879S15 13.171 15 14zm-3-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgSpeaker;
