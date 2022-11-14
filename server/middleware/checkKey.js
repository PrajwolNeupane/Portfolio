import * as dotenv from 'dotenv';
dotenv.config();

const checkKey = (req, res, next) => {
    const api_key = req.query.api_key;
    if (api_key) {
        if (api_key === process.env.API_KEY) {
            next();
        }else{
            return res.send({ message: "Invalid Api Key"}); 
        }
    } else {
        return res.send({ message: "Api Key not Provided" });
    }
}
export default checkKey;