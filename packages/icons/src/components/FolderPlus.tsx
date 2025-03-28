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
function SvgFolderPlus({
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
      <path d="M23 19V8a2.997 2.997 0 0 0-3-3h-8.465L9.832 2.445A1 1 0 0 0 9 2H4a2.997 2.997 0 0 0-3 3v14a2.997 2.997 0 0 0 3 3h16a2.997 2.997 0 0 0 3-3zm-2 0c0 .276-.111.525-.293.707S20.276 20 20 20H4c-.276 0-.525-.111-.707-.293S3 19.276 3 19V5c0-.276.111-.525.293-.707S3.724 4 4 4h4.465l1.703 2.555c.192.287.506.443.832.445h9c.276 0 .525.111.707.293S21 7.724 21 8zM9 15h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-2a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgFolderPlus;
