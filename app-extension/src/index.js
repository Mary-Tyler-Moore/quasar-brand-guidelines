/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf) {
  // register our boot file
  conf.boot.push('~quasar-app-extension-qverticalexpansionitem/src/boot/register.js')

  // make sure app extension files & ui package gets transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-qverticalexpansionitem[\\/]src/)

  // make sure the stylesheet goes through webpack to avoid SSR issues
  conf.css.push('~quasar-ui-qverticalexpansionitem/src/index.sass')
}

module.exports = function (api) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^1.5.0')
  api.compatibleWith('@quasar/app', '^1.3.0')

  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('QVerticalExpansionItem', '~quasar-ui-qverticalexpansionitem/src/components/QVerticalExpansionItem.json')

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf)
}
