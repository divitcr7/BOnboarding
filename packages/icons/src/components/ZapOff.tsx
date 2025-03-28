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
function SvgZapOff({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="m13.402 6.873.59-4.75a1 1 0 0 0-1.761-.763l-2.43 2.92c-.353.425-.295 1.055.129 1.409s1.055.296 1.408-.129l.249-.299-.17 1.366a1 1 0 0 0 1.985.247zm5.936 6.678 2.43-2.91A1 1 0 0 0 21 9h-5.34a1 1 0 0 0 0 2h3.202l-1.06 1.269a1 1 0 0 0 1.536 1.282zm-6.377.824 1.686 1.686-2.232 2.678zM8.067 9.481 11.586 13H5.135zM.293 1.707l6.354 6.354-4.415 5.299A1 1 0 0 0 3 15h7.867l-.859 6.876a.999.999 0 0 0 1.76.764l4.299-5.159 6.226 6.226a.999.999 0 1 0 1.414-1.414l-22-22A.999.999 0 1 0 .293 1.707z" />
    </svg>
  );
}
export default SvgZapOff;
