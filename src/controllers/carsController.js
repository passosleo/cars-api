import cars from "../models/Car.js";

class CarsController {
  static getCars = (req, res) => {
    cars
      .find()
      .populate("marca")
      .exec((err, cars) => {
        if (err) {
          res
            .status(500)
            .send({ message: `${err.message} - falha ao buscar carros.` });
        } else {
          res.status(200).json(cars);
        }
      });
  };

  static getCarById = (req, res) => {
    const id = req.params.id;

    cars
      .findById(id)
      .populate("marca", "nome") //omite o campo nacionalidade, mostra apenas o nome
      .exec((err, car) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Id do carro não localizado.` });
        } else {
          res.status(200).send(car);
        }
      });
  };

  static registerCar = (req, res) => {
    const car = new cars(req.body);

    car.save((err, car) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar carro.` });
      } else {
        res.status(201).send(car);
      }
    });
  };

  static updateCar = (req, res) => {
    const id = req.params.id;

    cars.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: `Carro ${id} atualizado com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao atualizar carro.` });
      }
    });
  };

  static deleteCar = (req, res) => {
    const id = req.params.id;

    cars.findByIdAndRemove(id, (err) => {
      if (!err) {
        res.status(200).send({ message: `Carro ${id} excluido com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao excluir carro.` });
      }
    });
  };

  static getCarByColor = (req, res) => {
    const color = req.query.cor;
    console.log("color: ", color);

    cars.find({ cor: color }).exec((err, car) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Nenhum carro encontrado.` });
      } else {
        res.status(200).send(car);
      }
    });
  };
}

export default CarsController;
