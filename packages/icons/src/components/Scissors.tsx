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
function SvgScissors({
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
      <path d="m7.378 16.551.035.036.036.035c.343.359.551.843.551 1.378 0 .553-.223 1.051-.586 1.414S6.553 20 6 20s-1.051-.223-1.414-.586S4 18.553 4 18s.223-1.051.586-1.414S5.447 16 6 16c.535 0 1.019.208 1.378.551zm6.386-1.363 5.53 5.52a1 1 0 1 0 1.413-1.415l-5.53-5.52a1 1 0 1 0-1.413 1.415zm-6.315-7.81-.036.035-.035.036A1.984 1.984 0 0 1 6 8c-.553 0-1.051-.223-1.414-.586S4 6.553 4 6s.223-1.051.586-1.414S5.447 4 6 4s1.051.223 1.414.586S8 5.447 8 6c0 .535-.208 1.019-.551 1.378zm.583 2.068L10.586 12l-2.554 2.554A3.984 3.984 0 0 0 6 14c-1.104 0-2.106.449-2.828 1.172a3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0 3.994 3.994 0 0 0 .618-4.86L20.707 4.707a.999.999 0 1 0-1.414-1.414L12 10.586 9.446 8.032A3.984 3.984 0 0 0 10 6c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 4.86.618z" />
    </svg>
  );
}
export default SvgScissors;
