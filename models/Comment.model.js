const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  excursionId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Excursion",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
