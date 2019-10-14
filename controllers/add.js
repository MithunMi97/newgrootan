const Add = require("../models/add");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
   
    const newdata = new Add(req.body);
   console.log("Hai");
   console.log(req.body);
    newdata.save((err, result) => {
            if (err) {
                
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    };
