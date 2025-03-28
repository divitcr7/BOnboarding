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
function SvgGlobe({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M16.951 11a16.204 16.204 0 0 0-2.674-7.71 8.986 8.986 0 0 1 4.087 2.346A8.967 8.967 0 0 1 20.945 11zm-2.672 9.709A16.235 16.235 0 0 0 16.948 13h3.997a8.967 8.967 0 0 1-2.581 5.364 8.986 8.986 0 0 1-4.085 2.345zM7.049 13a16.204 16.204 0 0 0 2.674 7.71 8.986 8.986 0 0 1-4.087-2.346A8.967 8.967 0 0 1 3.055 13zm2.672-9.709A16.257 16.257 0 0 0 7.052 11H3.055a8.967 8.967 0 0 1 2.581-5.364 8.991 8.991 0 0 1 4.085-2.345zM12.004 1a10.97 10.97 0 0 0-7.782 3.222C2.232 6.211 1 8.963 1 12s1.232 5.789 3.222 7.778A10.965 10.965 0 0 0 11.996 23a10.971 10.971 0 0 0 7.782-3.222C21.768 17.789 23 15.037 23 12s-1.232-5.789-3.222-7.778A10.965 10.965 0 0 0 12.004 1zm2.942 12a14.209 14.209 0 0 1-2.945 7.451A14.205 14.205 0 0 1 9.056 13zm-2.947-9.451A14.205 14.205 0 0 1 14.944 11h-5.89a14.209 14.209 0 0 1 2.945-7.451z" />
    </svg>
  );
}
export default SvgGlobe;
