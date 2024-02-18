
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();
var handlebars = require('handlebars');
var fs = require('fs');

// Setup Send Grid with Valid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function used to send email
const sendEmail = (objUser) => {
    return new Promise((resolve, reject) => {
        const { fullname, email, subject, message } = objUser;

        readHTMLFile(__dirname + '/templates/Welcome.html', function(err, html) {
            if (err) {
            console.log('error reading file', err);
            return;
            }
            var template = handlebars.compile(html);
            var replacements = {
                subject: subject,
                From: email,
                User: fullname,
                message: message
            };
            var htmlToSend = template(replacements);
            htmlToSend = htmlToSend.replace("[subject]", subject);
            htmlToSend = htmlToSend.replace("[From]", email);
            htmlToSend = htmlToSend.replace("[User]", fullname);
            htmlToSend = htmlToSend.replace("[message]", message);
            const data = {
                to: process.env.SENDGRID_MAIL_TO,
                from: process.env.SENDGRID_MAIL_FROM,
                subject: subject,
                html: htmlToSend
            }
            // sgMail.send(data);
            sgMail.send(data)
                .then((response) => {resolve(response); })
                .catch((error) => {reject(error) })
        });
    });
}

// Read File
var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
           callback(err);                 
        }
        else {
            callback(null, html);
        }
    });
};

module.exports = {
    sendEmail
};