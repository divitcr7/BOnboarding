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
function SvgNavigation2({
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
      <path d="M12.938 1.654a.999.999 0 0 0-1.877 0l-7 19a1 1 0 0 0 1.434 1.214L12 18.152l6.504 3.716a1 1 0 0 0 1.435-1.214zM12 4.893l5.113 13.877-4.617-2.638a1 1 0 0 0-.992 0L6.887 18.77z" />
    </svg>
  );
}
export default SvgNavigation2;
