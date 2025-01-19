import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'herosection',
  title: 'Herosection',
  type: 'document',
  fields: [
    defineField({
        
      name: "heroImage",
      title: "HeroImage",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true, 
      },
    },)
  ]})