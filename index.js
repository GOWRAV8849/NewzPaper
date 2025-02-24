const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
app.set('view engine','ejs');
app.set("views",path.resolve('./view'))
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('/home', async(req,res)=>{
  const techType = req.query.techType || 'GlobalTech';
  console.log(techType)
  try{
    const response = await axios.get(`http://localhost:9000/get-data/${techType}`);
    data = response.data;
    return res.render("home",{
      title: data.title,    
      author: data.author,
      description: data.description,
      summary: data.summary,
      updatedTime: data["updated-time"],
      url: data.url

    });

  }catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});