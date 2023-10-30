const schema = {
  type: 'object',
  properties: {
    DB: { type: 'string' },
    user_name: { type: 'string' },
    Phone_number: { type: 'integer' },
    Location: { type: 'string' }
  },
  required: ['user_name', 'Phone_number', 'Location']
};

export default schema;

