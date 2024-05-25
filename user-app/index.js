const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://root:toor@cluster0.xkbfrpi.mongodb.net/user_app",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(email, password) {
  // should check in the database
  const existinguser=await User.findOne({email:email});
  return existinguser=== undefined
}

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name=req.body.name;

  if (userExists(email, password)) {
    return res.status(200).json({
      msg: "User  exist in our in  db",
    })}
  
  const user=new User({
    name:name,
    email:email,
    password:password
  });
  user.save();
  res.json({
    msg:"user created"
  })

//   var token = jwt.sign({ email: email }, jwtPassword);
//   return res.json({
//     token,
//   });
});

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const email = decoded.email;
//     // return a list of users other than this username from the database
//     res.json({
//         msg:done
//     })

//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });
app.listen(3000);