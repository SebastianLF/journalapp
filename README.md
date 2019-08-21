## Journal App
#### Cohort 11 Pre-Work

Live demo: https://calm-atoll-66614.herokuapp.com/

Sources: 
- Front: https://github.com/zelol/journalapp
- API: https://github.com/zelol/journalapp-api

Stack: 
- Nodejs
- Expressjs
- React
- React-bootstrap
- Mongodb


## Install:
You should have nodejs and mongodb installed before doing anything.

#### Front:

````
git clone https://github.com/zelol/journalapp`
npm install
````

then create `.env` file at root and put this inside:
````
REACT_APP_API_URL=http://localhost:3001
````

then
````
npm start
````


#### Backend

````
git clone https://github.com/zelol/journalapp-api`
npm install
````
then create `.env` file at root and put this inside:
````
DB_URL=mongodb://localhost:27017/journalapp
SECRET_KEY=PUT_YOUR_SECRET_KEY_HERE
PORT=3001
````

(`SECRET_KEY` is meant for JWT purposes.)

then 
````
npm start
````



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).






