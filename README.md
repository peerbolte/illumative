Illumative controller
=====================

A basic nodejs controller for Illumative with web interface.

## Installation

### Hardware

- in OSX navigate to system preferences
- click network
- select the ethernet port that is connected to the blue enttec controller
- select "Manually" from the "Configure IPv4" dropdown
- set IP Address to: `10.0.0.1`
- set Subnet Mask to: `255.0.0.0`

### Software

Clone this repository by:
- pressing the Clone or download button > Download ZIP on this page.
- pull this repository using git in terminal on your local machine: `git clone https://github.com/peerbolte/illumative.git`

Make sure npm / node is installed: https://nodejs.org/en/download/
- use terminal to navigate to the (cloned) illumative folder: `cd illumative`
- run `npm install` to install dependencies 
- run `npm start` or `node index` to run the illumative server
- all lights will flash white twice if all goes well

If the lights do not flash, there is no connection to the illumative system.
The output in your terminal will display multiple IP Addresses. Copy the IP Address that represents the Enttec box and paste it into `illumative.controller.connect('the.ip.address.here')` in `index.js`
Run `npm start` or `node index` to try again. 

##Controlling the lights

After the installation you can start programming directly in node `index.js` or use the webinterface which is running at `http://localhost:3000` by default. 
You can try to controll the lights by visiting these urls:
- `http://localhost:3000/api/setAllWhite` will turn all lights white
- `http://localhost:3000/api/setAllBlack` will turn all lights black
- `http://localhost:3000/api/setlight?light=10&r=255&g=128&b=0&w=0` will turn the 11th light orange

You can also programatically control the lights in javascript in the front-end. The files in `/public` will be served at `http://localhost:3000` by default. 
After loading `illumative.js` in the front-end `var illumative = illumativeController()` can be used to create a front-end illumative controller.
Accepted methods:
- `illumative.setAllWhite()`
- `illumative.setAllBlack()`
- `illumative.setLight(num, r, g, b, w)`

The LEDs can be given a colour by mixing RED, GREEN, BLUE and WHITE (rgbw). Each colourchannel accepts a value between 0 and 255. 

A simple demonstration can be found in `public/index.html` which can be visited at `http://localhost:3000`