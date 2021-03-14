<template>
  <div
    class="relative shadow-md mt-3 bg-white rounded px-3 pt-3 pb-5 border border-white"
  >
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ task.title }}
      </p>

      <img
        class="w-10 h-10 rounded-full ml-3"
        :src="task.assignedTo.profileImg"
        :title="task.assignedTo.name"
        alt="Avatar"
      />
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{ task.date }}</span>
      <badge v-if="task.type" :color="badgeColor">{{ task.type }}</badge>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, PropType } from "vue";
import Badge from "./Badge.vue";
import { CanbanTask } from "./dummyCanbanModel";
export default {
  name: "TaskCard",
  components: {
    Badge,
  },
  props: {
    task: {
      type: Object as PropType<CanbanTask>,
      default: () => ({}),
    },
  },
  setup(props) {
    const mappings: any = {
      Design: "purple",
      "Feature Request": "teal",
      Backend: "blue",
      QA: "green",
      default: "teal",
    };
    console.log(props.task);
    const badgeColor = computed(
      () => mappings[props.task.type] || mappings.default
    );
    return { badgeColor };
  },
};
</script>
