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
function SvgWind({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M10.299 5.295a.995.995 0 0 1 1.414-.004.995.995 0 0 1 .004 1.414.99.99 0 0 1-.697.295H2a1 1 0 0 0 0 2h9.043a2.993 2.993 0 0 0 2.093-.885 3 3 0 1 0-4.255-4.23.999.999 0 1 0 1.418 1.41zm1.582 14.82c.584.587 1.352.883 2.119.885a2.996 2.996 0 0 0 3.009-2.991A2.996 2.996 0 0 0 14.044 15H2a1 1 0 0 0 0 2h12.02a.994.994 0 0 1 .698.295.995.995 0 0 1-.004 1.414.995.995 0 0 1-1.414-.004.999.999 0 1 0-1.418 1.41zm6.555-11.677c.294-.293.676-.438 1.061-.438s.767.147 1.06.441.438.676.438 1.061-.147.767-.441 1.06a1.492 1.492 0 0 1-1.057.438H2a1 1 0 0 0 0 2h17.502a3.494 3.494 0 0 0 2.466-1.022c.684-.682 1.027-1.579 1.028-2.474s-.34-1.792-1.022-2.476S20.394 6.001 19.5 6s-1.792.34-2.476 1.022a1 1 0 1 0 1.412 1.416z" />
    </svg>
  );
}
export default SvgWind;
