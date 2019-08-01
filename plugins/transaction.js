'use strict';

var Transaction = function() {
	this.model = {};
};

Transaction.prototype.setModel = function(model) {
	this.model = model;
};

Transaction.prototype.execTrans = function(res, func) {
	return this.model.sequelize
		.transaction({
			autocommit: false
		})
		.then(function(t) {
			t.trace_model = res.trace_model;
			return func(t)
				.then(function() {
					t.commit();
				})
				.catch(function(error) {
					console.error('error transaction', error);
					res.send(500, error);
					return t.rollback();
				});
		});
};

module.exports = new Transaction();
