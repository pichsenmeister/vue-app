<template>
  <b-container class="mt-4">
    <b-row>
      <b-col
        sm="8"
        offset-sm="2"
        md="6"
        offset-md="3"
        lg="4"
        offset-lg="4">
        <b-form @submit.prevent="reset">
          <b-form-group label="Email">
            <b-form-input
              v-model.trim="email"
              type="email"
              placeholder="Enter email"
              required>
            </b-form-input>
          </b-form-group>
          <b-form-group
            v-if="errorMsg"
            class="text-danger">
            <small>{{ errorMsg }}</small>
          </b-form-group>
          <b-form-group
            v-if="success"
            class="text-success">
            <small>Please follow the instructions in your Email.</small>
          </b-form-group>
          <b-button
            type="submit"
            variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FirebaseApp from '@/firebaseApp'

export default {
  name: 'ResetPassword',
  data () {
    return {
      email: null,
      errorMsg: null,
      success: false
    }
  },
  methods: {
    async reset () {
      this.errorMsg = null
      let result = await FirebaseApp.resetPassword(this.email)

      if (result.message) this.errorMsg = result.message
      else this.success = true
    }
  }
}
</script>
