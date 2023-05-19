// Creating the Main Routes
const routes = (app) => {
  app
    .route("/contact")
    // GET
    .get(
      (req, res, next) => {
        // Middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      (req, res) => {
        res.send("GET Request Successful");
      }
    )

    // POST
    .post((req, res) => {
      res.send("POST Request Successful");
    });

  app
    .route("/contact/:contactID")
    .put((req, res) => {
      res.send("PUT Request Successful");
    })
    .delete((req, res) => {
      res.send("DELETE Request Successful");
    });
};

export default routes;
