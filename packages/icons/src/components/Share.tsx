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
function SvgShare({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M3 12v8a2.997 2.997 0 0 0 3 3h12a2.997 2.997 0 0 0 3-3v-8a1 1 0 0 0-2 0v8c0 .276-.111.525-.293.707S18.276 21 18 21H6c-.276 0-.525-.111-.707-.293S5 20.276 5 20v-8a1 1 0 0 0-2 0zm8-7.586V15a1 1 0 0 0 2 0V4.414l2.293 2.293a.999.999 0 1 0 1.414-1.414l-4-4a1.006 1.006 0 0 0-1.414 0l-4 4a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgShare;
