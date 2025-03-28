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
function SvgCoffee({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M19 15V9c.829 0 1.577.335 2.121.879S22 11.171 22 12s-.335 1.577-.879 2.121S19.829 15 19 15zM2 7a1 1 0 0 0-1 1v9c0 1.38.561 2.632 1.464 3.536S4.62 22 6 22h8c1.38 0 2.632-.561 3.536-1.464S19 18.38 19 17c1.38 0 2.632-.561 3.536-1.464S24 13.38 24 12s-.561-2.632-1.464-3.536S20.38 7 19 7h-1zm1 2h14v8c0 .829-.335 1.577-.879 2.121S14.829 20 14 20H6c-.829 0-1.577-.335-2.121-.879S3 17.829 3 17zm2-8v3a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0zm4 0v3a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0zm4 0v3a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0z" />
    </svg>
  );
}
export default SvgCoffee;
