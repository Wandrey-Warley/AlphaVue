<template>
  <div>
    <div><h2>Isto é um balanço</h2></div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.idade }}</td>
          <td>{{ cliente.raça }}</td>
          <td>{{ cliente.servico.nome }}</td>
          <td>{{ cliente.servico.preco | grana }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td colspan="4">{{ totalServicos | grana }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: ["clientes"],
  computed: {
    totalServicos() {
      if (!Array.isArray(this.clientes)) {
        return 0;
      }
      return this.clientes.reduce(
        (total, cliente) => total + cliente.servico.preco,
        0
      );
    }
  }
};
</script>

<style>
</style>