const express = require("express");

const app = express;

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Escuchando al Puerto: ${PORT}`);
});
