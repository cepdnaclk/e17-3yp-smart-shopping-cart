const nodemailer = require('nodemailer');  //TO SEND MAIL

const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;




const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground");

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendMail(email, emailtoken) {
    try {
        const accessToken = await oauth2Client.getAccessToken()
        const url = `http://192.168.43.68:3000/user/verification/${emailtoken}`;
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: " OAuth2",
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Confirmation Email',
            html: `Hello, <br> Please Click on the link to verify yor email.<br>
    <a href="${url}">Click here to verify</a><body>`,


        };

        const result = await transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        return error;
    }
}

module.exports.sendMail = sendMail;


/*
const sendMail = async(email, emailToken)=>{

   const transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth:{
           user : process.env.GMAIL_USER,
           pass : process.env.GMAIL_PASS
       },
   });

    const url=`http://192.168.109.32:3000/user/verification/${emailToken}`;

   var mailOptions={
   from:process.env.GMAIL_USER,
   to:email,
   subject: 'Confirmation Email',
   html:`Hello, <br> Please Click on the link to verify yor email.<br>
       <a href="${url}">Click here to verify</a><body>`
};
transporter.sendMail(mailOptions, function(error, response){
   if (error) {
       console.log(error);
   } else {
       console.log('message sent to', email)
   }
});

}
*/
