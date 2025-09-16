import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partenaires',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'fr', type: 'text', title: 'Français', validation: (Rule) => Rule.required()},
        {name: 'en', type: 'text', title: 'English', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
