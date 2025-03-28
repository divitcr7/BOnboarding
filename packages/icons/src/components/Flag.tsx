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
function SvgFlag({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M5 13.397V3.538C5.44 3.32 6.365 3 8 3c1.281 0 2.361.421 3.629.928C12.861 4.421 14.281 5 16 5c1.298 0 2.278-.175 3-.397v9.859c-.44.218-1.365.538-3 .538-1.281 0-2.361-.421-3.629-.928C11.139 13.579 9.719 13 8 13c-1.298 0-2.278.175-3 .397zM5 22v-6.462C5.44 15.32 6.365 15 8 15c1.281 0 2.361.421 3.629.928C12.861 16.421 14.281 17 16 17c3.247 0 4.507-1.093 4.707-1.293A.997.997 0 0 0 21 15V3a1 1 0 0 0-1.685-.728C19.219 2.35 18.331 3 16 3c-1.281 0-2.361-.421-3.629-.928C11.139 1.579 9.719 1 8 1 4.753 1 3.493 2.093 3.293 2.293A.997.997 0 0 0 3 3v19a1 1 0 0 0 2 0z" />
    </svg>
  );
}
export default SvgFlag;
