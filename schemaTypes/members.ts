import {defineField, defineType} from 'sanity'

const scarfColors = [
  {title: 'Echarpe bleue', value: '#1e40af'},
  {title: 'Echarpe verte', value: '#15803d'},
  {title: 'Echarpe violette', value: '#8b5cf6'},
  {title: 'Echarpe rouge', value: '#b91c1c'},
]

export default defineType({
  name: 'member',
  title: 'Disciples',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom et Prénom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: "Couleur de l'écharpe",
      type: 'string',
      options: {
        list: scarfColors,
      },
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
      name: 'role',
      title: 'Rôle',
      type: 'object',
      fields: [
        {name: 'fr', type: 'string', title: 'Français', validation: (Rule) => Rule.required()},
        {name: 'en', type: 'string', title: 'English', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'fr', type: 'string', title: 'Français', validation: (Rule) => Rule.required()},
        {name: 'en', type: 'string', title: 'English', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workplace',
      title: 'Restaurant ou Lieu de travail',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'isHonored',
      title: "À l'honneur",
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
