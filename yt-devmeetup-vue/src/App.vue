<template>
  <v-app>

   <v-navigation-drawer temporary v-model="sideNav">
    <v-list>
     <v-list-title v-for="item in menuItems"
      :key="item.title"
      :to="item.link">
      <v-list-title-action>
     <v-icon>{{ item.icon }}</v-icon>
    </v-list-title-action>
   <v-list-title-content>{{ item.title }} </v-list-title-content>
  </v-list-title>
</v-list>
 </v-navigation-drawer>
   <v-toolbar dark class="primary">
    <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
   class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
  <v-toolbar-title> <router-link to="/" tag="span" style="cursor: pointer">Oh My Shoes!</router-link>  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-xs-only">
      <v-btn
      flat v-for="item in menuItems"
      :key="item.title"
      :to="item.link">
     <v-icon left>{{ item.icon }}  </v-icon>
       {{ item.title }}
       </v-btn>
       </v-toolbar-items>
  </v-toolbar>
    <main>
     <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [

         {icon: 'shopping_cart', title: 'Item', link: '/meetups'},
            {icon: 'child_friendly', title: 'Add Item', link: 'meetup/new'},
        {icon: 'lightbulb_outline', title: 'Promotion', link: '/profile'},
        {icon: 'supervisor_account', title: 'SIGN UP', link: '/signup'},
        {icon: 'lock_open', title: 'SIGN IN', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'shopping_cart', title: 'Item', link: '/meetups'},
            {icon: 'hearing', title: 'Promotion', link: 'meetup/new'},
            {icon: 'person', title: 'PROFILE', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }

</script>
<style lang="stylus">
@import './stylus/main.styl'
</style>
