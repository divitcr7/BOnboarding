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
function SvgExternalLink({
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
      <path d="M17 13v6c0 .276-.111.525-.293.707S16.276 20 16 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19V8c0-.276.111-.525.293-.707S4.724 7 5 7h6a1 1 0 0 0 0-2H5a2.997 2.997 0 0 0-3 3v11a2.997 2.997 0 0 0 3 3h11a2.997 2.997 0 0 0 3-3v-6a1 1 0 0 0-2 0zm-6.293 1.707L20 5.414V9a1 1 0 0 0 2 0V3a.995.995 0 0 0-.292-.706l-.002-.002A.996.996 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.586l-9.293 9.293a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgExternalLink;
