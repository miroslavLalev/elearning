exports.up = function(pgm) {
  pgm.createTable({
    schema: 'elearning',
    name: 'users',
  }, {
    id : {
      type: 'serial',
      unique: true,
      primaryKey: true
    },
    email: {
      type: 'varchar(64)'
    },
    firstname: {
      type: 'varchar(32)'
    },
    lastname: {
      type: 'varchar(32)'
    },
    password: {
      type: 'text'
    }
  });
};

exports.down = function(pgm) {
  pgm.dropTable({
    schema: 'elearning',
    name: 'users'
  })
};
