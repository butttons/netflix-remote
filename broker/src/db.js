const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const lodashId = require('lodash-id');

const adapter = new FileSync('db.json');
const db = low(adapter);
db._.mixin(lodashId);

db.defaults({ peers: [] }).write();
const peers = db.get('peers');

module.exports = { db, peers };
