const { Suite } = require('benchmark')

new Suite()
  .add('math.random', require('..').uuid)
  .add('crypto.randomBytes', require('../crypto').uuid)
  .on('cycle', ({ target }) => console.log(String(target)))
  .on('complete', () => console.log())
  .run()
