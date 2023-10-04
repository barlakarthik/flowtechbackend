import jwt from 'jsonwebtoken';
import ENV from '../Config.js'
   const Auth =  async(req, res, next)=>{
    try{
     const token = req.headers.authorization.split(" ")[1];
     const decodeToken = await jwt.verify(token, ENV.JWT_SECRETE);
     req.user = decodeToken;
     res.json(decodeToken);
     next();
    }catch(error){
      return res.status(501).send({error:"Authentication failed"})
    }
}
export default Auth;
export function localVariables(req, res, next){
   req.app.locals={
    OTP:null,
    resetSession:false
   }
   next();
}

