import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'escoffiers-provence',
  api: {
    projectId: 'gjn1r1ck',
    dataset: 'production',
  },
  deployment: {
    appId: 'zzp82gk2p9d1pxp2oly2xt67',
    autoUpdates: true,
  },
})
