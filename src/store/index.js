import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
          {
          id:1,
           name:"pooria",
           icon:'note_add',
             completed:false,
          dueDated:'12/05/2019',
           dueTime:'18:30'
         },
         {
             id:2,
             icon:'visibility',
            name:"mohamad",
             completed:false,
            dueDated:'1/09/2032',
            dueTime:'19:30'
          },
           {
           id:3,
            icon:'paid',
            name:"ali",
             completed:false,
             dueDated:'08/05/2021',
            dueTime:'20:30'

         }

        ]
  },
  getters:{
    tasks:(state)=>
    {
      return state.tasks
    }
  },
  mutations: {
    updateTask(state,payload){
console.log('payload',payload)
    }
  },
  actions: {
    updateTask({commit},payload){
      commit('updateTask',payload)
    }
  },
  modules: {
  }
})
