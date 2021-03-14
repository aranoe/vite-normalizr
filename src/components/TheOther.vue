<template>
  <div>
    errors: {{ store.error }}
    <button @click="handleClick">Set Other Error</button><slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "../hooks/useStore";

export default defineComponent({
  name: "TheOther",
  setup() {
    const { store, updateErrors } = useStore();
    const count = ref(0);

    const handleClick = () => {
      count.value++;
      updateErrors("Other error" + count.value);
    };

    return { store, handleClick };
  },
});
</script>

<style lang="scss" scoped></style>
