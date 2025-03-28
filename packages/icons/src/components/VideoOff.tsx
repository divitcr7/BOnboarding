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
function SvgVideoOff({
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
      <path d="M10.66 6H14c.276 0 .525.111.707.293S15 6.724 15 7v3.34c0 .276.112.526.293.707l1 1a1 1 0 0 0 1.293.103L22 8.958V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1.586-.81l-5.309 3.841L17 9.926V7a2.997 2.997 0 0 0-3-3h-3.34a1 1 0 0 0 0 2zM4.586 6 15 16.414V17c0 .276-.111.525-.293.707S14.276 18 14 18H3c-.276 0-.525-.111-.707-.293S2 17.276 2 17V7c0-.276.111-.525.293-.707S2.724 6 3 6zM.293 1.707l2.318 2.318a2.988 2.988 0 0 0-1.732.854A2.991 2.991 0 0 0 0 7v10a2.997 2.997 0 0 0 3 3h11c.828 0 1.58-.337 2.121-.879.269-.269.488-.59.64-.946l5.532 5.532a.999.999 0 1 0 1.414-1.414l-22-22A.999.999 0 1 0 .293 1.707z" />
    </svg>
  );
}
export default SvgVideoOff;
