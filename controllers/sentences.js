const Story = require('../models/story')

module.exports = {
    create,
    delete:deleteSentence,
}

function create(req, res) {
    Story.findById(req.params.id, function(err, story) {
        //Get user's data just in case
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.avatar = req.user.avatar;

        story.sentences.push(req.body);

        story.save(function(err) {
            res.redirect(`/stories/${story._id}`);
        })
    })
}

function deleteSentence(req,res) {

}