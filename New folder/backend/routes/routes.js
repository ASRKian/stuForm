import express from 'express'
import { newStudent } from '../controllers/detail-controller.js'

const route = express.Router()

route.post('/add', newStudent)

export default route