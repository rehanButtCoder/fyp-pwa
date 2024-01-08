import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
    },
});
// guestAxios used only in login component 
// export const guestAxios = axios.create({
//   baseURL: "https://apis.findsparrow.com/api",
//   headers: {
//     "Cache-Control": "no-cache",
//     Pragma: "no-cache",
//     Expires: "0",
//   },
// });


export default instance;