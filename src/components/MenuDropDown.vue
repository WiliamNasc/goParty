<template>
  <v-menu open-on-hover bottom offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">Eventos <v-icon> mdi-menu-down</v-icon></v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>
          <a
            v-bind:href="item.route"
            style="text-decoration: none"
            class="dark black--text"
          >{{ item.title }}</a>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [{ title: "Publicar Evento", route: "/cadastrareventos" },
            { title: "Consultar Eventos", route: "/consultareventos" },
            {title: "Gerenciar Evento", route: "/gerenciarevento"}],
    disabled: false,
    absolute: false,
    openOnHover: false,
    value: false,
    closeOnClick: true,
    closeOnContentClick: true,
    offsetX: false,
    offsetY: true
  })
};
</script>