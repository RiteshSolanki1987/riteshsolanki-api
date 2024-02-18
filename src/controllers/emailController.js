const emailService = require("../services/emailService");

// Add User
const sendEmail = (req, res) => {
    // const response = emailService.sendEmail(req.body);
    // res.status(200).send({
    //     status: 200,
    //     message: "Email sent succesfully!",
    //     data: {},
    // });
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
    sendEmail,
};
