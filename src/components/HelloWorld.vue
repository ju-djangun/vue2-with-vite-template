 <template>
  <div>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v2.vuejs.org/" target="_blank">Vue 2 Documentation</a>
  </p>

  <v-btn @click="count++">count is: {{ count }}</v-btn><br/><br/>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
