<template>
  <div class="font-weight-bold ma-3">
    <h1><br>Page Not Found;<br>: (</h1>
    <router-link to="/">
      <v-btn>go to Home</v-btn>
    </router-link>
  </div>
</template>


<script>
export default {
    name: 'NotFound',
    components: {

    }

}
</script>

<style>
h1 {
    text-align: center;
    font-size: 4rem;
}
</style>