const express = require("express");
const router = express.Router();
require("dotenv").config();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const cors = require("cors");

router.use(cors());


const { GoogleGenerativeAI } = require("@google/generative-ai");


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCc7a_KJEjNchctIul0Ww6_GobhDqwBe1A");

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});



router.post('/',async (req,res)=> {
  const { prompt } = req.body;
  console.log(prompt);
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  try{
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  res.send(text);
  console.log(text);}
  catch(error){
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;
