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

(RUN COMMANDS IN GIT BASH)
# INTEGRATING GIT INTO THE PROJECT
    - create new Git repository to your project's root folder
    - COMMAND: git init 

# CHOOSING WHAT FILES WE DON'T WANT TO BE TRACKED
    - create a new file called ".gitignore" inside project's root
    - inside the file, add the folder we don't want to be tracking, EXAMPLE: "node_modules/"

# MOVING FILES FROM "UNTRACKED FILES" AREA TO THE "STAGED CHANGES" AREA
    - COMMAND FOR MOVING ONE FILE: git add filename.file_extension
    - for very first commit, you can ad everything in the current directory (which can be seen with command "git status") and all sub directories
    - ^^ COMMAND: git add .

# MAKING A COMMIT
    - commits needs to have a message, which can be done by -m flag followed by the message in quotation marks
    - COMMAND: git commit -m "Message"

# OTHER GIT COMANDS
    - see what files are in .git repository:
        - COMMAND: git status