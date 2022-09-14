const AssemblyServices = require("../services/Assembly.service");
const testServices = require("../services/test.service");
async function getxx(req, res, next) {
    try {
        res.json(await AssemblyServices.findAll(req.query));
    } catch (err) {
        console.error(`Error`, err.message);
        console.log("Error");
        next(err);
    }
}

async function getMultiple(req, res, next) {
    try {
        res.json(await testServices.getMultiple(req.query.page));
    } catch (err) {
        console.error(
            `Error while getting programming languages `,
            err.message
        );
        next(err);
    }
}

module.exports = {
    getxx,
    getMultiple,
};
