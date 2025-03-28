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
function SvgSliders({
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
      <path d="M5 10V3a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0zm8 11v-9a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0zm8-9V3a1 1 0 0 0-2 0v9a1 1 0 0 0 2 0zM1 15h2v6a1 1 0 0 0 2 0v-6h2a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zm8-6h6a1 1 0 0 0 0-2h-2V3a1 1 0 0 0-2 0v4H9a1 1 0 0 0 0 2zm8 8h2v4a1 1 0 0 0 2 0v-4h2a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgSliders;
