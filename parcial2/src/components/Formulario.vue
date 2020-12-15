<template>
  <div class="Formulario">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand>Formulario de registro</b-navbar-brand>
      </b-navbar>
    </div>
    <!--Aquí comienza el formulario que enviará los datos a MongoDB-->
    <div class="container modal-content">
      <b-form @submit.prevent="CrearRegistro" v-if="show">
        <b-form-group
          id="Nombres"
          label="Nombres"
          label-for="Nombres_Prestamista"
        >
          <b-form-input
            type="text"
            id="Nombres_Prestamista"
            v-model="DatosPrestamista.Nombres"
            required
            placeholder="Ingrese los nombres del prestamista"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="Apellidos"
          label="Apellidos"
          label-for="Apellidos_Prestamista"
        >
          <b-form-input
            type="text"
            id="Apellidos_Prestamista"
            required
            v-model="DatosPrestamista.Apellidos"
            placeholder="Ingrese los apellidos del prestamista"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="DUI"
          label="DUI"
          label-for="DUI_Prestamista"
          description="Sólo está permitido ingresar números"
        >
          <b-form-input
            type="number"
            id="DUI_Prestamista"
            :formatter="LimitarIngreso"
            required
            v-model="DatosPrestamista.DUI"
            placeholder="Ingrese el DUI del prestamista"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="Monto_Prestado"
          label="Monto Prestado"
          label-for="Monto_Prestado_Prestamista"
        >
        <b-input-group prepend="$">
          <b-form-input
            type="number"
            step="any"
            id="Monto_Prestado_Prestamista"
            required
            v-model="DatosPrestamista.Monto_Prestado"
            placeholder="Ingrese el monto a prestar"
          ></b-form-input>
        </b-input-group>
        </b-form-group>

        <b-form-group
          id="Intereses"
          label="Intereses"
          label-for="Intereses_Prestamista"
        >
        <b-input-group append="%">
          <b-form-input
            type="number"
            step="any"
            id="Intereses_Prestamista"
            required
            min="0"
            max="100"
            v-model="DatosPrestamista.Intereses"
            placeholder="Ingrese los intereses a cobrar"
          ></b-form-input>
        </b-input-group>
        </b-form-group>

        <b-form-group id="Plazo" label="Plazo de pago" label-for="Plazo_Pago">
          <b-input-group append="días">
            <b-form-input
              type="number"
              step="any"
              id="Plazo_Pago"
              required
              v-model="DatosPrestamista.Plazo_Pago"
              placeholder="Ingrese el plazo disponible para recibir el pago"
              description="El plazo debe de ser expresado en días"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <div class="Ajustar-Elementos">
          <b-button type="submit" variant="info">Enviar datos</b-button>
          <b-button type="reset" variant="danger"
            >Formatear campos</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      DatosPrestamista: {
        Nombres: "",
        Apellidos: "",
        DUI: "",
        Monto_Prestado: "",
        Intereses: "",
        Plazo_Pago: "",
      },
      show: true,
    };
  },
  mounted() {
    this.$emit("DatosPrestamista", this.DatosPrestamista);
  },
  methods: {
    LimitarIngreso(e) {
      return String(e).substring(0, 9);
    },
  },
  props: {
    CrearRegistro: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.Ajustar-Elementos {
  display: flex;
  justify-content: space-between;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>