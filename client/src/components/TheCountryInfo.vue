<template>
  <app-card class="info-container">
    <h2 class="ip-address">{{ info.ip }}</h2>
    <h4 class="country">
      {{ info.country_name }}/{{ info.continent_name }}
    </h4>

    <img
      :src="info.location.country_flag"
      alt="Flag image"
      class="flag-image"
    />

    <table class="data-table">
      <tr>
        <th colspan="3" class="data_table__header">Location</th>
      </tr>

      <tr>
        <th class="data_table__sub-header">City</th>
        <th class="data_table__sub-header">Region</th>
        <th class="data_table__sub-header">Capital</th>
      </tr>

      <tr>
        <td>{{ info.region_name }}</td>
        <td>{{ info.city }}</td>
        <td>{{ info.location.capital }}</td>
      </tr>

      <tr>
        <th colspan="3" class="data_table__header">Languages</th>
      </tr>

      <tr>
        <th class="data_table__sub-header">Code</th>
        <th class="data_table__sub-header">Name</th>
        <th class="data_table__sub-header">Native</th>
      </tr>

      <tr v-for="lang in info.location.languages" :key="lang.code">
        <td>{{ lang.code }}</td>
        <td>{{ lang.name }}</td>
        <td>{{ lang.native }}</td>
      </tr>
    </table>

    <table class="data-table">
      <tr>
        <th colspan="2" class="data_table__header">Geolocation</th>
      </tr>

      <tr>
        <th class="data_table__sub-header">Lat</th>
        <td>{{ info.latitude }}</td>
      </tr>

      <tr>
        <th class="data_table__sub-header">Lng</th>
        <td>{{ info.longitude }}</td>
      </tr>

      <tr>
        <td colspan="2" class="google-maps-link-cell">
          <a :href="info.maps_url" target="_blank" class="google-maps-link">Check on maps</a>
        </td>
      </tr>
    </table>
  </app-card>
</template>

<script>
export default {
  computed: {
    info() {
      return this.$store.getters.loadedData.data;
    },
  },
};
</script>

<style scoped>
.info-container {
  max-height: 100%;
  overflow: auto;
}

.ip-address {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 1rem 0;
}

.country {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.flag-image {
  display: block;
  border-radius: 1rem;
  width: 90%;
  max-width: 30rem;
  margin: 2rem auto;
}

.data-table {
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  margin: 3rem 0;
}

.data-table,
th,
td {
  padding: 1rem;
  background-color: var(--secondary-color-medium);
}

.data_table__header {
  text-align: center;
  background-color: var(--secondary-color-dark);
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: 3px;
  font-variant: small-caps;
}

.data_table__sub-header {
  font-weight: bold;
}

.google-maps-link-cell {
  text-align: center;
}

.google-maps-link:link, .google-maps-link:visited {
  text-decoration: none;
  color: inherit;
  text-align: center;
  transition: all 0.1s ease-in;
}

.google-maps-link:hover {
  letter-spacing: 2px;
}
</style>
