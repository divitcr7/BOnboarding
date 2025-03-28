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
function SvgEyeOff({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M10.128 5.214A7.908 7.908 0 0 1 11.988 5c1.758 0 3.309.559 4.658 1.393 1.119.692 2.089 1.567 2.894 2.448a18.701 18.701 0 0 1 2.318 3.156 16.723 16.723 0 0 1-1.778 2.542 1 1 0 0 0 1.518 1.302 18.991 18.991 0 0 0 2.283-3.37 1 1 0 0 0 .013-.919s-.396-.789-1.12-1.843a20.553 20.553 0 0 0-1.757-2.218c-.894-.979-2.004-1.987-3.319-2.8C16.103 3.706 14.192 3 12.012 3a9.899 9.899 0 0 0-2.34.266 1 1 0 1 0 .456 1.948zm-.101 6.228 2.531 2.531a2.003 2.003 0 0 1-2.531-2.532zM5.983 7.397 8.536 9.95a3.993 3.993 0 0 0-.608 2.266c.036 1.022.463 2.033 1.271 2.785s1.846 1.107 2.868 1.071a3.991 3.991 0 0 0 1.984-.608l2.322 2.322A8.962 8.962 0 0 1 11.989 19c-1.734 0-3.285-.559-4.634-1.393-1.119-.692-2.089-1.567-2.894-2.448a18.701 18.701 0 0 1-2.317-3.155 17.275 17.275 0 0 1 3.841-4.607zm-5.69-5.69 4.271 4.271a19.34 19.34 0 0 0-4.445 5.549.999.999 0 0 0-.013.92s.396.789 1.12 1.843a20.553 20.553 0 0 0 1.757 2.218c.894.979 2.004 1.987 3.319 2.8C7.897 20.294 9.808 21 12.012 21a10.98 10.98 0 0 0 5.815-1.759l4.466 4.466a.999.999 0 1 0 1.414-1.414l-8.876-8.876-.007-.007-4.209-4.21-.024-.024L1.707.293A.999.999 0 1 0 .293 1.707z" />
    </svg>
  );
}
export default SvgEyeOff;
