[![Build Status](https://travis-ci.com/rsilveira65/tweet-christmas.svg?branch=master)](https://travis-ci.com/rsilveira65/tweet-christmas)
[![CircleCI](https://circleci.com/gh/rsilveira65/tweet-christmas/tree/master.svg?style=svg)](https://circleci.com/gh/rsilveira65/tweet-christmas/tree/master)
[![BCH compliance](https://bettercodehub.com/edge/badge/rsilveira65/tweet-christmas?branch=master)](https://bettercodehub.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/rsilveira65/tweet-christmas/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rsilveira65/tweet-christmas?targetFile=package.json)
# How to blink your Christmas tree based on twitter sentiment analysis.

## Project Setup
```bash
$ npm install
```

```bash
$ cp .dist.env .env
```

## RUN
Example:

```bash
$ node index.js --word natal --language br --sleep 5
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