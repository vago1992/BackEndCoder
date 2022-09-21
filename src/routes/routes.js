const { Router } = require("express");
const fs = require("fs");
const router = Router();
const dataValidation = require("../middlewares/middlewares.js");
let productsArray = [];

let readProductFile = async () => {
  try {
    const productFile = await fs.promises.readFile("products.txt", "utf-8");
    productsArray = JSON.parse(productFile);
  } catch (error) {
    console.log(error);
  }
};
router.get("/", (req, res) => {
  res.sendFile(process.cwd() + "src/files/file.html");
});

router.post("/", dataValidation, async (req, res) => {
  const { body } = req;

  try {
    await readProductFile();
    let id =
      productsArray.lenth !== 0
        ? productsArray[productsArray.length - 1].id + 1
        : 1;

    productsArray.push({ ...body, id });
    await fs.promises.writeFile("products.txt", JSON.stringify(productsArray));
    res.status(200).json({
      mensaje: "Producto agegado con exito",
      productos: productsArray
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete();

module.export = router;
