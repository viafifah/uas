const Penerbit = require('../models/penerbit');
const sequelize = require('sequelize');

module.exports.getIndexPenerbit = (req, res) => {
    Penerbit
        .findOne({
            where: {
                id: 1
            }
        })
        .then((penerbit) => {
            res.status(200).json(penerbit);
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.getAllPenerbit = (req, res) => {
    Penerbit.findAll()
        .then((penerbit) => {
            res.status(200).json(penerbit);
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.getDetailPenerbit = (req, res) => {
    Penerbit.findOne({
            where: {
                id: req.params.penerbit_id
            }
        })
        .then((penerbit) => {
            res.status(200).json(penerbit);
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.storePenerbit = (req, res) => {
    Penerbit.create({
            nama: req.body.nama,
            keterangan: req.body.keterangan
        })
        .then((penerbit) => {
            res.status(200).json({
                msg: 'Penerbit Created',
                penerbit: penerbit
            });
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.updatePenerbit = (req, res) => {
    Penerbit.findOne({
            where: {
                id: req.params.penerbit_id
            }
        })
        .then((penerbit) => {
            if (!penerbit) {
                return res.status(404).json({
                    msg: 'Penerbit Not Found'
                });
            }
            penerbit.nama = req.body.nama;
            penerbit.keterangan = req.body.keterangan;
            penerbit.save();

            return res.status(200).json({
                msg: 'Penerbit Updated',
                penerbit: penerbit
            });
        })
        .catch((error) => {
            console.log(error)
        });
}


module.exports.destroyPenerbit = (req, res) => {
    Penerbit.destroy({
            where: {
                id: req.params.penerbit_id
            }
        })
        .then((penerbit) => {
            res.status(200).json({
                msg: 'Penerbit Deleted'
            });
        })
        .catch((error) => {
            console.log(error)
        });
}

module.exports.searchPenerbit = (req, res) => {
    Penerbit.findAll({
            limit: 10,
            where: {
                nama: sequelize.where(sequelize.fn('LOWER', sequelize.col('nama')), 'LIKE', '%' + req.params.nama + '%')
            }
        })
        .then((penerbit) => {
            res.status(200).json({
                msg: 'search results',
                result: penerbit
            });
        })
        .catch((error) => {
            console.log(error)
        });
} 