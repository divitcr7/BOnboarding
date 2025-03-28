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
function SvgCameraOff({
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
      <path d="M9 4h5.465l1.703 2.555c.192.287.506.443.832.445h4c.276 0 .525.111.707.293S22 7.724 22 8v9.34a1 1 0 0 0 2 0V8a2.997 2.997 0 0 0-3-3h-3.465l-1.703-2.555A1 1 0 0 0 15 2H9a1 1 0 0 0 0 2zm-.738 5.676a4.988 4.988 0 0 0-1.197 4.267c.235 1.256.952 2.426 2.091 3.205s2.489 1.023 3.745.788a4.995 4.995 0 0 0 2.424-1.197L18.586 20H3c-.276 0-.525-.111-.707-.293S2 19.276 2 19V8c0-.276.111-.525.293-.707S2.724 7 3 7h2.586zm2.151-.678L1.707.293A.999.999 0 1 0 .293 1.707L3.586 5H3a2.997 2.997 0 0 0-3 3v11a2.997 2.997 0 0 0 3 3h17.586l1.707 1.707a.999.999 0 1 0 1.414-1.414L10.439 9.025zm3.494 6.323c-.4.336-.875.555-1.375.649-.756.142-1.563-.005-2.247-.473S9.172 14.33 9.03 13.574a2.987 2.987 0 0 1 .649-2.48z" />
    </svg>
  );
}
export default SvgCameraOff;
