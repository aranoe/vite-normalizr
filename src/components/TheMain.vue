<template>
  <div>errors: {{ store.error }} <slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../hooks/useStore";

export default defineComponent({
  name: "TheMain",
  setup() {
    const { store } = useStore();

    return { store };
  },
});
</script>

<style lang="scss" scoped></style>
