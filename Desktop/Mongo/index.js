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
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);


//User.updateOne ({name: "dev"}, {age:77})
//.then((res) => {
//    console.log(res);
//})
//.catch((err) => {
//    console.log(err);
//});


//User.findById({_id: "69dc7b082df7c144d6d065f5"})
//.then((res) => {
//    console.log(res);
//})
//.catch((err) => {
//    console.log(err);
//});

//User.insertMany([
//    {name:"Tony", email: "tony@gmail.com", age: 34},
//    {name:"stark", email:"stark@gmail.com", age:56},
//    {name:"dev", email:"dez5@gmai.com", age:65},
//])
//.then((res) => {
//    console.log(res);
//});


//const user2 = new User ({
//    name: "Nitinn",
//    email: "nitinn62@gmail.com",
//    age: 18,
//});

//user2.save()
//.then((res) => {
//    console.log(res);
//})
//.catch((err) => {
//    console.log(err);
//});

User.deleteOne({name: "Nitinn"})
.then((res) => {
    console.log(res);
});

User.findOneAndUpdate({name: "dev"}, {age: 56})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

User.deleteMany({age: 56})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

User.findByIdAndDelete('69dc7b082df7c144d6d065f3')
.then((res) => {
    console.log(res);
});