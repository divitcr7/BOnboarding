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
function SvgServer({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M4 1a2.997 2.997 0 0 0-3 3v4a2.997 2.997 0 0 0 3 3h16a2.997 2.997 0 0 0 3-3V4a2.997 2.997 0 0 0-3-3zm0 2h16c.276 0 .525.111.707.293S21 3.724 21 4v4c0 .276-.111.525-.293.707S20.276 9 20 9H4c-.276 0-.525-.111-.707-.293S3 8.276 3 8V4c0-.276.111-.525.293-.707S3.724 3 4 3zm0 10a2.997 2.997 0 0 0-3 3v4a2.997 2.997 0 0 0 3 3h16a2.997 2.997 0 0 0 3-3v-4a2.997 2.997 0 0 0-3-3zm0 2h16c.276 0 .525.111.707.293S21 15.724 21 16v4c0 .276-.111.525-.293.707S20.276 21 20 21H4c-.276 0-.525-.111-.707-.293S3 20.276 3 20v-4c0-.276.111-.525.293-.707S3.724 15 4 15zm2-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgServer;
