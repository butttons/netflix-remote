# Netflix remote
Use your phone as a remote for controlling Netflix on your Desktop.

## Usage:
- Install the extension [Netflix Remote](https://chrome.google.com/webstore/detail/netflix-remote/limeoeacpekfcanimjnnbgolggamkogd/related). Source in `ext` folder.
- Open Netflix on your Desktop and press the Netflix Remote button near the address bar to reveal the code like: 
 ![QR code](https://i.imgur.com/dvlQY1H.png "QR code")
- Open https://butttons.github.io/netflix-remote/ or https://bit.ly/nflx-rm to open the interface. Scan the QR code or copy paste the given ID.
- Press connect to start controlling Netflix!
 ![Scan code](https://i.imgur.com/0tJCvkn.png "Scan code")
 ![Remote](https://i.imgur.com/L4h1h5Y.png "Remote")

## Why?
There are often times I want to watch a movie from my bed, on my PC. 

## How it works:
- A broker server is used to establish WebRTC connections between the interface and the Netflix window. 
- The server only stores the initial WebRTC signalling data for the netflix window. All subsequent communication is done with a WebRTC connection.

## Caveats:
- The connection will be broken if either of the pages, the netflix window or the interface are reloaded. You would need to establish a new connection.
- There may be debug messages in the extension, in the console, ignore them. I've removed those in the 1.1 version now.

## Development:
- Chrome extension: `ext` folder
    - Go to to chrome://extensions/
    - Click on `Load unpacked` and select the `ext` folder.
- Interface: `ui` folder
    - Install dependencies by `npm install`
    - Run development server by `npm run dev`
    - Create build bundle by `npm run build`
- Broker server: `broker` folder
    - Install dependencies by `npm install`
    - Run in development mode by `npm run dev`
    - Start by `npm start`