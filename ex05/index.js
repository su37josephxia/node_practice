const { EventEmitter } = require("events");
module.exports = class Connection {
  constructor() {
		this.handles = []
  }
  onConn(fn) {
		this.handles.push(fn)
  }
  connection(msg) {
		this.handles.forEach(fn=>fn(msg))
  }
};
