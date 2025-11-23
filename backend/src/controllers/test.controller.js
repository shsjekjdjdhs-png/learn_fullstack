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
