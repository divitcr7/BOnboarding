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
function SvgXOctagon({
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
      <path d="M7.86 1a.997.997 0 0 0-.707.293l-5.86 5.86A.997.997 0 0 0 1 7.86v8.28c0 .256.098.512.293.707l5.86 5.86A.997.997 0 0 0 7.86 23h8.28a.997.997 0 0 0 .707-.293l5.86-5.86A.997.997 0 0 0 23 16.14V7.86a.997.997 0 0 0-.293-.707l-5.86-5.86A.997.997 0 0 0 16.14 1zm.414 2h7.452L21 8.274v7.452L15.726 21H8.274L3 15.726V8.274zm.019 6.707L10.586 12l-2.293 2.293a.999.999 0 1 0 1.414 1.414L12 13.414l2.293 2.293a.999.999 0 1 0 1.414-1.414L13.414 12l2.293-2.293a.999.999 0 1 0-1.414-1.414L12 10.586 9.707 8.293a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgXOctagon;
