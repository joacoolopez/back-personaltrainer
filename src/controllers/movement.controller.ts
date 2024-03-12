import {Request, Response } from 'express'
const movementService = require ("../services/movement.service")

const getMovements = async (req:Request, res:Response) => {
  try {
    const movements = await movementService.getMovements()
    res.send(movements)
  } catch (error) {
    res.send(error)
  }
}

export {getMovements}