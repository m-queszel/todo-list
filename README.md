After creating and pulling the repository, make sure to run `npm install` as this will read all dependencies listed in the .json files and install them into a node_modules folder.

Additionally, you can run `npx webpack serve` to run a local development server that updates anytime files in src are saved.

I recommend using a terminal multiplexer (e.g., tmux) to run your local server as it's much easier to have all your code and development server in one place.

## Install Instructions:
1. `git clone https://github.com/m-queszel/web-development-template.git` to clone the repository
2. `mv web-development-template <new-directory-name>` to rename your directory from the default
3. Enter your new directory (e.g., `cd <directory-name>`) and delete the existing .git folder using `rm -rf .git`
4. `npm install` to install dependencies
   
### Optional if You Want to Use Git
---
4. `git init` to initialize a new git repository.
5. `git add .` to stage all files (**Note: this repository already includes ./dist and ./node_modules in the .gitignore**)
6. `git commit -m "initial commit"`
7. You can then set your local repository to point to a remote one (e.g., `git remote add origin <repo>`) and work from there.
