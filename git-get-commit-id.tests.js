"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CHAI = require("chai");
const expect = CHAI.expect;
const git = require("./git-get-commit-id");
describe('git-get-commit-id', function () {
    describe('getGitStatus', function () {
        it('should not return an error', function (done) {
            git.getGitStatus((error, results) => {
                expect(error).to.not.exist;
                done(error);
            });
        });
    });
    describe('getGitCommitID', function () {
        it('should return a SHA1 commit-id for a git repo', function (done) {
            git.getGitCommitID((error, results) => {
                expect(results.id).to.match(/^[\da-fA-F]{40}$/);
                done(error);
            });
        });
    });
});
