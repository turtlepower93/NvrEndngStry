const Story = require('../models/story')

module.exports = {
    index,
    create,
    new:newStory,
    show
}

function index(req,res) {
    Story.find({}, function(err,stories) {
        res.render('stories/index', {title: 'The Library', stories});
    });
}

function newStory(req,res) {
    res.render('stories/new', {title: 'New Book'} )
}

function create(req,res) {
    console.log('hi')
    console.log(req.body);
    const story = new Story(req.body);
    story.save(function(err) {
        if (err) res.redirect('/stories/new')
        res.redirect(`stories/${story._id}`)
    });
}

function show(req,res) {
    res.render('stories/show', {title:'BOOKS'})
}