// controllers/materiauController.js

const Materiau = require("../models/materiau");

// Méthode pour créer un nouveau matériau
exports.createMateriau = async (req, res) => {
  try {
    const nouveauMateriau = await Materiau.create(req.body);
    res.status(201).json(nouveauMateriau);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Méthode pour récupérer tous les matériaux
exports.getAllMateriaux = async (req, res) => {
  try {
    const materiaux = await Materiau.find();
    res.status(200).json(materiaux);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour récupérer un matériau par son ID
exports.getMateriauById = async (req, res) => {
  try {
    const materiau = await Materiau.findById(req.params.id);
    if (!materiau) {
      return res.status(404).json({ message: "Matériau non trouvé" });
    }
    res.status(200).json(materiau);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour mettre à jour un matériau
exports.updateMateriau = async (req, res) => {
  try {
    const materiau = await Materiau.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!materiau) {
      return res.status(404).json({ message: "Matériau non trouvé" });
    }
    res.status(200).json(materiau);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour supprimer un matériau
exports.deleteMateriau = async (req, res) => {
  try {
    const materiau = await Materiau.findByIdAndDelete(req.params.id);
    if (!materiau) {
      return res.status(404).json({ message: "Matériau non trouvé" });
    }
    res.status(200).json({ message: "Matériau supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Méthode pour créer un nouveau service prestataire
exports.createServicePrestataire = async (req, res) => {
  try {
    const nouveauServicePrestataire = await ServicePrestataire.create(req.body);
    res.status(201).json(nouveauServicePrestataire);
  } catch (error) {
    res.status(400).json({ message: error.message });
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

// Méthode pour récupérer tous les services prestataires d'un même vendeur
exports.getAllServicesPrestatairesByVendeur = async (req, res) => {
  try {
    const servicesPrestataires = await ServicePrestataire.find({
      vendeur: req.params.vendeurId,
    });
    res.status(200).json(servicesPrestataires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
