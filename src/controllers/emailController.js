const emailService = require("../services/emailService");

const ping = (req, res) => {
    const connection = emailService.ping();
    res.send("Connection Established...");
};

// Add User
const sendEmail = (req, res) => {
    console.log('sendEmail Calling...');
    console.log('req.body', req.body);
    
    emailService.sendEmail(req.body)
    .then((response) => {
        res.status(200).send({
            status: 200,
            message: "Email sent succesfully!",
            data: response,
        });
    }).catch(error => {
        res.status(500).send({
            status: 500,
            message: "Error occur while sending email!",
            error: error,
        });
    });
};

module.exports = {
    ping,
    sendEmail,
};
