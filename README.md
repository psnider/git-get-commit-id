# git-get-commit-id
## Summary
This module determines the git commit-id for the repo in the current directory.


## Usage


To check whether a git workspace is clean:
```
var git = require('./git-get-commit-id');

git.getGitStatus((error, results) => {
    console.log(`this workspace is ${results.is_clean ? '' : 'not'} clean`)
})
```

To get the commit-id:
```
git.getGitCommitID(function (error, results) {
    console.log(`git commit-id=${results.id}`);
});
```

You can check the other parameters for error and other information, if needed.


## Setup for Build
```
npm install
```

## Build
Build the software:  
```
npm run build
```

Remove the generated files:
```
npm run clean
```

## Test
Run the tests:  
```
npm run test
```

## Problems?
Please report them as issues on the GitHub repo.
