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
function SvgDownloadCloud({
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
      <path d="M11 12v6.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414l4 4a1.006 1.006 0 0 0 1.414 0l4-4a.999.999 0 1 0-1.414-1.414L13 18.586V12a1 1 0 0 0-2 0zm10.455 6.908c1.355-.953 2.196-2.367 2.46-3.878s-.05-3.126-1.003-4.481a5.97 5.97 0 0 0-3.287-2.324A6.11 6.11 0 0 0 18.004 8h-.523a8.978 8.978 0 0 0-3.907-4.758C11.593 2.07 9.162 1.653 6.755 2.27s-4.338 2.155-5.51 4.136-1.589 4.412-.972 6.819a8.895 8.895 0 0 0 1.983 3.734 1 1 0 1 0 1.486-1.338 6.901 6.901 0 0 1-1.533-2.893c-.481-1.873-.157-3.761.756-5.304S5.377 4.688 7.25 4.208s3.761-.157 5.304.756 2.736 2.412 3.216 4.285c.116.435.506.751.97.751h1.256c.37.001.737.052 1.09.151a3.973 3.973 0 0 1 2.19 1.548c.636.904.845 1.978.669 2.988s-.736 1.95-1.64 2.585a1 1 0 0 0 1.15 1.636z" />
    </svg>
  );
}
export default SvgDownloadCloud;
