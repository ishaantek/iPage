# iPage

<p align="center">
  <img src="https://i.ibb.co/ncMLK5q/bonjourr.png" width="50%"></img>
</p><br>
The most powerful homepage for Chrome ⚡

[Get it now - it's free!](https://chrome.google.com/webstore/detail/ipage-%C2%B7-minimalist-lightw/fodhpfjpacekldkejdpkghnkbpjidmcb)

iPage is a home page for your Internet browser, inspired by the looks of iOS' Bedtime feature.

Made by [Ishaan Garg](https://twitter.com/allaboutishaan)

<a href="https://www.producthunt.com/posts/ipage?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ipage" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=323194&theme=dark" alt="iPage - Minimalist & Lightweight Startpage | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Table of contents
- [iPage](#ipage)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Translating iPage to other languages](#translating-ipage-to-other-languages)
  - [Self-hosting iPage](#self-hosting-ipage)
  - [Libraries used](#libraries-used)

## Features
💎 Beautiful, minimal design<br>
✨ Highly customizable<br>
🌦️ Weather based on your location<br>
🔗 Quick links to your favorite websites<br>
⚡ Fast & smooth<br>
🌑 Dark mode<br>
...and much more - all for free & no sign in needed!<br>

## Translating iPage to other languages
If you'd like to translate iPage to a new language, here's what you should do:

1. Make sure the language you want to translate Screensy into is supported by the Chrome Store. [Here's a list](https://developer.chrome.com/docs/webstore/i18n/#choosing-locales-to-support) of all the supported locales.
2. Create a new folder under [_locales](https://github.com/allaboutishaan/iPage/tree/master/_locales) with the [locale name for your language](https://developer.chrome.com/docs/webstore/i18n/#choosing-locales-to-support).
3. Make a copy of [this file](https://github.com/allaboutishaan/ipage/blob/master/_locales/en/messages.json) and translate the "message". The "description" shouldn't be translated, it's only there to give you some context where the string will show in the extension.
4. Translate the [Chrome Store description](https://chrome.google.com/webstore/detail/ipage-%C2%B7-minimalist-lightw/fodhpfjpacekldkejdpkghnkbpjidmcb) so it can be published there, you can simply make a comment with it when you make a pull request. 

Before submitting the pull request, it would be helpful if you tried running the extension in the new language, to make sure everything looks right.

## Self-hosting iPage
You can run iPage locally without having to install it from the Chrome Store. Here's how:

1. Download the code. In the web version of GitHub, you can do that by clicking the green "Code" button, and then "Download ZIP".
2. Go to chrome://extensions/ in your browser, and [enable developer mode](https://developer.chrome.com/docs/extensions/mv2/faq/#:~:text=You%20can%20start%20by%20turning,a%20packaged%20extension%2C%20and%20more.).
3. Run the following commands:
-   `npm install`
-   `npm run scss` to watch sass files
-   `npm run chrome` in another terminal to build and watch script changes
-   Or `npm run online` for standalone version. Needs live server for settings to work
4. Drag the folder that contains the code (make sure it's a folder and not a ZIP file, so unzip first), or click on the "Load unpacked" button and locate the folder.
5. That's it, you will now be able to use iPage locally. Make sure you pin it on the toolbar by clicking the "puzzle" icon in the toolbar and pinning iPage.

## Libraries used
-   Styled with [Sass](https://sass-lang.com/guide)
-   Scripts with pure JS
-   Releases bundled with Gulp, [see dependencies](https://github.com/allaboutishaan/iPage/network/dependencies)

#
 Feel free to reach out to me through email at ishaan@allaboutishaan.com or [on Twitter](https://twitter.com/allaboutishaan) if you have any questions or feedback! Hope you find this useful 💙
