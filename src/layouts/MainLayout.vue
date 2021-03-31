<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
<q-footer class="row justify-center bg-orange">
  <q-tabs class="bg-orange text-white shadow-2" v-for="tab in tabs" :key="tab.id">
    <q-route-tab :to="tab.to"  :icon="tab.icon" :label="tab.label" />

  </q-tabs>
</q-footer>
    <q-drawer

      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"

        >
          Navigation
        </q-item-label>
        <q-item clickable v-ripple :to="nav.to" v-for="nav in navs" :key="nav.id">
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" :icon="nav.icon" />
          </q-item-section>

          <q-item-section>{{nav.label}}</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import PageTodo from "components/PageTodo";

const linksData = [
  {
    title: 'todo',
    caption: 'quasar.dev',
    icon: 'list',

  },



];

export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      navs:[
        {
          id:1,
             label: 'todo',
          icon:'list',
          to:'/pageTodo'
        },
        {
          id:2,
          label: 'settings',
          icon:'settings',
          to:'/pageSettings'
        },
        {
          id:3,
          label: 'About',
          icon:'info',
          to:'/about'
        }
      ],
      tabs:[
        {
          id:1,
          label: 'todo',
          icon:'list',
          to:'/pageTodo'
        },
        {
          id:2,
          label: 'settings',
          icon:'settings',
          to:'/pageSettings'
        },
        {
          id:3,
          label: 'About',
          icon:'info',
          to:'/about'
        }

      ]
    }
  }
}
</script>
<style>
@media screen and(min-width: 768px) {
  .q-footer{
    display:none;
  }
}
</style>
