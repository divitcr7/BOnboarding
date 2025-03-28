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
function SvgCodesandbox({
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
      <path d="M14.441 4.245 12 5.655l-2.441-1.41 1.936-1.106a1.03 1.03 0 0 1 .355-.124.988.988 0 0 1 .654.124zM4 13.733l2.5 1.444v2.83l-1.995-1.14a1.037 1.037 0 0 1-.285-.245A.98.98 0 0 1 4 16zm13.5 4.274v-2.83l2.5-1.444V16a1.035 1.035 0 0 1-.07.362.984.984 0 0 1-.426.5zm1.461-11.179L12 10.855 5.039 6.828l2.51-1.435L11.5 7.676c.319.184.697.173 1.001 0l3.95-2.282zm-7.435 16.133a.998.998 0 0 0 .952-.002c.356-.058.701-.18 1.017-.36l3.198-1.828c.218-.043.411-.157.554-.316l3.249-1.857a2.988 2.988 0 0 0 1.299-1.514c.133-.342.202-.707.205-1.084V8a2.98 2.98 0 0 0-.314-1.334.996.996 0 0 0-.253-.417 3.037 3.037 0 0 0-.928-.842l-3.258-1.861a.99.99 0 0 0-.553-.317l-3.197-1.827a2.989 2.989 0 0 0-1.954-.364 3.041 3.041 0 0 0-1.037.363l-3.2 1.828a.993.993 0 0 0-.553.316L3.504 5.402a3.001 3.001 0 0 0-.941.85 1.025 1.025 0 0 0-.251.417A3.07 3.07 0 0 0 2 7.993V16c.001.71.248 1.363.664 1.878.23.286.512.528.831.715l3.258 1.862a.99.99 0 0 0 .554.316l3.197 1.827c.324.187.67.307 1.022.362zM11 12.587v7.991L8.5 19.15V14.6c0-.368-.199-.69-.5-.866l-4-2.311V8.538zm2 7.991v-7.991l7-4.049v2.885l-4 2.311a1 1 0 0 0-.5.866v4.55z" />
    </svg>
  );
}
export default SvgCodesandbox;
