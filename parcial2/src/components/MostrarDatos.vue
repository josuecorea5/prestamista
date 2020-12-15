<template>
  <div id="MostrarDatos">
    <div>
      <b-navbar type="dark" variant="secondary">
        <b-navbar-brand>Administración de prestamos</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>Mis registros</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <br />
    </div>

    <div id="Info" style="height: 595px; overflow-y: scroll">
      <b-alert
        show
        v-if="Mensaje.MostrarMensaje"
        :variant="Mensaje.Color"
        class="Alerta"
      >
        <b>{{ Mensaje.Texto }}</b>
        <br />
      </b-alert>

      <div v-for="(Datos, i) in Info" v-bind:key="Datos._id">
        <b-card
          header=""
          header-tag="header"
          footer=""
          footer-tag="footer"
          border-variant="info"
        >
          <template #header>
            <div class="Ajustar-Elementos">
              Datos del deudor
              <div class="Ajustar-Botones">
                <b-button
                  variant="light"
                  v-b-tooltip.hover.topleft.v-primary="'Editar Registro'"
                  v-bind:to="{ name: 'EditarR', params: { id: Datos._id } }"
                >
                  <i class="fas fa-edit"></i>
                </b-button>
                <b-button
                  @click="BorrarRegistro(Datos, i)"
                  variant="light"
                  v-b-tooltip.hover.topright.v-primary="'Eliminar registros'"
                  ><i class="fas fa-trash"></i
                ></b-button>
              </div>
            </div>
          </template>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="NombreCompleto">Nombres</label>
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <b-icon icon="person-fill"></b-icon>
                  </b-input-group-prepend>
                  <input
                    type="text"
                    class="form-control"
                    id="NombreCompleto"
                    :placeholder="Datos.Nombres"
                    disabled
                  />
                </b-input-group>
              </div>
              <div class="form-group col-md-6">
                <label for="NombreCompleto">Apellidos</label>
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <b-icon icon="person-fill"></b-icon>
                  </b-input-group-prepend>
                  <input
                    type="text"
                    class="form-control"
                    id="NombreCompleto"
                    :placeholder="Datos.Apellidos"
                    disabled
                  />
                </b-input-group>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="DUI">DUI</label>
                <b-input-group>
                  <b-input-group-prepend is-text>
                    <b-icon icon="credit-card2-front-fill"></b-icon>
                  </b-input-group-prepend>
                  <input
                    type="text"
                    class="form-control"
                    id="DUI"
                    :placeholder="Datos.DUI"
                    disabled
                  />
                </b-input-group>
              </div>
              <div class="form-group col-md-6">
                <label for="">Monto otorgado</label>
                <b-input-group prepend="$">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    :placeholder="Datos.Monto_Prestado"
                  />
                </b-input-group>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Intereses a cobrar</label>
                <b-input-group append="%">
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    :placeholder="Datos.Intereses"
                  />
                </b-input-group>
              </div>
              <div class="form-grouo col-md-6">
                <label for="Plazo">Plazo otorgado</label>
                <b-input-group append="días">
                  <input
                    id="Plazo"
                    type="text"
                    class="form-control"
                    :placeholder="Datos.Plazo_Pago"
                    disabled
                  />
                </b-input-group>
              </div>
            </div>
          </form>
          <template #footer>
            <span>
              <b>Fecha de creación: </b>
              <b-badge pill variant="danger">
                {{ Datos.Fecha }}

                <span>{{ i + 1 }}</span>
              </b-badge>
            </span>
          </template>
        </b-card>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MostrarDatos",
  props: {
    Info: Array,
    Mensaje: Object,
    BorrarRegistro: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style scoped>
#MostrarDatos {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.Ajustar-Elementos {
  display: flex;
  justify-content: space-between;
}
.Ajustar-Botones {
  justify-content: flex-end;
}
</style>
