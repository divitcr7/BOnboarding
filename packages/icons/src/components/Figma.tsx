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
function SvgFigma({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M13 12.5c0-.691.279-1.314.732-1.768S14.809 10 15.5 10s1.314.279 1.768.732S18 11.809 18 12.5s-.279 1.314-.732 1.768S16.191 15 15.5 15s-1.314-.279-1.768-.732S13 13.191 13 12.5zM8.5 8c-.691 0-1.314-.279-1.768-.732S6 6.191 6 5.5s.279-1.314.732-1.768S7.809 3 8.5 3H11v5zM13 8V3h2.5c.691 0 1.314.279 1.768.732S18 4.809 18 5.5s-.279 1.314-.732 1.768S16.191 8 15.5 8zm-2 9v2.5c0 .691-.279 1.314-.732 1.768S9.191 22 8.5 22s-1.314-.279-1.768-.732S6 20.191 6 19.5s.279-1.314.732-1.768S7.809 17 8.5 17zm-7-4.5A4.49 4.49 0 0 0 5.671 16 4.49 4.49 0 0 0 4 19.5c0 1.242.505 2.369 1.318 3.182S7.258 24 8.5 24s2.369-.505 3.182-1.318S13 20.742 13 19.5v-3.258a4.484 4.484 0 0 0 2.5.758c1.242 0 2.369-.505 3.182-1.318S20 13.742 20 12.5A4.49 4.49 0 0 0 18.329 9 4.49 4.49 0 0 0 20 5.5c0-1.242-.505-2.369-1.318-3.182S16.742 1 15.5 1h-7c-1.242 0-2.369.505-3.182 1.318S4 4.258 4 5.5A4.49 4.49 0 0 0 5.671 9 4.49 4.49 0 0 0 4 12.5zm2 0c0-.691.279-1.314.732-1.768S7.809 10 8.5 10H11v5H8.5c-.691 0-1.314-.279-1.768-.732S6 13.191 6 12.5z" />
    </svg>
  );
}
export default SvgFigma;
