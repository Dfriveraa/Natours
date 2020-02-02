const ttn = require("ttn");

const appId="piparking";
const accessKey="ttn-account-v2.58_sDnuGDKwAXip17AnCBziZSuwormjqCAutPSexSL8";
// var app=new ttn.ApplicationClient('staging.thethingsnetwork.org',appId,accessKey);


ttn.data(appId,accessKey).
then(function (client) {
    client.on("uplink",function (devID,payload) {
        console.log("mensaje recibido de",devID);
        console.log(payload.payload_fields);
    })

}).catch(function (error) {
    console.error("Error",error);
});
module.exports=ttn;
