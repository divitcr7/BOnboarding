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
function SvgUploadCloud({
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
      <path d="M11 14.414V21a1 1 0 0 0 2 0v-6.586l2.293 2.293a.999.999 0 1 0 1.414-1.414l-4-4A1.008 1.008 0 0 0 12 11a.997.997 0 0 0-.707.293l-4 4a.999.999 0 1 0 1.414 1.414zm9.869 4.854c1.454-.793 2.451-2.102 2.884-3.574s.305-3.112-.488-4.566a5.967 5.967 0 0 0-2.959-2.663A6.09 6.09 0 0 0 18.007 8h-.527a8.971 8.971 0 0 0-3.917-4.752C11.58 2.08 9.148 1.667 6.742 2.289S2.409 4.451 1.24 6.434s-1.581 4.415-.959 6.821a8.904 8.904 0 0 0 1.975 3.713 1 1 0 1 0 1.487-1.337 6.885 6.885 0 0 1-1.526-2.877c-.484-1.872-.164-3.761.746-5.305s2.407-2.74 4.279-3.224 3.761-.164 5.305.746 2.74 2.407 3.224 4.279c.116.435.506.75.969.75h1.253a4.11 4.11 0 0 1 1.545.312 3.97 3.97 0 0 1 1.97 1.773c.529.97.615 2.061.325 3.044s-.953 1.854-1.923 2.382a1 1 0 1 0 .958 1.756z" />
    </svg>
  );
}
export default SvgUploadCloud;
