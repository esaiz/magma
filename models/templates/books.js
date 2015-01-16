'use strict';

var Pr = require('bluebird'),
	books = require('../../services/books_mock'),
	querystring = require('querystring');

// @param type [search, list]
// search, q is required

module.exports = function(args){
	return new Pr(function(resolve, reject){
		books.search({
			query: {
				q: querystring.escape(args.q)
			}
		}).then(resolve, reject);
	});
};