import proxyquire = require('proxyquire');
let pq = proxyquire.noPreserveCache();
import sinon = require('sinon');

// feedingCtrlStub is used to mimic the router
let feedingCtrlStub = {
	index: 'feedingCtrl.index',
	show: 'feedingCtrl.show',
	create: 'feedingCtrl.create',
	upsert: 'feedingCtrl.upsert',
	// patch: 'feedingCtrl.patch',
	destroy: 'feedingCtrl.destroy',
};

// mimic the auth service
let authServiceStub = {
	isAuthenticated() {
		return 'authService.isAuthenticated';
	},
	hasRole(role) {
		return 'authService.hasRole.' + role;
	}
};

// routerStub spys on http RESTFUL requests
let routerStub = {
	get: sinon.spy(),
	put: sinon.spy(),
	post: sinon.spy(),
	patch: sinon.spy(),
	delete: sinon.spy()
};

// require the index with our stubbed out modules
// proxyquire simulates the request
// initialize proxyquire
let feedingIndex = pq('./feeding.router.js', {
	'express': {
		Router() {
			return routerStub;
		}
	},
	'./feeding.controller': feedingCtrlStub,
	'../../auth/auth.service': authServiceStub
});

describe('Feeding API Router:', function () {

	// expects the prozyquire routes to equal the routes it was assigned to
	it('should return an express router instance', function () {
		expect(feedingIndex.feedingRoutes).toEqual(routerStub);
	});

	describe('POST /api/feedings', function () {

		// expect with each request the approapriate endpoint was called
		it('should route to feeding.controller.create', function () {
			expect(routerStub.post.withArgs('/', 'authService.isAuthenticated', 'feedingCtrl.create').calledOnce)
				.toBe(true);
		});

	});

	describe('GET /api/feedings', function () {

		// expect with each request the approapriate endpoint was called
		it('should route to feeding.controller.index', function () {
			expect(routerStub.get.withArgs('/', 'authService.isAuthenticated', 'feedingCtrl.index').calledOnce)
				.toBe(true);
		});

	});

	describe('DELETE /api/feedings/:id', function () {

		it('should route to feeding.controller.destroy', function () {
			expect(routerStub.delete.withArgs('/:id', 'authService.isAuthenticated', 'feedingCtrl.destroy').calledOnce)
				.toBe(true);
		});

	});

	describe('GET /api/feedings/:id', function () {

		it('should route to feeding.controller.show', function () {
			expect(routerStub.get.withArgs('/:id', 'authService.isAuthenticated', 'feedingCtrl.show').calledOnce)
				.toBe(true);
		});

	});

	describe('PUT /api/feedings/:id', function () {

		it('should route to feeding.controller.upsert', function () {
			expect(routerStub.put.withArgs('/:id', 'authService.isAuthenticated', 'feedingCtrl.upsert').calledOnce)
				.toBe(true);
		});

	});

	// describe('PATCH /api/feedings/:id', function() {

	//   it('should route to feeding.controller.patch', function() {
	//     expect(routerStub.patch.withArgs('/:id','feedingCtrl.patch').calledOnce)
	//       .toBe(true);
	//   });

	// });

});