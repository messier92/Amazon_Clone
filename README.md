1. React Props - product.js

2. React Router - 
a. npm install react-router-dom
** https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
In react-router-dom V6, "Switch" has been replaced by "Routes"

b. In App.js, add the line import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

3. 
a.Create a form that allows new users to register with your app using their email address and a password. When a user completes the form, validate the email address and password provided by the user, then pass them to the createUserWithEmailAndPassword method:
https://firebase.google.com/docs/auth/web/start

b. The createUserWithEmailAndPassword() is a top level function in the new Firebase Modular SDK. Try importing the function as shown below:
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase.js"; // update path 

const register = (e) => {
  e.preventDefault();

  // auth instance as first param
  createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      // it successfully created a new user with email and password
      if (auth) {
        navigate.push('/')
      }
    })
    .catch(error => alert(error.message))
}

https://stackoverflow.com/questions/71958148/firebase-webpack-imported-module-2-auth-createuserwithemailandpassword-is-not

5. In react-router-dom v6 useHistory() is replaced by useNavigate().
https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom

6. To upload to Firebase for auth/db/hosting:
a. Download a compatible version of firebase with node.js (npm install -g firebase-tools@10.9.2)
b. Login to firebase via the terminal via "firebase login"

7. To start functions backend:
a. Open the command line terminal and cd to Amazon_Clone\functions (do this through the Windows terminal, not VS Code) 
b. Start the backend by typing "firebase emulators:start"

8. To transfer node_modules:
npm i package-lock

9. To allow external APIs, need to upgrade from 'Spark' to 'Blaze' plan

10. CORS Access-Control-Allow-Origin error resolved in the server
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

11. To successfully import firebase auth and firebase db:
https://stackoverflow.com/questions/72369451/cannot-read-properties-of-undefined-reading-firestore