const emailService = require("../services/emailService");

// Add User
const sendEmail = (req, res) => {
    const response = emailService.sendEmail(req.body);
    res.status(200).send({
        status: 200,
        message: "Email sent succesfully!",
        data: {},
    });
};

module.exports = {
    sendEmail,
};
