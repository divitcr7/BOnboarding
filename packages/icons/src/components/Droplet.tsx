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
function SvgDroplet({
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
      <path d="M12.707 1.983a1 1 0 0 0-1.415.001L5.639 7.647c-1.757 1.758-2.635 4.063-2.634 6.365s.88 4.607 2.638 6.363a8.975 8.975 0 0 0 6.358 2.634 8.985 8.985 0 0 0 6.37-2.638 8.975 8.975 0 0 0 2.634-6.358 8.98 8.98 0 0 0-2.638-6.369zm-.706 2.122 4.952 4.952c1.368 1.367 2.052 3.156 2.052 4.949s-.682 3.583-2.049 4.95-3.156 2.051-4.949 2.052-3.583-.682-4.95-2.049-2.051-3.156-2.052-4.949.682-3.583 2.049-4.95z" />
    </svg>
  );
}
export default SvgDroplet;
