"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
function getGitStatus(done) {
    var cmd = 'git status --porcelain';
    child_process.exec(cmd, (error, stdout, stderr) => {
        if (error) {
            error.message = `FAILED ${cmd}\n${error.message}`;
        }
        var is_clean = !((stdout.length > 0) || (stderr.length > 0));
        done(error, { stdout, stderr, is_clean });
    });
}
exports.getGitStatus = getGitStatus;
function getGitCommitID(done) {
    var cmd = 'git rev-parse HEAD';
    child_process.exec(cmd, (error, stdout, stderr) => {
        if (stdout) {
            var id = stdout.toString().trim();
        }
        if (error) {
            error.message = `FAILED ${cmd}\n${error.message}`;
        }
        done(error, { stdout, stderr, id });
    });
}
exports.getGitCommitID = getGitCommitID;
