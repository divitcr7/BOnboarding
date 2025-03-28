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
function SvgVoicemail({
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
      <path d="M9 11.5c0 .967-.391 1.84-1.025 2.475S6.467 15 5.5 15s-1.84-.391-2.475-1.025S2 12.467 2 11.5s.391-1.84 1.025-2.475S4.533 8 5.5 8s1.84.391 2.475 1.025S9 10.533 9 11.5zm13 0c0 .967-.391 1.84-1.025 2.475S19.467 15 18.5 15s-1.84-.391-2.475-1.025S15 12.467 15 11.5s.391-1.84 1.025-2.475S17.533 8 18.5 8s1.84.391 2.475 1.025S22 10.533 22 11.5zM5.5 17h13c1.519 0 2.895-.617 3.889-1.611S24 13.019 24 11.5s-.617-2.895-1.611-3.889S20.019 6 18.5 6s-2.895.617-3.889 1.611S13 9.981 13 11.5c0 1.329.473 2.55 1.257 3.5H9.743A5.484 5.484 0 0 0 11 11.5c0-1.519-.617-2.895-1.611-3.889S7.019 6 5.5 6s-2.895.617-3.889 1.611S0 9.981 0 11.5s.617 2.895 1.611 3.889S3.981 17 5.5 17z" />
    </svg>
  );
}
export default SvgVoicemail;
