<template>
  <div id="app" class="p-6">
    <canban-board />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CanbanBoard from "./components/CanbanBoard.vue";
export default defineComponent({
  name: "App",
  components: {
    CanbanBoard,
  },
  setup() {},
});
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app,
.app {
  height: 100%;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.title p {
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
}
.header {
  height: 50px;
  background: rgb(78, 97, 121);
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.handle {
  border-top-left-radius: 0.5rem;
  background: rgb(43, 53, 66);
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.ghost {
  opacity: 0.5;
  background: rgb(235, 242, 252);
  border: 3px dashed rgb(159, 185, 218);
}
.list-group {
  display: flex;
  height: 100%;
}
.list-group-item {
  background: rgb(224, 238, 255);
  width: 300px;
  margin: 0 1rem;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.3);
}
</style>
