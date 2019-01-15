<template>
  <b-navbar
    type="light"
    variant="light"
    toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse
      id="nav_collapse"
      is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav
        v-if="!user"
        class="ml-auto">
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/signup">Signup</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav
        v-else
        class="ml-auto">
        <b-nav-item-dropdown
          :text="user.email"
          right>
          <b-dropdown-item @click="logout">
            Logout
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
import FirebaseApp from '@/firebaseApp'

export default {
  name: 'NavBar',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    async logout () {
      await FirebaseApp.signout()

      this.$router.push('/')
    }
  }
}
</script>
