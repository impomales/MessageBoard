var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    profileImageUrl: {
        type: String
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

// run this code 'pre' or before saving user to mongo.
userSchema.pre('save', function(next) {
    var user = this;
    // if password modified, then hash it.
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10)
        .then(function(hashedPassword) {
            user.password = hashedPassword;
            next();
        }, function(err) {
            return next(err);
        });
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return next(err);
        next(null, isMatch);
    });
};

var User = mongoose.model('User', userSchema);
module.exports = User;