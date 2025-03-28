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
function SvgCreditCard({
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
      <path d="M3 3a2.997 2.997 0 0 0-3 3v12a2.997 2.997 0 0 0 3 3h18a2.997 2.997 0 0 0 3-3V6a2.997 2.997 0 0 0-3-3zm19 6H2V6c0-.276.111-.525.293-.707S2.724 5 3 5h18c.276 0 .525.111.707.293S22 5.724 22 6zM2 11h20v7c0 .276-.111.525-.293.707S21.276 19 21 19H3c-.276 0-.525-.111-.707-.293S2 18.276 2 18z" />
    </svg>
  );
}
export default SvgCreditCard;
