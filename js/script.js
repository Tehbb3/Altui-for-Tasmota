var light = {};

// default light ip:
light.ip = "192.168.0.116";
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
    console.log("setLed");
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
    
    },1);

}

