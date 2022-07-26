<template>
  <div>
    <HelloWorld msg="Hello Vue 2 + Vuetify + Vite!" />

    <router-link to="/notfound">
      <v-btn>go to NotFound</v-btn>
    </router-link>
  </div>
</template>

<script>
import HelloWorld from '../HelloWorld.vue';
export default {
    name: 'Home',
    components: {
      HelloWorld,
    }
}
</script>