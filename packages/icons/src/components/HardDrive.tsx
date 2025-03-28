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
function SvgHardDrive({
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
      <path d="M21 13v5c0 .276-.111.525-.293.707S20.276 19 20 19H4c-.276 0-.525-.111-.707-.293S3 18.276 3 18v-5zM6.344 5.558c.066-.131.16-.246.272-.337A.985.985 0 0 1 7.24 5h9.513c.15.001.295.034.426.094.201.092.37.249.477.464L20.381 11H3.619zm-1.788-.896-3.441 6.872A.987.987 0 0 0 1 12v6a2.997 2.997 0 0 0 3 3h16a2.997 2.997 0 0 0 3-3v-6a.984.984 0 0 0-.091-.417l-.015-.031-.009-.018-3.441-6.872a2.978 2.978 0 0 0-1.433-1.387A3.05 3.05 0 0 0 16.767 3H7.24c-.711 0-1.367.249-1.883.667a3.038 3.038 0 0 0-.801.995zM6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgHardDrive;
