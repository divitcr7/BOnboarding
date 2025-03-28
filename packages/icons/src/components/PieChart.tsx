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
function SvgPieChart({
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
      <path d="M20.289 15.501c-.968 2.289-2.771 3.968-4.906 4.835s-4.599.917-6.888-.051-3.968-2.771-4.835-4.906-.918-4.6.05-6.889a8.96 8.96 0 0 1 4.689-4.743 1.001 1.001 0 0 0-.798-1.834 10.965 10.965 0 0 0-5.733 5.798C.685 10.509.749 13.523 1.806 16.13s3.112 4.814 5.909 5.997 5.812 1.119 8.419.062 4.814-3.112 5.997-5.909a1 1 0 0 0-1.843-.779zM20.945 11H13V3.055c2.086.23 3.956 1.173 5.364 2.581S20.715 8.914 20.945 11zM23 12c0-3.037-1.232-5.789-3.222-7.778S15.037 1 12 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
    </svg>
  );
}
export default SvgPieChart;
