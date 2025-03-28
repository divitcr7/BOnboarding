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
function SvgCornerUpRight({
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
      <path d="M5 20v-7c0-.829.335-1.577.879-2.121S7.171 10 8 10h9.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a1.006 1.006 0 0 0 0-1.414l-5-5a.999.999 0 1 0-1.414 1.414L17.586 8H8c-1.38 0-2.632.561-3.536 1.464S3 11.62 3 13v7a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgCornerUpRight;
