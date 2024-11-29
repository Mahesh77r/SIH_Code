const express = require('express');
const router = express.Router();
const DSchema = require('../module/PhoneBook.js')
const GSchema = require('../module/GroundSchema.js')


router.post("/groundAuthorityregistion/add", async (req, res) => {
    const data = new GSchema(req.body);
    try {
      await data.save();
      res.status(201).json({
        status: "Success",
        data: {
          data,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  });
  
  // router.get(`/${id}`, async (req,res) => {
  //     const data = await DSchema.find({})
  //     try{
  //         res.status(200).json({
  //             status : 'Success',
  //             data : {
  //                 data
  //             }
  //         })
  //     }catch(err){
  //         res.status(500).json({
  //             status: 'Failed',
  //             message : err.message
  //         })
  //     }
  // })
  
  //login & signup
  // router.post('/signup', userSignUp);
  
  router.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      console.log(user);
  
      const username = user.name;
      DSchema.findOne({ name: username })
        .then((data) => {
          res.send({ status: 200, data: data });
        })
        .catch((error) => {
          res.send({ status: 404, data: error });
        });
    } catch (error) {}
  });
  
  //EventOrganizer
  router.post("/eventorganizerregistration/add", async (req, res) => {
    const data = new EventOrgSchema(req.body);
  
    try {
      await data.save();
      res.status(201).json({
        status: "Success",
        data: {
          data,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  });
  
  //Club
  router.post("/clubregistration/add", async (req, res) => {
    const data = new ClubSchema(req.body);
    try {
      await data.save();
      res.status(201).json({
        status: "Success",
        data: {
          data,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  });
  
  //logins
  
  router.post("/groundAuthoritylogin", async (request, response) => {
    try {
      let user = await GSchema.findOne({
        email: request.body.email,
        password: request.body.password,
      });
      if (user) {
        
        return response.json({ status: 200, user: token });
      } else {
        return response.status(401).json("Invalid Login");
      }
    } catch (error) {
      response.json("Error: ", error.message);
    }
  });
  
  
  
  router.post("/eventlogin", async (request, response) => {
    try {
      let user = await EventOrgSchema.findOne({
        email: request.body.email,
        password: request.body.password,
      });
      if (user) {
        const token = jwt.sign(
          {
            email: request.body.email,
            password: request.body.password,
          },
          JWT_SECRET
        );
        return response.json({ status: 200, user: token });
      } else {
        return response.status(401).json("Invalid Login");
      }
    } catch (error) {
      response.json("Error: ", error.message);
    }
  });
  
  
  
  router.post("/clublogin", async (request, response) => {
    try {
      let user = await ClubSchema.findOne({
        email: request.body.email,
        password: request.body.password,
      });
      if (user) {
        const token = jwt.sign(
          {
            email: request.body.email,
            password: request.body.password,
          },
          JWT_SECRET
        );
        return response.json({ status: 200, user: token });
      } else {
        return response.status(401).json("Invalid Login");
      }
    } catch (error) {
      response.json("Error: ", error.message);
    }
  });
  
  
  module.exports = router;