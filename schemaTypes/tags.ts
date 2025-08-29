import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'object',
      fields: [
        {name: 'fr', title: 'Français', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.fr',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.fr',
      slug: 'slug.current',
    },
  },
})
