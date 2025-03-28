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
function SvgLock({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M5 12h14c.276 0 .525.111.707.293S20 12.724 20 13v7c0 .276-.111.525-.293.707S19.276 21 19 21H5c-.276 0-.525-.111-.707-.293S4 20.276 4 20v-7c0-.276.111-.525.293-.707S4.724 12 5 12zm13-2V7c0-1.657-.673-3.158-1.757-4.243S13.657 1 12 1s-3.158.673-4.243 1.757S6 5.343 6 7v3H5a2.997 2.997 0 0 0-3 3v7a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3v-7a2.997 2.997 0 0 0-3-3zM8 10V7c0-1.105.447-2.103 1.172-2.828S10.895 3 12 3s2.103.447 2.828 1.172S16 5.895 16 7v3z" />
    </svg>
  );
}
export default SvgLock;
