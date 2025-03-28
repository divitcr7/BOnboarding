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
function SvgBold({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M7 11V5h7c.829 0 1.577.335 2.121.879S17 7.171 17 8s-.335 1.577-.879 2.121S14.829 11 14 11zm-2 1v8a1 1 0 0 0 1 1h9c1.38 0 2.632-.561 3.536-1.464S20 17.38 20 16a4.992 4.992 0 0 0-2.564-4.368l.1-.097C18.439 10.632 19 9.38 19 8s-.561-2.632-1.464-3.536S15.38 3 14 3H6a1 1 0 0 0-1 1zm2 1h8c.829 0 1.577.335 2.121.879S18 15.171 18 16s-.335 1.577-.879 2.121S15.829 19 15 19H7z" />
    </svg>
  );
}
export default SvgBold;
