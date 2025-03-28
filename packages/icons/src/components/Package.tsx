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
function SvgPackage({
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
      <path d="M14.507 9.405 12 10.855 5.039 6.828 7.55 5.393zm4.454-2.577-2.456 1.421-6.944-4.005 1.934-1.105a1.03 1.03 0 0 1 .355-.124.988.988 0 0 1 .654.124zm-7.435 16.133a.998.998 0 0 0 .952-.002c.356-.058.701-.18 1.017-.36l7.001-4.001a2.988 2.988 0 0 0 1.299-1.514c.133-.342.202-.707.205-1.084V8a2.98 2.98 0 0 0-.314-1.334.996.996 0 0 0-.253-.417 3.037 3.037 0 0 0-.928-.842l-7.009-4.005a2.989 2.989 0 0 0-1.954-.364 3.041 3.041 0 0 0-1.037.363L7.306 3.229a.993.993 0 0 0-.553.316L3.504 5.402a3.001 3.001 0 0 0-.941.85 1.025 1.025 0 0 0-.251.417A3.07 3.07 0 0 0 2 7.993V16c.001.71.248 1.363.664 1.878.23.286.512.528.831.715l7.009 4.005c.324.187.67.307 1.022.362zM11 12.587v7.991l-6.495-3.711a1.037 1.037 0 0 1-.285-.245A.98.98 0 0 1 4 16V8.538zm2 7.991v-7.991l7-4.049V16a1.035 1.035 0 0 1-.07.362.984.984 0 0 1-.426.5z" />
    </svg>
  );
}
export default SvgPackage;
