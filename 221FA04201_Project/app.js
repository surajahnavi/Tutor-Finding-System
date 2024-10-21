const express = require('express')
const app = express()
const path = require('path')
const url = require('url')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tutor_finding_system')

const UserSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },  // Required field for first name
  LastName: { type: String, required: true },   // Required field for last name
  DateOfBirth: { type: Date, required: true },  // Required field for date of birth
  Gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },  // Enum for gender with required constraint
  Email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },  // Required, unique email with regex validation
  Phone: { type: String, required: true, match: /^[0-9]{10}$/ },  // Required phone number with 10 digits validation
  City: { type: String, required: true },  // Required field for city
  State: { type: String, required: true }  // Required field for state
});
const UserModel = mongoose.model("users",UserSchema);

app.get("/getUers",(req,res)=>{
  UserModel.find({}).then(function(users){
    res.json(users)
  }).catch(function(err){
    console.log(err)
  })
})
//middleware - static files like css, js, img etc...
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.set('view engine','pug');
app.get('/',(req,res)=>{
  res.render('main');
});
app.get('/login',(req,res)=>{
  res.render('login');
});
app.get('/signup',(req,res)=>{
  res.render('signup');
});

app.get('/home',(req,res)=>{
  res.render('home');
});

app.get('/profile',(req,res)=>{
  res.render('profile');
});

app.get('/Admin',(req,res)=>{
  res.render('Admin');
});

app.get('/signup',(req,res)=>{
  res.render('signup');
});

app.get('/admin-login',(req,res)=>{
  res.render('admin-login');
});

app.get('/quetions',(req,res)=>{
  res.render('questions');
});

app.get('/Approvetutor',(req,res)=>{
  res.render('Approvetutor');
});

app.get('/aboutus',(req,res)=>{
  res.render('aboutus');
});

app.get('/settings',(req,res)=>{
  res.render('settings');
});
app.get('/admin-User',(req,res)=>{
  res.render('admin-User');
});
app.get('/tutor',(req,res)=>{
  res.render('tutor');
});
app.get('/user',(req,res)=>{
  res.render('user');
});
app.get('/enquiry',(req,res)=>{
  res.render('enquiry');
});
app.get('/',(req,res)=>{
  res.render('/admin-login');
});
app.get('/questions',(req,res)=>{
  res.render('questions');
});
app.get('/mycourses',(req,res)=>{
  res.render('mycourses');
});
app.get('/main',(req,res)=>{
  res.render('main');
});



// app.use((req, res)=>{

//   //read file
//   const pathName = url.parse(req.url, true).pathname
//   let filePath = path.join(__dirname, 'views', pathName)

//   if(pathName === '/')
//     filePath = path.join(__dirname, 'views', 'main.html')

//   res.sendFile(filePath)
  
// })


app.listen(4201, ()=>{
  console.log("Server is running @ http://localhost:4201")
})