import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("about", "routes/about.jsx"),
  route("our-work", "routes/our-work.jsx"),
  route("trustees", "routes/trustees.jsx"),
  route("resources", "routes/resources.jsx"),
  route("contact", "routes/contact.jsx"),
  route("get-involved", "routes/get-involved.jsx"),
];
