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
function SvgVolumeX({
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
      <path d="M10 7.081v9.839l-3.375-2.7A.994.994 0 0 0 6 14H3v-4h3a.995.995 0 0 0 .625-.219zm.375-2.862L5.649 8H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.649l4.726 3.781A1 1 0 0 0 12 19V5a1 1 0 0 0-1.625-.781zm5.918 5.488L18.586 12l-2.293 2.293a.999.999 0 1 0 1.414 1.414L20 13.414l2.293 2.293a.999.999 0 1 0 1.414-1.414L21.414 12l2.293-2.293a.999.999 0 1 0-1.414-1.414L20 10.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414z" />
    </svg>
  );
}
export default SvgVolumeX;
