<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text"> {{ meetup.title }} </h6>
          </v-card-title>
          <v-card-media
          :src="meetup.imageUrl"
          height="100px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">  {{ meetup.date }} Shoes 1990 - where in here</div>
            <div> The free high-resolution photo of shoe, sport, run, orange, sneaker, red, jogging, yellow, running shoe, tennis shoe, race, sneakers,
            shoelaces, footwear, lacing, striking, neonorange, jog, gaudy, neon colors, sport shoe, knallbunt, bright orange, joggingschuh, outdoor shoe
            athletic shoe, nike free, cross training shoe, kayano, asics </div>
            taken with an ILCE-7 02/25 2017 The picture taken with 70.0mm, f/5.6s, 1/80s, ISO 100
            The image is released free of copyrights under Creative Commons CC0
          </v-card-text>
          <v-card-action>
              <v-btn color="warning" dark large>Buy Now</v-btn>
               <v-btn color="error" dark >Buy with Credit card</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
    export default {
      props: ['id'],
      computed: {
        meetup () {
          return this.$store.getters.loadedMeetups(this.id)
        }
      }
    }
</script>
