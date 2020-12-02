const Story = require('models/story')

module.exports(
    index,
)

function index(req,res) {
    Story.find({}, function(err,stories) {
        res.render('stories/index', {title: 'The Library', stories});
    });
}

