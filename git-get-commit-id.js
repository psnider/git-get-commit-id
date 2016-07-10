"use strict";
var child_process = require('child_process');
function getGitStatus(done) {
    var cmd = 'git status --porcelain';
    child_process.exec(cmd, function (error, stdout, stderr) {
        if (error) {
            error.message = "FAILED " + cmd + "\n" + error.message;
        }
        var is_clean = !((stdout.length > 0) || (stderr.length > 0));
        done(error, { stdout: stdout, stderr: stderr, is_clean: is_clean });
    });
}
exports.getGitStatus = getGitStatus;
function getGitCommitID(done) {
    var cmd = 'git rev-parse HEAD';
    child_process.exec(cmd, function (error, stdout, stderr) {
        if (stdout) {
            var id = stdout.toString().trim();
        }
        if (error) {
            error.message = "FAILED " + cmd + "\n" + error.message;
        }
        done(error, { stdout: stdout, stderr: stderr, id: id });
    });
}
exports.getGitCommitID = getGitCommitID;
