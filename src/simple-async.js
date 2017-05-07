/**
 * Created by dhrub on 06-May-17.
 */

'use strict';

import fetch from "node-fetch";

async function showGitHubUserWithAsync(handle) {
	const url = `https://api.github.com/users/${handle}`;

	try {
		/*
		* fetch API returns a Promise object. In case of an exception,
		* Promise will be rejected and handled by catch block
		* */
		const response = await fetch(url);

		/*
		* 'response.json()' returns a Promise as well, and hence can be
		* used in a await statement
		* */
		return await response.json();

	} catch(ex) {
		console.log(`Exception thrown by fetch - ${ex.toSource()}`);
	}
}

/*
* async function returns a Promise object. hence the return
* value can be used in a Promise chain
* */
showGitHubUserWithAsync('dhrubach')
	.then(user => {
		console.log(`Name : ${user.name}`);
		console.log(`Location : ${user.location}`);
	});
