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
function SvgMoon({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M21.996 12.882a1 1 0 0 0-1.585-.9 6.11 6.11 0 0 1-3.188 1.162 5.948 5.948 0 0 1-3.95-1.158c-1.333-.985-2.139-2.415-2.367-3.935s.124-3.124 1.109-4.456a.998.998 0 0 0-.901-1.589 10.082 10.082 0 0 0-5.895 2.651 9.943 9.943 0 0 0-3.137 6.386c-.254 2.749.631 5.343 2.266 7.311s4.022 3.313 6.772 3.567 5.343-.631 7.311-2.266 3.313-4.022 3.567-6.772zm-2.429 1.792a7.988 7.988 0 0 1-2.416 3.441c-1.576 1.309-3.648 2.016-5.848 1.813s-4.108-1.278-5.417-2.854-2.016-3.648-1.813-5.848A7.932 7.932 0 0 1 6.58 6.12a8.058 8.058 0 0 1 2.731-1.672 8.008 8.008 0 0 0 2.772 9.146 7.94 7.94 0 0 0 5.272 1.545 8.083 8.083 0 0 0 2.21-.465z" />
    </svg>
  );
}
export default SvgMoon;
