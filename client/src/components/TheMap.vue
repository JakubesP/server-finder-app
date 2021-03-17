<template>
  <div class="map-parent">
    <div id="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["loadedData"]),
    data() {
      return {
        map: null,
      };
    },
    info() {
      return this.loadedData.data;
    },
  },
  mounted() {
    this.map = L.map("map").setView(
      [this.info.latitude, this.info.longitude],
      4
    );
    L.tileLayer(
      `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${this.maptilerKey}`,
      {
        attribution:
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      }
    ).addTo(this.map);

    let greenIcon = L.icon({
      iconUrl: "/assets/img/map_marker.png",
      iconSize: [30, 60],
      iconAnchor: [15, 60],
    });
    L.marker([this.info.latitude, this.info.longitude], {
      icon: greenIcon,
    }).addTo(this.map);
  },
  unmounted() {
    this.map.remove();
  },
};
</script>

<style scoped>
.map-parent {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

#map {
  border-radius: 1rem;
  height: 100%;
  width: 100%;
}
</style>
