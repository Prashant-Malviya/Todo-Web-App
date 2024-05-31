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
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });

      list.save().then(() => res.status(200).json({ message: "Task Updated" }));
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete Task

router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    );

    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Task delted" })
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// router.get

router.get("/getTasks/:id", async(req,res)=>{
    const list = await List.find({user:req.params.id}).sort({createdAt : -1});
    if(list.length !== 0){
        res.status(200).json({list:list});
    }else{
        res.status(200).json({"message": "no tasks"})
    }
})


module.exports = router;
