const mongoose = require("mongoose");

const UserDetailsScehma2 = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
}

,
  {
    collection: "Inventory",
    // collection: "LOGININFO",

  }
  

  );
mongoose.model("Inventory", UserDetailsScehma2);
// mongoose.model("LOGININFO", UserDetailsScehma);