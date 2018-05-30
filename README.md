# Inboxinator

An unofficial desktop client app for Google Inbox, created with [Electron](https://github.com/electron/electron).

Just displays the Google Inbox Page in a [&lt;webview&gt;](https://electronjs.org/docs/api/webview-tag) and
opens external links in the default browser.

## Prebuild binaries

I created some binaries, if you just want to use it.

- [Download Inboxinator for macOS](https://shaack.com/projekte/Inboxinator/downloads/Inboxinator-1.2.0-mac.zip)
- [Download Inboxinator for Windows](https://shaack.com/projekte/Inboxinator/downloads/Inboxinator-1.2.0-win.zip)

## What does it look like?

It looks like the Inbox webpage in a minimal window

![Inboxinator](https://shaack.com/projekte/Inboxinator/downloads/Inboxinator_Screenshot_Inbox.png "Inboxinator")

## Development

### Install dev environment (node packages)

`npm install`

### Run

`npm run start`

### Build binaries (on a mac)

- for mac: `npm run build-mac`
- for windows: `npm run build-win` (needs wine on a mac)
