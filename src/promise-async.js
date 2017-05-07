/**
 * Created by dhrub on 07-May-17.
 */

'use strict';

import fetch from "node-fetch";

async function fetchUserProfileAndRepos(endpoint) {
	const url = `https://api.github.com/${endpoint}`;
	const response = await fetch(url);
	return await response.json();
}

async function showUserProfileAndRepos(handle) {
	try {
		const [user, repos] = await Promise.all([
			fetchUserProfileAndRepos(`users/${handle}`),
			fetchUserProfileAndRepos(`users/${handle}/repos`)
		]);

		console.log(`Name : ${user.name}`);
		console.log(`Repos : ${repos.length}`);

	} catch(err) {
		console.error(`Error : ${err.message}`);
	}
}

showUserProfileAndRepos('dhrubach');
showUserProfileAndRepos('abcdefg');
