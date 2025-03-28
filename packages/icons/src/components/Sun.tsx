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
function SvgSun({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M18 12c0-1.657-.673-3.158-1.757-4.243S13.657 6 12 6s-3.158.673-4.243 1.757S6 10.343 6 12s.673 3.158 1.757 4.243S10.343 18 12 18s3.158-.673 4.243-1.757S18 13.657 18 12zm-2 0c0 1.105-.447 2.103-1.172 2.828S13.105 16 12 16s-2.103-.447-2.828-1.172S8 13.105 8 12s.447-2.103 1.172-2.828S10.895 8 12 8s2.103.447 2.828 1.172S16 10.895 16 12zM11 1v2a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0zm0 20v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM3.513 4.927l1.42 1.42a.999.999 0 1 0 1.414-1.414l-1.42-1.42a.999.999 0 1 0-1.414 1.414zm14.14 14.14 1.42 1.42a.999.999 0 1 0 1.414-1.414l-1.42-1.42a.999.999 0 1 0-1.414 1.414zM1 13h2a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zm20 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM4.927 20.487l1.42-1.42a.999.999 0 1 0-1.414-1.414l-1.42 1.42a.999.999 0 1 0 1.414 1.414zm14.14-14.14 1.42-1.42a.999.999 0 1 0-1.414-1.414l-1.42 1.42a.999.999 0 1 0 1.414 1.414z" />
    </svg>
  );
}
export default SvgSun;
