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
function SvgMultiHome({
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
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
      <path d="M31.688 12.219 21.75 4.781q-.094-.063-.203-.109t-.234-.047-.234.047-.203.109L18.657 6.5l-2.25-1.719q-.094-.063-.203-.109t-.234-.047-.25.047-.188.109L13.313 6.5l-2.25-1.719q-.094-.063-.203-.109t-.234-.047-.234.047-.203.109L.283 12.219q-.125.094-.203.25t-.078.313v13.844q0 .281.219.5t.5.219h30.5q.313 0 .531-.219t.219-.5V12.782q0-.156-.078-.313t-.203-.25zM30.656 26h-4.031V12.781q0-.156-.078-.313t-.203-.25L19.75 7.312l1.563-1.219 9.344 7.031v12.875zm-9.343 0V12.781q0-.156-.078-.313t-.203-.25h-.031L14.407 7.28l1.563-1.188 9.344 7.031v12.875h-4zm-8.657 0h-4v-6.656h4V26zM14 26v-7.25q0-.313-.219-.516t-.531-.203H8.031q-.281 0-.5.203t-.219.516V26h-6V13.125l9.344-7.031 9.313 7.031V26H14z" />
    </svg>
  );
}
export default SvgMultiHome;
