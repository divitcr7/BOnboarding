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
function SvgTwitter({
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
      <path d="M20.833 5.262a6.685 6.685 0 0 1-.616.696.997.997 0 0 0-.278.908c.037.182.06.404.061.634 0 5.256-2.429 8.971-5.81 10.898-2.647 1.509-5.938 1.955-9.222 1.12a12.682 12.682 0 0 0 3.593-1.69 1 1 0 0 0-.156-1.741c-2.774-1.233-4.13-2.931-4.769-4.593-.417-1.084-.546-2.198-.52-3.227.021-.811.138-1.56.278-2.182.394.343.803.706 1.235 1.038a11.59 11.59 0 0 0 7.395 2.407c.543-.015.976-.457.976-1V7.519a3.459 3.459 0 0 1 1.196-2.674c.725-.631 1.636-.908 2.526-.846s1.753.463 2.384 1.188a1 1 0 0 0 1.033.304c.231-.067.463-.143.695-.228zm1.591-3.079a9.884 9.884 0 0 1-2.287 1.205 5.469 5.469 0 0 0-3.276-1.385 5.465 5.465 0 0 0-3.977 1.332A5.464 5.464 0 0 0 11 7.507a9.589 9.589 0 0 1-5.15-1.97 9.87 9.87 0 0 1-2.034-2.116 1 1 0 0 0-1.729.172s-.132.299-.285.76a13.57 13.57 0 0 0-.357 1.29 13.224 13.224 0 0 0-.326 2.571c-.031 1.227.12 2.612.652 3.996.683 1.775 1.966 3.478 4.147 4.823A10.505 10.505 0 0 1 1.045 18a1 1 0 0 0-.53 1.873c4.905 2.725 10.426 2.678 14.666.261C19.221 17.833 22 13.434 22 7.5a5.565 5.565 0 0 0-.023-.489 8.626 8.626 0 0 0 1.996-3.781 1 1 0 0 0-1.55-1.047z" />
    </svg>
  );
}
export default SvgTwitter;
