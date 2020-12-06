const Story = require('../models/story')

module.exports = {
    index,
    create,
    new:newStory,
    show
}

function index(req,res) {
    //console.log(req)
    Story.find({}, function(err,stories) {
        //console.log(stories)
        res.render('stories/index', {title: 'The Library', stories});
    });
}

function newStory(req,res) {
    res.render('stories/new', {title: 'New Book'} )
}

function create(req,res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.avatar = req.user.avatar;
    const story = new Story(req.body);
    story.save(function(err) {
        if (err) res.redirect('/stories/new')
        res.redirect(`stories/${story._id}`)
    });
}

function show(req,res) {
    console.log(req.user)
    userId = req.user._id
    console.log(userId)
    Story.findById(req.params.id, function(err, stories) {
    //console.log(stories)
    res.render('stories/show', {userId, stories, title: 'NvrEndngStry'})
    }
)}