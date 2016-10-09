# Git

Git is a distributed version control system. It's useful to:
* Help collaborate with teammates
* Backup your code
* Version your code
* Delete/refactor your code without worrying

Mostly, though, it prevents the need for this:

![Crazy filenames](assets/filenames.png)

However, since it's a clever design of a singly-linked list, it can be notoriously difficult to learn.

![Git XKCD comic](assets/xkcd-git.png) [(source)](https://xkcd.com/1597/)

Some important things to keep in mind:
* A commit is a single, logical change (across as many files as you need). Make lots of small commits with explanatory commit messages — they're really helpful when debugging.
* Git stores the *diff* of your files, so it's really fast
* Every commit is "staged" first: make sure you run a `git status` and a `git diff --staged` to see what's staged for your commit (and make sure it's only the stuff you want).
* Nothing ever leaves git: *never* commit a password/secret key. If you push your repo to a place like GitHub, each one of your commits is public.

GitHub has [a ton of resources](https://help.github.com/articles/good-resources-for-learning-git-and-github/) for practically learning how to use Git. However, [read about the underlying data structure](http://www.jayway.com/2013/03/03/git-is-a-purely-functional-data-structure/) to get a better idea of what's going on.

**Tool:** [SourceTree](https://www.sourcetreeapp.com/): a free GUI for interacting with git that doesn't water anything down.   
**Tool:** [Bitbucket](https://bitbucket.org/), a competitor to GitHub, has unlimited free private repos.  
**Tool:** [GitLab](https://about.gitlab.com/), a competitor to GitHub, has unlimited free private repos and collaborators.  
**Resource:** [Free private repos on GitHub for students &rarr;](https://education.github.com/pack)

