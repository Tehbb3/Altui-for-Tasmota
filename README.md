## Tehbb's Tasmota Altui Client

Alternative User Interface For Tasmota Lighting
Uses electron

Just something quick i whipped up so i can control my led strip and test out electronjs


###How to compile:

Utility used to build the client:
https://github.com/electron/electron-packager

Sample command to compule yourself
electron-packager TTI BuildDirectory --platform=win32 --arch=x64


##How to run from source:

make sure you have node and npm installed on your system

Install required packages:
```
npm install
```
Run the client: (ass assuming you are in the programs directory)
```
node .
```

##Notes and stuff:

to change the default light ip change the variable in /window/js/light.js
```
light.ip = "192.168.0.117";
```

you can also configure the amount of leds you have if you are using an lde strip in the same file
```
light.count = 255;
```

alot of the code here is kina old and rushed, cos this project was just me learning some of the basic componets of electronjs
It is very unlikely that i will update this as i no longer have lights that use the Tasmota firmware and so i no longer have an yuse for this client
but maybe someone else can take use of this
handy just if you want a quick little widget that you can use to tollge your lights and change the colors

If you do have any isues with getting this firmware working i guess you can DM me on discord at: Tehbb#5193


