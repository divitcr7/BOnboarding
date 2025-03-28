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
function SvgGift({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M11 13v8H5v-8zm2 8v-8h6v8zM7.5 6A1.497 1.497 0 0 1 6 4.5 1.497 1.497 0 0 1 7.5 3c.629 0 1.142.223 1.584.586.376.308.701.719.976 1.177.241.401.433.821.58 1.203zm5.846 0c.161-.416.353-.836.593-1.237.275-.459.601-.869.976-1.177.443-.363.956-.586 1.585-.586A1.497 1.497 0 0 1 18 4.5 1.497 1.497 0 0 1 16.5 6zM11 8v3H3V8h4.5zm8.663-2c.216-.455.337-.963.337-1.5 0-.966-.393-1.843-1.025-2.475S17.466 1 16.5 1c-1.16 0-2.109.43-2.852 1.039-.603.494-1.068 1.103-1.423 1.694-.08.133-.155.266-.225.398a8.484 8.484 0 0 0-.225-.398c-.355-.591-.82-1.2-1.423-1.694C9.609 1.43 8.66 1 7.5 1c-.966 0-1.843.393-2.475 1.025S4 3.534 4 4.5c0 .537.121 1.045.337 1.5H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM13 8h8v3h-8z" />
    </svg>
  );
}
export default SvgGift;
