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
function SvgUsers({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M18 21v-2c0-1.38-.561-2.632-1.464-3.536S14.38 14 13 14H5c-1.38 0-2.632.561-3.536 1.464S0 17.62 0 19v2a1 1 0 0 0 2 0v-2c0-.829.335-1.577.879-2.121S4.171 16 5 16h8c.829 0 1.577.335 2.121.879S16 18.171 16 19v2a1 1 0 0 0 2 0zM14 7c0-1.38-.561-2.632-1.464-3.536S10.38 2 9 2s-2.632.561-3.536 1.464S4 5.62 4 7s.561 2.632 1.464 3.536S7.62 12 9 12s2.632-.561 3.536-1.464S14 8.38 14 7zm-2 0c0 .829-.335 1.577-.879 2.121S9.829 10 9 10s-1.577-.335-2.121-.879S6 7.829 6 7s.335-1.577.879-2.121S8.171 4 9 4s1.577.335 2.121.879S12 6.171 12 7zm12 14v-2a4.972 4.972 0 0 0-1.215-3.261 5.055 5.055 0 0 0-2.529-1.576 1 1 0 1 0-.511 1.933 3.049 3.049 0 0 1 1.528.952c.454.526.726 1.206.727 1.952v2a1 1 0 0 0 2 0zM15.752 4.099c.803.206 1.445.715 1.837 1.377s.531 1.47.325 2.273a2.969 2.969 0 0 1-1.105 1.652 3.08 3.08 0 0 1-1.063.511 1 1 0 1 0 .508 1.934 5.074 5.074 0 0 0 1.752-.844 4.965 4.965 0 0 0 1.845-2.758c.342-1.337.11-2.689-.542-3.788s-1.725-1.953-3.062-2.296a1 1 0 0 0-.496 1.938z" />
    </svg>
  );
}
export default SvgUsers;
