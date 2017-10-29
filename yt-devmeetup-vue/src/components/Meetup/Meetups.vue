<template>
  <v-container>
  <v-parallax src="http://www.jordans2016cheap.com/loadpic/Nike%20Free%205.0%20+/Nike%20Free%205.0+%20Men/Nike%20Free%205.0+%20Green%20White%20Running%20Shoe.jpg">
    <v-layout column align-center justify-center>
      <h1 class="white--text">Look at me</h1>
      <h4 class="white--text">Happy your shop today!</h4>
    </v-layout>
  </v-parallax>
   <v-card-media>
      <v-spacer></v-spacer>
         <v-flex xs12>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        v-model="search"
      ></v-text-field>
        </v-flex>
    </v-card-media>
  <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
   <v-flex xs12 sm10 md8 offset-sm1 offset-sm2>
    <v-card class="info"  >
      <v-container fluid>
        <v-layout row>
        <v-flex xs12 sm4 md3>
          <v-card-media
          :src="meetup.imageUrl"
          height="130px">
          </v-card-media>
        </v-flex>
        <v-flex xs7 sm8 md9>
          <v-card-title primary-title>
            <h5 class="white--text"> {{ meetup.title }}</h5>
            <div>   {{ meetup.date }}
          </div>
          </v-card-title>
          <v-card-action>
              <v-btn flat to="/profile">
                <v-icon left>arrow_forward</v-icon>
              View Detail
              </v-btn>
          </v-card-action>
        </v-flex>
        </v-layout>
      </v-container>
    </v-card>
   </v-flex>
  </v-layout>
   <div class="text-xs-center">
    <v-pagination :length="6" v-model="page"></v-pagination>
  </div>
   </v-container>
</template>
<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
