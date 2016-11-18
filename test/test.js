'use strict';

var should = require('chai').expect;

var blowsole = require('../index');


describe('#blowsole', function () {
    let bSole;
    beforeEach(function(){

    });

    it('should be able to post log data to logs', function(done){
        bSole.log('babahajaljdalgjdasla', () => {
            console.log('done');
            done();
        });
    });
});