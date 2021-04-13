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






## Create s3 Bucket

1. Login to your aws account.
2. Go to s3
3. click on create bucket.
![Screen Shot Example](images/s3_1.png)
4. Add a bucket name in Bucket name section.
![Screen Shot Example](images/s3_2.png)

5. Click Create bucket
![Screen Shot Example](images/s3_3.png)
6. Go to the bucket you have created.
7.  Copy your bucket name and add it into .env file in the AWS_BUCKET_NAME section.
![Screen Shot Example](images/s3_4.png)
7. Go to Properties. In Bucket overview section you can see your AWS Region. Copy the AWS Region and add it to.env file in AWS_BUCKET_REGION. 
![Screen Shot Example](images/s3_5.png)
8. Go to services.
![Screen Shot Example](images/s3_6.png)
9. Click On IAM. You can find IAM in Security,Identity&Compliance section.
![Screen Shot Example](images/s3_7.png)
10. Go to Policies.
![Screen Shot Example](images/s3_8.png)
11. Click on Create policy

12. In services Choose s3
![Screen Shot Example](images/s3_9.png)
13. In actions go to Actions=> Access level and check the checkbox of the following

		List => ListBucket        //(check box ListBucket)
	 	Read => GetObject         //(check box GetObject)
		Write => DeleteObject, PutObject	              //(check box DeleteObject and PutObject)
		
![Screen Shot Example](images/s3_9.png)
![Screen Shot Example](images/s3_10.png)
![Screen Shot Example](images/s3_11.png)

14. In Resources section you can see object click on add ARN 
![Screen Shot Example](images/s3_12.png)
15. Add your bucket name in Bucket name section
![Screen Shot Example](images/s3_13.png)
16. In object name section check the checkbox.
![Screen Shot Example](images/s3_13.png)
17. In Resources section in bucket section

18. Click Add ARN

19. Add your bucket name in Bucket name section. Click Add
![Screen Shot Example](images/s3_14.png)
![Screen Shot Example](images/s3_15.png)
20. Click on Next tag
![Screen Shot Example](images/s3_16.png)
21. Click on Next Review
![Screen Shot Example](images/s3_17.png)
22. Add your Policy name in the name section of Review policy
![Screen Shot Example](images/s3_18.png)
![Screen Shot Example](images/s3_19.png)
23. Click on Create policy. You will see your policy has been created.
![Screen Shot Example](images/s3_20.png)
24. Click on Users in the left section.
![Screen Shot Example](images/s3_21.png)
25. Add user
![Screen Shot Example](images/s3_22.png)
26. Add a user name in User name section
![Screen Shot Example](images/s3_23.png)
27. In Access type check Programmatic access
![Screen Shot Example](images/s3_24.png)
28. Click on Next: Permissions

29. In set permission section click on Attach existing policy directly tab
![Screen Shot Example](images/s3_25.png)
30. In filter policy find your policy name
![Screen Shot Example](images/s3_26.png)
31. Select your policy
32. Click on Next Tags

33. Click Next:Review
![Screen Shot Example](images/s3_27.png)
34. Click on Create user
35. You will get your access key id copy that and go to your.env file and paste it into AWS_ACCESS_KEY section
36. In secret access key click show and copy that into .env file in and paste it into AWS_SECRET_KEY section. **Do not share your aws secret access key.**
37. Click close


### Additional Information Related to this Project

This project is made using Visual Studio Code.

First Run the server. Go to the server folder and run this command

	npm run devStart
	
Run the client. Go to the client folder and run this command

		npm start
		
		
## Application Running
![Screen Shot Example](images/App_running.png)