const express=require("express");
const app=express();
const port=3000;
const path=require('path');

const { v4: uuidv4 } = require('uuid');
uuidv4(); //get it from npm i uuid

app.use(express.urlencoded({extended:true}));

app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static("public"))

let posts=[
    {   
        id:uuidv4(),
        user:"Admin",
        headlines:"India beats Pakistan by 6 wickets",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        id:uuidv4(),
        user:"Admin",
        headlines: "Arakan Army attacked on Rohingia near Bangladesh Border",
        content : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
    },
    {
        id:uuidv4(),
        user:"Admin",
        headlines:"Big remarks of Italian PM Georgia Meloni on Left Wing Parties",
        content:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
    }
    
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id ===  p.id)
    res.render("show.ejs",{post})
    console.log(post);
    console.log(id)
})
app.post("/posts",(req,res)=>{
    console.log(req.body);
    let id=uuidv4();
    let {headlines,content,user}=req.body;
    posts.unshift({headlines,content,user,id});
    res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
    console.log(id);
})
// app.patch("/posts/:id/edit",(req,res)=>{
//     let {id}=req.params
//     let post=posts.find((p)=>id===p.id);
//     res.render("edit.ejs",post);
//     console.log(id);
    

// })

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});