const express = require('express');
const maestrosRouter = require('./maestrosRouter');
const usuariosRouter = require('./usuariosRouter');
const PadresRouter = require('./padresRouter');

const router = express.Router();

router.use('/api/v1', maestrosRouter, usuariosRouter, PadresRouter);

module.exports = router;
