import nodemailer from 'nodemailer';
const createMail = async (req, res) => {
    const parsingemail = JSON.parse(req.body.body);
    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        })
        const mailOption ={
            from:process.env.EMAIL,
            to:parsingemail.testEmail,
            subject:"dear customer your products on deliver",
            html:"<h3>thanks for shopping</h3>"
        }
        transporter.sendMail(mailOption, (error, info)=>{
            if(error){
                console.log("Error", error);
            }else{
                console.log("email sent" + info.response);
                res.status(201).json({status:201, info})
            }
        })
    } catch (error) {
        return res.status(500).json({ error: "Internal server error", message: error.message });
    }
}
export{
    createMail
}