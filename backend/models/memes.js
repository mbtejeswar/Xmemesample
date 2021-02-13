var mongoose = require('mongoose');

var memes = new mongoose.Schema(
{
    owner:String,
    caption:String,
    url:String,
    date: {
        type: Date,
        default: Date.now
    }
    
}

)
memes.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
memes.set('toJSON', {
    virtuals: true
});
module.exports = mongoose.model('meme', memes)