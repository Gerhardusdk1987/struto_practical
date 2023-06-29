<template>
  <content-container>
    <template #heading>
      <h1>Create New Contact</h1>
    </template>

    <template #content>
      <form @submit.prevent="addContact">
        <div class="row g-3 py-2">
          <div class="col-md-6">
            <label for="firstname" class="form-label fs-5">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              v-model="firstname"
              @blur="valFirstname"
              class="form-control"
              placeholder="Please enter answer here"
            />
            <div
              v-if="firstnameValid === 'invalid'"
              class="form-text text-danger"
            >
              Please complete the above field
            </div>
          </div>

          <div class="col-md-6">
            <label for="lastname" class="form-label fs-5">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              v-model="lastname"
              @blur="valLastname"
              class="form-control"
              placeholder="Please enter answer here"
            />
            <div
              v-if="lastnameValid === 'invalid'"
              class="form-text text-danger"
            >
              Please complete the above field
            </div>
          </div>
        </div>

        <div class="row g-3 py-2">
          <div class="col-md-6">
            <label for="email" class="form-label fs-5">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              @blur="valEmail"
              class="form-control"
              placeholder="Please enter answer here"
            />
            <div v-if="emailValid === 'invalid'" class="form-text text-danger">
              Please complete the above field
            </div>
          </div>

          <div class="col-md-6">
            <label for="text" class="form-label fs-5">ID Number</label>
            <input
              maxlength="13"
              type="number"
              name="idnumber"
              id="idnumber"
              v-model="idnumber"
              @blur="valIdnumber"
              class="form-control"
              placeholder="Please enter answer here"
            />
            <div
              v-if="idnumberValid === 'invalid'"
              class="form-text text-danger"
            >
              Please complete the above field
            </div>
          </div>
        </div>

        <div class="row g-3 py-2">
          <div class="col-md-6">
            <label for="text" class="form-label fs-5">Birthday</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              v-model="birthday"
              @blur="valBirthday"
              class="form-control"
              placeholder="Please enter answer here"
            />
            <div
              v-if="birthdayValid === 'invalid'"
              class="form-text text-danger"
            >
              Please complete the above field
            </div>
          </div>
        </div>

        <div class="row g-3 py-2 mt-1">
          <div class="col-12">
            <button type="submit" class="btn btn-dark btn-lg">Submit</button>
            <div
              v-if="formIsValid === 'invalid'"
              class="form-text text-danger mt-2"
            >
              Please check that all form fields are completed!
            </div>
          </div>
        </div>
      </form>
    </template>
  </content-container>
</template>

<script>
import ContactsDataService from "@/services/ContactsDataService";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      birthday: "",
      idnumber: "",
      firstnameValid: "pending",
      lastnameValid: "pending",
      emailValid: "pending",
      idnumberValid: "pending",
      birthdayValid: "pending",
      formIsValid: "pending",
    };
  },
  watch: {
    formIsValid(value) {
      if (value == "invalid") {
        if (this.firstnameValid == "pending") {
          this.firstnameValid = "invalid";
        }

        if (this.lastnameValid == "pending") {
          this.lastnameValid = "invalid";
        }

        if (this.emailValid == "pending") {
          this.emailValid = "invalid";
        }

        if (this.idnumberValid == "pending") {
          this.idnumberValid = "invalid";
        }

        if (this.birthdayValid == "pending") {
          this.birthdayValid = "invalid";
        }
      }
    },
  },
  methods: {
    valFirstname() {
      if (this.firstname === "") {
        this.firstnameValid = "invalid";
      } else {
        this.firstnameValid = "valid";
      }
    },
    valLastname() {
      if (this.lastname === "") {
        this.lastnameValid = "invalid";
      } else {
        this.lastnameValid = "valid";
      }
    },
    valEmail() {
      if (this.email === "") {
        this.emailValid = "invalid";
      } else {
        this.emailValid = "valid";
      }
    },
    valIdnumber() {
      if (this.idnumber === "") {
        this.idnumberValid = "invalid";
      } else {
        this.idnumberValid = "valid";
      }
    },
    valBirthday() {
      if (isNaN(new Date(this.birthday).getTime())) {
        this.birthdayValid = "invalid";
      } else {
        this.birthdayValid = "valid";
      }
    },
    checkFormValidStatus() {
      if (
        this.firstnameValid === "invalid" ||
        this.firstnameValid === "pending" ||
        this.lastnameValid === "invalid" ||
        this.lastnameValid === "pending" ||
        this.emailValid === "invalid" ||
        this.emailValid === "pending" ||
        this.idnumberValid === "invalid" ||
        this.idnumberValid === "pending" ||
        this.birthdayValid === "invalid" ||
        this.birthdayValid === "pending"
      ) {
        this.formIsValid = "invalid";
      } else {
        this.formIsValid = "valid";
      }
    },
    createContact(firstname, lastname, email, birthday, idnumber) {
      ContactsDataService.createNewContact(
        firstname,
        lastname,
        email,
        birthday,
        idnumber
      )
        .then((res) => {
          if (res.data == "success") {
            alert(`${firstname} ${lastname} has been added successfully!`);
            this.$router.push({ name: "contacts" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addContact() {
      this.checkFormValidStatus();

      if (this.formIsValid == "valid") {
        this.createContact(
          this.firstname,
          this.lastname,
          this.email,
          this.birthday,
          this.idnumber
        );
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.birthday = "";
        this.idnumber = "";
      } else {
        console.log("Could not process form due to validation errors!");
      }
    },
  },
};
</script>

<style scoped></style>
