(function(){

  var assert = require('assert'),
    mongoose = require('./../adapters/mongoose'),
    Components = require('./../components'),
    Schema = mongoose.Schema

  var userSchema = new Schema({
    id: {
      type: String,
      required: true,
      default: Components.utils.generateId()
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Schema.Types.Mixed,
      default: Components.utils.generateDate()
    }
  })

  userSchema.statics.findById = function( id, options, done ){

    var query = { 'id': id },
      select = '-_id -__v'

    var cursor = this.findOne( query )

    cursor.select( select )

    cursor.exec(function( error, user ){

      assert.ifError( error )

      done( null, user )

    })

  }

  userSchema.pre( 'save', function( next ){

    this.updatedAt = Components.utils.generateDate()

    next()

  })

  var users = mongoose.model( 'user', userSchema )

  module.exports = users

})()
