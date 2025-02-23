const express=require("express")
const app=express()
const path=require("path");

const port=3050;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public"))) //much better than line 11 .
app.use(express.static("public")) //just like view express automatically look for public and public serve its file to it as response
    //or alternatively we can individually pass file fro there too.
app.use(express.static(path.join(__dirname,"/public/css")))
app.use(express.static(path.join(__dirname,"/public/js")))

app.get("/ig/:usernameDummy",(req,res)=>{
    let {usernameDummy}=req.params;
    console.log(usernameDummy);
    let followers=["Narendra modi","Donald Trump","Shahrukh Khan","Virat Kohli","Rohit Sharma"] //|these are ok but usually we are not passing data here rathe rall the data is coming from database.
    let fan=Math.floor(Math.random()*10+1);                                                     
    res.render("instalogin.ejs",{usernameDummy,fan,followers})

    // let instadata=require("./data.json");
    // res.render("instalogin")
})
app.get("/ig/Home/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    if(data){
        res.render("instauser.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
})
app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
});