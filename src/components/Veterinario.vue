<template>
  <div>
    <div><h3>Fila de Consultas</h3></div>
    <div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Sintomas</th>
        </tr>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.idade }}</td>
          <td>{{ cliente.raca }}</td>
          <td>{{ cliente.servico.observacoes }}</td>
          <td>
            <button @click="finalizarAtendimento(cliente)">Finalizar</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Servico from "./Servico";
export default {
  props: ["clientes"],
  extends: Servico
};
</script>

<style>
</style>