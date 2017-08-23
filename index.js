
const _ = require('lodash');

class Jc{
	constructor(args) {
		this.id = 1005;
		this._  = _;
		// code
	}

	getArray(ary){
		return _.filter(ary, function(n) {
		  	return n > 1;
		});
	}
}


module.exports = Jc;