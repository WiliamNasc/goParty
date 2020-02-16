<template>
  <v-select :items="items" label="Faixa Etária" dense></v-select>
</template>

<script>
  export default {
    data: () => ({
      items: ['Livre', 'Infantil', 'Adulto'],
    }),
  }
</script>