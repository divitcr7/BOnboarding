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
function SvgUserCheck({
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
      <path d="M17 21v-2c0-1.38-.561-2.632-1.464-3.536S13.38 14 12 14H5c-1.38 0-2.632.561-3.536 1.464S0 17.62 0 19v2a1 1 0 0 0 2 0v-2c0-.829.335-1.577.879-2.121S4.171 16 5 16h7c.829 0 1.577.335 2.121.879S15 18.171 15 19v2a1 1 0 0 0 2 0zM13.5 7c0-1.38-.561-2.632-1.464-3.536S9.88 2 8.5 2s-2.632.561-3.536 1.464S3.5 5.62 3.5 7s.561 2.632 1.464 3.536S7.12 12 8.5 12s2.632-.561 3.536-1.464S13.5 8.38 13.5 7zm-2 0c0 .829-.335 1.577-.879 2.121S9.329 10 8.5 10s-1.577-.335-2.121-.879S5.5 7.829 5.5 7s.335-1.577.879-2.121S7.671 4 8.5 4s1.577.335 2.121.879S11.5 6.171 11.5 7zm4.793 4.707 2 2a.999.999 0 0 0 1.414 0l4-4a.999.999 0 1 0-1.414-1.414L19 11.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgUserCheck;
