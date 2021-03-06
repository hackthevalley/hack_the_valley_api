/*---------------------------------------------
 * HackerToken.js
 * Hacker bearer authentication token
 *
 * Author(s): Jun Zheng (me at jackzh dot com)
 ---------------------------------------------*/

const mongoose = require('mongoose');

let hackerTokenSchema = mongoose.Schema(
    {
        hacker_id: mongoose.SchemaTypes.ObjectId,
        token_body: String,
        expire_at: Date
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

module.exports = mongoose.model('HackerToken', hackerTokenSchema);
