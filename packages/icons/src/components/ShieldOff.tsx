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
function SvgShieldOff({
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
      <path d="M20.645 14.296a7.735 7.735 0 0 0 .355-2.3V5c0-.426-.267-.79-.649-.936l-8-3a.995.995 0 0 0-.701 0l-3.16 1.18a1 1 0 1 0 .7 1.873l2.809-1.049L19 5.693v6.311a5.744 5.744 0 0 1-.265 1.7.999.999 0 1 0 1.91.592zM5 6.414l11.231 11.231a18.173 18.173 0 0 1-4.262 3.199c-1.209-.69-4.402-2.702-6.019-5.531a7.973 7.973 0 0 1-.223-.417C5.271 13.985 5 13.018 5 12zM.293 1.707l2.824 2.825A1.014 1.014 0 0 0 3 5v7c0 1.382.369 2.655.938 3.791.087.175.179.346.276.515 2.351 4.114 7.34 6.589 7.34 6.589.298.149.636.135.914-.01a21.158 21.158 0 0 0 5.178-3.825l4.648 4.648a.999.999 0 1 0 1.414-1.414L1.707.293A.999.999 0 1 0 .293 1.707z" />
    </svg>
  );
}
export default SvgShieldOff;
