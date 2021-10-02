// # DON'T BE A DICK PUBLIC LICENSE

// > Version 1.1, December 2016

// > Copyright (C) [2021] [Tehbb]

// Everyone is permitted to copy and distribute verbatim or modified
// copies of this license document.

// > DON'T BE A DICK PUBLIC LICENSE
// > TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

// 1. Do whatever you like with the original work, just don't be a dick.

//    Being a dick includes - but is not limited to - the following instances:

//  1a. Outright copyright infringement - Don't just copy this and change the name.
//  1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
//  1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

// 2. If you become rich through modifications, related works/services, or supporting the original work,
// share the love. Only a dick would make loads off this work and not buy the original work's
// creator(s) a pint.

// 3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes
// you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.


var light = {};

// default light ip:
light.ip = "192.168.0.117";
light.count = 255;



var ledTemp = "";


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
}


document.getElementById("ip-readout").innerHTML = light.ip;
document.getElementById("ip-input").value = light.ip;

light.toggle = function() {
    console.log("toggle light");
    httpGet(`http://${light.ip}/cm?cmnd=Power%20TOGGLE`);
}

light.setLed = function(led, colour) {
    console.log("setLed");
    httpGet(`http://${light.ip}/cm?cmnd=Led${led}%20%23${colour}%3B`);
}
light.setColor = function(colour) {
    console.log("setLed" + colour);
    httpGet(`http://${light.ip}/cm?cmnd=color1%20%23${colour}%3B`);
}
light.setColorDimmer = function(colour) {
    console.log("setLed");
    httpGet(`http://${light.ip}/cm?cmnd=color2%20%23${colour}%3B`);
}
function updateLightIp() {
  light.ip = document.getElementById("ip-input").value;
  document.getElementById("ip-readout").innerHTML = light.ip;
}

// light.setColorArrayDimmer = function(array) {
//     // console.log("setLed");
//     // httpGet(`http://${light.ip}/cm?cmnd=color2%20%23${colour}%3B`);
//     for (var i = 0; i < fadeAnim.length; i++) {
//         console.log(fadeAnim[i]);
//         // light.setLed(`${i+1}`, `${array[i]}`);
//         ledTemp = (ledTemp + `%20Led${i+1}%20%23${fadeAnim[i]}%3B`)
//         //Do something
//     }
    
// }
// function doIt() {
    
//     httpGet(`http://${light.ip}/cm?cmnd=${ledTemp}`);
// }


var fadeAnim = [];


// for (let ittTemp = 1; ittTemp < (light.count+1); ittTemp++) {
//     console.log(ittTemp);
//     fadeAnim.unshift(`0,0,0`);
// }

function fadeRGB() {

    var r=255,g=0,b=0;
    var fadeAmnt = 1; //changes fade speed but a higher value than 1 breaks i think idk
    setInterval(function(){
      if(r > 0 && b == 0){
        r=r-fadeAmnt;
        g=g+fadeAmnt;
      }
      if(g > 0 && r == 0){
        g=g-fadeAmnt;
        b=b+fadeAmnt;
      }
      if(b > 0 && g == 0){
        r=r+fadeAmnt;
        b=b-fadeAmnt;
      }
    //   console.log(r, g, b);
    
    
      light.setColorDimmer(`${r},${g},${b}`);
    
    
    //   fadeAnim.pop();
    //   fadeAnim.unshift(`${r},${g},${b}`);
    //   console.log(fadeAnim);
    
    },10);

}

