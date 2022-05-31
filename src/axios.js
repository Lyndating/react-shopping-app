import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-shopping-react-app-deecf.cloudfunctions.net/api"
    // baseURL: 'http://localhost:5001/shopping-react-app-deecf/us-central1/api' 
    // THE API (cloud function) URL
});

export default instance;