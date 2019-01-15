<template>
  <b-container>
    <h1>Hello, {{ user.email }}!</h1>
  </b-container>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
