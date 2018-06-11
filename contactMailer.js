const nodemailer = require('nodemailer');

module.exports.mailToUser = function(value) {
    const html=`<div style="margin-left:25%;margin-top:10%; width: 50%; align :center;">
    <p>
        <h2 style="color: rgb(60, 59, 59); font-family:'Courier';">  Thanks <span style="font-size: 20px"> For FeedBack.</span> </h2>
        
    </p>
    <hr>
    <h3>Hello, ${value.firstName} ${value.lastName}</h3>
    <p>Thank you for your feedback.</p>
    <p>I will contact you soon.</p>
    <b>From Amar Kumar Bathwal</b>
</div>`
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'hackercamp.kavalier@gmail.com', // generated ethereal user
                pass: 'shiv7250' // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Amar Kumar Bathwal" <hackercamp.kavalier@gmail.com>', // sender address
            to: value.email_id,
            subject: 'FeedBack Form', // Subject line
            text: 'FeedBack Form', // plain text body
            html: html // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            //console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}

module.exports.mailToMe = function(value) {
    const html=`<div style="margin-left:25%;margin-top:10%; width: 50%; align :center;">
    <p>
        <h2 style="color: rgb(60, 59, 59); font-family:'Courier';">  Thanks <span style="font-size: 20px"> For FeedBack.</span> </h2>
        
    </p>
    <hr>
    <p>FirstName: ${value.firstName}</p>
    <p>LastName: ${value.lastName}</p>
    <p>Email_id: ${value.email_id}</p>
    <p>Contact No.: ${value.contact}</p>
    <p>Message: ${value.message}</p>
        
</div>`
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'hackercamp.kavalier@gmail.com', // generated ethereal user
                pass: 'shiv7250' // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Amar Kumar Bathwal" <hackercamp.kavalier@gmail.com>', // sender address
            to: 'bathwal.amar1995@gmail.com',
            subject: 'FeedBack Form', // Subject line
            text: 'FeedBack Form', // plain text body
            html: html // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            //console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}