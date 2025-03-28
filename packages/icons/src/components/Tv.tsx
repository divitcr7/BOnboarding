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
function SvgTv({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M12 8h8c.276 0 .525.111.707.293S21 8.724 21 9v11c0 .276-.111.525-.293.707S20.276 21 20 21H4c-.276 0-.525-.111-.707-.293S3 20.276 3 20V9c0-.276.111-.525.293-.707S3.724 8 4 8h8zm4.293-6.707L12 5.586 7.707 1.293a.999.999 0 1 0-1.414 1.414L9.586 6H4a2.997 2.997 0 0 0-3 3v11a2.997 2.997 0 0 0 3 3h16a2.997 2.997 0 0 0 3-3V9a2.997 2.997 0 0 0-3-3h-5.586l3.293-3.293a.999.999 0 1 0-1.414-1.414z" />
    </svg>
  );
}
export default SvgTv;
