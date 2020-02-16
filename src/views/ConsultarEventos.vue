<template>
  <v-container class="my-5">
    <h1 class="text-center">Consultar Eventos</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="eventos of eventos" :key="eventos.id">
        <v-form>
          <v-row>
            <v-col>
              <v-card flat class="text-xs-center ma-3" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">Código do Evento: {{eventos.id}}</div>
                    <v-list-item-title class="headline mb-1">{{eventos.nome}}</v-list-item-title>
                    <v-list-item-subtitle>Faixa Etária: {{eventos.faixaEtaria}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Classificação: {{eventos.classificacao}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Valor da Entrada: {{eventos.valorEntrada}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Quantidade Convidados: {{eventos.qtdConvidados}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Local: {{eventos.local}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Data do Evento: {{eventos.dataEvento}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Horário de Início: {{eventos.horaInicio}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Horário do Término: {{eventos.horaFim}}</v-list-item-subtitle>
                  </v-list-item-content>

                  <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                </v-list-item>

                <v-card-actions>
                  <!-- <v-btn text>Participar</v-btn> -->
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Eventos from "@/services/eventos";
export default {
  components: {},
  data() {
    return {
      eventos: []
    };
  },
  mounted() {
    Eventos.listar().then(resposta => {
      console.log(resposta.data);
      this.eventos = resposta.data;
    });
  }
};
</script>