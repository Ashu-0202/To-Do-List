import app from './index'; 
import mongoDB from '../Database/connection' 

mongoDB()

const server = app.listen(3000, () => {
    console.log("Server is connected on port 3000 .....")
})