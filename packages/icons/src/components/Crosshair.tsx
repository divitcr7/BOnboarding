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
function SvgCrosshair({
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
      <path d="M23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1 6.211 2.232 4.222 4.222 1 8.963 1 12s1.232 5.789 3.222 7.778S8.963 23 12 23s5.789-1.232 7.778-3.222S23 15.037 23 12zm-10 8.945V18a1 1 0 0 0-2 0v2.945c-2.086-.23-3.956-1.173-5.364-2.581S3.285 15.086 3.055 13H6a1 1 0 0 0 0-2H3.055c.23-2.086 1.173-3.956 2.581-5.364S8.914 3.285 11 3.055V6a1 1 0 0 0 2 0V3.055c2.086.23 3.956 1.173 5.364 2.581S20.715 8.914 20.945 11H18a1 1 0 0 0 0 2h2.945c-.23 2.086-1.173 3.956-2.581 5.364S15.086 20.715 13 20.945z" />
    </svg>
  );
}
export default SvgCrosshair;
