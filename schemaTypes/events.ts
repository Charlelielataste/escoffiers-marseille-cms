import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Événements',
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
        {name: 'fr', type: 'string', title: 'Français'},
        {name: 'en', type: 'string', title: 'English'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'object',
      fields: [
        {name: 'fr', type: 'slug', title: 'Slug FR', options: {source: 'title.fr'}},
        {name: 'en', type: 'slug', title: 'Slug EN', options: {source: 'title.en'}},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'object',
      fields: [
        {name: 'fr', type: 'text', title: 'Français'},
        {name: 'en', type: 'text', title: 'English'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'object',
      fields: [
        {name: 'fr', type: 'array', title: 'Français', of: [{type: 'block'}]},
        {name: 'en', type: 'array', title: 'English', of: [{type: 'block'}]},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lieu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'url',
    }),
  ],
})
