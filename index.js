const mesg = require('mesg-js').service()

mesg.listenTask({
  convert: require('./tasks/convert')
})