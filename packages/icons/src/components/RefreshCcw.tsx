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
function SvgRefreshCcw({
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
      <path d="M21.433 8.666c-.921-2.603-2.812-4.587-5.12-5.689s-5.04-1.323-7.643-.402a9.878 9.878 0 0 0-3.744 2.364L2 7.689V4a1 1 0 0 0-2 0v5.998l.001.044a1.003 1.003 0 0 0 .242.611l.036.039a.993.993 0 0 0 .71.307H7A1 1 0 0 0 7 9H3.524l2.83-2.659a7.87 7.87 0 0 1 2.983-1.88c2.083-.737 4.265-.561 6.114.322s3.359 2.468 4.096 4.551a1 1 0 1 0 1.885-.667zM20.475 15l-2.8 2.631c-1.584 1.585-3.63 2.366-5.679 2.366s-4.095-.78-5.657-2.342a7.86 7.86 0 0 1-1.883-2.981 1.001 1.001 0 0 0-1.892.65 9.862 9.862 0 0 0 2.361 3.745c1.953 1.952 4.514 2.928 7.072 2.927s5.118-.978 7.048-2.909L22 16.312V20a1 1 0 0 0 2 0v-5.998l-.001-.044a1.003 1.003 0 0 0-.242-.611l-.036-.039a.993.993 0 0 0-.71-.307H17a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgRefreshCcw;
