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
function SvgCrop({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M7.077 7.077 16.009 7c.268 0 .516.111.698.293S17 7.724 17 8v9H8c-.276 0-.525-.111-.707-.293S7 16.276 7 16.009zm-6.068.053 4.068-.035L5 15.991A2.998 2.998 0 0 0 8 19h9v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4V8a3.003 3.003 0 0 0-3.009-3l-8.896.077.035-4.068a1 1 0 1 0-2-.018l-.036 4.103-4.103.036a1 1 0 1 0 .018 2z" />
    </svg>
  );
}
export default SvgCrop;
