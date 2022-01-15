const Notif = require("../models/notifModel");

exports.postNotif = async(req, res) => {
    console.log(req.body)
    const data = Notif({
        detail: req.body.detail
        
    });
    data.save().then(() => {
        res.status(200).json({
            message: "Saved Successfully"
        })
    }).catch(()=> {
        res.status(400).json({
            message: "Not Saved"
        })
    })
};

