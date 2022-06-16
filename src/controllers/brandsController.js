import brands from "../models/Brand.js";

class BrandsController {
  static getBrands = (req, res) => {
    brands.find((err, brands) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao buscar marcas.` });
      } else {
        res.status(200).json(brands);
      }
    });
  };

  static getBrandById = (req, res) => {
    const id = req.params.id;

    brands.findById(id, (err, brand) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id da marca não localizado.` });
      } else {
        res.status(200).send(brand);
      }
    });
  };

  static registerBrand = (req, res) => {
    const brand = new brands(req.body);

    brand.save((err, brand) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar marca.` });
      } else {
        res.status(201).send(brand);
      }
    });
  };

  static updateBrand = (req, res) => {
    const id = req.params.id;

    brands.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: `Marca ${id} atualizada com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao atualizar marca.` });
      }
    });
  };

  static deleteBrand = (req, res) => {
    const id = req.params.id;

    brands.findByIdAndRemove(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Marca ${id} excluida com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao excluir marca.` });
      }
    });
  };
}

export default BrandsController;
