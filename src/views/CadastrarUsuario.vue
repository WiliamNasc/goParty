<template>
  <div>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-form>
          <v-row>
            <v-col>
              <h1>Cadastrar Usuário</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Nome" placeholder="Nome" outlined shaped></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Email" placeholder="Email" outlined shaped></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field label="Password" placeholder="Password" outlined shaped></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn>Cadastrar</v-btn>
            </v-col>
            <v-col>
              <v-btn to="/login">Cancelar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>