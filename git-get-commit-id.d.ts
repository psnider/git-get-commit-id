export function getGitStatus(done: (error: Error, result: {is_clean: boolean, stdout: string, stderr: string}) => void): void
export function getGitCommitID(done: (error: Error, result: {id?: string, stdout: string, stderr: string}) => void): void
