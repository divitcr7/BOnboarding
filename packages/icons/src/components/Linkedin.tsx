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
function SvgLinkedin({
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
      <path d="M16 7c-1.933 0-3.684.785-4.95 2.05S9 12.067 9 14v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7c0-.276.111-.525.293-.707S15.724 13 16 13s.525.111.707.293.293.431.293.707v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7c0-1.933-.785-3.684-2.05-4.95S17.933 7 16 7zm0 2c1.381 0 2.63.559 3.536 1.464S21 12.619 21 14v6h-2v-6a2.997 2.997 0 0 0-5.121-2.121A2.997 2.997 0 0 0 13 14v6h-2v-6c0-1.381.559-2.63 1.464-3.536S14.619 9 16 9zM2 8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm1 2h2v10H3zm4-6a2.997 2.997 0 0 0-5.121-2.121 2.997 2.997 0 0 0 0 4.242 2.997 2.997 0 0 0 4.242 0A2.997 2.997 0 0 0 7 4zM5 4c0 .276-.111.525-.293.707S4.276 5 4 5s-.525-.111-.707-.293S3 4.276 3 4s.111-.525.293-.707S3.724 3 4 3s.525.111.707.293S5 3.724 5 4z" />
    </svg>
  );
}
export default SvgLinkedin;
