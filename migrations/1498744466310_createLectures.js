exports.up = function(pgm) {
  pgm.createTable({
    schema: 'elearning',
    name: 'lectures'
  }, {
    id: {
      type: 'serial',
      unique: true,
      primaryKey: true
    },
    name: {
      type: 'varchar(64)'
    },
    description: {
      type: 'varchar(255)'
    },
    type: {
      type: 'varchar(16)'
    },
    content: {
      type: 'text'
    },
    course: {
      type: 'serial',
      references: 'elearning.courses'
    }
  });
};

exports.down = function(pgm) {
  pgm.dropTable({
    schema: 'elearning',
    name: 'lectures'
  })
};
