import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    direccion: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    departamento: {
        type: String,
        requires: true,
    },
    ciudad: {
        type: String,
        required: true
    }
})

const Address = mongoose.model("Address", addressSchema);
export default Address;