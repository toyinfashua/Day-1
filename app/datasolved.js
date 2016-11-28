var quest = {
	dataTypes: function(data) {
		if ('') {
			return 0;
		}
		var y = [];
		if ( y[2] !== null ) {
			return y[2];
		} 
		if ( y.length > 3 ) {
			return 'undefined';
		}
		if (y.length === null) {
			return 'no value';
		}
		if (y === true) {
			return true;	
		} 
		if ( y !== true) {
			return false;
		}
		for ( i = int; i >= 0; i) {
			if (i < 100 ) {
				return 'less than 100';
			}
			else if (i > 100) {
				return 'more than 100';
			} else {
				return 'equal to 100';
			}
		}
		if (y = function funct(z) {
          return 'called callback';
        });
	}	
};
module.exports = quest;