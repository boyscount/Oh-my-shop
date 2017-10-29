<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
       <h4 class="secondary--text"> Create New Item </h4>
       </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
      <form @submit.prevent="onCreateMeetup">
       <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
         name="title"
         label="Title"
         id="title"
         v-model="title"
         required></v-text-field>
        </v-flex>
        </v-layout>
           <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
         name="detail"
         label="Detail"
         id="detail"
          v-model="detail"
         required></v-text-field>
        </v-flex>
        </v-layout>
           <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
         name="price"
         label="Price"
         id="price"
           v-model="price"
         required></v-text-field>
        </v-flex>
        </v-layout>
          <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
         name="imageUrl"
         label="Image URL"
         id="image-url"
         type="image-url"
           v-model="imageUrl"
         required></v-text-field>
        </v-flex>
        </v-layout>
           <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
        <img :scr="imageUrl" height="150">
        </v-flex>
        </v-layout>
           <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
         <v-text-field
         name="other"
         label="Other"
         id="other"
          v-model="other"
         multi-line
         ></v-text-field>
        </v-flex>
        </v-layout>
   <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
      <v-btn class="primary"
     :disabled="!formIsValid"
      type="submit"> Create New Item </v-btn>
      </v-flex>
   </v-layout>
      </form>
      </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
    export default {
      data () {
        return {
          title: '',
          detail: '',
          price: '',
          imageUrl: '',
          other: ''
        }
      },
      computed: {
        formIsValid () {
          return this.title !== '' &&
           this.detail !== '' &&
           this.price !== '' &&
            this.imageUrl !== '' &&
            this.other !== ''
        }
      },
      method: {
        onCreateMeetup () {
          if (!this.formIsValid) {
            return
          }
          const meetupData = {
            title: this.title,
            detail: this.detail,
            price: this.price,
            imageUrl: this.imageUrl,
            other: this.other,
            date: new Date()
          }
          this.$store.dispatch('createMeetup', meetupData)
          this.$router.push('/meetups')
        }
      }
    }
</script>
