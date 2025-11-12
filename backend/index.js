const express=require('express');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const cors=require('cors')
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()

const app=express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())
app.post("/api/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword, 
        },
      });
      
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      const refresh_token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );
      
      return res.status(200).json({
        message: "Signup successful",
        token,
        refresh_token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (err) {
      console.log("Signup error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  });
  
app.post("/api/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: { email }
      });
      if (!user) {
        return res.status(404).send("User not found");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send("Password is incorrect");
      }
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      const refresh_token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );
      return res.json({
        message: "Login successful",
        token,
        refresh_token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (err) {
      console.log("Login error:", err);
      return res.status(500).send("Server error");
    }
  });

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})