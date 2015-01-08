(function(){

  /**
    * Babybind API - /src/components/generateId.js
    *
    * Copyright (c) 2015 Babybind, Inc - All Rights Reserved
    *
    * Unauthorized copying of this file, via any medium is strictly prohibited
    * Proprietary and confidential
    *
    * Written by Tian Permana <hello@tianpermana.com>, January 2014
    *
    */

  var uuid = require('node-uuid')

  module.exports = function(){

    // Generate UUID based ID
    return uuid.v1()
  }


})()
