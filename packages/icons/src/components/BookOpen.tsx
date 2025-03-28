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
function SvgBookOpen({
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
      <path d="M21 4v13h-6c-.728 0-1.412.195-2 .535V7c0-.829.335-1.577.879-2.121S15.171 4 16 4zM11 17.535A3.986 3.986 0 0 0 9 17H3V4h5c.829 0 1.577.335 2.121.879S11 6.171 11 7zM22 2h-6a4.992 4.992 0 0 0-4 2 4.992 4.992 0 0 0-4-2H2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h7c.553 0 1.051.223 1.414.586S11 20.447 11 21a1 1 0 0 0 2 0c0-.553.223-1.051.586-1.414S14.447 19 15 19h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
    </svg>
  );
}
export default SvgBookOpen;
