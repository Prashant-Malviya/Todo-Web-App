const router = require("express").Router();

const User = require("../models/user");

const List = require("../models/list");

// create

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const newList = new List({ title, body, user: existingUser });

      await newList.save().then(() => res.status(201).json(newList));

      existingUser.list.push(newList);

      await existingUser.save();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// update

router.put("/updateTask/:id", async (req, res) => {
    try {
      const { title, body, email } = req.body;
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
       const list =  await List.findByIdAndUpdate(req.params.id, {title,body});

        list.save().then(()=>res.status(200).json({message:"Task Updated"}))

      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


module.exports = router;
