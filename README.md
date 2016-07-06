# git-get-commit-id
## Summary
This module determines the git commit-id for the repo in the current directory.


## Usage


To configure a module:
```
var commit_id
git = require('git-get-commit-id')
git.getGitCommitID(log, (error, id) => {
    if (error) throw(error)
    commit_id = id
    log.info({version: VERSION, 'git-commit-id': id});
})

```
The configuration is loaded the first time *configure-local* is *require*'d.


To get the values of configuration parameters, use get() as in [**nconf**](https://github.com/indexzero/nconf):
```
configure.get()   // returns the entire configuration
configure.get('a:b')  // returns the value or object at that would be accessed by ['a']['b']
```

To reload the configuration:
```
configure.reloadConfig()
```
Subsequent calls to configure.get will return updated values.

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
