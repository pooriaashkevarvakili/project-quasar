<template>
  <q-page class="q-pa-md" style="max-width: 350px">
    <q-list bordered>
      <q-item v-for="task in tasks"
              @click="taskProfect"
              clickable v-ripple :key="task.id">
        <q-item-section avatar>
          <q-icon color="primary" :name="task.icon" />
        </q-item-section>
        <q-item-section>{{task.name}}</q-item-section>
        <q-item-section avatar>
        </q-item-section>
        <q-item-section>{{task.dueDated}}</q-item-section>
        <q-item-section avatar>
        </q-item-section>
        <q-item-section>{{task.dueTime}}</q-item-section>
        <q-item-section avatar>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import {mapActions} from "vuex"
export default {
     props:['task','id'],
  methods:{
...mapActions('tasks',['updateTask'])
  },
  name: "PageTodo",
  computed: {
    tasks() {
return this.$store.getters.tasks
    }
  },


  methods:{
    taskProfect(){
     this.tasks.completed=!this.tasks.completed
    }
  }
}
</script>

<style scoped>

</style>
