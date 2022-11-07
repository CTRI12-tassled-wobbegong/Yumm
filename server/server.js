const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const passport = require("passport");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appRouter = require("./routes/appRouter");
const authRouter = require("./routes/authRouter");
app.use("/api", appRouter);
app.use("/api", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.join(__dirname, "../build")));
  app.get("/", (req, res) => {
    return res
      .status(200)
      .sendFile(path.join(__dirname, "../build/index.html"));
  });
}

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middle error",
    status: 400,
    message: { err: "An error occured" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
