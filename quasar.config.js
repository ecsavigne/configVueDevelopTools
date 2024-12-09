/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')
const path = require('path')

module.exports = configure(function (ctx) {
  return {
    htmlVariables: {
      title: 'test name',
      some: {
        prop: 'my-prop'
      }
    },

    eslint: {
      fix: true,
      // include = [],
      // exclude = [],
      // rawOptions = {},
      warnings: false,
      errors: true
    },

    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: [
      'i18n',
      'axios',
      'apexcharts'
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: [
      'app.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      'mdi-v5',
      'fontawesome-v6',
      'bootstrap-icons',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
      'material-icons-outlined',
      'material-symbols-outlined'
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      showProgress: true,
      target: {
        browser: ['es2019', 'edge88', 'firefox119', 'chrome87', 'safari13.1'],
        node: 'node16'
      },

      env: {
        REDIRECT_URI: ctx.dev ? 'https://api.contaazul.com/auth/authorize/' : 'https://api.contaazul.com/auth/authorize/',
        PRINCIPAL_API_URL: ctx.dev ? 'https://under3.socialhub.pro/api' : 'https://under3.socialhub.pro/api',
        BASE_URL: ctx.dev ? 'https://under3.socialhub.pro/' : 'https://under3.socialhub.pro/',
        // PRINCIPAL_API_URL: ctx.dev ? 'http://principal.socialhub.local/api' : 'https://under3.socialhub.pro/api',
        // BASE_URL: ctx.dev ? 'http://principal.socialhub.local/' : 'https://under3.socialhub.pro/',

        BLING_API_URL: ctx.dev ? 'https://blingnew.socialhub.pro/api' : 'https://blingnew.socialhub.pro/api',
        TINY_API_URL: ctx.dev ? 'https://tinynew.socialhub.pro/api' : 'https://tinynew.socialhub.pro/api',
        TRACKING_API_URL: ctx.dev ? 'https://trackingv2.socialhub.pro/api' : 'https://trackingv2.socialhub.pro/api',
        TRAY_API_URL: ctx.dev ? 'https://traynew.socialhub.pro/api' : 'https://traynew.socialhub.pro/api',
        SHIPPING_API_URL: ctx.dev ? 'https://shippingnew.socialhub.pro/api' : 'https://shippingnew.socialhub.pro/api',
        API_API_URL: ctx.dev ? 'https://apinew.socialhub.pro/api' : 'https://apinew.socialhub.pro/api',
        CONTAAZUL_API_URL: ctx.dev ? 'https://contaazul.socialhub.pro/api' : 'https://contaazul.socialhub.pro/api',
        SEQUENCES_API_URL: ctx.dev ? 'http://sequencenew.socialhub.pro/api' : 'https://sequencenew.socialhub.pro/api',
        EMAIL_API_URL: ctx.dev ? 'https://email.socialhub.pro/api' : 'https://email.socialhub.pro/api',
        // CRM_API_URL: ctx.dev ? 'http://crm.socialhub.local:84/api' : 'https://crmback.socialhub.pro/api',
        CRM_API_URL: ctx.dev ? 'https://crmback.socialhub.pro/api' : 'https://crmback.socialhub.pro/api',

        // NEW ROUTES API
        SHIPPINGV2_API_URL: ctx.dev ? 'https://under3.socialhub.pro/api/shipping-v2' : 'https://under3.socialhub.pro/api/shipping-v2',
        BLING_API_URL_V2: ctx.dev ? 'https://under3.socialhub.pro/api/bling-v2' : 'https://under3.socialhub.pro/api/bling-v2',
        GURU_API_URL: ctx.dev ? 'https://under3.socialhub.pro/api/guru-v2' : 'https://under3.socialhub.pro/api/guru-v2',
        TRACKING_API_URL_V2: ctx.dev ? 'https://under3.socialhub.pro/api/correios' : 'https://under3.socialhub.pro/api/correios',

        BLING_WEB_URL: ctx.dev ? 'https://blingnew.socialhub.pro/' : 'https://blingnew.socialhub.pro/',
        TINY_WEB_URL: ctx.dev ? 'https://tinynew.socialhub.pro/' : 'https://tinynew.socialhub.pro/',
        TRACKING_WEB_URL: ctx.dev ? 'https://trackingnew.socialhub.pro/' : 'https://trackingnew.socialhub.pro/',
        TRAY_WEB_URL: ctx.dev ? 'https://traynew.socialhub.pro/' : 'https://traynew.socialhub.pro/',
        SHIPPING_WEB_URL: ctx.dev ? 'https://shippingnew.socialhub.pro/' : 'https://shippingnew.socialhub.pro/',
        API_WEB_URL: ctx.dev ? 'http://apinew.socialhub.pro/' : 'https://apinew.socialhub.pro/',
        CONTAAZUL_WEB_URL: ctx.dev ? 'https://contaazul.socialhub.pro/' : 'https://contaazul.socialhub.pro/',
        SEQUENCES_WEB_URL: ctx.dev ? 'https://sequencenew.socialhub.pro/' : 'https://sequencenew.socialhub.pro/',
        EMAIL_WEB_URL: ctx.dev ? 'https://email.socialhub.pro/' : 'https://email.socialhub.pro/',
        CRM_WEB_URL: ctx.dev ? 'https://crm.socialhub.pro/' : 'https://crmback.socialhub.pro/',
        // CRM_WEB_URL: ctx.dev ? 'http://crm.socialhub.local:84/' : 'https://crm.socialhub.pro/',
        SHIPPINGV2_WEB_URL: ctx.dev ? 'https://under3.socialhub.pro/' : 'https://under3.socialhub.pro/',
        BLINGV2_WEB_URL: ctx.dev ? 'https://app.socialhub.pro/' : 'https://app.socialhub.pro/',
        // TRACKING_WEB_URL: ctx.dev ? 'https://under3.socialhub.pro/' : 'https://under3.socialhub.pro/',

        BLING_AUTH_TOKEN_NAME: 'bling_token',
        TINY_AUTH_TOKEN_NAME: 'tiny_token',
        TRACKING_AUTH_TOKEN_NAME: 'tracking_token',
        TRAY_AUTH_TOKEN_NAME: 'tray_token',
        SHIPPING_AUTH_TOKEN_NAME: 'shipping_token',
        API_AUTH_TOKEN_NAME: 'api_token',
        CONTAAZUL_AUTH_TOKEN_NAME: 'contaAzul_token',
        PRINCIPAL_AUTH_TOKEN_NAME: 'principal_token',
        CRM_AUTH_TOKEN_NAME: 'crm_token',

        PUSHER_APP_ID_WPP: '1362840',
        PUSHER_APP_KEY_WPP: 'b0a055711f45489df250',
        PUSHER_APP_SECRET_WPP: 'f37d2c247855e800172a',
        PUSHER_APP_CLUSTER_WPP: 'mt1',

        PUSHER_APP_ID_MCH: '1362840',
        PUSHER_APP_KEY_MCH: 'b0a055711f45489df250',
        PUSHER_APP_SECRET_MCH: 'f37d2c247855e800172a',
        PUSHER_APP_CLUSTER_MCH: 'mt1',

        GURU_DOMAIN: 'https://clkdmg.site/subscribe/',

        APP_VERSION: '1.1.4'
      },

      vueRouterMode: 'hash', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,

      // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup

      // publicPath: '/',
      // analyze: true,
      // env: {},
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir

      // extendViteConf (viteConf) {},
      // viteVuePluginOptions: {},

      vitePlugins: [
        ['@intlify/vite-plugin-vue-i18n', {
          // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
          // compositionOnly: false,

          // you need to set i18n resource including paths !
          include: path.resolve(__dirname, './src/i18n/**')
        }]
      ]
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      // https: true,
      open: false, // opens browser window automatically
      // host: 'app.socialhub.pro',
      port: 9000,

      // proxy: {
      //   // proxy all requests starting with /api to jsonplaceholder
      //   '/web': {
      //     target: 'http://app.socialhub.pro',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/web': 'web'
      //     }
      //   },
      //   '/api': {
      //     target: 'http://app.socialhub.pro',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/api': 'api'
      //     }
      //   }
      // },

      headers: {
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': '*'
      }
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      config: {},

      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-US', // Quasar language pack

      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: 'auto',

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [
        'Notify',
        'Cookies',
        'Meta',
        'LocalStorage',
        'SessionStorage',
        'Loading',
        'Dialog'
      ]
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#sourcefiles
    sourceFiles: {
      indexHtmlTemplate: 'src/index.template.html'
      // rootComponent: 'src/App.vue',
      // router: 'src/router/index',
      // store: 'src/store/index',
      // registerServiceWorker: 'src-pwa/register-service-worker',
      // serviceWorker: 'src-pwa/custom-service-worker',
      // pwaManifestFile: 'src-pwa/manifest.json',
      // electronMain: 'src-electron/electron-main',
      // electronPreload: 'src-electron/electron-preload'
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR

      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},

      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render' // keep this as last one
      ]
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
      // useFilenameHashes: true,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)

      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'dockerized-principal-front'
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      contentScripts: [
        'my-content-script'
      ]

      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    }
  }
})
