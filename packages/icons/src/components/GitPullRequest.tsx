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
function SvgGitPullRequest({
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
      <path d="M20 18c0 .553-.223 1.051-.586 1.414S18.553 20 18 20s-1.051-.223-1.414-.586S16 18.553 16 18s.223-1.051.586-1.414S17.447 16 18 16s1.051.223 1.414.586S20 17.447 20 18zM8 6c0 .553-.223 1.051-.586 1.414S6.553 8 6 8s-1.051-.223-1.414-.586S4 6.553 4 6s.223-1.051.586-1.414S5.447 4 6 4s1.051.223 1.414.586S8 5.447 8 6zm5 1h3c.276 0 .525.111.707.293S17 7.724 17 8v6.126A3.999 3.999 0 0 0 14 18c0 1.104.449 2.106 1.172 2.828a3.994 3.994 0 0 0 5.656 0 3.994 3.994 0 0 0 0-5.656A3.995 3.995 0 0 0 19 14.127V8a2.997 2.997 0 0 0-3-3h-3a1 1 0 0 0 0 2zM5 9.874V21a1 1 0 0 0 2 0V9.874A3.999 3.999 0 0 0 10 6c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656A3.992 3.992 0 0 0 5 9.874z" />
    </svg>
  );
}
export default SvgGitPullRequest;
