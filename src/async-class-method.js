/**
 * Created by dhrub on 07-May-17.
 */

import fetch from "node-fetch";

/*
 * any function can be converted into an async function.
 * below is an IIFE converted into a async function where we
 * await response from another async class function
 * */

class GitHubUserClient {
	static async fetchUser(handle) {
		const url = `https://api.github.com/users/${handle}`;
		const response = await fetch(url);
		return await response.json();
	}
}

(async () => {
	const user = await GitHubUserClient.fetchUser('dhrubach');
	console.log(`Name : ${user.name}`);
	console.log(`Location : ${user.location}`);
})();
