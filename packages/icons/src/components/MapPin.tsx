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
function SvgMapPin({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M22 10c0-2.761-1.12-5.263-2.929-7.071S14.761 0 12 0 6.737 1.12 4.929 2.929 2 7.239 2 10c0 .569.053 1.128.15 1.676.274 1.548.899 3.004 1.682 4.32 2.732 4.591 7.613 7.836 7.613 7.836.331.217.765.229 1.109 0 0 0 4.882-3.245 7.613-7.836.783-1.316 1.408-2.772 1.682-4.32A9.506 9.506 0 0 0 22 10zm-2 0c0 .444-.041.887-.119 1.328-.221 1.25-.737 2.478-1.432 3.646-1.912 3.214-5.036 5.747-6.369 6.74-1.398-.916-4.588-3.477-6.53-6.74-.695-1.168-1.211-2.396-1.432-3.646A7.713 7.713 0 0 1 4 10c0-2.209.894-4.208 2.343-5.657S9.791 2 12 2s4.208.894 5.657 2.343S20 7.791 20 10zm-4 0c0-1.104-.449-2.106-1.172-2.828a3.994 3.994 0 0 0-5.656 0 3.994 3.994 0 0 0 0 5.656 3.994 3.994 0 0 0 5.656 0A3.994 3.994 0 0 0 16 10zm-2 0c0 .553-.223 1.051-.586 1.414S12.553 12 12 12s-1.051-.223-1.414-.586S10 10.553 10 10s.223-1.051.586-1.414S11.447 8 12 8s1.051.223 1.414.586S14 9.447 14 10z" />
    </svg>
  );
}
export default SvgMapPin;
