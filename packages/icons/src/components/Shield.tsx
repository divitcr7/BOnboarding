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
function SvgShield({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M12 20.862c-1.184-.672-4.42-2.695-6.05-5.549a7.973 7.973 0 0 1-.223-.417C5.271 13.985 5 13.018 5 12V5.693l7-2.625 7 2.625V12c0 1.018-.271 1.985-.726 2.897-.07.14-.145.279-.223.417-1.631 2.854-4.867 4.876-6.05 5.549zm.447 2.032s4.989-2.475 7.34-6.589c.096-.168.188-.34.276-.515.568-1.135.937-2.408.937-3.79V5c0-.426-.267-.79-.649-.936l-8-3a.992.992 0 0 0-.702 0l-8 3A1.002 1.002 0 0 0 3 5v7c0 1.382.369 2.655.938 3.791.087.175.179.346.276.515 2.351 4.114 7.34 6.589 7.34 6.589.292.146.62.136.894 0z" />
    </svg>
  );
}
export default SvgShield;
