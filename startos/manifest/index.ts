import { setupManifest } from '@start9labs/start-sdk'
import {
  filebrowserDescription,
  long,
  nextexplorerDescription,
  short,
} from './i18n'

export const manifest = setupManifest({
  id: 'metube',
  title: 'MeTube',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/Start9-Community/metube-startos',
  upstreamRepo: 'https://github.com/alexta69/metube',
  marketingUrl: 'https://github.com/alexta69/metube',
  donationUrl: null,
  description: { short, long },
  volumes: ['main', 'downloads'],
  images: {
    metube: {
      source: { dockerTag: 'alexta69/metube:2026.08.28' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    nextexplorer: {
      description: nextexplorerDescription,
      optional: true,
      metadata: {
        title: 'NextExplorer',
        icon: 'https://raw.githubusercontent.com/Start9Labs/nextexplorer-startos/04f7ecbfc31ad2205e0222dd7568fb881aa06c79/icon.svg',
      },
    },
    filebrowser: {
      description: filebrowserDescription,
      optional: true,
      metadata: {
        title: 'FileBrowser Quantum',
        icon: 'https://raw.githubusercontent.com/Start9Labs/filebrowser-quantum-startos/e936a6c85a97b930b43cad5e9c0dd4898a2df567/icon.svg',
      },
    },
  },
})
