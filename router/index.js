const express = require('express');
const maestrosRouter = require('./maestrosRouter');
const usuariosRouter = require('./usuariosRouter');

const router = express.Router();

router.use('/api/v1', maestrosRouter, usuariosRouter);

module.exports = router;
