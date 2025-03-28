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
function SvgImage({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M5 2a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3V5a2.997 2.997 0 0 0-3-3zm6 6.5a2.498 2.498 0 0 0-4.268-1.768 2.498 2.498 0 1 0 3.536 3.536A2.492 2.492 0 0 0 11 8.5zm-2 0a.5.5 0 1 1-1 .002.5.5 0 0 1 1-.002zM7.414 20 16 11.414l4 4V19c0 .276-.111.525-.293.707S19.276 20 19 20zM20 12.586l-3.293-3.293a.999.999 0 0 0-1.414 0L4.649 19.937A.994.994 0 0 1 4 19V5c0-.276.111-.525.293-.707S4.724 4 5 4h14c.276 0 .525.111.707.293S20 4.724 20 5z" />
    </svg>
  );
}
export default SvgImage;
