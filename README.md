# lambda-quantized-mesh

Serverless Quantized Mesh generation from AWS Terrain Tiles

## Deploy

This is WIP, but when finished, to deploy:

```
git clone https://github.com/kylebarron/serverless-mesh
cd serverless-mesh
yarn
sls deploy
```

Note that when running `yarn`, it installs `node_modules` into
`src/node_modules`. This is so that the lambda package is set up correctly while
keeping code files in the `src/` directory.

If you use NPM, you may need to move `node_modules` into `src/` manually.
