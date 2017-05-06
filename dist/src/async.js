/**
 * Created by dhrub on 06-May-17.
 */
'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showGutHubUser(handle) {
	console.log('fetching details for - ' + handle);

	var url = 'https://api.github.com/users/' + handle;

	(0, _nodeFetch2.default)(url).then(function (response) {
		return response.json();
	}).then(function (user) {
		console.log(user.name);
		console.log(user.location);
	});
}

showGutHubUser('dhrubach');
showGutHubUser('DanWahlin');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3luYy5qcyJdLCJuYW1lcyI6WyJzaG93R3V0SHViVXNlciIsImhhbmRsZSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwidXNlciIsIm5hbWUiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOztBQUVBOzs7Ozs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxNQUF4QixFQUFnQztBQUMvQkMsU0FBUUMsR0FBUiw2QkFBc0NGLE1BQXRDOztBQUVBLEtBQU1HLHdDQUFzQ0gsTUFBNUM7O0FBRUEsMEJBQU1HLEdBQU4sRUFDRUMsSUFERixDQUNPO0FBQUEsU0FBWUMsU0FBU0MsSUFBVCxFQUFaO0FBQUEsRUFEUCxFQUVFRixJQUZGLENBRU8sZ0JBQVE7QUFDYkgsVUFBUUMsR0FBUixDQUFZSyxLQUFLQyxJQUFqQjtBQUNBUCxVQUFRQyxHQUFSLENBQVlLLEtBQUtFLFFBQWpCO0FBQ0EsRUFMRjtBQU1BOztBQUVEVixlQUFlLFVBQWY7QUFDQUEsZUFBZSxXQUFmIiwiZmlsZSI6ImFzeW5jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGRocnViIG9uIDA2LU1heS0xNy5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5cbmZ1bmN0aW9uIHNob3dHdXRIdWJVc2VyKGhhbmRsZSkge1xuXHRjb25zb2xlLmxvZyhgZmV0Y2hpbmcgZGV0YWlscyBmb3IgLSAke2hhbmRsZX1gKTtcblxuXHRjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke2hhbmRsZX1gO1xuXG5cdGZldGNoKHVybClcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4odXNlciA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyh1c2VyLm5hbWUpO1xuXHRcdFx0Y29uc29sZS5sb2codXNlci5sb2NhdGlvbik7XG5cdFx0fSk7XG59XG5cbnNob3dHdXRIdWJVc2VyKCdkaHJ1YmFjaCcpO1xuc2hvd0d1dEh1YlVzZXIoJ0RhbldhaGxpbicpO1xuIl19