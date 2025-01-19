import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'bookingForm',
  title: 'Booking Form',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(50),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(50),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(200),
    }),
    defineField({
      name: 'serviceSelected',
      title: 'Service Selected',
      type: 'string',
      options: {
        list: [
          { title: 'Consultation', value: 'consultation' },
          { title: 'Office Interior Design', value: 'officeInterior' },
          { title: 'Room Makeover', value: 'roomMakeover' },
          { title: 'Studio Design', value: 'studioDesign' },
          { title: 'Salon Design', value: 'salonDesign' },
          { title: 'Custom Design', value: 'customDesign' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'estimatedHours',
      title: 'Estimated Hours',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(200),
    }),
    defineField({
      name: 'dateRange',
      title: 'Date Range',
      type: 'array',
      of: [{ type: 'date' }],
    }),
    defineField({
      name: 'discreet',
      title: 'Discreet',
      type: 'boolean',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(15),
    }),
  ],
})
