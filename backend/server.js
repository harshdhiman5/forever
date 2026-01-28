const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const Product = require('./models/Product');
const path = require('path');
const cors = require('cors');
require("dotenv").config();
console.log("NODE_ENV:", process.env.NODE_ENV);

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Middleware
app.use(cors());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use('/uploads', express.static('uploads'));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// ✅ Render Insert Form Page
app.get("/insert-product", async (req, res) => {
  res.render("insert-product");
});

// ✅ POST Route: Upload Product
app.post('/api/product', upload.single('image'), async (req, res) => {
  try {
    const { title, price, category, type } = req.body;
    const image = req.file ? req.file.path : '';

    const product = new Product({ title, price, image, category, type });
    await product.save();

    // res.json({ message: 'Product saved successfully', product });
    // res.render("manage-product", {product})
    res.redirect("/manage-product")
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET API: Fetch all products (JSON)
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET View: Render products as HTML table
app.get('/manage-product', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('manage-product', { products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Render Edit Form
app.get('/edit-product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('edit-product', { product });
  } catch (err) {
    res.status(500).send('Error loading product');
  }
});

// ✅ Handle Update (with optional image upload)
app.post('/update-product/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, price, category, type } = req.body;
    const product = await Product.findById(req.params.id);

    product.title = title;
    product.price = price;
    product.category = category;
    product.type = type;

    if (req.file) {
      product.image = req.file.path;
    }

    await product.save();
    res.redirect('/manage-product');
  } catch (err) {
    res.status(500).send('Update failed');
  }
});

// ✅ Delete Product
app.post('/delete-product/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/manage-product');
  } catch (err) {
    res.status(500).send('Failed to delete product');
  }
});


// Example using Express
app.get("/api/products/:id", async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


// ✅ Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
