const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "bloodbank",
});



const PORT = process.env.PORT || 5000;

app.post("/doctor", (req, res) => {
	const { doc_name,doc_address,doc_phno } = req.body;
	console.log(link);
	connection.query(
        `Insert into doctor (doc_name,doc_address,doc_phno) values(?,?,?)`,
        // `select * from pateint where values (pname,ppassword)`
        // [pname,ppass],

        [doc_name,doc_address,doc_phno],
		(errors, results) => {
			try {
				if (!req.body) return errors;

				res.send(results);
			} catch (errors) {
				res.send(errors);
			}
		}
	);
});

// Insert into donor (doc_name,doc_address,doc_phno,agr eeight doc tor) values(?,?,?)

// Video get
app.get("/showResults", (req, res) => {
	connection.query(`select * from donor`, (errors, results) => {
		if (!req.body) return errors;
		// console.log(results);
		res.send(results);
	});
});



app.listen(PORT, () => console.log("Hello bitch running on 5000 "));