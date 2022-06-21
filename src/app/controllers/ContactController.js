const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // List ALL registries
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // List ONE registry
  }

  update() {
    // Edit a registry
  }

  delete() {
    // Delete a registry
  }
}

module.exports = new ContactController();
