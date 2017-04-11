/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     feeding              ->  index
 * POST    feeding              ->  create
 * GET     feeding/:id          ->  show
 * PUT     feeding/:id          ->  upsert
 * PATCH   feeding/:id          ->  patch
 * DELETE  feeding/:id          ->  destroy
 */

import Feeding from './feeding.model';
import * as _ from 'lodash';

// if the wonder object was not found
function handleEntityNotFound(res) {
	return function (entity) {
		if (!entity) {
			res.status(404).end();
			return null;
		}
		return entity;
	};
}

// if there was an error of any kind return approapriate status code
function handleError(res, statusCode ? ) {
	statusCode = statusCode || 500;
	return function (err) {
		res.status(statusCode).send(err);
	};
}

function respondWithResult(res, statusCode ? ) {
	statusCode = statusCode || 200;
	return function (entity) {
		if (entity) {
			return res.status(statusCode).json(entity);
		}
		return null;
	};
}

function removeEntity(res) {
	return function (entity) {
		if (entity) {
			entity.remove()
				.then(() => {
					res.status(204).end();
				});
		}
	};
}

// Gets a list of Feedings
export function index(req, res) {
	return Feeding.find().exec()
		.then(respondWithResult(res))
		.catch(handleError(res));
}

// Gets a single Feeding from the DB
export function show(req, res) {
	return Feeding.findById(req.params.id).exec()
		.then(handleEntityNotFound(res))
		.then(respondWithResult(res))
		.catch(handleError(res));
}

// Creates a new Feeding in the DB
export function create(req, res) {
	return Feeding.create(req.body)
		.then(respondWithResult(res, 201))
		.catch(handleError(res));
}

// Upserts the given Feeding in the DB at the specified ID
export function upsert(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	return Feeding.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()
		.then(respondWithResult(res))
		.catch(handleError(res));
}

// // Updates an existing Feeding in the DB
// export function patch(req, res) {
//   if(req.body._id) {
//     delete req.body._id;
//   }
//   return Feeding.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(patchUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// Deletes a Feeding from the DB
export function destroy(req, res) {
	return Feeding.findById(req.params.id).exec()
		.then(handleEntityNotFound(res))
		.then(removeEntity(res))
		.catch(handleError(res));
}