const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



require('dotenv').config()
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

//AWS.config.update({region: region });
// Create S3 service object
s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey
});


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



function uploadFile(file){
  const fileStream = fs.createReadStream(file.path)
  console.log('#######################')
  console.log(file.originalname)
  const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.originalname
  }
  return s3.upload(uploadParams).promise()
}


app.post('/api/insert/',upload.single('actualFile'), async(req,res) => {
  const file = req.file
  console.log(file)
  const image = req.body.image
  const result = await uploadFile(file)
  
});

app.get('/api/get', (req,res)=>{
    var bucketParams = {
      Bucket : bucketName,
    };

    s3.listObjects(bucketParams, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
        res.send(data)
      }
    });   
});

app.get("/api/download/:Key", (req,res)=>{
  const name = req.params.Key;
  var downnloadBucketParams = {
  
    Bucket : bucketName,
    Key: name
  };
var url = s3.getSignedUrl('getObject', downnloadBucketParams);
res.send(url) 
});

app.get("/api/delete/:Key", (req,res)=>{
  const name = req.params.Key;
  var bucketParams = {
    Bucket : bucketName,
    Key: name
  };
  // Call S3 to obtain a list of the objects in the bucket
  s3.deleteObject(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
      res.send(err)
    } else {
     console.log("Success", data);
     res.send(data)
    }
  });
});

app.get("/api/view/:Key", (req,res)=>{
  const name = req.params.Key;
  var bucketParams = {
    Bucket : bucketName,
    Key: name
  };
  // Call S3 to obtain a list of the objects in the bucket
  s3.getObject(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
      res.send(err)
    } else {
     console.log("Success", data);
     res.send(data)
    }
  });
});



app.listen(3001,()=>{
    console.log("running on port 3001")
});