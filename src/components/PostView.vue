<template>
  <section>
    <b-row>
      <b-col>
        <h2>{{ post.data.title }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>{{ post.data.post }}</p>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'PostView',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
