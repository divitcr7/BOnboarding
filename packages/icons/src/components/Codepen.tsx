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
function SvgCodepen({
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
      <path d="M5.256 12 3 13.579V10.42zM21 13.579 18.744 12 21 10.421zm-4-.358 3.212 2.249L13 20.157V16.02zM8.744 12 12 9.721 15.256 12 12 14.279zm-4.956 3.469L7 13.221l4 2.8v4.137zm8.769-14.3C12.398 1.062 12.206 1 12 1s-.398.062-.557.169l-9.969 6.48A1.005 1.005 0 0 0 1 8.512v6.976a1 1 0 0 0 .455.851l.019.012 9.969 6.48c.159.107.351.169.557.169s.398-.062.557-.169l9.969-6.48a.998.998 0 0 0 .474-.863V8.512a1 1 0 0 0-.455-.851l-.019-.012zM13 7.979V3.843l7.212 4.688L17 10.779zm-2-4.136V7.98l-4 2.8-3.212-2.249z" />
    </svg>
  );
}
export default SvgCodepen;
