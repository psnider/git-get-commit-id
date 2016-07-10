var git = require('./git-get-commit-id');


git.getGitStatus((error, results) => {
    console.log(`this workspace is ${results.is_clean ? '' : 'not'} clean`)
})


git.getGitCommitID(function (error, results) {
    console.log(`git commit-id=${results.id}`);
});
