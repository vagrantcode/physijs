const three = require("three")

const worker = new Worker(new URL('./worker.js', import.meta.url))

var Physijs = require("./physi")(worker, three)

module.exports = Physijs