<template>
  <tr>
    <td>{{ pos }}</td>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td>{{ emailAddress }}</td>
    <td>{{ dateBirth !== null ? dateBirth : "N/A" }}</td>
    <td>{{ idNumber !== null ? idNumber : "N/A" }}</td>
    <td><button class="deleteBtn" @click="deleteContact(id)">X</button></td>
  </tr>
</template>

<script>
import ContactsDataService from '@/services/ContactsDataService';

export default {
  emits: ["refresh-contacts"],
  props: [
    "pos",
    "id",
    "firstName",
    "lastName",
    "emailAddress",
    "dateBirth",
    "idNumber",
  ],
  data() {
    return {
      response: null,
    };
  },
  methods: {
    deleteContact(cId) {
      let confirmDel = prompt(
        `Please type in the person's id to confirm deletion: ${cId}`,
        ""
      );

      if (confirmDel == cId) {
       ContactsDataService.deleteContactByID(cId)
          .then((res) => {
            if (res.data == "success") {
              alert(`Contact with id ${cId} has been deleted!`);
              this.$emit("refresh-contacts");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>

.deleteBtn {
  border: none;
  font-weight: bold;
  color: red;
  opacity: 0.5;
  transition: all .2s linear;
  background-color: transparent;
}

.deleteBtn:hover {
  opacity: 1;
}

</style>
