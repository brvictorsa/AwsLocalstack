const fs = require('fs');
const path = require('path');
const uploadFile = require('./aws');
const aws = require('./aws');

const testUpload = () => {
  const filePath = path.resolve(__dirname, 'test-upload.jpg');
  const fileStream = fs.createReadStream(filePath);
  const now = new Date();
  const filename = `test-image-${now.toISOString()}.jpg`;
  uploadFile(fileStream, filename).then((response) => {
    console.log(":)");
    console.log(response);
  }).catch((err) => {
    console.log(":|");
    console.log(err);
  });
};

testUpload();