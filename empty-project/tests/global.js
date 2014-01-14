var assert = require('assert');
var utils = require('total.js/utils');

exports.run = function(framework) {

	/*
		ADD TO TEST
	*/

	// @name {String} :: name of test
	// @url {String}
	// @callback {Function} :: function params @error {Error}, @data {String}, @name {String}, @statusCode {Number}, @headers {Object}
	// @method {String} :: optional default GET
	// @data {String} :: optional default empty string
	// @headers {Object} :: optional custom headers

	// framework.assert(name, url, callback, [method], [data], [headers])

	framework.assert('Test URL 1', '/1/', function response (error, data, name, code, headers) {
		assert.ok(code === 200 && data === '1', name);
	});
};