const express= require("express")
const generalRoutes= require("./routes/routes.js")
const app=express


app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use("/", generalRoutes)
const PORT = process.env.PORT || 8081

app.listen(PORT,()=>{
  console.log(`Escuchando al Puerto: ${PORT}`)
})