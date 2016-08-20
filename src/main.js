var Vue = require('vue');
var puzzle = require('./components/puzzle.vue');

new Vue({
	el:  '#app',
	components: {
		'puzzle': puzzle
	}
});
