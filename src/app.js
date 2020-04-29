"use strict";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const app = express();
const router = express.Router();

const { loadMesh } = require("./mesh");

router.use(compression());
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(awsServerlessExpressMiddleware.eventContext());

router.get("/", (req, res) => {
  loadMesh().then(terrain => {
    const {header} = terrain;
    res.json(header);
  })
});

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)
app.use("/", router);

// Export your express server so you can import it in the lambda function.
module.exports = app;
