"use strict";
var child_process = require('child_process');
function getGitCommitID(done) {
    var fname = 'getGitCommitID';
    var cmd = 'git status --porcelain';
    child_process.exec(cmd, function (error, stdout, stderr) {
        if (error) {
            error.message = "FAILED " + cmd + "\n" + error.message;
        }
        if ((stdout.length > 0) || (stderr.length > 0)) {
            if (!error) {
                error = new Error("git workspace is not clean");
            }
            error['stdout'] = stdout;
            error['stderr'] = stderr;
        }
        if (!error) {
            var cmd = 'git rev-parse HEAD';
            child_process.exec(cmd, function (error, stdout, stderr) {
                if (error) {
                    error.message = "FAILED " + cmd + "\n" + error.message;
                }
                done(error, stdout.toString());
            });
        }
        else {
            done(error);
        }
    });
}
exports.getGitCommitID = getGitCommitID;
