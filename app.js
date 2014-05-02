/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var http = require("http");
var port = 1337;
var request = require("request");
var url = "http://graph.facebook.com/2014NTUIMCAMP/photos?type=uploaded";

http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  
  var data = "<html><head></head><title>2014 IM Camp</title><br><body>";
  
  data += '<center><h1 style="font-family:Impact;color:#660077;margin-bottom:0">2014 IM Camp</h1></center>';

  request.get(url, function (err, body, response) {

    response = JSON.parse(response);
    var count = 0;
    response.data.forEach(function (val, idx) {
      data += "<div id ='"+count+"'><center><img src='"+val.images[2].source+"' ></center></div><br>";
      count++;
    });

    
    data += "</div></body></html>";
    res.end(data);
  });

}).listen(port);

console.log("start server port: " + port);


