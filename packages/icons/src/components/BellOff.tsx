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
function SvgBellOff({
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
      <path d="M12.865 20.498a.998.998 0 0 1-1.726.007 1 1 0 1 0-1.737.991c.25.439.623.823 1.093 1.096.716.416 1.535.501 2.276.304s1.409-.678 1.824-1.394a1 1 0 0 0-1.73-1.004zM19 7.977a6.979 6.979 0 0 0-2.043-4.928A6.98 6.98 0 0 0 12.01.991a6.952 6.952 0 0 0-3.9 1.18 1.001 1.001 0 0 0 1.12 1.658 4.944 4.944 0 0 1 2.73-.837c1.448.011 2.684.569 3.581 1.47A4.982 4.982 0 0 1 17 7.988c-.042 1.658.173 3.476.665 5.277a1 1 0 1 0 1.929-.527c-.443-1.625-.632-3.25-.594-4.708v-.025zm-12.004.434L14.586 16H5.149c.872-1.428 1.783-3.812 1.847-7.589zM.293 1.707l4.856 4.856A6.536 6.536 0 0 0 5 8.013c0 6.114-2.393 8.034-2.563 8.161A1 1 0 0 0 3 18h13.586l5.707 5.707a.999.999 0 1 0 1.414-1.414l-22-22A.999.999 0 1 0 .293 1.707z" />
    </svg>
  );
}
export default SvgBellOff;
