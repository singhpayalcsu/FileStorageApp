# FileStorageApp

This is a file application. It uses AWS S3 bucket to store files. The following operations are supported by this application:

1. Upload a file
2. Delete a file
3. Download a file


Frontend:- React

Backend: Expressjs, Nodejs, AWS-SDK, S3 Bucket


## Frontend

To create frontend make a directory named client and go to the client folder using the following command

	cd client
	
To add react setup inside client folder use the following command

	npx create-react-app .
	
To create API request we are using Axios. We need to install axios. Run the following command

	npm i axios
	
	
Delete the follwing files from client folder:

1. App.test.js
2. index.css
3. logo.svg
4. reportWebVitals.js
5. setupTest.js

Modify index.js and App.js

	
#### To Run Client Application Go to client folder and run this command

	npm start
	
	

	
## Backend
To create a backend make a directory named server.

Go to server folder.

Run the following commands inside server folder. This will create a node js application.

	npm init
and review and enter.

##### Create a index.js file inside server.

Go to server folder and run the command. This will install express and body parser in server.

	npm install express body-parser
	
Install Nodemon in server

	npm install nodemon
	

##### Configure Nodemon
Go to **package.json** inside server folder. Add the following inside the script

	"start": "node index.js",
    "devStart": "nodemon index.js",
    
	
Install Cors

	npm install cors
	
Install aws-sdk

	npm install aws-sdk
	
Install dotenv

	npm install dotenv
	
Install multer

	npm install --save multer
	
### Create a file .env inside server folder

Add your s3 bucket access information there.

Add your bucket name, bucket region, bucket access key, bucket secret acceess key.

### To run server run this command
	npm run devStart

