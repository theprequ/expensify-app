GIT
    - https://git-scm.com/
    - version controll system
    - makes easy to track versions, make backups, revert to previous versions

# TERMINOLOGY
    REPOSITORY
        - place where Git stores our code
        - is just a folder that sits inside your project
        - when we create a repository, it is automatically going to pick up all of the files that make up our project

    UNTRACKED FILES
        - files have never been saved nor are they tracked

    UNSTAGED CHANGES
        - these files are being tracked
        - these files have been changed since the last time they were committed (saved by Git)

    STAGED CHANGES
        - files which will be on the next commit
        - these files aren't being tracked by Git

    COMMITS
        - kind of like safe point
        - these files are being tracked by Git
        - each commit has an id

# INTEGRATING GIT INTO THE PROJECT
    - create new Git repository to your project's root folder
    - COMMAND (run in Git bash): git init 