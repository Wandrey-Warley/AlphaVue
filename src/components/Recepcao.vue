<template>
  <div class="cadastro">
    <div>
      <h3>Formulario</h3>
    </div>
    <form @submit.prevent="cadastrarCliente">
      <div>
        <Label for="name">Nome do cliente: </Label>
        <input
          id="name"
          type="text"
          v-model="cliente.nome"
          placeholder="Nome"
        />
      </div>
      <div class="espaço-abaixo"></div>
      <div>
        <label for="racas">Raça do cachorro: </label>
        <select id="racas" v-model="cliente.raca">
          <option v-for="(raca, index) in racas" :key="index">
            {{ raca.nome }}
          </option>
        </select>
      </div>
      <div class="espaço-abaixo"></div>
      <div class="Age">
        <Label for="name">Idade: </Label>
        <input id="name" type="number" value="0" v-model="cliente.idade" />
        <div class="erro" v-if="cliente.idade > 15">
          Tem certeza que é um cachorro?
        </div>
        <div class="erro" v-if="cliente.idade < 0">
          Idade Invalida
        </div>
      </div>
      <div class="espaço-abaixo"></div>
      <div>
        <label>Serviço: </label>
        <select v-model="cliente.servico">
          <option
            v-for="(servico, index) in servicos"
            :key="index"
            :value="servico"
          >
            {{ servico.nome }} ({{ servico.preco | grana }})
          </option>
        </select>
      </div>
      <div class="espaço-abaixo"></div>
      <div v-if="cliente.servico.tipo === 'consulta'">
        <label>Sintomas: </label
        ><textarea rows="3" v-model="cliente.servico.observacoes"></textarea>
        <div class="espaço-abaixo"></div>
      </div>
      <input
        type="submit"
        v-bind:disabled="
          cliente.idade > 15 ||
            cliente.idade < 0 ||
            cliente.nome.length === 0 ||
            cliente.raca.length === 0 ||
            cliente.servico.nome.length === 0
        "
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Cachorro from "@/models/cachorro";
import scss from "../assets/styles/main.scss";
export default {
  data() {
    return {
      cliente: new Cachorro(),
      racas: [],
      servicos: []
    };
  },
  async created() {
    this.racas = await this.buscarRacas();
    this.servicos = await this.buscarServicos();
  },
  mounted() {
    console.log(this);
  },
  methods: {
    async buscarRacas() {
      const { data } = await axios.get("http://localhost:3000/racas");
      return data;
    },
    async buscarServicos() {
      const { data } = await axios.get("http://localhost:3000/servicos");
      return data;
    },
    cadastrarCliente() {
      this.$emit("novo-cadastro", this.cliente);
      this.cliente = new Cachorro();
    }
  }
};
</script>

<style lang="scss" scoped>
.erro {
  color: red;
}
input[type="number"] {
  width: 2rem;
}
</style>

