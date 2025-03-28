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
function SvgBriefcase({
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
      <path d="M9 6V5c0-.276.111-.525.293-.707S9.724 4 10 4h4c.276 0 .525.111.707.293S15 4.724 15 5v1zm0 14V8h6v12zM7 8v12H4c-.276 0-.525-.111-.707-.293S3 19.276 3 19V9c0-.276.111-.525.293-.707S3.724 8 4 8zm10-2V5a2.997 2.997 0 0 0-3-3h-4a2.997 2.997 0 0 0-3 3v1H4a2.997 2.997 0 0 0-3 3v10a2.997 2.997 0 0 0 3 3h16a2.997 2.997 0 0 0 3-3V9a2.997 2.997 0 0 0-3-3zm0 14V8h3c.276 0 .525.111.707.293S21 8.724 21 9v10c0 .276-.111.525-.293.707S20.276 20 20 20z" />
    </svg>
  );
}
export default SvgBriefcase;
