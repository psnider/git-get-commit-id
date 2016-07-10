import child_process            = require('child_process');
import git                      = require('./git-get-commit-id.d');



export function getGitStatus(done: (error: Error, result: {is_clean: boolean, stdout: string, stderr: string}) => void): void {
    var cmd = 'git status --porcelain'
    child_process.exec(cmd, (error, stdout, stderr) => {
        if (error) {
            error.message = `FAILED ${cmd}\n${error.message}`
        }
        var is_clean = !((stdout.length > 0) || (stderr.length > 0))
        done(error, {stdout, stderr, is_clean})
    })
}


export function getGitCommitID(done: (error: Error, result: {id?: string, stdout: string, stderr: string}) => void): void {
    var cmd = 'git rev-parse HEAD'
    child_process.exec(cmd, (error, stdout, stderr) => {
        if (stdout) {
            var id = stdout.toString().trim()
        }
        if (error) {
            error.message = `FAILED ${cmd}\n${error.message}`
        }
        done(error, {stdout, stderr, id})
    })
}
