// Create 
export const helloController = (req, res) => {
  res.send("Hello ONE");
};

export const helloController1 = (req, res) => {
  res.send("Hello TWO");
};

export const helloController2 = (req, res) => {
  res.send("Hello THREE");
};

export const helloController3 = (req, res) => {
  res.send("Hello FOUR");
};

export const helloController4 = (req, res) => {
  res.send("Hello FIVE");
};

export const dynamicHelloController = (req, res) => {
  res.send("Hello " + req.params.name);
};
