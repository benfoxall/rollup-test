import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'd3-version.js',
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
  ],
  dest: 'd3-version.build.js'
}
