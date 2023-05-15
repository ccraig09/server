const express = require("express");

const app = express();
const mongoose = require("mongoose");

app.use(express.json());

require("dotenv").config();

const port = process.env.PORT || 3000;

mongoose
	.connect(
		"mongodb+srv://kingslife_node_react-native_1:MX0NhNtnk8OKmm3B@cluster0.8ny7oth.mongodb.net/house_app?retryWrites=true&w=majority"
	)
	.then((result) => {
		app.listen(port, () =>
			console.log(`Server is running on port ${port}`)
		);
	})
	.catch((err) => console.log(err));

// const homes = [
// 	{
// 		id: 1,
// 		type: "Apartment",
// 		description: "Well furnished apartment",
// 	},
// 	{
// 		id: 2,
// 		type: "Flat",
// 		description: "Well furnished apartment at flatville",
// 	},
// ];

// app.get("/", (req, res) => {
// 	res.send("Welcome to express");
// });

// app.get("/api/listing", (req, res) => {
// 	res.send(homes);
// });

// app.get("/api/listing/:id", (req, res) => {
// 	const home = homes.find((home) => home.id === parseInt(req.params.id));

// 	if (!home) {
// 		res.status(404).send("The home with the given ID is not found");
// 	}

// 	res.send(home);
// });

// app.post("/api/listing", (req, res) => {
// 	if (!req.body.type || !req.body.description) {
// 		return res.status(400).send("Title and description is required");
// 	}

// 	const home = {
// 		id: homes.length + 1,
// 		type: req.body.type,
// 		description: req.body.description,
// 	};

// 	homes.push(home);
// 	res.send(home);
// });

// app.put("/api/listing/:id", (req, res) => {
// 	const home = homes.find((home) => home.id === parseInt(req.params.id));

// 	if (!home) {
// 		return res.status(404).send("The home with the given ID is not found");
// 	}

// 	home.type = req.body.type;
// 	home.description = req.body.description;

// 	res.send(home);
// });

// app.delete("/api/listing/:id", (req, res) => {
// 	const home = homes.find((home) => home.id === parseInt(req.params.id));

// 	if (!home) {
// 		return res.status(404).send("The home with the given ID is not found");
// 	}

// 	const index = homes.indexOf(home);
// 	homes.splice(index, 1);
// 	res.send(home);
// });
