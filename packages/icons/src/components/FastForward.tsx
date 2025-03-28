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
function SvgFastForward({
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
      <path d="M14 16.955v-9.91L20.371 12zm-11 0v-9.91L9.371 12zm-.386 2.834 9-7a.998.998 0 0 0 .386-.78V19a1 1 0 0 0 1.614.789l9-7a1 1 0 0 0 0-1.578l-9-7A1 1 0 0 0 12 5v6.99a.997.997 0 0 0-.386-.779l-9-7A1 1 0 0 0 1 5v14a1 1 0 0 0 1.614.789z" />
    </svg>
  );
}
export default SvgFastForward;
