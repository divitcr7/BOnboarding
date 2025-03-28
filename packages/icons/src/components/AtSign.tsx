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
function SvgAtSign({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M15 12c0 .829-.335 1.577-.879 2.121S12.829 15 12 15s-1.577-.335-2.121-.879S9 12.829 9 12s.335-1.577.879-2.121S11.171 9 12 9s1.577.335 2.121.879S15 11.171 15 12zm.74 3.318A3.992 3.992 0 0 0 19 17c1.104 0 2.106-.449 2.828-1.172S23 14.104 23 13v-1c0-3.037-1.233-5.789-3.222-7.778S15.037 1 11.999 1.001 6.211 2.233 4.221 4.223 1 8.964 1 12.001s1.233 5.789 3.222 7.778S8.963 23.001 12 23c2.525 0 4.855-.852 6.69-2.269a1 1 0 1 0-1.223-1.583A8.932 8.932 0 0 1 12.032 21c-2.54-.009-4.776-1.014-6.398-2.636C4.007 16.735 3 14.487 3 12.001s1.006-4.734 2.636-6.364S9.514 3.001 12 3.001s4.734 1.006 6.364 2.636S21 9.515 21 12v1c0 .553-.223 1.051-.586 1.414S19.553 15 19 15s-1.051-.223-1.414-.586S17 13.553 17 13V8a1 1 0 0 0-2 0 4.983 4.983 0 0 0-3-1c-1.38 0-2.632.561-3.536 1.464S7 10.62 7 12s.561 2.632 1.464 3.536S10.62 17 12 17a4.992 4.992 0 0 0 3.741-1.681z" />
    </svg>
  );
}
export default SvgAtSign;
