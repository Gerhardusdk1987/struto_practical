<template>
  <p v-if="contentLoading && !errorOccured">Busy loading contacts...</p>
  <p v-if="contentLoading && errorOccured">
    An error occured while trying to fetch the contacts!
  </p>
  <div class="table-responsive">
    <table
      class="table table-striped"
      v-if="!contentLoading && !errorOccured && contacts.length > 0"
      width="100%"
      cellpadding="0"
      cellspacing="0"
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th class="custom-width" scope="col">First Name</th>
          <th class="custom-width" scope="col">Last Name</th>
          <th class="custom-width" scope="col">Email Address</th>
          <th class="custom-width" scope="col">Birthday</th>
          <th class="custom-width" scope="col">ID Number</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <contact-row
          v-for="(contact, index) in filteredContacts"
          :key="contact.hs_object_id"
          :pos="(index + 1)"
          :id="contact.hs_object_id"
          :create-date="contact.createdate"
          :first-name="contact.firstname"
          :last-name="contact.lastname"
          :email-address="contact.email"
          :date-birth="contact.date_of_birth"
          :id-number="contact.id_number"
          @refresh-contacts="loadContacts"
        ></contact-row>
      </tbody>
    </table>
  </div>
</template>

<script>
import ContactRow from "./ContactRow.vue";
import ContactsDataService from "@/services/ContactsDataService";

export default {
  components: {
    ContactRow,
  },
  data() {
    return {
      contacts: [],
      sortedContacts: [],
      filteredContacts: [],
      contentLoading: false,
      errorOccured: false,
    };
  },
  created() {
    this.loadContacts();
  },
  watch: {
    contacts() {
      this.sortedContacts = this.contacts.sort(function (a, b) {
        var dateA = new Date(a.createdate);
        var dateB = new Date(b.createdate);

        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      });
    },
    sortedContacts() {
      const filteredArray = [];
      this.sortedContacts.forEach((v, i) => {
        if (i < 20) {
          filteredArray.push(v);
        }
      });
      this.filteredContacts = filteredArray;
    },
  },
  methods: {
    loadContacts() {
      this.contentLoading = true;
      ContactsDataService.getContactsAll()
        .then((res) => {
          this.contacts = res.data;
          this.contentLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.errorOccured = true;
        });
    },
  },
};
</script>

<style scoped>
@media (max-width: 990px) {
  .custom-width {
    width: 225px;
    min-width: 225px;
  }
}
</style>
