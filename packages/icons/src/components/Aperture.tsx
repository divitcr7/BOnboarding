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
function SvgAperture({
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
      <path d="m11.422 7 2.223-3.85a8.983 8.983 0 0 1 4.719 2.486A9.07 9.07 0 0 1 19.485 7h-5.194zM7.38 10 5.158 6.153a9 9 0 0 1 6.253-3.134l-2.592 4.49zm.578 5H3.512A8.975 8.975 0 0 1 3 12c0-1.43.333-2.781.926-3.982l2.6 4.504zm9.515-3.522L16.042 9h4.446c.332.938.512 1.948.512 3 0 1.43-.333 2.781-.926 3.982l-2.576-4.462zm-4.885 9.503L16.62 14l2.222 3.848a8.968 8.968 0 0 1-6.253 3.133zM10.7 22.924a.923.923 0 0 0 .139.015 10.966 10.966 0 0 0 8.939-3.161c.366-.366.706-.757 1.017-1.171a.97.97 0 0 0 .11-.149A10.948 10.948 0 0 0 23 12a10.973 10.973 0 0 0-3.222-7.778A10.974 10.974 0 0 0 12 1a10.966 10.966 0 0 0-7.778 3.222 10.9 10.9 0 0 0-1.017 1.171 1.048 1.048 0 0 0-.111.149A10.954 10.954 0 0 0 1 12a10.973 10.973 0 0 0 3.222 7.778 10.974 10.974 0 0 0 6.478 3.146zM12.578 17l-2.223 3.85a8.983 8.983 0 0 1-4.719-2.486A9.07 9.07 0 0 1 4.515 17h5.194zm2.887-5-1.732 3h-3.466l-1.732-3 1.732-3h3.466z" />
    </svg>
  );
}
export default SvgAperture;
