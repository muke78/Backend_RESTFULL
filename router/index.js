const express = require('express');
const maestrosRouter = require('./maestrosRouter');
const usuariosRouter = require('./usuariosRouter');
const padresRouter = require('./padresRouter');

const router = express.Router();

router.use('/api/v1', maestrosRouter, usuariosRouter, padresRouter);

module.exports = router;
