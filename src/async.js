/**
 * Created by dhrub on 06-May-17.
 */
'use strict';

import fetch from 'node-fetch';

function showGutHubUser(handle) {
	console.log(`fetching details for - ${handle}`);

	const url = `https://api.github.com/users/${handle}`;

	fetch(url)
		.then(response => response.json())
		.then(user => {
			console.log(user.name);
			console.log(user.location);
		});
}

showGutHubUser('dhrubach');
showGutHubUser('DanWahlin');
