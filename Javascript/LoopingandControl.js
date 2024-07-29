var email="user@gmail.com";
var pwd="1234@";
var usermail="user@gmail.com"
var userpwd="1234@23";
if(email===usermail && pwd===userpwd)
{
    console.log("Logged In");
}
else
{
    console.log("Invalid email or password");
}

var voting=(age)=>{
    if(age>=18){
        console.log("Eligible to vote");
    }
    else
    {
        console.log("Not eligible to vote");
    }
}
voting(12)

