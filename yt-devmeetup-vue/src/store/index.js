import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {imageUrl: 'http://www.the-modern-dad.com/file/2014/11/new-balance.jpg', id: 'adfgagdge323', title: 'Sales 50%', date: '2017-08-12'},
      {imageUrl: 'https://content.nike.com/content/dam/one-nike/en_us/season-2015-su/Shop/Launch/5-30/Nike-Air-Zoom-Pegasus-32-M-Pair.jpg.transform/default/Nike-Air-Zoom-Pegasus-32-M-Pair.jpg', id: 'asfdgsrfh242', title: 'Sales 50%', date: '2017-05-13'},
      {imageUrl: 'http://www.jordans2016cheap.com/loadpic/Nike%20Free%205.0%20+/Nike%20Free%205.0+%20Men/Nike%20Free%205.0+%20Green%20White%20Running%20Shoe.jpg', id: 'asfdgsrfh2fdh42', title: 'Sales 50%', date: '2017-05-13'}]
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        detail: payload.detail,
        price: payload.price,
        imageUrl: payload.imageUrl,
        other: payload.other,
        date: payload.date,
        id: 'asgag'
      }
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.fine((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    }
  }
})
