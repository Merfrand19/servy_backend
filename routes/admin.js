const AdminRouter = require("express").Router();
const adminController = require("../controllers/admin/adminController");

AdminRouter.get("/getAllCategories", adminController.getAllCategoriesDeService);
AdminRouter.post("/createCategorie", adminController.createCategorieDeService);
AdminRouter.get(
  "/supprimerCategorie/{id}",
  adminController.deleteCategorieDeService
);
AdminRouter.post("/updateCategorie", adminController.updateCategorieDeService);

module.exports = AdminRouter;
