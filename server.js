const express = require('express')
const app = express()
const port = 8080
const TodoModel=require("./models/todo")
require("./db")

app.use(express.json())


app.get('/', async(req, res) => {
 const Todos=await TodoModel.find()
 res.status(200).json(Todos)
})


app.post('/add',async(req,res)=>{
    const {todo}=req.body
   const newTodo=new TodoModel({
    todo,
   })
   await newTodo.save()
   res.status(200).json(newTodo)
})



app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { todo, isCompleted } = req.body;
  
    try {
      const updatedTodo = await TodoModel.findByIdAndUpdate(
        id, 
        { todo, isCompleted }, 
        { new: true } 
      );
  
      if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      res.status(200).json(updatedTodo);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
app.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    await TodoModel.findByIdAndDelete(id)
    res.status(200).send("Todo Deleted Succesfully")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})