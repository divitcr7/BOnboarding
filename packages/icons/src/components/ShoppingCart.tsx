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
function SvgShoppingCart({
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
      <path d="M11 21c0-.552-.225-1.053-.586-1.414a1.996 1.996 0 0 0-2.828 0 1.996 1.996 0 0 0 0 2.828 1.996 1.996 0 0 0 2.828 0c.361-.361.586-.862.586-1.414zm11 0c0-.552-.225-1.053-.586-1.414a1.996 1.996 0 0 0-2.828 0 1.996 1.996 0 0 0 0 2.828 1.996 1.996 0 0 0 2.828 0c.361-.361.586-.862.586-1.414zM7.221 7h14.57l-1.371 7.191A1 1 0 0 1 19.4 15H9.666a1.016 1.016 0 0 1-.626-.203.99.99 0 0 1-.379-.603zM1 2h3.18l.848 4.239C5.136 6.676 5.53 7 6 7h1.221l-.4-2H6a1 1 0 0 0-.971 1.239L6.7 14.586A3.009 3.009 0 0 0 9.694 17H19.4a2.97 2.97 0 0 0 1.995-.727 3.02 3.02 0 0 0 .985-1.683l1.602-8.402A1 1 0 0 0 23 5H6.82L5.98.804A1 1 0 0 0 5 0H1a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgShoppingCart;
