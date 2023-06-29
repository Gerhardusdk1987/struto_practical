import http from "../http-common";

class ContactsDataService {
  getContactsAll() 
  {
    return http.get(`/contacts`);
  }

  deleteContactByID(id) 
  {
   return http.get(`/contacts/delete/${id}`);
  }

  createNewContact(firstname, lastname, email, birthday, idnumber) {
    return http.get(`/contacts/create/${firstname}/${lastname}/${email}/${birthday}/${idnumber}`);
  }
}

export default new ContactsDataService();
