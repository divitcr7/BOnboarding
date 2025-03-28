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
function SvgPower({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M17.653 7.347c1.562 1.563 2.343 3.608 2.342 5.657s-.782 4.094-2.344 5.656a7.97 7.97 0 0 1-5.654 2.342c-2.052 0-4.098-.782-5.659-2.344s-2.342-3.608-2.342-5.656.781-4.094 2.342-5.656a1 1 0 0 0-1.414-1.414 9.97 9.97 0 0 0-2.928 7.07 9.97 9.97 0 0 0 2.928 7.07c1.952 1.953 4.513 2.93 7.071 2.93s5.119-.976 7.072-2.928a9.969 9.969 0 0 0 2.93-7.07 9.977 9.977 0 0 0-2.928-7.072.999.999 0 1 0-1.414 1.414zM11 2v10a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z" />
    </svg>
  );
}
export default SvgPower;
