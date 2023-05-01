const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true, 
    },
    email: { 
      unique: true,
      required: true,
      trimmed: true,
      type: String,
    
    },
    // // Required: {
    //   type: Date,
    //   default: Date.now(),
    // },
    // course: {
    //   type: Date,
    //   // Sets a default value of 12 weeks from now
    //   default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    // //}, 
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'friends',
    },
  ],},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual ("friendCount").get(function(){
  return this.friends.length
}
)
const User = model('user', userSchema);

module.exports = User;
