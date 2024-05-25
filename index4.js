const jwt=require('jsonwebtoken');

const value={
    name:"rishabh",
    accountnumber:123213213
}

const token=jwt.sign(value,"secret",{expiresIn:"1hr"});
console.log(token)
const decoded=jwt.decode(token)
const veri=jwt.verify(token,"secret")
console.log(decoded)
console.log(veri)