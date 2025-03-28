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
function SvgTwitch({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M20 3v10.586L16.586 17H12a.997.997 0 0 0-.707.293L9 19.586V18a1 1 0 0 0-1-1H4V3zm1-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4v3a1 1 0 0 0 1.707.707L12.414 19H17a.997.997 0 0 0 .707-.293l4-4A.997.997 0 0 0 22 14V2a1 1 0 0 0-1-1zm-9 10V7a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zm5 0V7a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgTwitch;
