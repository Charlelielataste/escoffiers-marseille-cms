import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Configuration',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Configuration du site',
        subtitle: 'Paramètres globaux',
      }
    },
  },
  fields: [
    defineField({
      name: 'featuredArticle',
      title: "Sélectionner l'article à la une",
      type: 'reference',
      to: {type: 'article'},
    }),
    defineField({
      name: 'lastEventVideo',
      title: "Vidéo de l'évènement à la une",
      type: 'object',
      fields: [
        defineField({
          name: 'video',
          title: 'Vidéo',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        }),
        defineField({
          name: 'orientation',
          title: 'Orientation',
          type: 'string',
          options: {
            list: ['portrait', 'landscape'],
          },
        }),
      ],
    }),
  ],
})
