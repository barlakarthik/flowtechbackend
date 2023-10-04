import { Router } from 'express';
import * as Usercontroller from '../controllers/appController.js';
import * as Enquirycontroller from '../controllers/enquiryController.js';
import * as ProductsController from '../controllers/products.controller.js';
import Auth, { localVariables } from '../middleware/Auth.js';
import { registerMail } from '../controllers/mailer.js';
const router = Router();
///
//user CRUD
//post method:
router.route('/register').post(Usercontroller.register);
router.route('/registerMail').post(registerMail);
router.route('/authenticate').post(Usercontroller.verifyEmail, (req, res) => res.end());
router.route('/login').post(Usercontroller.verifyEmail, Usercontroller.login);
//get method:
router.route('/email/:email').get(Usercontroller.getUser);
router.route('/getusers').get(Usercontroller.getAllUsers)
router.route('/generateOTP').get(Usercontroller.verifyEmail, localVariables, Usercontroller.generateOTP);
router.route('/verifyOTP').get(Usercontroller.verifyEmail, Usercontroller.verifyOTP);
router.route('/resetSession').get(Usercontroller.resetSession);
//put method:
router.route('/updateuser').put(Auth, Usercontroller.updateUser);
router.route('/resetpassword').put(Usercontroller.verifyEmail, Usercontroller.resetpassword);
//delete method:
router.route('/deleteuser/:id').delete(Usercontroller.deleteUser);
//enquiry CRUD
//post method
router.route('/enquiry').post(Enquirycontroller.createEnquiry);
//get method
router.route('/enquiries').get(Enquirycontroller.getEnquiries)
//getById method
router.route('/enquiry/:id').get(Enquirycontroller.getEnquiry)
//put method
router.route('/enquiry/:id').put(Enquirycontroller.UpdateEnquiry);
//delete method
router.route('/enquiry/:id').delete(Enquirycontroller.DelEnquiry);
//products CRUD
//get method
router.route('/products').get(ProductsController.getProducts)
export default router;