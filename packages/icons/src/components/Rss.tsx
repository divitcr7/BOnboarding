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
function SvgRss({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M4 12c2.209 0 4.208.894 5.657 2.343S12 17.791 12 20a1 1 0 0 0 2 0c0-2.761-1.12-5.263-2.929-7.071S6.761 10 4 10a1 1 0 0 0 0 2zm0-7c4.142 0 7.891 1.678 10.607 4.393S19 15.858 19 20a1 1 0 0 0 2 0c0-4.694-1.904-8.946-4.979-12.021S8.694 3 4 3a1 1 0 0 0 0 2zm3 14c0-.552-.225-1.053-.586-1.414a1.996 1.996 0 0 0-2.828 0 1.996 1.996 0 0 0 0 2.828 1.996 1.996 0 0 0 2.828 0C6.775 20.053 7 19.552 7 19z" />
    </svg>
  );
}
export default SvgRss;
