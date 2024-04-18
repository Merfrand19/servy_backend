// controllers/categorieDeServiceController.js

const CategorieDeService = require("../../models/categorieDeService");

const Service = require("../../models/service");

// Méthode pour créer une nouvelle catégorie de service
exports.createCategorieDeService = async (req, res) => {
  try {
    const categorie = await CategorieDeService.findOne({ nom: req.body.nom });

    if (categorie) throw new Error("Existe déjà");
    const nouvelleCategorie = await CategorieDeService.create(req.body);
    res.status(201).json(nouvelleCategorie);
  } catch (error) {
    res.status(400).json({ message: error.message, provided: req.body });
  }
};

// Méthode pour récupérer toutes les catégories de service
exports.getAllCategoriesDeService = async (req, res) => {
  try {
    const categories = await CategorieDeService.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour récupérer une catégorie de service par son ID
exports.getCategorieDeServiceById = async (req, res) => {
  try {
    const categorie = await CategorieDeService.findById(req.params.id);
    if (!categorie) {
      return res
        .status(404)
        .json({ message: "Catégorie de service non trouvée" });
    }
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour mettre à jour une catégorie de service
exports.updateCategorieDeService = async (req, res) => {
  try {
    const categorie = await CategorieDeService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!categorie) {
      return res
        .status(404)
        .json({ message: "Catégorie de service non trouvée" });
    }
    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour supprimer une catégorie de service
exports.deleteCategorieDeService = async (req, res) => {
  try {
    const categorie = await CategorieDeService.findByIdAndDelete(req.params.id);
    if (!categorie) {
      return res
        .status(404)
        .json({ message: "Catégorie de service non trouvée" });
    }
    res
      .status(200)
      .json({ message: "Catégorie de service supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour créer un nouveau service
exports.createService = async (req, res) => {
  try {
    const nouveauService = await Service.create(req.body);
    res.status(201).json(nouveauService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Méthode pour récupérer tous les services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour récupérer un service par son ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service non trouvé" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour mettre à jour un service
exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!service) {
      return res.status(404).json({ message: "Service non trouvé" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour supprimer un service
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service non trouvé" });
    }
    res.status(200).json({ message: "Service supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controllers/servicePrestataireController.js

const ServicePrestataire = require("../../models/servicePrestataire");

// Méthode pour récupérer tous les services prestataires
exports.getAllServicesPrestataires = async (req, res) => {
  try {
    const servicesPrestataires = await ServicePrestataire.find();
    res.status(200).json(servicesPrestataires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour récupérer un service prestataire par son ID
exports.getServicePrestataireById = async (req, res) => {
  try {
    const servicePrestataire = await ServicePrestataire.findById(req.params.id);
    if (!servicePrestataire) {
      return res
        .status(404)
        .json({ message: "Service prestataire non trouvé" });
    }
    res.status(200).json(servicePrestataire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour mettre à jour un service prestataire
exports.updateServicePrestataire = async (req, res) => {
  try {
    const servicePrestataire = await ServicePrestataire.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!servicePrestataire) {
      return res
        .status(404)
        .json({ message: "Service prestataire non trouvé" });
    }
    res.status(200).json(servicePrestataire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour supprimer un service prestataire
exports.deleteServicePrestataire = async (req, res) => {
  try {
    const servicePrestataire = await ServicePrestataire.findByIdAndDelete(
      req.params.id
    );
    if (!servicePrestataire) {
      return res
        .status(404)
        .json({ message: "Service prestataire non trouvé" });
    }
    res
      .status(200)
      .json({ message: "Service prestataire supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour récupérer tous les services prestataires d'un même service
exports.getAllServicesPrestatairesByService = async (req, res) => {
  try {
    const servicesPrestataires = await ServicePrestataire.find({
      service: req.params.serviceId,
    });
    res.status(200).json(servicesPrestataires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
