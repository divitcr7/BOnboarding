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
function SvgGitMerge({
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
      <path d="M20 18c0 .553-.223 1.051-.586 1.414S18.553 20 18 20s-1.051-.223-1.414-.586S16 18.553 16 18s.223-1.051.586-1.414S17.447 16 18 16s1.051.223 1.414.586S20 17.447 20 18zM8 6c0 .553-.223 1.051-.586 1.414S6.553 8 6 8s-1.051-.223-1.414-.586S4 6.553 4 6s.223-1.051.586-1.414S5.447 4 6 4s1.051.223 1.414.586S8 5.447 8 6zM7 21v-5.999c.284.379.595.736.929 1.07a9.971 9.971 0 0 0 6.188 2.89 3.991 3.991 0 0 0 1.055 1.867C15.894 21.551 16.896 22 18 22s2.106-.449 2.828-1.172a3.994 3.994 0 0 0 0-5.656 3.994 3.994 0 0 0-5.656 0 3.997 3.997 0 0 0-1.033 1.783c-1.865-.2-3.537-1.039-4.795-2.297s-2.098-2.93-2.297-4.795A4.014 4.014 0 0 0 10 6c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656A3.992 3.992 0 0 0 5 9.874V21a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgGitMerge;
