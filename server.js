const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const departments = [
  "Computer Science",
  "Business",
  "Engineering",
  "Arts and Humanities",
  "Other",
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    departments,
    errors: [],
    values: { name: "", email: "", department: "" },
  });
});

app.post("/register", (req, res) => {
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim();
  const department = String(req.body.department || "").trim();
  const errors = [];

  if (!name) {
    errors.push("Please enter your name.");
  } else if (name.split(/\s+/).length < 2) {
    errors.push("Please enter your full name, including your first and last name.");
  }

  if (!email) {
    errors.push("Please enter your email address.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!department) {
    errors.push("Please choose a department.");
  } else if (!departments.includes(department)) {
    errors.push("Please choose a department from the list.");
  }

  if (errors.length > 0) {
    return res.status(400).render("index", {
      departments,
      errors,
      values: { name, email, department },
    });
  }

  return res.render("result", { student: { name, email, department } });
});

app.listen(PORT, () => {
  console.log(`Student Registration System is running at http://localhost:${PORT}`);
});
