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
function SvgCheckCircle({
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
      <path d="M21 11.08V12c-.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64S2.999 14.475 3 11.989s1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633a8.844 8.844 0 0 1 3.649.775 1 1 0 1 0 .831-1.819 10.85 10.85 0 0 0-4.479-.956C8.969.992 6.217 2.223 4.226 4.211S1.002 8.951 1 11.988s1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217S22.998 15.038 23 12v-.92a1 1 0 0 0-2 0zm.293-7.787L12 12.595l-2.293-2.292a.999.999 0 1 0-1.414 1.414l3 3c.391.391 1.024.39 1.415 0l10-10.01a1 1 0 1 0-1.415-1.413z" />
    </svg>
  );
}
export default SvgCheckCircle;
