<template>
  <main>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <navbar />
    <div class="container">
      <form @submit.prevent="update" method="POST" class="container__form">
        <!-- -->
        <b-form-group
          id="Nombres"
          label="Nombres: "
          label-for="Nombres_Prestamista"
        >
          <b-input
            class="input"
            type="text"
            placeholder="Nombres"
            v-model="show.Nombres"
          />
        </b-form-group>

        <b-form-group
          id="Apellidos"
          label="Apellidos: "
          label-for="Apellidos_Prestamista"
        >
          <b-input
            class="input"
            type="text"
            placeholder="Apellidos"
            v-model="show.Apellidos"
        /></b-form-group>

        <b-form-group
          id="DUI"
          required
          label="DUI: "
          label-for="DUI_Prestamista"
        >
          <b-input
            class="input"
            type="number"
            placeholder="DUI"
            :formatter="LimitarIngreso"
            v-model="show.DUI"
        /></b-form-group>

        <b-form-group
          id="MontoPrestado"
          label="Monto Prestado: "
          label-for="MPrestado_Prestamista"
        >
          <b-input
            class="input"
            type="number"
            step="any"
            v-model="show.Monto_Prestado"
            placeholder="Monto Prestado"
        /></b-form-group>

        <b-form-group
          id="Intereses"
          label="Intereses: "
          label-for="Nombres_Prestamista"
        >
          <b-input
            class="input"
            type="number"
            min="1"
            max="100"
            id="myPercent"
            v-model="show.Intereses"
            placeholder="Porcentaje de intereses"
            required
        /></b-form-group>

        <b-form-group
          id="Plazo de Pago"
          label="Plazo de Pago: "
          label-for="Nombres_Prestamista"
        >
          <b-input
            class="input"
            type="number"
            id=""
            v-model="show.Plazo_Pago"
            placeholder="Plazo de pago"
            required
        /></b-form-group>

        <button
          class="btn btn-primary btn-enviar"
          type="submit"
          name="guardarPrestamo"
        >
          Guardar
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import navbar from "../components/nav";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "edit",
  components: {
    navbar,
  },
  data() {
    return {
      show: [],
    };
  },
  async mounted() {
    const respuesta = await axios.get(
      "api/nuevaPrestamista/" + this.$route.params.id
    );
    this.show = respuesta.data;
    console.log(this.show);
  },
  methods: {
    LimitarIngreso(e) {
      return String(e).substring(0, 9);
    },

    async update() {
      await axios
        .put("api/nuevaPrestamista/" + this.show._id, {
          Nombres: this.show.Nombres,
          Apellidos: this.show.Apellidos,
          DUI: this.show.DUI,
          Monto_Prestado: this.show.Monto_Prestado,
          Intereses: this.show.Intereses,
          Plazo_Pago: this.show.Plazo_Pago,
        })
        .then(
          Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Registro actualizado con éxito!",
            showConfirmButton: false,
            timer: 2000,
          })
        )
        .then(
          setTimeout(function () {
            window.location.href = "/";
          }, 2500)
        );
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #17a2b8;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  background: linear-gradient(#fafafa, #fcfcfc);
  width: 40%;
  border-radius: 25px;
  font-weight: 500;
}
.container__form {
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
}
.input {
  background-color: transparent;
  border: 2px solid #ababab;
  border-radius: 0.4em;
  font-size: 16px;
  font-family: "Muli", sans-serif;
  margin-bottom: 10px;
  padding: 0px 20px;
  outline: none;
  height: 50px;
}
.btn-enviar {
  width: 30%;
  margin: 0 auto;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
