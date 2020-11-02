<template>
  <div class="cadastro">
    <h3>Formulario</h3>
    <form action="">
      <div class="Name">
        <Label for="name">Nome do cliente </Label>
        <input id="name" type="text" placeholder="Nome" />
      </div>
      <div class="espaço-abaixo"></div>
      <div>
        <label for="racas">Raça do cachorro</label>
        <select name="" id="racas">
          <option value="" v-for="(raca, index) in racas" :key="index">{{
            raca.nome
          }}</option>
        </select>
      </div>
      <div class="espaço-abaixo"></div>
      <div class="Age">
        <Label for="name">Idade </Label>
        <input id="name" type="number" placeholder="Idade" />
      </div>
      <div class="espaço-abaixo"></div>
      <div>
        <label for="servicos">Serviço</label>
        <select name="" id="servicos">
          <option value="" v-for="(servicos, index) in servicos" :key="index"
            >{{ servicos.nome }} ({{ servicos.preco | grana }})</option
          >
        </select>
      </div>
      <div class="espaço-abaixo"></div>
      <button>SALVAR</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      racas: [],
      servicos: [],
    };
  },
  async created() {
    this.racas = await this.buscarRacas();
    this.servicos = await this.buscarServicos();
  },
  methods: {
    async buscarRacas() {
      const { data } = await axios.get('http://localhost:3000/racas');
      return data;
    },
    async buscarServicos() {
      const { data } = await axios.get('http://localhost:3000/servicos');
      return data;
    },
  },
};
</script>

<style lang="scss">
input[type='text'] {
  padding: 10px;
  background-color: white;
  color: black;
  border-radius: 10px;
  border: 1px solid grey;
  width: 200px;
}
.espaço-abaixo {
  padding-top: 10px;
}
.cadastro {
  border: 1px solid grey;
  border-radius: 5px;
  width: 50%;
}
</style>
px
