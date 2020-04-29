require("@loaders.gl/polyfills");
const { ImageLoader } = require("@loaders.gl/images");
const { TerrainLoader } = require("@loaders.gl/terrain");
const { load, registerLoaders } = require("@loaders.gl/core");

registerLoaders(ImageLoader);

const TERRAIN_IMAGE = `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png`;
const ELEVATION_DECODER = {
  rScaler: 256,
  gScaler: 1,
  bScaler: 1 / 256,
  offset: -32768
};

function getTerrainUrl(x, y, z) {
  return TERRAIN_IMAGE.replace('{x}', x)
    .replace('{y}', y)
    .replace('{z}', z);
}

function loadMesh() {
  const url = getTerrainUrl(426, 784, 11);
  const options = {
    terrain: {
      bounds: [0, 0, 1, 1],
      meshMaxError: 4,
      elevationDecoder: ELEVATION_DECODER
    }
  };
  console.log('loading mesh')
  return load(url, TerrainLoader, options);
}

exports.loadMesh = loadMesh;
