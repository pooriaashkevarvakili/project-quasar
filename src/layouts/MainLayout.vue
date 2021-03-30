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
        <q-item clickable v-ripple to="/pageTodo">
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" icon="list" />
          </q-item-section>

          <q-item-section>todo</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/pageSettings">
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" icon="settings" />
          </q-item-section>

          <q-item-section>settings</q-item-section>
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
      essentialLinks: linksData
    }
  }
}
</script>
