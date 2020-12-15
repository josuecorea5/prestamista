<template>
  <div id="Alerta">
    <div>
      <b-alert
        show
        v-if="Alerta.Mostrar_Alerta"
        :variant="Alerta.Color"
        class="Alerta"
        >
        <b>{{ Alerta.Texto }}</b>
        <br />
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    Alerta: Object,
  },
};
</script>

<style>
.Alerta {
  margin-top: 15px;
  text-align: center;
}
</style>