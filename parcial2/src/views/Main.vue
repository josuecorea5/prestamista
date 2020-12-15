<template>
  <div class="App">
      <navbar />
    <b-container fluid>
      <b-row>
        <p v-if="Info == ['']">Hola</p>
        <b-col cols="12" class="p-0">
          <Alerta :Alerta="Alerta" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" class="p-1">
          <Formulario
            :CrearRegistro="CrearRegistro"
            @DatosPrestamista="DatosPrestamista = $event"
          />
        </b-col>
        <b-col cols="6" class="p-1">
          <MostrarDatos
            :Info="Info"
            :Mensaje="Mensaje"
            :BorrarRegistro="BorrarRegistro"
          />

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Formulario from "../components/Formulario";
import MostrarDatos from "../components/MostrarDatos";
import Alerta from "../components/Alerta";
import navbar from '../components/nav';


export default {
    name: "Main",
 components: {
    Formulario,
    MostrarDatos,
    Alerta,
    navbar
  },
  data() {
    return {
      Info: [],
      DatosPrestamista: {},
      Alerta: {
        Color: "",
        Mostrar_Alerta: "",
        Texto: "",
      },
      Mensaje: {
        Color: "danger",
        MostrarMensaje: false,
        Texto: "No existen registros en la base",
      },
    };
  },
  async mounted() {
    const respuesta = await axios.get("api/nuevaPrestamista/");
    this.Info = respuesta.data;

    const ComprobarExistencia = this.Info.length;
    if (ComprobarExistencia == 0) {
      this.Mensaje.MostrarMensaje = true;
    } else {
      this.Mensaje.MostrarMensaje = false;
    }
  },
  methods: {
    async CrearRegistro() {
      const respuesta = await axios.post("api/nuevaPrestamista/", {
        Nombres: this.DatosPrestamista.Nombres,
        Apellidos: this.DatosPrestamista.Apellidos,
        DUI: this.DatosPrestamista.DUI,
        Monto_Prestado: this.DatosPrestamista.Monto_Prestado,
        Intereses: this.DatosPrestamista.Intereses,
        Plazo_Pago: this.DatosPrestamista.Plazo_Pago,
      });
      this.Info.push(respuesta.data);
      this.DatosPrestamista.Nombres = "";
      this.DatosPrestamista.Apellidos = "";
      this.DatosPrestamista.DUI = "";
      this.DatosPrestamista.Monto_Prestado = "";
      this.DatosPrestamista.Intereses = "";
      this.DatosPrestamista.Plazo_Pago = "";

      this.Alerta.Color = "success";
      this.Alerta.Mostrar_Alerta = true;
      this.Alerta.Texto = "El registro se ha agregado con éxito.";

      this.Mensaje.MostrarMensaje = false;
    },
    async BorrarRegistro(Registro, id) {
      await axios.delete("api/nuevaPrestamista/" + Registro._id);
      this.Info.splice(id, 1);

      this.Alerta.Color = "info";
      this.Alerta.Mostrar_Alerta = true;
      this.Alerta.Texto = "El registro se ha eliminado con éxito.";

      const ComprobarExistencia = this.Info.length;
      if (ComprobarExistencia == 0) {
        this.Mensaje.MostrarMensaje = true;
      } else {
        this.Mensaje.MostrarMensaje = false;
      }
    },
  },
}
</script>

<style>

</style>