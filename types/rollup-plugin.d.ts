declare module '@rollup/plugin-terser' {
    import { Plugin } from 'rollup';
    const terser: (options?: any) => Plugin;
    export default terser;
}


declare module '@rollup/plugin-node-resolve' {
    import { Plugin } from 'rollup';
    const resolve: (options?: any) => Plugin;
    export default resolve;
}


declare module '@rollup/plugin-commonjs' {
    import { Plugin } from 'rollup';
    const commonjs: (options?: any) => Plugin;
    export default commonjs;
}


declare module '@rollup/plugin-typescript' {
    import { Plugin } from 'rollup';
    const typescript: (options?: any) => Plugin;
    export default typescript;
}