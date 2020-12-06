const { render } = require('ejs');
const { NotExtended } = require('http-errors');
const story = require('../models/story');
const Story = require('../models/story')

module.exports = {
    create,
    delete:deleteComment,
    update,
    edit
}

function edit(req,res) {
    Story.findOne({'comments._id' : req.params.id})
    .then(function(story) {
        comments = story.comments.id(req.params.id)
        return res.render(`stories/edit`, {title:'Edit Comment', story, comments})
})}


function update(req, res, next) {
    console.log(req.body.content);
    Story.findOne({'comments._id' : req.params.id})
    .then(function(story) {
        comments = story.comments.id(req.params.id)
        comments.content = req.body.content;
        story.save()
        console.log(story)
        res.redirect(`/stories/${story._id}`)
    })
}

function deleteComment(req, res, next) {
    console.log(req.params.id)
    Story.findOne({'comments._id' : req.params.id})
    .then(function(story) {
        console.log(story);
        const comment = story.comments.id(req.params.id);
        if(!comment.user.equals(req.user._id)) return res.redirect(`/stories/${story._id}`)
        comment.remove();
        story.save()
        .then(function() {
            res.redirect(`/stories/${story._id}`)
        }).catch(function(err) {
            return next(err);
        })
    })
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


