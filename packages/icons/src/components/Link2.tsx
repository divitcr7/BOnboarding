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
function SvgLink2({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M15 8h3c1.105 0 2.103.447 2.828 1.172S22 10.895 22 12s-.447 2.103-1.172 2.828S19.105 16 18 16h-3a1 1 0 0 0 0 2h3c1.657 0 3.158-.673 4.243-1.757S24 13.657 24 12s-.673-3.158-1.757-4.243S19.657 6 18 6h-3a1 1 0 0 0 0 2zm-6 8H6c-1.105 0-2.103-.447-2.828-1.172S2 13.105 2 12s.447-2.103 1.172-2.828S4.895 8 6 8h3a1 1 0 0 0 0-2H6c-1.657 0-3.158.673-4.243 1.757S0 10.343 0 12s.673 3.158 1.757 4.243S4.343 18 6 18h3a1 1 0 0 0 0-2zm-1-3h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgLink2;
