const express = require("express");
const cors = require("cors");
const faker = require("faker");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

class User {
    constructor() {
      this.randomName = faker.name.findName();
      this.randomEmail = faker.internet.email();
      this.randomCard = faker.helpers.createCard();
    }
}

class Company {
    constructor() {
        this.state = faker.address.state();
        this.zip = faker.address.zipCodeByState(this.state);
        this.phone = faker.phone.phoneNumber();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({'user': new User(), 'comp' : new Company()});
});

app.listen(port, () => console.log(`listening on port: ${port}`));