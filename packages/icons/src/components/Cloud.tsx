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
function SvgCloud({ size = 'md', color = '#000000', ...props }: SvgIconProps) {
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
      <path d="M18 11c1.105 0 2.103.447 2.828 1.172S22 13.895 22 15s-.447 2.103-1.172 2.828S19.105 19 18 19H9.005A7.102 7.102 0 0 1 5 17.742a6.94 6.94 0 0 1-2.784-3.992c-.483-1.872-.163-3.761.748-5.305s2.408-2.739 4.28-3.223 3.761-.163 5.305.748 2.739 2.408 3.223 4.28c.115.435.505.75.968.75zm0-2h-.52a8.978 8.978 0 0 0-3.915-4.753c-1.983-1.169-4.415-1.583-6.821-.961S2.41 5.446 1.241 7.429-.341 11.844.28 14.25a8.937 8.937 0 0 0 3.583 5.137A9.1 9.1 0 0 0 8.995 21H18c1.657 0 3.158-.673 4.243-1.757S24 16.657 24 15s-.673-3.158-1.757-4.243S19.657 9 18 9z" />
    </svg>
  );
}
export default SvgCloud;
