const mongoose = require("mongoose");

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    catogery: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate('69df466779be3582deaf1f24', {price: -100}, {runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
});

//let Book1 = new Book({
//    title: "Game of Thrones",
//    price: 2000,
//    genre: ["Thrones", "Dragons", "fiction"]
//});

//Book1.save()
//.then((res) => {
//    console.log(res);
//})
//.catch((err) => {
//    console.log(err);
//});