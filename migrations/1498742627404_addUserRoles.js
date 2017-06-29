exports.up = function(pgm) {
  pgm.addColumns({
    schema: 'elearning',
    name: 'users',
  }, {
    role : {
      type: 'varchar(16)'
    }
  })
};

exports.down = function(pgm) {
  pgm.dropColumns({
    schema: 'elearning',
    name: 'users',
  }, [ 'role' ]);
};
