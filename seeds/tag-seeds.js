// import tags to modeles
const { Tag } = require('../models');
// tag database 
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);
// it defines the object that is created when a file is imported using require seedTags
module.exports = seedTags;
