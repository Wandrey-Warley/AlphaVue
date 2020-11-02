<template>
  <div class="cadastro">
    <h3>Formulario</h3>
    <form action="">
      <div>
        <Label for="name">Nome do CLiente</Label>
        <input id="name" type="text" placeholder="Nome" />
      </div>
      <div class="espaço-abaixo"></div>
      <div>
        <label for="">Raça do cachorro</label>
        <select name="" id="">
          <option value=""></option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
input[type="text"] {
  padding: 10px;
  background-color: white;
  color: black;
  border-radius: 10px;
  border: 1px solid grey;
}
.espaço-abaixo {
  padding-top: 10px;
}
.cadastro {
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
px
