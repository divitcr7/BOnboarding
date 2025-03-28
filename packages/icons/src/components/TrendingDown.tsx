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
function SvgTrendingDown({
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
      <path d="M17 19h6a.995.995 0 0 0 .924-.617A.995.995 0 0 0 24 18v-6a1 1 0 0 0-2 0v3.586l-7.793-7.793a.999.999 0 0 0-1.414 0L8.5 12.086 1.707 5.293A.999.999 0 1 0 .293 6.707l7.5 7.5a.999.999 0 0 0 1.414 0L13.5 9.914 20.586 17H17a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgTrendingDown;
