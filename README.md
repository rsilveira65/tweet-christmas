[![Build Status](https://travis-ci.com/rsilveira65/tweet-christmas.svg?branch=master)](https://travis-ci.com/rsilveira65/tweet-christmas)
[![CircleCI](https://circleci.com/gh/rsilveira65/tweet-christmas/tree/master.svg?style=svg)](https://circleci.com/gh/rsilveira65/tweet-christmas/tree/master)
[![BCH compliance](https://bettercodehub.com/edge/badge/rsilveira65/tweet-christmas?branch=master)](https://bettercodehub.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/rsilveira65/tweet-christmas/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rsilveira65/tweet-christmas?targetFile=package.json)
# How to blink your Christmas tree based on twitter sentiment analysis.

## Project Setup
```bash
$ npm install
```

Create the environment file.
```bash
$ cp .env.dist .env
```
```
cat .env

CONSUMER_KEY = YourConsumerKey
CONSUMER_SECRET = YourConsumerSecret
ACCESS_TOKEN_KEY = YourAccessTokenKey
ACCESS_TOKEN_SECRET = YourAccessTokenSecret

TRACKING_WORD = natal
SLEEP_TIME = 2
LANGUAGE = br

RED_PIN = 3
GREEN_PIN = 4
```

## RUN
Example:

```bash
$ node index.js --word christmas --language en --sleep 5
```
It will open and twitter stream and retrieves all "Christmas" mentions.
In addition, it will perform a sentiment analyze (en).

## Unit Tests
Get unit test summary on executing

```sh
make tests
```

## Raspberry Config

Use the interactive menu to enable the SPI Interface. See more:  [here](https://www.raspberrypi-spy.co.uk/2014/08/enabling-the-spi-interface-on-the-raspberry-pi/)

Reboot your PI using:
```
$ sudo reboot
```
When you login again check to see that the SPI Interface is enabled
```
$ sudo nano /boot/config.txt
```
Try to find a line that says:
```
dtparam=spi=on
```
If you see the above line then SPI is enabled

Save & Reboot your PI using:
```
$ sudo reboot
```
When you login again check to see that the spi_bcm2835 module is loaded
```
$ lsmod | grep spi
```
Install python2.7-dev:
```
$ sudo apt-get install python2.7-dev
```
Download and Install SPI-Py executing the following commands:
```
$ git clone https://github.com/lthiery/SPI-Py.git
```
```
$ cd SPI-Py
```
```
$ sudo python setup.py install
```


![alt tag](http://osoyoo.com/wp-content/uploads/2017/06/raspberry-pi-zero.jpg)