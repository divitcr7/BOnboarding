import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' with { type: 'json' };
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true, // Prefer built-in modules in the browser
        preferBuiltins: false, // Do not prefer Node.js built-ins
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      json(),
    ],
    external: ['fs'], // Exclude Node-specific modules like 'fs'
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
