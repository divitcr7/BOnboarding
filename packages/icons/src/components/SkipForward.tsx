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
function SvgSkipForward({
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
      <path d="M5.625 3.219A1 1 0 0 0 4 4v16a1 1 0 0 0 1.625.781l10-8a1 1 0 0 0 0-1.562zM6 6.081 13.399 12 6 17.919zM18 5v14a1 1 0 0 0 2 0V5a1 1 0 0 0-2 0z" />
    </svg>
  );
}
export default SvgSkipForward;
