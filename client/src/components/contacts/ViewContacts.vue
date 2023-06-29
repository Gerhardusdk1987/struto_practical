<template>
    <content-container>
      <template #heading><h1>HubSpot Contacts</h1></template>
      <template #content>
        <contacts-table></contacts-table>
      </template>
    </content-container>
</template>

<script>
import ContactsTable from "./ContactsTable.vue";

export default {
  components: {
    ContactsTable,
  },
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    
  },
  methods: {
  
  },
};
</script>

<style scoped></style>
