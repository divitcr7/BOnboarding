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
function SvgWifiOff({
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
      <path d="M16.281 11.959a9.675 9.675 0 0 1 2.064 1.347 1 1 0 0 0 1.309-1.513 11.692 11.692 0 0 0-2.496-1.633 1 1 0 0 0-.877 1.797zM10.79 6.047a14.949 14.949 0 0 1 11.128 3.704 1 1 0 0 0 1.322-1.5 16.942 16.942 0 0 0-12.611-4.196.998.998 0 1 0 .161 1.991zM9.109 16.925a4.95 4.95 0 0 1 3.274-.906c.891.07 1.765.378 2.523.909.233.163.512.213.77.162l6.617 6.617a.999.999 0 1 0 1.414-1.414l-12.75-12.75a1 1 0 0 0-.169-.169L1.707.293A.999.999 0 1 0 .293 1.707l4.088 4.088A16.94 16.94 0 0 0 .758 8.25a1 1 0 1 0 1.325 1.499 14.799 14.799 0 0 1 3.802-2.451l2.323 2.323a11.959 11.959 0 0 0-3.849 2.161 1 1 0 0 0 1.283 1.535 9.875 9.875 0 0 1 4.188-2.074l2.789 2.789-.078-.007a6.954 6.954 0 0 0-4.59 1.269 1 1 0 1 0 1.158 1.63zM12 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgWifiOff;
