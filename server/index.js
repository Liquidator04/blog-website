const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

// Set up Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

// Connect to MongoDB and create indexes
async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/", {
            dbName: 'blogs',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to blogs database');

        // Create indexes
        await Blogs.createIndexes();

        // Start server
        app.listen(5000, () => {
            console.log("App listening at port 5000");
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
}

// Define user schema and model
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Blogs = mongoose.model('blogs', BlogSchema);

// Call connectToDatabase function to start the application
connectToDatabase();

// Routes

// Root route
app.get("/", (req, res) => {
    res.send("App is Working");
});

// get all blogs route
app.get("/blogs", async (req, res) => {
    try{
        const blogs = await Blogs.find()
        console.log(blogs)
        res.json(blogs);

    } catch(error) {
        console.log("Error: ",error);
        res.status(500).send("Something Went Wrong");
    }
});

app.get("/blogs/:id", async (req, res) => {
    try{
        const blogId = req.params.id;
        console.log("Blog Id:", blogId);
        const blog = await Blogs.findById({ _id: blogId});
        if(blog){
            console.log(blog);
            res.json(blog)
        } else{
            res.status(500).send("Something Went Wrong");
        }
    } catch(error) {
        console.log("Error: ",error);
        res.status(500).send("Something Went Wrong");
    }
});

app.get("/blogs/author/:author", async (req, res) => {
    try{
        const author = req.params.author;
        const blogs = await Blogs.find({ author: author });
        console.log("All the blogs from "+author);
        console.log(blogs);
        res.status(200).send("Ok!");
    } catch(error){
        console.log("Error: ",error);
        res.status(500).send("Something Went Wrong");
    }
});

// insert a blog route
app.post("/blogs", async (req, res) => {
    try {
        const blog = new Blogs(req.body);
        const result = await blog.save();
        res.json(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Something Went Wrong");
    }
});

app.put("/blogs/:id", async (req, res) => {
    try{
        const blogId = req.params.id;
        const blog = req.body;
        Blogs.findByIdAndUpdate(blogId, blog, { new: true })
        .then(updatedDocument => {
            if (updatedDocument) {
            console.log('Document updated:', updatedDocument);
            } else {
            console.log('No document matches the provided id.');
            }
        })
        .catch(err => console.error('Error updating document:', err));
        res.status(200).send("Ok!");
    } catch (error){
        console.log("Error:", error);
        res.status(500).send("Something Went Wrong");
    }
});

app.delete("/blogs/:id", async (req, res) => {
    try{
        const blogId = req.params.id;
        await Blogs.deleteOne({ _id: blogId });
        res.status(200).send("Ok!");
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Something Went Wrong");
    }
});