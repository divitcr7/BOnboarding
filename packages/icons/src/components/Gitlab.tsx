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
function SvgGitlab({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M23.238 15.199c.261-.17.493-.446.635-.764.172-.385.214-.831.075-1.305l-1.266-3.749-2.432-7.484a1.443 1.443 0 0 0-.397-.637 1.428 1.428 0 0 0-2.313.592L15.323 8.67H8.676L6.469 1.897a1.443 1.443 0 0 0-.397-.637 1.424 1.424 0 0 0-.94-.372 1.412 1.412 0 0 0-.976.365 1.411 1.411 0 0 0-.397.598L1.318 9.363l-1.22 3.78a1.855 1.855 0 0 0-.038 1.004c.098.407.336.783.702 1.052l10.65 7.74c.346.248.818.26 1.176 0zm-1.235-1.575L12 20.894l-9.983-7.255 1.205-3.662 1.886-5.805L6.999 9.98c.137.42.525.687.951.69h8.1c.442 0 .817-.287.951-.691l1.886-5.804 1.892 5.824z" />
    </svg>
  );
}
export default SvgGitlab;
