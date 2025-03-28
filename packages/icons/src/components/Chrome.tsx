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
function SvgChrome({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M7.402 10.033 5.158 6.152A8.967 8.967 0 0 1 12 3a8.967 8.967 0 0 1 6.364 2.636A9.07 9.07 0 0 1 19.485 7H12a5.005 5.005 0 0 0-4.599 3.033zM10.7 22.924a.923.923 0 0 0 .139.015 10.966 10.966 0 0 0 8.939-3.161A10.972 10.972 0 0 0 23 12a10.973 10.973 0 0 0-3.222-7.778C17.789 2.232 15.037 1 12 1S6.211 2.232 4.222 4.222a10.9 10.9 0 0 0-1.017 1.171 1.048 1.048 0 0 0-.111.149A10.954 10.954 0 0 0 1 12c0 3.037 1.232 5.789 3.222 7.778a10.974 10.974 0 0 0 6.478 3.146zm1.895-5.959-2.241 3.885a8.976 8.976 0 0 1-4.718-2.486A8.967 8.967 0 0 1 3 12c0-1.43.333-2.782.927-3.982L7.57 14.32c.236.45.539.859.894 1.215a4.99 4.99 0 0 0 4.131 1.43zm2.043-3.534-.044.069-.076.132A2.99 2.99 0 0 1 12 15a2.986 2.986 0 0 1-2.121-.879 3.056 3.056 0 0 1-.436-.551c-.011-.024-.024-.047-.037-.07l-.082-.141A2.996 2.996 0 0 1 9 12c0-.829.335-1.577.879-2.121S11.171 9 12 9s1.577.335 2.121.879S15 11.171 15 12c0 .518-.131 1.006-.362 1.431zm-2.05 7.55 3.64-6.311A4.974 4.974 0 0 0 17 12a4.983 4.983 0 0 0-1-3h4.488c.332.938.512 1.948.512 3a8.967 8.967 0 0 1-2.636 6.364 8.968 8.968 0 0 1-5.776 2.617z" />
    </svg>
  );
}
export default SvgChrome;
