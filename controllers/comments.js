const Story = require('../models/story')

module.exports = {
    create,
}

function create(req, res) {
    Story.findById(req.params.id, function(err, story) {
        //Get user's data just in case
        console.log(req.user)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.avatar = req.user.avatar;

        story.comments.push(req.body);

        story.save(function(err) {
            res.redirect(`/stories/${story._id}`);
        })
    })
}


