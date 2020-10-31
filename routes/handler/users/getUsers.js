const { User } = require('../../../models');

module.exports = async(req, res) => {

    const userIds = req.query.user_ids || [];

    const sqlOptions = {
        attributes:['id','name','email','role','profession','avatar']
    }

    // meng select seluruh data user ids yang ada di query params
    if(userIds.length) {
        sqlOptions.where = {
            id:userIds
        }
    }
    const users = await User.findAll(sqlOptions);

    return res.json({
        status:'success',
        data:users
    });
}