var moment = require('moment');
const User =require('../models/userSchema.js')


var countries =[
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (North)",
  "Korea (South)",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];


const index = (req, res) => {
User.find().then((result)=>{
res.render("index",{
users:result,moment:moment
})

}).catch((err)=>{
console.log(err)
})

}


const edit =(req,res)=>{
const userId = req.params.id;
  User.findById(userId).then((result)=>{

res.render("user/edit",{user:result,moment:moment ,countries:countries})

}).catch((err)=>{
console.log(err)
})
//res.render("user/edit",{})
}

const view =(req, res) => {
  const userId = req.params.id;

  // Find a user by their ID
  User.findById(userId).then((result)=>{
  console.log(result)
res.render("user/view",{user:result,moment:moment})

}).catch((err)=>{
console.log(err)
})
}

const deleter = (req, res) => {
  User.deleteOne({ _id: req.params.id }).then((result) => {
  res.redirect("/");
  });
}

const update =  (req, res) => {
  const userId = req.params.id;
   req.body.createDate = new Date(); // Set to the current date and time
  req.body.writeDate = new Date();
  const updateData = req.body;  // Data to update the user

  User.findByIdAndUpdate(userId, updateData, { new: true })
    .then((result) => {
      res.redirect("/");  // Redirect after update
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error updating user");
    });
}


const search =  (req, res) => {
User.find({$or:[
{firstName:req.body.search},{lastName:req.body.search}
]}).then((result)=>{
res.render("user/search",{
users:result,moment:moment
})

}).catch((err)=>{
console.log(err)
})

}

const add =(req,res)=>{
  req.body.createDate = new Date(); // Set to the current date and time
  req.body.writeDate = new Date(); // Set to the current date and time
const user =new User(req.body);
user.save().then(
(result)=>{
res.redirect("/");
}).catch((err)=>{
console.log(err)
})

}

const getAdd =(req,res)=>{
res.render("user/add",{countries:countries})
}

module.exports = {index,edit,view,deleter,update,search,add,getAdd}