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
function SvgPenTool({
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
      <path d="m18.707 13.707.293-.293L20.586 15 15 20.586 13.414 19l.293-.293zM2.252 1.032a.989.989 0 0 0-.893.2.993.993 0 0 0-.347.616.978.978 0 0 0 .012.371l.004.016.004.017 3.496 14.483c.094.388.403.669.776.746l5.765 1.153a.998.998 0 0 0 .224 1.073l3 3a.999.999 0 0 0 1.414 0l7-7a.999.999 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.073-.224l-1.153-5.765a1.001 1.001 0 0 0-.746-.776zM14 11a2.997 2.997 0 0 0-4.293-2.707L5.22 3.806l10.425 2.516 1.27 6.349-4.243 4.243-6.349-1.27L3.806 5.22l4.487 4.487a2.991 2.991 0 0 0 .586 3.414 2.997 2.997 0 0 0 4.242 0A2.997 2.997 0 0 0 14 11zm-2 0c0 .276-.111.525-.293.707S11.276 12 11 12s-.525-.111-.707-.293S10 11.276 10 11c0-.27.106-.514.281-.695l.013-.012.012-.013A.993.993 0 0 1 11 10c.276 0 .525.111.707.293S12 10.724 12 11z" />
    </svg>
  );
}
export default SvgPenTool;
