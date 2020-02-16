<template>
  <div>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-form>
          <v-row class="text-center">
            <v-col>
              <h1>Publicar Evento</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="evento.nome"
                label="Título"
                placeholder="Título"
                outlined
                shaped
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="evento.local"
                label="Local"
                placeholder="Local"
                outlined
                shaped
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select v-model="evento.classificacao" :items="itemsClassificacao" label="Classificação" dense></v-select>
            </v-col>
            <v-col>
              <v-select v-model="evento.faixaEtaria" :items="itemsFaixaEtaria" label="Faixa Etária" dense></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="evento.qtdConvidados"
                label="Quantidade de convidados"
                placeholder="Quantidade de convidados"
                outlined
                shaped
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="evento.valorEntrada" label="R$" placeholder="Valor da Entrada" outlined shaped></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <DatePicker label="Data do Evento" v-on:date-changed="atualizaDataEvento" />
            </v-col>
            <v-col>
              <TimePicker label="Horário de Início" v-on:time-changed="atualizaHorarioInicio" />
            </v-col>
            <v-col>
              <TimePicker label="Horário do Término" v-on:time-changed="atualizaHorarioFim" />
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col>
              <v-btn @click.native="salvar">Publicar</v-btn>
            </v-col>
            <v-col>
              <v-btn>Cancelar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";
import TimePicker from "@/components/TimePicker.vue";
import Eventos from "@/services/eventos";
export default {
  components: {
    DatePicker,
    TimePicker
  },

  data() {
    return {
      evento: {
        nome: "",
        faixaEtaria: "",
        classificacao: "",
        valorEntrada: "",
        qtdConvidados: "",
        local: "",
        dataEvento: "",
        horaInicio: "",
        horaFim: ""
      },

      itemsClassificacao: ["Cultural", "Balada", "HP"],
      itemsFaixaEtaria: ["Livre", "Infantil", "Adulto"],

      date: null,
      menu: false
    };
  },

  methods: {
    salvar() {
      Eventos.salvar(this.evento).then();
      this.evento = {};
      alert("Evento Publicado com sucesso !!!!");
    },

    atualizaDataEvento(dataEvento) {
      this.evento.dataEvento = dataEvento;
    },

    atualizaHorarioInicio(horaInicio) {
      this.evento.horaInicio = horaInicio;
    },

    atualizaHorarioFim(horaFim) {
      this.evento.horaFim = horaFim;
    }
  },
};
</script>