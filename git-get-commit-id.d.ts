interface Error {
    stdout?: string
    stderr?: string
}
export function getGitCommitID(done: (error: Error, id?: string) => void): void
