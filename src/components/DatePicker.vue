<template>
  <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="dateFormatted"
        :label="label"
        prepend-icon="mdi-calendar"
        hint="DD/MM/YYYY"
        persistent-hint
        @blur="date = parseDate(dateFormatted)"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker locale="pt-BR" v-model="date" no-title @input="menu1 = false"></v-date-picker>
  </v-menu>
</template>
 
<script>
export default {
  props: ["label"],
  data: () => ({
    date: '',
    dateFormatted: '',
    menu1: false
  }),

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
      this.$emit("date-changed", this.dateFormatted);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
