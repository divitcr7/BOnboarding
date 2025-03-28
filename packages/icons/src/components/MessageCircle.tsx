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
function SvgMessageCircle({
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
      <path d="M22 11.497V11l-.002-.058a9.515 9.515 0 0 0-2.642-6.051A9.43 9.43 0 0 0 13 2h-.489a9.266 9.266 0 0 0-4.264 1.008 9.676 9.676 0 0 0-3.139 2.535A9.432 9.432 0 0 0 3 11.489a9.229 9.229 0 0 0 .824 3.877l-1.772 5.317a1 1 0 0 0 1.265 1.264l5.314-1.771a9.338 9.338 0 0 0 3.876.823 9.672 9.672 0 0 0 3.941-.866 9.431 9.431 0 0 0 4.541-4.375A9.27 9.27 0 0 0 22 11.497zm-2 .006a7.274 7.274 0 0 1-.789 3.339 7.443 7.443 0 0 1-3.592 3.472 7.657 7.657 0 0 1-3.126.686 7.27 7.27 0 0 1-3.335-.789.997.997 0 0 0-.775-.06L4.58 19.419l1.268-3.803a.996.996 0 0 0-.056-.767A7.275 7.275 0 0 1 5 11.511a7.442 7.442 0 0 1 1.663-4.709 7.661 7.661 0 0 1 2.49-2.01A7.262 7.262 0 0 1 12.489 4h.456a7.426 7.426 0 0 1 4.969 2.277A7.52 7.52 0 0 1 20 11.03z" />
    </svg>
  );
}
export default SvgMessageCircle;
