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
function SvgWatch({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M11 9v3c0 .276.112.526.293.707l1.5 1.5a.999.999 0 1 0 1.414-1.414L13 11.586V9a1 1 0 0 0-2 0zm4.33 10.276-.166 1.813a.984.984 0 0 1-.333.658c-.18.159-.415.253-.67.253H9.83a.994.994 0 0 1-.69-.269 1.008 1.008 0 0 1-.315-.643l-.165-1.817A7.965 7.965 0 0 0 12 20a7.969 7.969 0 0 0 3.33-.724zM8.187 7.367A5.97 5.97 0 0 1 12 6c1.657 0 3.156.67 4.243 1.757S18 10.343 18 12a5.979 5.979 0 0 1-2.187 4.633A5.97 5.97 0 0 1 12 18c-1.657 0-3.156-.67-4.243-1.757S6 13.657 6 12a5.979 5.979 0 0 1 2.187-4.633zm9.304-1.185-.315-3.455A3.003 3.003 0 0 0 14.18 0H9.826a3.006 3.006 0 0 0-2.982 2.729L6.53 6.162A7.981 7.981 0 0 0 4 12a7.981 7.981 0 0 0 2.519 5.828l.315 3.445A3.003 3.003 0 0 0 9.83 24h4.329a3.007 3.007 0 0 0 1.997-.754 2.99 2.99 0 0 0 1-1.975l.314-3.433A7.981 7.981 0 0 0 20 12a7.981 7.981 0 0 0-2.508-5.818zM8.67 4.724l.166-1.813A1.004 1.004 0 0 1 9.834 2h4.346c.27-.001.509.1.69.269.175.164.291.389.315.643l.166 1.821A7.987 7.987 0 0 0 12 4a7.969 7.969 0 0 0-3.33.724z" />
    </svg>
  );
}
export default SvgWatch;
