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
function SvgGitBranch({
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
      <path d="M20 6c0 .553-.223 1.051-.586 1.414S18.553 8 18 8s-1.051-.223-1.414-.586S16 6.553 16 6s.223-1.051.586-1.414S17.447 4 18 4s1.051.223 1.414.586S20 5.447 20 6zM8 18c0 .553-.223 1.051-.586 1.414S6.553 20 6 20s-1.051-.223-1.414-.586S4 18.553 4 18s.223-1.051.586-1.414S5.447 16 6 16s1.051.223 1.414.586S8 17.447 8 18zm8.954-8.138c-.2 1.865-1.039 3.537-2.297 4.795s-2.93 2.098-4.795 2.297A3.997 3.997 0 0 0 7 14.126V3a1 1 0 0 0-2 0v11.126A3.999 3.999 0 0 0 2 18c0 1.104.449 2.106 1.172 2.828a3.994 3.994 0 0 0 5.656 0 3.991 3.991 0 0 0 1.055-1.867c2.409-.211 4.574-1.277 6.188-2.89s2.679-3.779 2.89-6.188a3.991 3.991 0 0 0 1.867-1.055C21.551 8.106 22 7.104 22 6s-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656 3.997 3.997 0 0 0 1.783 1.033z" />
    </svg>
  );
}
export default SvgGitBranch;
