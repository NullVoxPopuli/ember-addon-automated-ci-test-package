This package is a test package for testing changes to [ember-addon-automated-ci](https://github.com/NullVoxPopuli/ember-addon-automated-ci) before actually making changes to the automated ci blueprint files.

This package was set up with the following steps:

1. `ember addon my-addon`
2. `cd my-addon`
3. `git remote add origin ...` from here on out every change will have a commit and push
3. `ember-cli-update init -b ember-addon-automated-ci`
4. rename package to `@nullvoxpopuli/automated-ci-test-addon`
5. run `yarn` and add lockfile
6. `ember install ember-cli-typescript`
7. last publish attempt had a lint failure, so swap out default lint configs for `@nullvoxpopuli/eslint-configs`, which is significantly more robust than the ember-cli addon defaults
8. Disable docs/markdown linting
