var git = require('git-get-commit-id')
git.getGitCommitID((error, id) => {
    if (error) {
        if (error.stdout) {
            console.log(`stdout=${error.stdout}`)
        }
        if (error.stderr) {
            console.log(`stderr=${error.stderr}`)
        }
        console.log(`git commit-id=${id}`)
    } else {
        console.log(`git commit-id=${id}`)
    }
})
