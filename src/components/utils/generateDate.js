(function(){

  /**
    * Babybind API - /src/components/generateDate.js
    *
    * Copyright (c) 2015 Babybind, Inc - All Rights Reserved
    *
    * Unauthorized copying of this file, via any medium is strictly prohibited
    * Proprietary and confidential
    *
    * Written by Tian Permana <hello@tianpermana.com>, January 2014
    *
    */

  var moment = require('moment')

  module.exports = function(){

    var now = {
      'timestamp': moment().unix(),
      'iso': moment().toISOString()
    }

    return now
  }


})()
