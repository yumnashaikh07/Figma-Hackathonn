export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Service Name',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Service Description',
        type: 'text'
      },
      {
        name: 'hourlyRate',
        title: 'Hourly Rate',
        type: 'number'
      },
      {
        name: 'estimatedHours',
        title: 'Estimated Hours',
        type: 'number'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]}
  