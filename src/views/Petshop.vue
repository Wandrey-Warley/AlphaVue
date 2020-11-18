<template>
  <div>
    <div class="row">
      <div class="col">
        <recepcao @novo-cadastro="encaminharCliente"></recepcao>
      </div>
      <hr />
      <div class="col">
        <veterinario
          :clientes="clientesVeterinario"
          @atendido="finalizarConsulta"
        ></veterinario>
        <banho :clientes="clientesBanho" @atendido="finalizarBanho"></banho>
      </div>
      <div class="espaco-abaixo"></div>
    </div>
    <hr />
    <balanco :clientes="clientesAtendidos"></balanco>
  </div>
</template>

<script>
import Banho from "@/components/Banho";
import Veterinario from "@/components/Veterinario";
import Recepcao from "../components/Recepcao";
import Balanco from "../components/Balanco";

export default {
  components: { Recepcao, Veterinario, Banho, Balanco },
  data() {
    return {
      clientesBanho: [],
      clientesVeterinario: [],
      clientesAtendidos: []
    };
  },
  methods: {
    encaminharCliente(cliente) {
      cliente.servico.tipo === "banho"
        ? this.clientesBanho.push(cliente)
        : this.clientesVeterinario.push(cliente);
    },
    finalizarConsulta(cliente) {
      this.clientesAtendidos.push(cliente);

      this.$delete(
        this.clientesVeterinario,
        this.clientesVeterinario.findIndex(
          clienteAtendido => clienteAtendido.nome === cliente.nome
        ),
        cliente
      );
    },
    finalizarBanho(cliente) {
      this.clientesAtendidos.push(cliente);

      this.$delete(
        this.clientesBanho,
        this.clientesBanho.findIndex(
          clienteAtendido => clienteAtendido.nome === cliente.nome
        ),
        cliente
      );
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/main.scss";
</style>
