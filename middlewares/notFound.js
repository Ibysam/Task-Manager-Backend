//A middleware in backend developement is like a middleman that sits between the incoming request from a client and a final response from the server. it's a function that can modify the request, process it, handle certain task before passing it on the next part of the code or sending back a response
const notFound = (req, res) => {
  res.json({ message: "Route Not Found" });
};

module.exports = notFound;
