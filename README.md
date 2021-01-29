# HR-Management-System

This app will help HR to securely login to the system and will remain login to access the employee data until logout by themselves. The token generated for login has been stored in the redux store and is used whenever necessary. The user once login/registered cannot see the login and register button until logout button has clicked. This app will also help employees to access their personal details once added by the HR and also they can make leave request.

Features Included:
Implemented the Signup and Login/Logout functionality with a user-auth schema in the database.
Implemented a feature to add employees and their details by HR/Admin.
Implemented a feature to allow employees to apply/mark their leaves.
Data sharing between Frontend and Backend is in JSON format rendered over REST APIs.

For running this application:-

Step1: Download zip

Step2: Open atlas and Login to the account and create a cluster named: HR-Management System. Ensure network access via IP whitelisting before connecting and now connect the application using mongoose link and put it in the config/default.json under mongoURI to establish connection

Step3: In HRMS-app folder: run the following commands sequentially:- npm install npm run server

Output now: Server running on port 5000 and MongoDB connected.....

Step 4: in the frontend folder run, npm install and then npm start or go back to HRMS-app and run npm run client

I'm still working on UI but the backend APIs are completed and working fine with the database.
