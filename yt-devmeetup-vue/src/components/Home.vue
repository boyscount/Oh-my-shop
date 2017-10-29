<template>
<v-container>
<v-layout row wrap>
<v-flex d-flex xs6 >
</v-flex>
<v-flex d-flex xs6  >
</v-flex>
</v-layout>
   <v-layout row wrap>
     <v-flex xs12>
      <v-carousel style="cursor: pointer;">
        <v-carousel-item
        v-for="meetup in meetups"
        :src="meetup.imageUrl"
        :key="meetup.id"
        @click="onLoadMeetup(meetup.id)">
        <div class="title">
        {{ meetup.title }}
        </div>
        </v-carousel-item>
      </v-carousel>
     </v-flex>
   </v-layout>

<v-layout justify-center column>
    <v-subheader>Today</v-subheader>
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions>
        <v-layout align-center row spacer slot="header">
          <v-flex xs1>
            <v-avatar size="36px" slot="activator">
              <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="">
            </v-avatar>
          </v-flex>
          <v-flex xs3>
            <strong>Marauy Leider</strong>
          </v-flex>
          <v-flex no-wrap>
            <strong>Wow! </strong>
             —
          </v-flex>
          <v-flex
            class="grey--text"
            ellipsis
          >
          </v-flex>
        </v-layout>
        <v-card>
          <v-divider></v-divider>
          <v-card-text>
            How much
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content hide-actions>
        <v-layout align-center row spacer slot="header">
          <v-flex xs1>
            <v-avatar size="36px" slot="activator">
              <v-icon color="red">people</v-icon>
            </v-avatar>
          </v-flex>
          <v-flex xs3>
            <strong class="red--text">Social</strong> <span class="grey--text">(3)</span>
          </v-flex>
          <v-flex>
            <v-chip label small color="red lighten-4" class="ml-0">1 new</v-chip>
            <strong>Twitter</strong>
          </v-flex>
        </v-layout>
        <v-card>
          <v-divider></v-divider>
          <v-card-text>
            Hello
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content hide-actions>
        <v-layout align-center row spacer slot="header">
          <v-flex xs1>
            <v-avatar size="36px" slot="activator">
              <v-icon color="cyan darken-1">local_offer</v-icon>
            </v-avatar>
          </v-flex>
          <v-flex xs3>
            <strong class="cyan--text text--darken-1">Promos</strong> <span class="grey--text">(4)</span>
          </v-flex>
          <v-flex xs3 no-wrap>
            <v-chip label small color="cyan lighten-4" class="ml-0">2 new</v-chip>
            <strong>Shop your way</strong>
            <span>I love it</span>
          </v-flex>
        </v-layout>
        <v-card>
          <v-card-text>
            Hello
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>


</v-container>
</template>
<script>
    export default {
      computed: {
        meetups () {
          return this.$store.getters.featuredMeetups
        }
      },
      methods: {
        onLoadMeetup (id) {
          this.$router.push('meetups/' + id)
        }
      }
    }
</script>
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
  }

</style>
