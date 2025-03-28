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
function SvgCpu({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M6 5h12c.276 0 .525.111.707.293S19 5.724 19 6v12c0 .276-.111.525-.293.707S18.276 19 18 19H6c-.276 0-.525-.111-.707-.293S5 18.276 5 18V6c0-.276.111-.525.293-.707S5.724 5 6 5zm3 3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm1 2h4v4h-4zm-9 5h2v3a2.997 2.997 0 0 0 3 3h2v2a1 1 0 0 0 2 0v-2h4v2a1 1 0 0 0 2 0v-2h2a2.997 2.997 0 0 0 3-3v-3h2a1 1 0 0 0 0-2h-2v-3h2a1 1 0 0 0 0-2h-2V6a2.997 2.997 0 0 0-3-3h-2V1a1 1 0 0 0-2 0v2h-4V1a1 1 0 0 0-2 0v2H6a2.997 2.997 0 0 0-3 3v2H1a1 1 0 0 0 0 2h2v3H1a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgCpu;
