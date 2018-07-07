
const { basename } = require('path')
const { writeFileSync } = require('fs')

const glob = require('glob')
const { rollup } = require('rollup')
const pluginSvgVue = require('rollup-plugin-svg-vue')
const pluginMemory = require('./rollup-plugin-memory')

const exportDels = []
const importDecls = []
const files = glob.sync('./node_modules/feather-icons/dist/icons/*.svg')

for (let i = 0; i < files.length; i++) {
  const file = files[i]
  const name = `feather-${basename(file, '.svg')}`
  const Name = name
    .replace(/-(.)/g, (m, g1) => g1.toUpperCase())
    .replace(/^./g, m => m.toUpperCase())

  exportDels.push(Name)
  exportDels.push(`'${name}': ${Name}`)
  importDecls.push(`import ${Name} from '${file}'`)
}

const oddExportDels = exportDels.filter((e, i) => i % 2 === 0)
const evenExportDels = exportDels.filter((e, i) => i % 2 === 1)
const contents = [
  importDecls.join('\n'),
  `export default {\n  ${evenExportDels.join(',\n  ')}\n}`,
  `export {\n  ${oddExportDels.join(',\n  ')}\n}`
].join('\n\n')

rollup({
  input: {
    path: './index.js',
    contents
  },
  plugins: [
    pluginMemory(),
    pluginSvgVue()
  ]
})
  .then(bundle => {
    const name = 'featherIconsVue'

    const p1 = bundle.generate({
      name,
      format: 'es'
    })

    const p2 = bundle.generate({
      name,
      format: 'umd',
      exports: 'named'
    })

    return Promise.all([p1, p2])
  })
  .then(([es, umd]) => {
    writeFileSync('./dist/feather-vue.esm.js', replace(es.code))
    writeFileSync('./dist/feather-vue.umd.js', replace(umd.code))
  })

function replace (code) {
  return code
    .replace(/,\s*staticRenderFns: \[\]/g, '')
    .replace(/name: "/g, 'name: "feather-')
}
