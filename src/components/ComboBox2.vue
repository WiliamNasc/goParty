<template>
  <v-select :items="items" label="Classificação" dense></v-select>
</template>

<script>
  export default {
    data: () => ({
      items: ['Cultural', 'Balada', 'HP'],
    }),
  }
</script>