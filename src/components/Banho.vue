<template>
  <div>
    <div><h3>Fila de Banho</h3></div>
    <div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Tosa?</th>
        </tr>
        <tr
          v-for="(cliente, index) in clientes"
          :key="index"
          v-bind:class="cliente.servico.finalizado ? 'atendido' : ''"
        >
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.idade }}</td>
          <td>{{ cliente.raca }}</td>
          <td>{{ cliente.servico.extra | pergunta }}</td>
          <td>
            <button @click="finalizarAtendimento(cliente)">
              Finalizar
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Servico from "./Servico";
import Vue from "vue";
export default {
  props: ["clientes"],
  extends: Servico,
  filters: {
    pergunta: function(value) {
      if (typeof value !== "boolean") {
        return "Não";
      }
      return value ? "Sim" : "Não";
    }
  }
};
</script>
<style lang='scss'  scoped>
.atendido {
  color: green;
  font-weight: bold;
}
</style>