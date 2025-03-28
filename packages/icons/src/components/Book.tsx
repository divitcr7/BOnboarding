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
function SvgBook({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M6.5 1c-.966 0-1.843.393-2.475 1.025S3 3.534 3 4.5v15c0 .966.393 1.843 1.025 2.475S5.534 23 6.5 23H20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM19 18v3H6.5A1.497 1.497 0 0 1 5 19.5 1.497 1.497 0 0 1 6.5 18zM6.5 3H19v13H6.5c-.537 0-1.045.121-1.5.337V4.5A1.497 1.497 0 0 1 6.5 3z" />
    </svg>
  );
}
export default SvgBook;
