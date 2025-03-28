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
function SvgHexagon({
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
      <path d="M20 16a1.035 1.035 0 0 1-.07.362.984.984 0 0 1-.426.5l-6.999 3.999a1.03 1.03 0 0 1-.355.124.988.988 0 0 1-.654-.124l-6.991-3.995a1.037 1.037 0 0 1-.285-.245A.976.976 0 0 1 4 16V8.007c.001-.128.025-.253.07-.369a.984.984 0 0 1 .426-.5l6.999-3.999a1.03 1.03 0 0 1 .355-.124.988.988 0 0 1 .654.124l6.991 3.995c.111.065.207.148.285.245.139.171.22.385.22.621zm2 0V8a2.983 2.983 0 0 0-.664-1.878 3.035 3.035 0 0 0-.831-.715l-7.009-4.005a2.989 2.989 0 0 0-1.954-.364 3.041 3.041 0 0 0-1.037.363L3.504 5.402a2.988 2.988 0 0 0-1.299 1.514A3.039 3.039 0 0 0 2 7.993V16c.001.71.248 1.363.664 1.878.23.286.512.528.831.715l7.009 4.005c.61.352 1.3.465 1.954.364a3.041 3.041 0 0 0 1.037-.363l7.001-4.001a2.988 2.988 0 0 0 1.299-1.514c.133-.342.202-.707.205-1.084z" />
    </svg>
  );
}
export default SvgHexagon;
