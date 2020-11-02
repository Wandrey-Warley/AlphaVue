<template>
  <div class="cadastro">
    <h3>Formulario</h3>
    <form action="">
      <div class="input">
        <Label for="name">Nome do cliente </Label>
        <input id="name" type="text" placeholder="Nome" />
      </div>
      <div class="espaço-abaixo"></div>
      <div>
        <label for="">Raça do cachorro</label>
        <select name="" id="">
          <option value=""></option>
        </select>
      </div>
      <div>teste</div>
    </form>
  </div>
</template>

<script>
export default {};
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
}
.input {
}
</style>
px
