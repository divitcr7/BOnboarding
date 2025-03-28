const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn codegen to update
// Do not edit
`;

const propTypesTemplate = ({ componentName, props, jsx, exports }, { tpl }) => {
  return tpl`
  import * as React from 'react';
  import type { SVGProps } from 'react';
  import useWithViewbox from '../useWithViewbox';

  const mapSize = {
    sm: 16,
    md: 24, 
    lg: 32
  };

  interface SvgIconProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: 'sm' | 'md' | 'lg'
  }

function ${componentName}({size='md', color='#000000', ...props}:SvgIconProps) {
  const ref:React.RefObject<SVGSVGElement> = React.useRef(null);
  useWithViewbox(ref);
  const actualSize = mapSize[size] || 24;
  props = { fill: color, width:actualSize, height: actualSize, ref,...props }

  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
