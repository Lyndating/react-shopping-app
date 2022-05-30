import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-shopping-react-app-deecf.cloudfunctions.net/api"
    // baseURL: 'http://localhost:5001/shopping-react-app-deecf/us-central1/api' 
    // THE API (cloud function) URL
});

export default instance;
"https://s7ap1.scene7.com/is/image/bigw/Beauty_CT_make-up_210701?$cms-max-image-threshold$&fmt=webp-alpha&wid=352&fit=hfit%2C1&qlt=88"