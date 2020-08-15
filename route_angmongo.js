
var express = require('express');  
var bodyParser = require('body-parser'); 
var ejs = require('ejs');
var MongoClient = require('mongodb').MongoClient;
var app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Connect to the db

MongoClient.connect("mongodb://127.0.0.1/mydb", function(err, db) {
 if(!err) {
    console.log("We are connected");

app.use(express.static('public')); //making public directory as static directory  
app.use(bodyParser.json());
app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('<h1>Welcome to product Details!!!!!!!!!</h1>');  
})
/*JS client side files has to be placed under a folder by name 'public' */

app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );    
})  

app.get('/insertfood.html', function (req, res) {
    res.sendFile( __dirname + "/" + "insertfood.html" );
})
/* to access the posted data from client using request body (POST) or request params(GET) */
//-----------------------POST METHOD (FOOD)-------------------------------------------------
app.post('/process_post_food', function (req, res) {
    /* Handling the AngularJS post request*/
    console.log(req.body);
	res.set('Content-Type', 'text/html');
    /*response has to be in the form of a JSON*/
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client */
		console.log("Sent data are (POST): Food ID :"+req.body.foodid+" Food Name:"+req.body.foodname+" Food Price:"+req.body.foodprice+" Food Origin:"+req.body.foodorigin+" Food Description:"+req.body.fooddesc);
		// Submit to the DB
  	var foodid = req.body.foodid;
        var foodname = req.body.foodname;
	var foodprice = req.body.foodprice;
        var foodorigin = req.body.foodorigin;
	var fooddesc = req.body.fooddesc;
	db.collection('Food').insert({foodid:foodid,foodname:foodname,foodprice:foodprice,foodorigin:foodorigin,fooddesc:fooddesc});
    res.end('Food product'+JSON.stringify(req.body.foodname)+" is inserted");
    /*Sending the respone back to the angular Client */
});

//--------------------------GET METHOD (FOOD)-------------------------------
app.get('/process_get_food.html', function (req, res) { 
// Submit to the DB
  var newfood = req.query;
	var foodid = req.query['foodid'];
    var foodname = req.query['foodname'];
	db.collection('Food').insert({foodid:foodid,foodname:foodname});	
    console.log("Sent data are (GET): FoodID :"+foodid+" and Food name :"+foodname);
  	res.end("Food Inserted-->"+JSON.stringify(newfood));
}) 

app.get('/insertgadget.html', function (req, res) {
    res.sendFile( __dirname + "/" + "insertgadget.html" );
})
/* to access the posted data from client using request body (POST) or request params(GET) */
//-----------------------POST METHOD(GADGET)-------------------------------------------------
app.post('/process_post_gadget', function (req, res) {
    /* Handling the AngularJS post request*/
    console.log(req.body);
	res.setHeader('Content-Type', 'text/html');
    /*response has to be in the form of a JSON*/
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client */
		console.log("Sent data are (POST): Gadget ID :"+req.body.gadgetid+" Gadget Name:"+req.body.gadgetname+" Gadget Price:"+req.body.gadgetprice+" Gadget Origin:"+req.body.gadgetorigin+" Gadget Description:"+req.body.gadgetdesc);
		// Submit to the DB
  	var gadgetid = req.body.gadgetid;
    var gadgetname = req.body.gadgetname;
	var gadgetprice= req.body.gadgetprice;
	var gadgetorigin = req.body.gadgetorigin;
	var gadgetdesc = req.body.gadgetdesc;
	db.collection('Gadget').insert({gadgetid:gadgetid,gadgetname:gadgetname,gadgetprice:gadgetprice,gadgetorigin:gadgetorigin,gadgetdesc:gadgetdesc});
    res.end("Gadget "+JSON.stringify(req.body.gadgetname)+" is inserted");
    /*Sending the respone back to the angular Client */
});

//--------------------------GET METHOD (GADGET)-------------------------------
app.get('/process_get_gadget', function (req, res) { 
// Submit to the DB
  var newgadget = req.query;
	var gadgetid = req.query['gadgetid'];
    var gadgetname = req.query['gadgetname'];
	db.collection('Gadget').insert({gadgetid:gadgetid,gadgetname:gadgetname});	
    console.log("Sent data are (GET): GadgetID :"+gadgetid+" and Gadget name :"+gadgetname);
  	res.end("Gadget Inserted-->"+JSON.stringify(newgadget));
}) 

app.get('/insertbabycare.html', function (req, res) {
    res.sendFile( __dirname + "/" + "insertbabycare.html" );
})
/* to access the posted data from client using request body (POST) or request params(GET) */
//-----------------------POST METHOD(BABYCARE)-------------------------------------------------
app.post('/process_post_babycare', function (req, res) {
    /* Handling the AngularJS post request*/
    console.log(req.body);
	res.setHeader('Content-Type', 'text/html');
    /*response has to be in the form of a JSON*/
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client */
		console.log("Sent data are (POST): BabyCare Product ID :"+req.body.babyid+" BabyCare Product Name:"+req.body.babyname+" BabyCare Product Price:"+req.body.babyprice+" BabyCare Product Origin:"+req.body.babyorigin+" BabyCare Product Description:"+req.body.babydesc);
		// Submit to the DB
  	var babyid = req.body.babyid;
        var babyname = req.body.babyname;
	var babyprice = req.body.babyprice;
	var babyorigin= req.body.babyorigin;
	var babydesc= req.body.babydesc;
	db.collection('BabyCare').insert({babyid:babyid,babyname:babyname,babyprice:babyprice,babyorigin:babyorigin,babydesc:babydesc});
    res.end("BabyCare Product "+JSON.stringify(req.body.babyname)+" is inserted");
    /*Sending the respone back to the angular Client */
});

//--------------------------GET METHOD(BABYCARE)-------------------------------
app.get('/process_get_babycare', function (req, res) { 
// Submit to the DB
  var newbaby = req.query;
	var babyid = req.query['babyid'];
    var babyname = req.query['babyname'];
	db.collection('BabyCare').insert({babyid:babyid,babyname:babyname});	
    console.log("Sent data are (GET): BabyCare Product ID :"+babyid+" and BabyCare Product name :"+babytname);
  	res.end("BabyCare Product Inserted-->"+JSON.stringify(newbaby));
}) 

app.get('/insertdeodorant.html', function (req, res) {
    res.sendFile( __dirname + "/" + "insertdeodrant.html" );
})
/* to access the posted data from client using request body (POST) or request params(GET) */
//-----------------------POST METHOD(DEODORANT)-------------------------------------------------
app.post('/process_post_deo', function (req, res) {
    /* Handling the AngularJS post request*/
    console.log(req.body);
	res.setHeader('Content-Type', 'text/html');
    /*response has to be in the form of a JSON*/
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client */
		console.log("Sent data are (POST): Deodorant ID :"+req.body.deoid+" Deodorant Name:"+req.body.deoname+" Deodorant Price:"+req.body.deoprice+" Deodorant Origin:"+req.body.deoorigin+" Deodorant description:"+req.body.deodesc);
		// Submit to the DB
  	var deoid = req.body.deoid;
    var deoname = req.body.deoname;
	var deoprice = req.body.deoprice;
	var deoorigin = req.body.deoorigin;
	var deodesc = req.body.deodesc;
	db.collection('Deodorant').insert({deoid:deoid,deoname:deoname,deoprice:deoprice,deoorigin:deoorigin,deodesc:deodesc});
    res.end("Deodorant "+JSON.stringify(req.body.deoname)+" is inserted");
    /*Sending the respone back to the angular Client */
});

//--------------------------GET METHOD(DEODORANT)-------------------------------
app.get('/process_get_deo', function (req, res) { 
// Submit to the DB
  var newdeo = req.query;
	var deoid = req.query['deoid'];
    var deoname = req.query['deoname'];
	db.collection('Deodorant').insert({deoid:deoid,deoname:deoname});	
    console.log("Sent data are (GET): Deodrant ID :"+deoid+" and Deodrant name :"+deoname);
  	res.end("deodrant Inserted-->"+JSON.stringify(newdeo));
}) 

app.get('/inserthair.html', function (req, res) {
    res.sendFile( __dirname + "/" + "inserthair.html" );
})
/* to access the posted data from client using request body (POST) or request params(GET) */
//-----------------------POST METHOD(HairCARE PRODUCT)-------------------------------------------------
app.post('/process_post_haircare', function (req, res) {
    /* Handling the AngularJS post request*/
    console.log(req.body);
	res.setHeader('Content-Type', 'text/html');
    /*response has to be in the form of a JSON*/
    req.body.serverMessage = "NodeJS replying to angular"
        /*adding a new field to send it to the angular Client */
		console.log("Sent data are (POST): HairCare Product ID :"+req.body.hairid+" HairCare Product Name:"+req.body.hairname+" HairCare Product price:"+req.body.hairprice+" HairCare Product origin:"+req.body.hairorigin+" HairCare Product description:"+req.body.hairdesc);
		// Submit to the DB
  	var hairid = req.body.hairid;
    var hairname = req.body.hairname;
	var hairprice = req.body.hairprice;
	var hairorigin = req.body.hairorigin;
	var hairdesc = req.body.hairdesc;
	db.collection('HairCare').insert({hairid:hairid,hairname:hairname,hairprice:hairprice,hairorigin:hairorigin,hairdesc:hairdesc});
    res.end("HairCare Product "+JSON.stringify(req.body.hairname)+" is inserted");
    /*Sending the respone back to the angular Client */
});

//--------------------------GET METHOD(hairCARE PRODUCT)-------------------------------
app.get('/process_get_haircare', function (req, res) { 
// Submit to the DB
  var newhair = req.query;
	var hairid = req.query['hairid'];
    var hairname = req.query['hairname'];
	db.collection('HairCare').insert({hairid:hairid,hairname:hairname});	
    console.log("Sent data are (GET): HairCare ProductID :"+hairid+" and HairCare Product name :"+hairname);
  	res.end("HairCare Product Inserted-->"+JSON.stringify(newhair));
}) 

//--------------UPDATE FOOD------------------------------------------
app.get('/updatefood.html', function (req, res) {
    res.sendFile( __dirname + "/" + "updatefood.html" );
})

app.get("/updatefood", function(req, res) {
	var foodid1=req.query.foodid;
	var newfood=req.query.newfood;
	var newprice=req.query.newprice;
	var neworigin=req.query.neworigin;
	db.collection('Food').find({"foodid":foodid1}).toArray(function(err,docs){
	if (docs.length==0){
	res.send("Food Product with ID "+foodid1+" doesn't exist");
	}
	else{
	db.collection('Food', function (err, data) {
        data.update({"foodid":foodid1},{$set:{"foodname":newfood,"foodprice":newprice,"foodorigin":neworigin}},{multi:true},
            function(err, result){
				if (err) {
					console.log("Failed to update data.");
					res.send("Failed to update data.");
			} else {
				res.send(result+"\n"+"Food with ID "+foodid1+" updated.");
				
				console.log("Food Updated")
			}
        });
    });
}
});
})	
//--------------UPDATE GADGET------------------------------------------
app.get('/updategadget.html', function (req, res) {
    res.sendFile( __dirname + "/" + "updategadget.html" );
})

app.get("/updategadget", function(req, res) {
	var gadgetid1=req.query.gadgetid;
	var newgadget=req.query.newgadget;
	var newprice=req.query.newprice;
	var neworigin=req.query.neworigin;
	db.collection('Gadget').find({"gadgetid":gadgetid1}).toArray(function(err,docs){
	if (docs.length==0){
	res.send("Gadget Product with ID "+gadgetid1+" doesn't exist");
	}
	else{
	db.collection('Gadget', function (err, data) {
        data.update({"gadgetid":gadgetid1},{$set:{"gadgetname":newgadget,"gadgetprice":newprice,"gadgetorigin":neworigin}},{multi:true},
            function(err, result){
				if (err) {
					console.log("Failed to update data.");
					res.end("Failed to update data.");
			} else {
				res.send(result+"\n"+"Gadget with ID " +gadgetid1+" updated");
				console.log("Gadget Updated")
			}
        });
    });
}
});
})	
//--------------UPDATE BABY CARE------------------------------------------
app.get('/updatebabycare.html', function (req, res) {
    res.sendFile( __dirname + "/" + "updatebabycare.html" );
})

app.get("/updatebabycare", function(req, res) {
	var babyid1=req.query.babyid;
	var newbaby=req.query.newbaby;
	var newprice=req.query.newprice;
	var neworigin=req.query.neworigin;
	db.collection('BabyCare').find({"babyid":babyid1}).toArray(function(err,docs){
	if (docs.length==0){
	res.send("BabyCare Product with ID "+babyid1+" doesn't exist");
	}
	else{
	db.collection('BabyCare', function (err, data) {
        data.update({"babyid":babyid1},{$set:{"babyname":newbaby,"babyprice":newprice,"babyorigin":neworigin}},{multi:true},
            function(err, result){
				if (err) {
					console.log("Failed to update data.");
					res.end("Failed to update data.");
			} else {
				res.send(result+"/n"+"BabyCare Product with ID " +babyid1+" updated");
				console.log("Baby Care Product Updated")
			}
        });
    });
}
});
})	
//--------------UPDATE DEODORANT------------------------------------------
app.get('/updatedeodorant.html', function (req, res) {
    res.sendFile( __dirname + "/" + "updatedeodorant.html" );
})

app.get("/updatedeodorant", function(req, res) {
	var deoid1=req.query.deoid;
	var newdeo=req.query.newdeo;
	var newprice=req.query.newprice;
	var neworigin=req.query.neworigin;
	db.collection('Deodorant').find({"deoid":deoid1}).toArray(function(err,docs){
	if (docs.length==0){
	res.send("Deodorant Product with ID "+deoid1+" doesn't exist");
	}
	else{
	db.collection('Deodorant', function (err, data) {
        data.update({"deoid":deoid1},{$set:{"deoname":newdeo,"deoprice":newprice,"deoorigin":neworigin}},{multi:true},
            function(err, result){
				if (err) {
					console.log("Failed to update data.");
					res.end("Failed to update data.");
			} else {
				res.send(result+"/n"+"Deodorant Product with ID " +deoid1+" updated");
				console.log("Deodorant Updated")
			}
        });
    });
}
});
})	
//--------------UPDATE HAIR CARE------------------------------------------
app.get('/updatehair.html', function (req, res) {
    res.sendFile( __dirname + "/" + "updatehair.html" );
})

app.get("/updatehair", function(req, res) {
	var hairid1=req.query.hairid;
	var newhair=req.query.newhair;
	var newprice=req.query.newprice;
	var neworigin=req.query.neworigin;
	var neworigin=req.query.neworigin;
	db.collection('HairCare').find({"hairid":hairid1}).toArray(function(err,docs){
	if (docs.length==0){
	res.send("HairCare Product with ID "+hairid1+" doesn't exist");
	}
	else{
	db.collection('HairCare', function (err, data) {
        data.update({"hairid":hairid1},{$set:{"hairname":newhair,"hairprice":newprice,"hairorigin":neworigin}},{multi:true},
            function(err, result){
				if (err) {
					console.log("Failed to update data.");
					res.end("Failed to update data.");
			} else {
				res.send(result+"/n"+"HairCare Product with ID " +hairid1+" updated");
	
				console.log("Hair Care product Updated")
			}
        });
    });
}
});
})		
//--------------SEARCH FOOD------------------------------------------
app.get('/searchfood.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "searchfood.html" );    
})

app.get("/searchfood", function(req, res) {
//var foodidnum=parseInt(req.query.foodid)  // if empid is an integer
var foodidnum=req.query.foodid;
    db.collection('Food').find({foodid: foodidnum}).toArray(function(err, docs) {
if(docs.length==0){
res.send("Food product with ID "+foodidnum+" doesn't exist.");
}
else{
    if (err) {
      console.log(err.message+ "Failed to get data.");
    } else {
      res.status(200).json(docs);
    }
}
  });
  });
  // --------------To find "Single Document"-------------------
/*var empidnum=parseInt(req.query.empid)
    db.collection('Food').find({'foodid':foodidnum}).nextObject(function(err, doc) {
    if (err) {
      console.log(err.message+ "Failed to get data");
    } else {
      res.status(200).json(doc);
    }
  })
}); */
//--------------SEARCH DEODORANT------------------------------------------
app.get('/searchdeodorant.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "searchdeodorant.html" );    
})

app.get("/searchdeodorant", function(req, res) {
//var deoidnum=parseInt(req.query.deoid)  // if empid is an integer
var deoidnum=req.query.deoid;
    db.collection('Deodorant').find({deoid: deoidnum}).toArray(function(err, docs) {
if(docs.length==0){
res.send("Deodorant with ID "+deoidnum+" doesn't exist.");
}
else{
    if (err) {
      console.log(err.message+ "Failed to get data.");
    } else {
      res.status(200).json(docs);
    }
}
  });
  });
  // --------------To find "Single Document"-------------------
/*var empidnum=parseInt(req.query.empid)
    db.collection('Food').find({'foodid':foodidnum}).nextObject(function(err, doc) {
    if (err) {
      console.log(err.message+ "Failed to get data");
    } else {
      res.status(200).json(doc);
    }
  })
}); */
//--------------SEARCH HairCARE PRODUCT------------------------------------------
app.get('/searchhair.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "searchhair.html" );    
})

app.get("/searchhair", function(req, res) {
//var hairidnum=parseInt(req.query.hairid)  // if empid is an integer
var hairidnum=req.query.hairid;
    db.collection('HairCare').find({hairid: hairidnum}).toArray(function(err, docs) {
if(docs.length==0){
res.send("HairCare product with ID "+hairidnum+" doesn't exist.");
}
else{
    if (err) {
      console.log(err.message+ "Failed to get data.");
    } else {
      res.status(200).json(docs);
    }
}
  });
  });
  // --------------To find "Single Document"-------------------
/*var empidnum=parseInt(req.query.empid)
    db.collection('Food').find({'foodid':foodidnum}).nextObject(function(err, doc) {
    if (err) {
      console.log(err.message+ "Failed to get data");
    } else {
      res.status(200).json(doc);
    }
  })
}); */
//--------------SEARCH BABYCARE PRODUCT------------------------------------------
app.get('/searchbabycare.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "searchbabycare.html" );    
})

app.get("/searchbabycare", function(req, res) {
//var babyidnum=parseInt(req.query.babyid)  // if empid is an integer
var babyidnum=req.query.babyid;
    db.collection('BabyCare').find({babyid: babyidnum}).toArray(function(err, docs) {
if(docs.length==0){
res.send("BabyCare product with ID "+babyidnum+" doesn't exist.");
}
else{
    if (err) {
      console.log(err.message+ "Failed to get data.");
    } else {
      res.status(200).json(docs);
    }
}
  });
  });
  // --------------To find "Single Document"-------------------
/*var empidnum=parseInt(req.query.empid)
    db.collection('Food').find({'foodid':foodidnum}).nextObject(function(err, doc) {
    if (err) {
      console.log(err.message+ "Failed to get data");
    } else {
      res.status(200).json(doc);
    }
  })
}); */
//--------------SEARCH GADGET------------------------------------------
app.get('/searchgadget.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "searchgadget.html" );    
})

app.get("/searchgadget", function(req, res) {
//var gadgetidnum=parseInt(req.query.gadgetid)  // if empid is an integer
var gadgetidnum=req.query.gadgetid;
    db.collection('Gadget').find({gadgetid: gadgetidnum}).toArray(function(err, docs) {
if(docs.length==0){
res.send("Gadget with Id "+gadgetidnum+" doesn't exist.");
}
else{
    if (err) {
      console.log(err.message+ "Failed to get data.");
    } else {
      res.status(200).json(docs);
    }
}
  });
  });
  // --------------To find "Single Document"-------------------
/*var gadgetidnum=parseInt(req.query.gadgetid)
    db.collection('Gadget').find({'gadgetid':gadgetidnum}).nextObject(function(err, doc) {
    if (err) {
      console.log(err.message+ "Failed to get data");
    } else {
      res.status(200).json(doc);
    }
  })
}); */



//--------------DELETE FOOD------------------------------------------
app.get('/deletefood.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "deletefood.html" );    
})

app.get("/deletefood", function(req, res) {
//var foodidnum=parseInt(req.query.foodid)  // if empid is an integer
var foodidnum=req.query.foodid;
db.collection('Food').find({"foodid":foodidnum}).toArray( function (err, docs)
{
if(docs.length==0)
{
res.send("Food product with ID "+foodidnum+" doesn't exist.");
}
else
{
db.collection('Food', function (err, data) {
        data.remove({"foodid":foodidnum}, function(err, result)
{
if (err)
{
console.log("Failed to remove data.");
}
else
{
res.send(result+"\n Food product with ID "+foodidnum+" is deleted." );
console.log("Food Deleted");
}
});
});
        }
});
});

//--------------DELETE DEODORANT------------------------------------------
app.get('/deletedeodorant.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "deletedeodorant.html" );    
})

app.get("/deletedeodorant", function(req, res) {
//var deoidnum=parseInt(req.query.deoid)  // if empid is an integer
var deoidnum=req.query.deoid;
db.collection('Deodorant').find({"deoid":deoidnum}).toArray( function (err, docs)
{
if(docs.length==0)
{
res.send("Deodorant with ID "+deoidnum+" doesn't exist.");
}
else
{
db.collection('Deodorant', function (err, data) {
        data.remove({"deoid":deoidnum}, function(err, result){
if (err) {
console.log("Failed to remove data.");
} else {
res.send(result+"\n Deodorant with ID "+deoidnum+" is deleted." );
console.log("Deodorant  Deleted")
}
        });
});
}
    });
   
  });
//--------------DELETE GADGET------------------------------------------
app.get('/deletegadget.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "deletegadget.html" );    
})

app.get("/deletegadget", function(req, res) {
//var gadgetidnum=parseInt(req.query.gadgetid)  // if empid is an integer
var gadgetidnum=req.query.gadgetid;
db.collection('Gadget').find({"gadgetid":gadgetidnum}).toArray( function (err, docs)
{
if(docs.length==0)
{
res.send("Gadget with ID "+gadgetidnum+" doesn't exist.");
}
else
{
db.collection('Gadget', function (err, data) {
        data.remove({"gadgetid":gadgetidnum}, function(err, result){
if (err) {
console.log("Failed to remove data.");
} else {
res.send(result+"\n Gadget with ID "+gadgetidnum+" is deleted." );
console.log("Gadget  Deleted")
}
        });
});
}
    });
   
  });
//--------------DELETE BABYCARE PRODUCT------------------------------------------
app.get('/deletebabycare.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "deletebabycare.html" );    
})

app.get("/deletebabycare", function(req, res) {
//var babyidnum=parseInt(req.query.babyid)  // if empid is an integer
var babyidnum=req.query.babyid;
db.collection('BabyCare').find({"babyid":babyidnum}).toArray( function (err, docs)
{
if(docs.length==0)
{
res.send("Babycare product with ID "+babyidnum+" doesn't exist.");
}
else
{
db.collection('BabyCare', function (err, data) {
        data.remove({"babyid":babyidnum}, function(err, result){
if (err) {
console.log("Failed to remove data.");
} else {
res.send(result+"\n BabyCare product with ID "+babyidnum+" is deleted." );
console.log("babycare product  Deleted")
}
        });
});
}
    });
   
  });
//--------------DELETE HAIRCARE PRODUCTS------------------------------------------
app.get('/deletehair.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "deletehair.html" );    
})

app.get("/deletehair", function(req, res) {
//var foodidnum=parseInt(req.query.foodid)  // if empid is an integer
var hairidnum=req.query.hairid;
db.collection('HairCare').find({"hairid":hairidnum}).toArray( function (err, docs)
{
if(docs.length==0)
{
res.send("HairCare product with ID "+hairidnum+" doesn't exist.");
}
else
{
db.collection('HairCare', function (err, data) {
        data.remove({"hairid":hairidnum}, function(err, result){
if (err) {
console.log("Failed to remove data.");
} else {
res.send(result+"\n HairCare product with ID "+hairidnum+" is deleted." );
console.log("HairCare Product  Deleted")
}
        });
});
}
    });
   
  });

//--------------------DISPLAY FOOD--------------------------
app.get('/displayfood', function (req, res) { 
//-----DISPLAY IN JSON FORMAT  -------------------------
/*db.collection('Food').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to get data.");
    } else 
	{
		res.status(200).json(docs);
    }
  });*/
//-------------DISPLAY USING EMBEDDED JS -----------
 db.collection('Food').find().sort({foodid:1}).toArray(
 		function(err , i){
        if (err) return console.log(err)
        res.render('dispfood.ejs',{foods: i})  
     })
//---------------------// sort({empid:-1}) for descending order -----------//
}) 
//--------------------DISPLAY GADGET--------------------------
app.get('/displaygadget', function (req, res) { 
//-----DISPLAY IN JSON FORMAT  -------------------------
/*db.collection('Gadget').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to get data.");
    } else 
	{
		res.status(200).json(docs);
    }
  });*/
//-------------DISPLAY USING EMBEDDED JS -----------
 db.collection('Gadget').find().sort({gadgetid:1}).toArray(
 		function(err , i){
        if (err) return console.log(err)
        res.render('dispgadget.ejs',{gadgets: i})  
     })
//---------------------// sort({empid:-1}) for descending order -----------//
}) 
//--------------------DISPLAY BABYCARE PRODUCTS--------------------------
app.get('/displaybabycare', function (req, res) { 
//-----DISPLAY IN JSON FORMAT  -------------------------
/*db.collection('BabyCare').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to get data.");
    } else 
	{
		res.status(200).json(docs);
    }
  });*/
//-------------DISPLAY USING EMBEDDED JS -----------
 db.collection('BabyCare').find().sort({babyid:1}).toArray(
 		function(err , i){
        if (err) return console.log(err)
        res.render('dispbabycare.ejs',{babycare: i})  
     })
//---------------------// sort({empid:-1}) for descending order -----------//
}) 
//--------------------DISPLAY HAIRCARE PRODUCTS--------------------------
app.get('/displayhair', function (req, res) { 
//-----DISPLAY IN JSON FORMAT  -------------------------
/*db.collection('HairCare').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to get data.");
    } else 
	{
		res.status(200).json(docs);
    }
  });*/
//-------------DISPLAY USING EMBEDDED JS -----------
 db.collection('HairCare').find().sort({hairid:1}).toArray(
 		function(err , i){
        if (err) return console.log(err)
        res.render('disphair.ejs',{haircare: i})  
     })
//---------------------// sort({empid:-1}) for descending order -----------//
}) 
//--------------------DISPLAY DEODORANT--------------------------
app.get('/displaydeodorant', function (req, res) { 
//-----DISPLAY IN JSON FORMAT  -------------------------
/*db.collection('Deodorant').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to get data.");
    } else 
	{
		res.status(200).json(docs);
    }
  });*/
//-------------DISPLAY USING EMBEDDED JS -----------
 db.collection('Deodorant').find().sort({deoid:1}).toArray(
 		function(err , i){
        if (err) return console.log(err)
        res.render('dispdeodorant.ejs',{deodorants: i})  
     })
//---------------------// sort({empid:-1}) for descending order -----------//
}) 
/*app.get('/about', function (req, res) {  
   console.log("Got a GET request for /about");  
   res.send('variety of products');  
})*/  
 
var server = app.listen(5000, function () {  
var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})  
}
else
{   db.close();  }
  
});