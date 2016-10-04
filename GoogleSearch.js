/*
* Carry out a Google Search
*/

"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

function logTitle() {
	browser.getTitle().then(function(title) {
		console.log('Current Page Title: ' + title);
	});
}

function clickLink(link) {
	link.click();
}

function handleFailure(err) {
	console.error('Something went wrong\n', err.stack, '\n');
	closeBrowser();
}

function findTutsPlusLink() {
	return browser.findElements(webdriver.By.css('[href="http://nba.com"]')).then(function(result) {
		return result[0];
	});
}

function closeBrowser() {
	browser.quit();
}

browser.get('http://en.wikipedia.org/wiki/Wiki');
browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Found', links.length, 'Wiki links.' )
    browser.quit();
});
// browser.findElement(webdriver.By.name('q')).sendKeys('tuts+ code');
// browser.findElement(webdriver.By.name('btnG')).click();
// browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
