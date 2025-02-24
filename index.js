const express=require("express");
const app=express();
const port=3000;
const path=require('path');
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static("public"))
let posts=[
    {
        user:"Admin",
        headlines:"India beats Pakistan by 6 wickets",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        user:"Admin",
        headlines: "Arakan Army attacked on Rohingia near Bangladesh Border",
        content : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
    },
    {
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
app.post("/posts",(req,res)=>{
    console.log(req.body);
    let {headlines,content,user}=req.body;
    posts.unshift({headlines,content,user});
    res.send("post added suucessfully");
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});