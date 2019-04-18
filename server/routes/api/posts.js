const express = require('express');
const mongodb = require('mongodb');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const router = express.Router();
const mongoose = require("mongoose");

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
  
});

// router.post('/register', (req, res) =>{
//   res.send({
//     message: 'your user was regisyred'
//   })
// });
router.put('/:id', async(req, res) => {
  const posts = await loadPostsCollection();
  await posts.updateOne({_id: new mongodb.ObjectID(req.params.id)}, { $set:{ 
    name: req.body.name,
    createdAt: new Date(),
    price: req.body.price,
    description: req.body.description,
    productImage: req.body.productImage,
    type: req.body.type,
    brand: req.body.brand,
  }})

 
  res.status(201).send(); 
});
// Add Post
router.post('/', async (req, res, next) => {
  console.log(req.file);
  const posts = await loadPostsCollection();
  await posts.insertOne({
    name: req.body.name,
    createdAt: new Date(),
    price: req.body.price,
    description: req.body.description,
    productImage: req.body.productImage,
    type: req.body.type,
    brand: req.body.brand,
  });
  res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://products:rini6497!@ds145923.mlab.com:45923/vue_express',
    {
      useNewUrlParser: true
    }
  );

  return client.db('vue_express').collection('posts');
}

module.exports = router;