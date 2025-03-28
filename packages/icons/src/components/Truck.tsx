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
function SvgTruck({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M15 15H2V4h13v4zm2-6h2.586L22 11.414V15h-5zM7 18.5A1.497 1.497 0 0 1 5.5 20 1.497 1.497 0 0 1 4 18.5 1.497 1.497 0 0 1 5.5 17 1.497 1.497 0 0 1 7 18.5zm15 0c0-.537-.121-1.045-.337-1.5H23a1 1 0 0 0 1-1v-5a.997.997 0 0 0-.293-.707l-3-3A.997.997 0 0 0 20 7h-3V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1.337A3.487 3.487 0 0 0 2 18.5c0 .966.393 1.843 1.025 2.475S4.534 22 5.5 22s1.843-.393 2.475-1.025S9 19.466 9 18.5c0-.537-.121-1.045-.337-1.5h6.674A3.487 3.487 0 0 0 15 18.5c0 .966.393 1.843 1.025 2.475S17.534 22 18.5 22s1.843-.393 2.475-1.025S22 19.466 22 18.5zm-2 0a1.497 1.497 0 0 1-1.5 1.5 1.497 1.497 0 0 1-1.5-1.5 1.497 1.497 0 0 1 1.5-1.5 1.497 1.497 0 0 1 1.5 1.5z" />
    </svg>
  );
}
export default SvgTruck;
