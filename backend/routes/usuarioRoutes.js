import express from "express";
const router = express.Router();

router.get("/", (req, res)  => {
    res.json("Desde API/USUARIOS");
})

router.post("/confirmar", (req, res)  => {
    res.json({msg: "Confirmando  usuario"});
})

router.put("/", (req, res) => {
    res.json("DESDE - PUT - API/USUARIOS")
})

router.delete("/", (req, res) => {
    res.json("DESDE - DELETE - API/USUARIOS")
})

export default router;