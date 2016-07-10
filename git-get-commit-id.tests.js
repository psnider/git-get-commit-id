"use strict";
var CHAI = require('chai');
var expect = CHAI.expect;
var git = require('./git-get-commit-id');
describe('git-get-commit-id', function () {
    describe('getGitStatus', function () {
        it('should not return an error', function (done) {
            git.getGitStatus(function (error, results) {
                expect(error).to.not.exist;
                done(error);
            });
        });
    });
    describe('getGitCommitID', function () {
        it('should return a SHA1 commit-id for a git repo', function (done) {
            git.getGitCommitID(function (error, results) {
                expect(results.id).to.match(/^[\da-fA-F]{40}$/);
                done(error);
            });
        });
    });
});
