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
function SvgMicOff({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M12.516 13.93a1.994 1.994 0 0 1-1.929-.518A1.986 1.986 0 0 1 10 12v-.586zM16 9.34V4c.001-1.103-.447-2.105-1.169-2.829S13.108-.002 12.004-.003A3.98 3.98 0 0 0 9.355.999a4.034 4.034 0 0 0-1.274 2.197 1 1 0 1 0 1.958.408c.092-.44.322-.825.641-1.108.35-.31.806-.497 1.308-.499a2.007 2.007 0 0 1 1.427.587c.363.364.586.862.585 1.416v5.34a1 1 0 0 0 2 0zm2 .66v2c0 .376-.035.74-.093 1.045a1 1 0 1 0 1.966.37c.082-.434.127-.922.127-1.415v-2a1 1 0 0 0-2 0zM8 24h8a1 1 0 0 0 0-2h-3v-2.024a8.008 8.008 0 0 0 3.934-1.627l5.359 5.359a.999.999 0 1 0 1.414-1.414l-5.838-5.838a.98.98 0 0 0-.374-.374L1.707.293A.999.999 0 1 0 .293 1.707L8 9.414V12c.001 1.105.451 2.106 1.174 2.828s1.725 1.17 2.829 1.169a3.985 3.985 0 0 0 2.027-.553l1.477 1.477a5.97 5.97 0 0 1-3.212 1.123.999.999 0 0 0-.59 0A5.977 5.977 0 0 1 7.8 16.337a5.975 5.975 0 0 1-1.798-4.106L6 12.007V10a1 1 0 0 0-2 0v1.993c0 .149.003.298.003.298a7.977 7.977 0 0 0 2.398 5.475A7.969 7.969 0 0 0 11 19.989V22H8a1 1 0 0 0 0 2z" />
    </svg>
  );
}
export default SvgMicOff;
