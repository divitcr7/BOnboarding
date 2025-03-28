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
function SvgLifeBuoy({
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
      <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1 6.211 2.232 4.222 4.222 1 8.963 1 12s1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12zm-8 0c0 .829-.335 1.577-.879 2.121S12.829 15 12 15s-1.577-.335-2.121-.879S9 12.829 9 12s.335-1.577.879-2.121S11.171 9 12 9s1.577.335 2.121.879S15 11.171 15 12zm2.618-7.032-2.86 2.86C13.967 7.305 13.019 7 12 7s-1.967.305-2.757.829l-2.86-2.86C7.922 3.736 9.875 3 12 3s4.078.736 5.618 1.968zm1.414 1.414C20.264 7.922 21 9.875 21 12s-.736 4.078-1.968 5.618l-2.86-2.86c.523-.791.828-1.739.828-2.758s-.305-1.967-.829-2.757zM7.829 14.757l-2.86 2.86C3.736 16.078 3 14.125 3 12s.736-4.078 1.968-5.618l2.86 2.86C7.305 10.033 7 10.981 7 12s.305 1.967.829 2.757zm-1.447 4.275 2.86-2.86c.791.523 1.739.828 2.758.828s1.967-.305 2.757-.829l2.86 2.86C16.078 20.264 14.125 21 12 21s-4.078-.736-5.618-1.968z" />
    </svg>
  );
}
export default SvgLifeBuoy;
