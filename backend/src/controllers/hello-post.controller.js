// Read
import Joi from "joi";
export const createHelloPost = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      error: "Message is required",
    });
  }

  res.status(201).json({
    success: true,
    receivedMessage: message,
  });
};


export const createUser = (req, res) => {
  // Step 1 — Define schema
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required()
  });

  // Step 2 — Validate request body
  const { error } = schema.validate(req.body);

  // Step 3 — Handle validation errors
  if (error) {
    return res.status(400).json({
      success: false,
      error: error.details[0].message,
    });
  }

  // Step 4 — If valid, return success
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: req.body,
  });
};
