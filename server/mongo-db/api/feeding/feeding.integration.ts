import app from '../../../server';
import request = require('supertest');

import Feeding from './feeding.model';

describe('Feeding API:', function () {
	let newFeedings;

	let startTime = new Date();

	let token;

	beforeAll(function (done) {
		request(app)
			.post('/auth/local')
			.send({
				email: 'test@test.com',
				password: 'test'
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
				if (err) {
					done.fail(err);
				} else {
					token = res.body.token;
					done();
				}
			});
	});

	// feedings are cleared from DB
	beforeAll(() => {
		Feeding.remove({});
	});

	describe('POST /api/feedings', () => {
		beforeAll((done) => {
			request(app)
				.post('/api/feedings')
				.set('authorization', 'Bearer ' + token)
				.send({
					goalVolume: 62,
					iron: false,
					thickening: true,
					oral: {
						startTime: startTime
					},
					prune: {
						administered: false
					}
				})
				.expect(201)
				.expect('Content-Type', /json/)
				.end((err, res) => {
					if (err) {
						done.fail(err);
					}
					newFeedings = res.body;
					done();
				});
		});

		it('should POST the new feeding', () => {
			expect(newFeedings.goalVolume).toBe(62);
			expect(newFeedings.oral.startTime).toBe(startTime.toISOString());
		});
	});

	describe('GET /api/feedings', () => {
		let Feedings;

		beforeAll((done) => {
			request(app)
				.get('/api/feedings')
				.set('authorization', 'Bearer ' + token)
				.expect(200)
				.expect('Content-Type', /json/)
				.end((err, res) => {
					if (err) {
						done.fail(err);
					}
					Feedings = res.body;
					done();
				});
		});

		// This response should be an array
		it('should respond with JSON array', function () {
			expect(Feedings).toEqual(jasmine.any(Array));
		});

		it('should GET the all feeding', () => {
			expect(Feedings[0].goalVolume).toBe(62);
			expect(Feedings[0].oral.startTime).toBe(startTime.toISOString());
		});
	});

	describe('GET /api/feedings/:id', () => {
		let Feedings;

		beforeAll((done) => {
			request(app)
				.get('/api/feedings/' + newFeedings._id)
				.set('authorization', 'Bearer ' + token)
				.expect(200)
				.expect('Content-Type', /json/)
				.end((err, res) => {
					if (err) {
						done.fail(err);
					}
					console.log(res.body);
					Feedings = res.body;
					done();
				});
		});

		it('should GET a feeding', () => {
			expect(Feedings.goalVolume).toBe(62);
			expect(Feedings.oral.startTime).toBe(startTime.toISOString());
		});
	});

	describe('PUT /api/feedings/:id', () => {
		let Feedings;
		let endTime = new Date();

		beforeAll((done) => {
			request(app)
				.put('/api/feedings/' + newFeedings._id)
				.set('authorization', 'Bearer ' + token)
				.send({
					goalVolume: 60,
					oral: { endTime: endTime }
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.end((err, res) => {
					if (err) {
						done.fail(err);
					}
					Feedings = res.body;
					done();
				});
		});

		it('should be an feeding', () => {
			expect(Feedings.goalVolume).toBe(60);
			expect(Feedings.oral.endTime).toBe(endTime.toISOString());
		});
	});

	describe('DELETE /api/feedings/:id', () => {
		let Feedings;

		beforeAll((done) => {
			request(app)
				.delete('/api/feedings/' + newFeedings._id)
				.set('authorization', 'Bearer ' + token)
				.expect(204)
				.end((err, res) => {
					if (err) {
						done.fail(err);
					}
					done();
				});
		});

		it('should respond with 404 not found', (done) => {
			request(app)
				.get('/api/feedings/' + newFeedings._id)
				.set('authorization', 'Bearer ' + token)
				.expect(404)
				.end((err, res) => {
					if (err) {
						done.fail(err);
					}
					done();
				});
		});
	});
});
