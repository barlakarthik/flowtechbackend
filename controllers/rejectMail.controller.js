import nodemailer from 'nodemailer';

const createRejectionMail = async (req, res) => {
    const parsingEmail =req.body.body;
    console.log(parsingEmail,"ssssr")
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_2,
                pass: process.env.PASSWORD_2
            }          
        });

        const mailOptions = {
            from: process.env.EMAIL_2,
            to: parsingEmail,
            subject: "Your order has been rejected",
            html: "<h3>We are sorry, but your order has been rejected.</h3>"
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error", error);
                res.status(500).json({ status: 500, error: "Internal server error" });
            } else {
                console.log("Email sent: " + info.response);
                res.status(201).json({ status: 201, info });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error", message: error.message });
    }
};

export {
    createRejectionMail 
};
