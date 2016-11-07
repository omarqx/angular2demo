Demo
Create


1- Npm init
2- npm install typescript --g
3- get the 1-helloworld.ts and rename --basics
4- tsc helloworld.ts
5- get the 2-helloworld.ts and rename --es6 & type check
6- tsc helloworld.ts --watch
7- create tsconfig.json
8- tsc
9- npm install lodash
10-npm install @types/lodash --save-dev

# Getting Started

Super simple Angular 2 app with 1 module and 2 routes 

## Get the Code
```
git clone https://github.com/johnpapa/angular2-tour-of-heroes.git toh
cd toh
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip 

Runs AoT plus gzips and launches the app 

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.


