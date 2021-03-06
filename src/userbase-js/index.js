import auth from './auth'
import db from './db'

import './style.css'

if (!global._babelPolyfill) {
  require('babel-polyfill')
}

export default {
  init: auth.init,

  signUp: auth.signUp,
  signIn: auth.signIn,
  signOut: auth.signOut,
  forgotPassword: auth.forgotPassword,
  updateUser: auth.updateUser,

  importKey: auth.importKey,

  getLastUsedUsername: auth.getLastUsedUsername,

  openDatabase: db.openDatabase,

  insertItem: db.insertItem,
  updateItem: db.updateItem,
  deleteItem: db.deleteItem,
  transaction: db.transaction
}
