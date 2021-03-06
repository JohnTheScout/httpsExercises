function getAndPrintHTMLChunks () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (response) => {

    response.setEncoding('utf8');

    response.on("data", (data) => {
      console.log("Chunk:", data, "\n");
    });

    response.on("end", () => {
      console.log("Transmission complete");
    });
  });
}

getAndPrintHTMLChunks();
