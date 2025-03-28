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
function SvgUpload({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M20 15v4c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19v-4a1 1 0 0 0-2 0v4a2.997 2.997 0 0 0 3 3h14a2.997 2.997 0 0 0 3-3v-4a1 1 0 0 0-2 0zm-9-9.586V15a1 1 0 0 0 2 0V5.414l3.293 3.293a.999.999 0 1 0 1.414-1.414l-5-5a1.006 1.006 0 0 0-1.414 0l-5 5a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgUpload;
