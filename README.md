# js-band-hw-task-4
Ciklum University: JS Band Internship. Homework task 4

#### Run development server:

* npm run start
* Open http://localhost:8080/ in your browser
#### Run prod server:

* npm run build

#### Create a commit
1) git add .
2) git cz

#### Run eslint:
* npm run eslint

#### Run test:
* npm run test


### A directory layout

    ├── build                   # Compiled files (this folder will be created after run prod server)
    ├── src                     # Source files
    │   ├── helpers             # example test in dir 'math'
    │   ├── index.html          # the head html file
    │   ├── index.js            # the head js file
    │   └── index.scss          # the head styles file
    ├── webpack                 # webpack loaders
    ├── .babelrc.js             # config for babel
    ├── .eslintrc.js            # described all linting rules
    ├── .gitignore              # is a text file that tells Git which files or folders to ignore in a project
    ├── .huskyrc.js             # config for husky
    ├── jest.config.js          # jest config
    ├── jest-transformer.js     # for work jest with babel
    ├── package.json            
    ├── webpack.config.js       # webpack config
    └── README.md