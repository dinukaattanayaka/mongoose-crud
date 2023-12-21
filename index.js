const mongoose = require("mongoose");
mongoose.set("strictQuery" , false);
const User = require ("./user");

//connect to yhe database

mongoose.connect("mongodb://127.0.0.1/m5-db" , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});
/*
async function run () {
    const user = await User.create({
        firstName : 'dinuka',
        lastName : "attanayaka",
        age : 27 ,
        birthDate : "1997/05/26",
        email: "dinuka@gmail.com"
    });
    console.log(user);
}
run().catch((err)=>console.log(err));
*/

//find all
/*
async function run () {
    const user = await User.find();

    console.log(user);
}
run().catch((err)=>console.log(err));
*/

//new user
/*async function run () {
    const user = new User({
        firstName : 'kamal',
        lastName : "silva",
        age : 28 ,
        birthDate : "1994/08/26",
        email: "kamal@gmail.com"
    });
    const user2 = await user.save();
    console.log(user);
}
run().catch((err)=>console.log(err));
*/
//object eka seve method ken giyoth object eken pita unth hdla ekthu krn puluwn
async function run () {
    const user = new User({
        firstName : 'nimal',
      
        age : 35 ,
        birthDate : "1998/08/16",
        
    });
    user.lastName = "silva"
    user.email= "nimal@gmail.com"
    const user2 = await user.save();
    console.log(user);
}
run().catch((err)=>console.log(err));

//find by diffrent types
/*
async function run () {
    const noOfUser = await User.find({lastName:"silva"}).count();
    console.log(noOfUser); 
}
run().catch((err)=>console.log(err));
*/

//find operation ('and' type)
/*
async function run () {
    const user = await User.findOne({lastName:"silva" , age:27});

    console.log(user);
}
run().catch((err)=>console.log(err));
*/

//find operation ('OR' type)
async function run () {
    const user = await User.findOne({
        $or :[{lastName:"silva"} ,{ age:27}],
    });

    console.log(user);
}
run().catch((err)=>console.log(err));

//find (comparison operators)(gte)
async function run () {
    const user = await User.findOne({
        $or :[{lastName:"silva"} , {age:{$gt : 24}}],
    });

    console.log(user);
}
run().catch((err)=>console.log(err));

//update
async function run () {
    const user = await User.findOne({
        $or :[{lastName:"silva"} , {age:{$gt : 24}}],
    });

    user.age= 48  //update wenawa
    await user.save()

    console.log(user);
}
run().catch((err)=>console.log(err));

//delete
async function run () {
    const result = await User.deleteOne({firstName: "kamal"});

    console.log(result);
}
run().catch((err)=>console.log(err));

//find and delete
async function run () {
    const user = await User.findOne({firstName: "kamal"});
    const result = await User.deleteOne({_id: user.id})

    console.log(result);
}
run().catch((err)=>console.log(err));