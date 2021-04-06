import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import polyfills from "rollup-plugin-node-polyfills";

export default {
  input: 'src/index.js',
  output: {
    file: 'src/index.mjs',
    format: 'es',
  },
  plugins: [
    polyfills(),
    nodeResolve({ browser: true, preferBuiltins: true }),
    commonjs({ transformMixedEsModules: true }),
    json(),
  ],
  external: ['crypto'],
};
