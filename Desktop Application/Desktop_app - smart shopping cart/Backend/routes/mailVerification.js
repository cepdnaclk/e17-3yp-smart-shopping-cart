const nodemailer = require( 'nodemailer');  //TO SEND MAIL

const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;




const oauth2Client =  new google.auth.OAuth2(
    process.env.CLIENT_ID, 
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground" );

oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

async function sendMailToUser(email, emailtoken){
    try {
        const accessToken = await oauth2Client.getAccessToken()
        const url=`http://192.168.43.68:5000/user/verification/${emailtoken}`;
        const transport = nodemailer.createTransport({
            service:"gmail",
            auth : {
                type :" OAuth2",
                user : process.env.GMAIL_USER,
                pass : process.env.GMAIL_PASS,
                clientId : process.env.CLIENT_ID,
                clientSecret : process.env.CLIENT_SECRET,
                refreshToken : process.env.REFRESH_TOKEN,
                accessToken : accessToken
        }
    })
        const mailOptions = {
            from:process.env.GMAIL_USER,
            to:email,
            subject: 'Confirmation Email',
            html:`Hello, <br> Please Click on the link to verify your email.<br>
    <a href="${url}">Click here to verify</a><body>` ,
           
    
        };

        const result = await transport.sendMail(mailOptions);
        return result;
       
    } catch (error) {
        return error;
    }
}


async function sendMailToAdmin(email, emailtoken, user){
    try {
        const accessToken = await oauth2Client.getAccessToken()
        const url=`http://192.168.43.68:5000/user/adminAcceptance/${emailtoken}`;
        const transport = nodemailer.createTransport({
            service:"gmail",
            auth : {
                type :" OAuth2",
                user : process.env.GMAIL_USER,
                pass : process.env.GMAIL_PASS,
                clientId : process.env.CLIENT_ID,
                clientSecret : process.env.CLIENT_SECRET,
                refreshToken : process.env.REFRESH_TOKEN,
                accessToken : accessToken
        }
    })
        const mailOptions = {
            from:process.env.GMAIL_USER,
            to:process.env.GMAIL_USER,
            subject: 'Confirmation Email',
            html:`Hello,<br> Please assign role for new employee or block. <br><br>
            Name: ${user.name}<br>
            Address: ${user.address}<br>
            NIC: ${user.nic}<br>
            Phone No: ${user.phoneno}<br>
            <form action='${url}' method='GET'><p>Choose roles or block:</p>

            <div>
              <input type="checkbox" id="Access item details" name="Access item details"
                     checked>
              <label for="Access item details">Access item details</label>
            </div>
            
            <div>
              <input type="checkbox" id="Access cart details" name="Access cart details">
              <label for="Access cart details">Access cart details</label>
            </div>
            <div>
              <input type="checkbox" id="Access user details" name="Access user details">
              <label for="Access user details">Access user details</label>
            </div>
            <div>
              <input type="checkbox" id="Block" name="Block">
              <label for="Block">Block</label>
            </div>
            <div>
            <br><br>
            <button>send</button></div></form> `,
           
    
        };

        const result = await transport.sendMail(mailOptions);
        return result;
       
    } catch (error) {
        return error;
    }
}

module.exports.sendMailToUser = sendMailToUser;
module.exports.sendMailToAdmin = sendMailToAdmin;

 
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
