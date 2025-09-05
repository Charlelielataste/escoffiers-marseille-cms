import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'last-actions',
  title: 'Dernières actions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'object',
      fields: [
        {name: 'fr', type: 'string', title: 'Français', validation: (Rule) => Rule.required()},
        {name: 'en', type: 'string', title: 'English', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Texte',
      type: 'object',
      fields: [
        {name: 'fr', type: 'text', title: 'Français', validation: (Rule) => Rule.required()},
        {name: 'en', type: 'text', title: 'English', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
