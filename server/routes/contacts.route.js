const express = require("express");
const contactRoute = express.Router();
const hubspot = require("@hubspot/api-client");
const hubspotClient = new hubspot.Client({
  accessToken: "pat-eu1-f0aff99a-f11c-49fe-9b5a-6d930a3ba356",
});

// GET ALL CONTACTS
contactRoute.route("/contacts").get(async (req, res) => {
  const properties = ["date_of_birth" , "id_number", "firstname", "lastname", "email", "phone", "hs_object_id"];
  const allContacts = await hubspotClient.crm.contacts.getAll(
    null,
    "0",
    properties
  );
  const contacts = Object.values(allContacts);
  const contactArray = [];

  for (const contact of contacts) {
    contactArray.push(contact.properties);
  }

  res.send(contactArray);
});

// ADD NEW CONTACTS
contactRoute
  .route(
    "/contacts/create/:firstName/:lastName/:emailAddress/:birthDay/:idNumber"
  )
  .get(async (req, res) => {
    const properties = {
      firstname: req.params.firstName,
      lastname: req.params.lastName,
      email: req.params.emailAddress,
      date_of_birth: req.params.birthDay,
      id_number: req.params.idNumber,
    };

    const SimplePublicObjectInput = { properties };
    try {
      const apiResponse = await hubspotClient.crm.contacts.basicApi.create(
        SimplePublicObjectInput
      );
      res.send("success");
    } catch (e) {
      e.message === "HTTP request failed"
        ? console.error(JSON.stringify(e.response, null, 2))
        : console.error(e);
      res.send("failed");
    }
  });

// DELETE CONTACT
contactRoute.route("/contacts/delete/:personID").get(async (req, res) => {
  const contactId = req.params.personID;

  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.archive(
      contactId
    );

    res.send("success");
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
    res.send("failed");
  }
});

module.exports = contactRoute;
