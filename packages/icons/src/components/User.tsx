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
function SvgUser({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M21 21v-2c0-1.38-.561-2.632-1.464-3.536S17.38 14 16 14H8c-1.38 0-2.632.561-3.536 1.464S3 17.62 3 19v2a1 1 0 0 0 2 0v-2c0-.829.335-1.577.879-2.121S7.171 16 8 16h8c.829 0 1.577.335 2.121.879S19 18.171 19 19v2a1 1 0 0 0 2 0zM17 7c0-1.38-.561-2.632-1.464-3.536S13.38 2 12 2s-2.632.561-3.536 1.464S7 5.62 7 7s.561 2.632 1.464 3.536S10.62 12 12 12s2.632-.561 3.536-1.464S17 8.38 17 7zm-2 0c0 .829-.335 1.577-.879 2.121S12.829 10 12 10s-1.577-.335-2.121-.879S9 7.829 9 7s.335-1.577.879-2.121S11.171 4 12 4s1.577.335 2.121.879S15 6.171 15 7z" />
    </svg>
  );
}
export default SvgUser;
