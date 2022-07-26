<template>
  <v-app>
    <router-link to="/">
      <v-app-bar app dark>
        <v-img 
          alt="Vue logo"
          :src="require('./assets/logo.png')"
          contain
          href="/"
          transition="scale-transition"
          class="shrink mr-2"
          height="45"
        />
        <v-app-bar-title>
         Vue2 with Vite
        </v-app-bar-title>
      </v-app-bar>
    </router-link>

    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- footer -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
//     HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#v-toolbar-title{
  color: white;
}
</style>
