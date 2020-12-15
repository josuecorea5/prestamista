<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="info">
      <b-button v-bind:to="{ name: 'Main' }" variant="info">
        <b-navbar-brand>UNIVO</b-navbar-brand>
      </b-button>
      <b-collapse is-nav>
        <b-navbar-nav>
          <b-nav-text>Diseño Web Adaptable</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
