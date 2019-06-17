<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Hello, {{ user.email }}!</h1>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col>
        <h2 class="mb-0">Posts</h2>
      </b-col>
      <b-col class="ml-auto text-right">
        <b-button @click="togglePost">Create</b-button>
      </b-col>
    </b-row>

    <hr>

    <b-row
      v-if="toggleCreate"
      class="mt-4"
    >
      <b-col>
        <b-form @submit.prevent="createPost">
          <b-form-group
            id="label-title"
            label="Title"
            label-for="titel"
          >
            <b-form-input
              id="title"
              v-model="post.title"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="label-post"
            label="Post"
            label-for="post"
          >
            <b-form-textarea
              id="post"
              v-model="post.post"
              type="textarea"
              rows="6"
              required
              placeholder="Write your post"
            ></b-form-textarea>
          </b-form-group>

          <b-button
            type="submit"
            variant="success"
            class="mr-2"
          >Save</b-button>
          <b-button
            type="reset"
            variant="danger"
          >Reset</b-button>
        </b-form>
      </b-col>
    </b-row>

    <post-view
      v-for="post in posts"
      :key="post.id"
      v-bind="{post: post}"
    ></post-view>

  </b-container>
</template>

<script>
import PostView from '@/components/PostView'

export default {
  name: 'Dashboard',
  components: {
    PostView
  },
  data () {
    return {
      toggleCreate: false,
      post: {
        title: undefined,
        post: undefined
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    togglePost () {
      this.toggleCreate = !this.toggleCreate
    },
    createPost () {
      this.$store.dispatch('createPost', this.post)
      this.post = {
        title: undefined,
        post: undefined
      }
      this.toggleCreate = !this.toggleCreate
    }
  }
}
</script>
