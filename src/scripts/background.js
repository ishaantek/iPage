const isOnChrome = navigator.userAgent.includes('Chrome')
const newTab = () => chrome.tabs.create({ url: 'chrome://newtab' })
const goodbye = () => 'https://twitter.com/allaboutishaan' + (isOnChrome ? '?from=Chrome' : '?from=Firefox')

chrome.runtime.setUninstallURL(goodbye())

if (isOnChrome) {
	chrome.action.onClicked.addListener(newTab)
	chrome.runtime.onInstalled.addListener(function (d) {
		if (d && d.reason && d.reason == 'install') newTab()
	})
}
