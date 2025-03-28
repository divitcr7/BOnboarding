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
function SvgPercent({
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
      <path d="m18.293 4.293-14 14a.999.999 0 1 0 1.414 1.414l14-14a.999.999 0 1 0-1.414-1.414zM10 6.5c0-.966-.393-1.843-1.025-2.475S7.466 3 6.5 3s-1.843.393-2.475 1.025S3 5.534 3 6.5s.393 1.843 1.025 2.475S5.534 10 6.5 10s1.843-.393 2.475-1.025S10 7.466 10 6.5zm-2 0A1.497 1.497 0 0 1 6.5 8 1.497 1.497 0 0 1 5 6.5 1.497 1.497 0 0 1 6.5 5 1.497 1.497 0 0 1 8 6.5zm13 11c0-.966-.393-1.843-1.025-2.475S18.466 14 17.5 14s-1.843.393-2.475 1.025S14 16.534 14 17.5s.393 1.843 1.025 2.475S16.534 21 17.5 21s1.843-.393 2.475-1.025S21 18.466 21 17.5zm-2 0a1.497 1.497 0 0 1-1.5 1.5 1.497 1.497 0 0 1-1.5-1.5 1.497 1.497 0 0 1 1.5-1.5 1.497 1.497 0 0 1 1.5 1.5z" />
    </svg>
  );
}
export default SvgPercent;
