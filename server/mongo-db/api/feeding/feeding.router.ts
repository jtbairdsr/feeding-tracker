/**
 * GET     /api/feeding            ->  index
 * GET     /api/feeding/:id        ->  show
 * POST    /api/feeding            ->  create
 * PUT     /api/feeding/:id        ->  update
 * PATCH   /api/feeding/:id		->  upsert
 * DELETE  /api/feeding/:id        ->  destroy
 */

let express = require('express');
import * as controller from './feeding.controller';
import * as auth from '../../auth/auth.service';

let router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);
// router.patch('/:id',  controller.patch);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

export { router as feedingRoutes };