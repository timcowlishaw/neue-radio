# Pi Zero instructions for Radiodan Neue

Andrew's instructions are here and mostly hold - I've made some tweaks.

## Hardware

* pi zero
* 8GB SD card 
* data USB micro cable (watch out for power only ones!)
* soldered phat dac
* 3.5m jack headphones

## Image an SD card

    diskutil list
    diskutil unmountDisk /dev/diskN
    sudo dd bs=1m if=~/Downloads/2016-09-23-raspbian-jessie.img of=/dev/rdiskN

## change to make zero an appliance 

See http://blog.gbaman.info/?p=791 (do this while the card is still in your main machine).

## basic card stuff

On your laptop, share your wifi over ethernet and "RNDIS / Ethernet Gadget"
Put the card in the pi and connect to you laptop using the cable. 
ssh into the pi
    
    ssh pi@raspberry.local

then

    sudo raspi-config
    expand file system

## Install Radiodan Neue 

(original is at https://github.com/andrewn/neue-radio)

Prerequisites:

    sudo apt-get update
    sudo apt-get install rpi-chromium-mods xvfb

Radiodan:

    sudo mkdir /opt/radiodan
    cd /opt/radiodan
    sudo chown -R pi:pi .
    git clone https://github.com/libbymiller/neue-radio rde
    cd rde/manager

## install node 4  

use https://blog.wia.io/installing-node-js-v4-0-0-on-a-raspberry-pi

then

    npm install --production
    cd ..

    sudo cp systemd/* /etc/systemd/system/
    sudo systemctl daemon-reload
    sudo systemctl start manager

install phatdac

    curl -sS get.pimoroni.com/phatdac | bash

reboot

## plug in speaker / headphones and test

go to http://raspberrypi.local:5000/radio/ and choose a file to play

