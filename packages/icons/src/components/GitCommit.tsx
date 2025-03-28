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
function SvgGitCommit({
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
      <path d="M15 12c0 .829-.335 1.577-.879 2.121S12.829 15 12 15s-1.577-.335-2.121-.879S9 12.829 9 12s.335-1.577.879-2.121S11.171 9 12 9s1.577.335 2.121.879S15 11.171 15 12zm2.01 1h5.95a1 1 0 0 0 0-2h-5.95a.982.982 0 0 0-.109.006 4.997 4.997 0 0 0-1.365-2.541C14.632 7.561 13.38 7 12 7s-2.632.561-3.536 1.464a4.99 4.99 0 0 0-1.365 2.54A1.605 1.605 0 0 0 7 11H1.05a1 1 0 0 0 0 2H7c.033 0 .067-.002.099-.005a4.99 4.99 0 0 0 1.365 2.54C9.368 16.439 10.62 17 12 17s2.632-.561 3.536-1.464a4.99 4.99 0 0 0 1.365-2.541.982.982 0 0 0 .109.006z" />
    </svg>
  );
}
export default SvgGitCommit;
