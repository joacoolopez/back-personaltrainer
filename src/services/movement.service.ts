import MovementModel from "../models/movements"

const getMovements = async () => {
    const movements = await MovementModel.find()
    return movements
}

module.exports = {getMovements}