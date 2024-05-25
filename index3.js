const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://root:toor@cluster0.xkbfrpi.mongodb.net/user_app")

const User= mongoose.model('Users',{name: String,
    email: String,
    password: String});

    const user=new User
    ({
        name:"rishabh",
        email:"r@gmail.com",
        password:'1234'
    });

    user.save();
    