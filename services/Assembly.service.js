const db = require("./db");

async function get() {
    const result = await db.query(`SELECT * FROM programming_languages`);

    let message = "Error";

    if (result.affectedRows) {
        message = "successfully";
    }

    return { message };
}

module.exports = {
    get,
};
