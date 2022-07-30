// api not working - probably not on base
import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:5001/clone-53496/us-central1/api' // API (cloud function) URL
    baseURL: 'https://us-central1-clone-53496.cloudfunctions.net/api'
});

export default instance;

//https://us-central1-clone-53496.cloudfunctions.net/api