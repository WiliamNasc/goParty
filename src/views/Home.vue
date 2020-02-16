<template>
  <div>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-form>
          <v-row class="text-center">
            <v-col>
              <h1>Home</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet :color="colors[i]" height="100%">
                    <div class="display-4">{{ slide }}</div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        "Poste os seus eventos aqui !!!",
        "Bem vindo a maior plataformacdo país.",
        "Se cadastre e de um goParty ;)",
        "Aqui têm eventos para todos públicos.",
        "Eventos de A-Z em qualquer data."
      ]
    };
  }
};
</script>
