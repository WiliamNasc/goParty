<template>
    <div>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-form>
          <v-row class="text-center">
            <v-col>
              <v-card flat class="text-xs-center ma-3" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <!-- <div class="overline mb-4"><h1>Login</h1></div> -->
                    <v-list-item-title class="headline mb-1">Login</v-list-item-title>
                    <v-list-item-subtitle><v-text-field label="Email" placeholder="Email"></v-text-field></v-list-item-subtitle>
                    <v-list-item-subtitle><v-text-field type="password" label="Password" placeholder="Password"></v-text-field></v-list-item-subtitle>
                  </v-list-item-content>

                  <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                </v-list-item>

                <v-card-actions>
                  <v-btn text>Entrar</v-btn>
                  <v-btn to="/cadastrarusuario" text>Registrar Usuário</v-btn>
                  <v-btn text>Sair</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-layout>
    </v-container>
  </div>    
</template>

<script>
export default {
    data (){
        return{
            
        }
    }
}
</script>