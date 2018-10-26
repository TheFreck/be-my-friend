var express = require("express");

var app = express();

var PORT = process.env.PORT || 9393;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./app/public"));

// ================================================================================
// ROUTER
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
