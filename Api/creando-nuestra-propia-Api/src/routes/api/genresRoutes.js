const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresApiController');

router.get('/genres', genresController.list);
router.get('/genres/detail/:id', genresController.detail);
router.get('/genres/api/genresFetch', genresController.fetch);
router.get('/genres/api/genresFetch2', genresController.fetch2);

module.exports = router;