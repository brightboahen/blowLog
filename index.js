/**
 * Created by Bright-BlowLTD on 17/11/2016.
 */

'use strict';

const firebase = require("firebase");
/**
 * Logs to a firebase db endpoint
 * @param { object } config option {apikey, authDomain, databaseURL, storageBucket }
 * @param { object } signInCred - email and password to Firebase
 * @param { string } dbRef - reference endpoint
 * */

let blowsole = function (config,dbRef) {
    this.fb = firebase;
    this.fb.initializeApp(config);
    this.dbRef = dbRef;
};

blowsole.prototype.log = function(logs, callBack){
    this.fb.database().ref(this.dbRef).push(logs, function(rs){callBack(rs)});
};

module.exports = blowsole;

