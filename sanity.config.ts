import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Escoffiers-Provence-Méditerranée',

  projectId: 'gjn1r1ck',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // Configuration comme singleton
            S.listItem()
              .title('Configuration')
              .id('settings')
              .child(S.document().schemaType('settings').documentId('settings')),
            // Divider
            S.divider(),
            // Autres types de documents
            ...S.documentTypeListItems().filter(
              (listItem) => !['settings'].includes(listItem.getId() || ''),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
