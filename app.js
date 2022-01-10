const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const dev = "dev";

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", require("./routes/indentity.routes"));

app.listen(port, () =>
  console.log("App conectada correctamente en el puerto", port)
);


