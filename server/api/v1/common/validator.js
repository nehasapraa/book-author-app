import { body, validationResult } from 'express-validator'
const createRules = () => {
  return [
    body('title').not().isEmpty(),
    body('title').isLength({ min: 3 }),
    body('popularity').isNumeric(),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  createRules,
  validate,
}