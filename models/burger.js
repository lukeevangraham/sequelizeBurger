var orm = require("../config/orm")

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    // insertOne: function(burgerCols, burgerVals, cb) {
    //     orm.insertOne(burgerCols, burgerVals, function(res) {
    //         cb(res);
    //     });
    // },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        console.log("objcolvals is: " + JSON.stringify(objColVals));
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;