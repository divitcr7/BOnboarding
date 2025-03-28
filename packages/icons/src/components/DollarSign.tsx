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
function SvgDollarSign({
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
      <path d="M11 11H9.5c-.691 0-1.314-.279-1.768-.732S7 9.191 7 8.5s.279-1.314.732-1.768S8.809 6 9.5 6H11zm2 2h1.5c.691 0 1.314.279 1.768.732S17 14.809 17 15.5s-.279 1.314-.732 1.768S15.191 18 14.5 18H13zm4-9h-4V1a1 1 0 0 0-2 0v3H9.5c-1.242 0-2.369.505-3.182 1.318S5 7.258 5 8.5s.505 2.369 1.318 3.182S8.258 13 9.5 13H11v5H6a1 1 0 0 0 0 2h5v3a1 1 0 0 0 2 0v-3h1.5c1.242 0 2.369-.505 3.182-1.318S19 16.742 19 15.5s-.505-2.369-1.318-3.182S15.742 11 14.5 11H13V6h4a1 1 0 0 0 0-2z" />
    </svg>
  );
}
export default SvgDollarSign;
