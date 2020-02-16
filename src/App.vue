<template>
  <v-app>
    <TooBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TooBar from './components/TooBar'
export default {
  name: "App",

  components: {
      TooBar
    },

  data: () => ({
    
  })
};
</script>
