import mongoose from "mongoose";
//
const jobsSchema = mongoose.Schema({
    
});

// TODO: crear filtro para los datos que tengan que separarse EJM: lenguaje 
const Jobs = mongoose.model("Jobs", jobsSchema)
export default Jobs