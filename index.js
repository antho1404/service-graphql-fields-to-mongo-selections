const liteflow = new (require('@liteflow/service'))()

liteflow.listenTask({
  convert: require('./tasks/convert')
})