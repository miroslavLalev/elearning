exports.up = function(pgm) {
  pgm.createTable({
    schema: 'elearning',
    name: 'courses'
  }, {
    id: {
      type: 'serial',
      unique: true,
      primaryKey: true
    },
    name: {
      type: 'varchar(32)',
      notNull: true,
      unique: true
    },
    description: {
      type: 'text'
    },
    author: {
      type: 'serial',
      references: 'elearning.users'
    }
  });
};

exports.down = function(pgm) {
  pgm.dropTable({
    schema: 'elearning',
    name: 'courses'
  })
};
