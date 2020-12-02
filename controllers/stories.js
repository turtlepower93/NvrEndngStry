const Story = require('../models/story')

module.exports = {
    index,
    create,
    new:newStory,
    show
}

function index(req,res) {
    console.log('hi')
    //Story.find({}, function(err,stories) {
        res.render('stories/index', {title: 'The Library'});
    //});
}

function newStory(req,res) {
    res.render('stories/new', {title: 'New Book'} )
}

function create(req,res) {
    
}

function show() {

}