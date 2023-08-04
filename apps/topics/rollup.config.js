import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from "rollup-plugin-typescript2"
import dts from "rollup-plugin-dts"
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'

// const production = !process.env.ROLLUP_WATCH
const production = false

const packageJson = require("./package.json")

export default [
    {
        input: 'src/to_be_generated/topics.runtime-index.ts',
        output: [{
            sourcemap: true,
            format: 'esm',
            file: '../../UIs/angular/projects/conversations/src/AIRport/apps/@airline/topics/bundle.mjs'
        }],
        plugins: [
            del({ targets: 'dist/*' }),
            resolve({
                browser: true
            }),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                sourceMap: !production,
                inlineSources: !production
            }),
            production && terser(),
            copy({
                targets: [
                    {
                        src: 'node_modules/@airport/tower/dist/index.html',
                        dest: '../../UIs/angular/projects/conversations/src/AIRport/apps/@airline/topics'
                    },
                ]
            })
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: './src/generated/application.ts',
        output: [{
            file: "dist/definition/application.mjs",
            sourcemap: true,
        }],
        plugins: [
            typescript({
                tsconfigDefaults: {
                    "files": [
                        "src/generated/application.ts"
                    ],
                }
            })
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: './src/generated/mappedSuperclass.ts',
        output: [{
            file: "dist/definition/mappedSuperclass.mjs",
            sourcemap: true,
        }],
        plugins: [
            typescript({
                tsconfigDefaults: {
                    "files": [
                        "src/generated/mappedSuperclass.ts"
                    ],
                }
            })
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: "src/to_be_generated/topics.api-index.ts",
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
        input: "../../UIs/angular/projects/conversations/src/AIRport/apps/@airline/topics/to_be_generated/topics.runtime-index.d.ts",
        output: [{ file: "../../UIs/angular/projects/conversations/src/AIRport/apps/@airline/topics/bundle.d.ts", format: "esm" }],
        plugins: [dts.default()],
        external: [/\.css$/],
    },
    {
        input: "dist/esm/to_be_generated/topics.api-index.d.ts",
        output: [{ file: "dist/esm/topics.index.d.ts", format: "esm" }],
        plugins: [dts.default()],
        external: [/\.css$/],
    },
]
