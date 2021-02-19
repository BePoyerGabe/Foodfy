const express = require("express");
const admin = require("../../controllers/admin");

const routes = express.Router();

routes.get("/recipes", admin.index);

// se a rota "admin/recipes/:id tem mais precedência, por isso tive q inverter as rotas"
routes.get("/recipes/create", admin.create);
routes.get("/recipes/:id", admin.show);
routes.get("/recipes/:id/edit", admin.edit);
routes.post("/recipes", admin.post);
routes.put("/recipes", admin.put);
routes.delete("/recipes", admin.delete);

module.exports = routes;
