import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/api-Error.js';
import AsyncHandler from '../utils/Async-handler.js'

const requireAuth = AsyncHandler(async (req, res, next) => {


    const accessToken = req.cookie?.accessToken

    if (!accessToken) throw new ApiError(400, "Faild to login: Access token is missing", "Bad Request");

    const decoded = jwt.verify(accessToken);

    if (!decoded) throw new ApiError(401,"Access token is expired","Unauthorized");

        req.userId = decoded
   
});




