/* Documentation: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
   Defining models: Models are defined through the Schema interface by defining defining the structure of your documents and the types of data you're storing 
*/
var mongoose = require("mongoose");

// Documentation: With Mongoose, everything is derived from a Schema.
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    published: {
        type: String,
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

/* Documentation: 
    * NOTE: methods must be added to the schema before compiling it with mongoose.model()
    * Functions added to the methods property of a schema get compiled into the Model prototype
    and exposed on each document instance.
    * The next step is compiling our schema into a Model.
    mongoose.model('ModelName', mySchema)
*/
// This creates our model from the above schema, using mongoose's model method
var ArticleModel = mongoose.model("ArticleModel", ArticleSchema);

// Export the Article model
module.exports = ArticleModel;

/* Documentation: A model is a class with which we construct documents. 
In this case, each document will be [ an Article ] with properties and behaviors as declared in our schema. 

Instances of Models are documents.
Documents have many of their own built-in instance methods. 
We may also define our own custom document instance methods too.
*/