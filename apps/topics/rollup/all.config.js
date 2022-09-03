import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const production = !process.env.ROLLUP_WATCH;

const packageJson = require("../package.json");

export default [
    {
        input: 'src/to_be_generated/runtime-index.ts',
        output: [{
            sourcemap: true,
            format: 'esm',
            file: 'dist/app/bundle.js'
        }, {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: '../../UIs/react/conversations/public/AIRport/apps/@airline/topics/bundle.js'
        }],
        plugins: [
            peerDepsExternal(),
            resolve({
                browser: true
            }),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                sourceMap: !production,
                inlineSources: !production
            }),
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: "src/to_be_generated/api-index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                tsconfigDefaults: {
                    "emitDecoratorMetadata": false
                },
                sourceMap: !production,
                inlineSources: !production
            }),
            production && terser(),
        ],
        watch: {
            clearScreen: false
        },
    },
    {
        input: "dist/app/to_be_generated/runtime-index.d.ts",
        output: [{ file: "dist/app/bundle.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
    {
        input: "dist/esm/to_be_generated/api-index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
