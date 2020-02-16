<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>#goParty <v-icon> mdi-emoticon-cool</v-icon></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <MenuDropDown />
        <v-btn to="/perfilusuario">Perfil</v-btn>
        <v-btn to="/about" text>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import MenuDropDown from '@/components/MenuDropDown.vue';
export default {
  components: {
    MenuDropDown,
  }
}
</script>