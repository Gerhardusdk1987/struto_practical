<template>
  <header class="bg-dark">
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/contacts"
          >Struto Contacts App</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts"
                >View Contacts</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts/add"
                >Create New Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>
.nav-link.router-link-active {
  font-weight: bold;
  color: #ffffff;
  opacity: 1;
}
</style>
