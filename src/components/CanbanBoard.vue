<template>
  <CanbanConfirmModal
    v-if="modalOpen"
    @cancel="handleTaskCancel"
    @confirm="handleTaskConfirm"
  />

  <div class="flex flex-col items-start justify-start h-full">
    <div class="flex">
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        @click="addColumn"
      >
        Add Column
      </button>
      <div class="flex items-center ml-6">
        <input
          id="ask-for-confirmation"
          type="checkbox"
          v-model="askForConfirmation"
        />
        <label for="ask-for-confirmation" class="ml-2">
          Ask For Confirmation
        </label>
      </div>
    </div>
    <div class="flex py-6 h-full">
      <draggable
        class="h-full flex"
        handle=".column-handle"
        :list="columns"
        :animation="200"
        itemKey="id"
        ghost-class="ghost-column"
        :move="handleColumnMove"
      >
        <template #item="{ element: column }">
          <div
            class="relative shadow-xl flex flex-col bg-gray-100 p-4 rounded-lg column-width rounded mr-4"
          >
            <div class="flex align-center justify-between w-full">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="cursor-pointer w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <p
                  class="flex align-center justify-center text-gray-700 font-semibold font-sans tracking-wide text-sm ml-2"
                >
                  {{ column.title }}
                </p>
              </div>
              <div class="column-handle cursor-move">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <g><rect fill="none" height="24" width="24" /></g>
                  <g>
                    <g>
                      <g><path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z" /></g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <draggable
              class="flex-grow"
              :list="column.tasks"
              :animation="200"
              itemKey="id"
              ghostClass="ghost-card"
              dragClass="drag-card"
              group="tasks"
              @start="handleDragTaskStart"
              @end="handleDragTaskEnd"
            >
              <template #item="{ element: task }">
                <task-card :task="task"></task-card>
              </template>
            </draggable>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import draggable from "vuedraggable";
import TaskCard from "./TaskCard.vue";
import { reactive, ref } from "vue";
import { CanbanColumn, dummyCanbanModel, user1 } from "./dummyCanbanModel";
import CanbanConfirmModal from "./CanbanConfirmModal.vue";

export default {
  name: "CanbanBoard",
  components: {
    TaskCard,
    draggable,
    CanbanConfirmModal,
  },
  setup() {
    const columns = reactive<CanbanColumn[]>(dummyCanbanModel);
    const prevColumns = reactive<CanbanColumn[]>(
      JSON.parse(JSON.stringify(columns))
    );
    const modalOpen = ref(false);
    const askForConfirmation = ref(false);

    const handleTaskCancel = () => {
      Object.assign(columns, prevColumns);
      modalOpen.value = false;
    };

    const handleTaskConfirm = () => {
      modalOpen.value = false;
    };

    const handleDragTaskStart = () => {
      Object.assign(prevColumns, JSON.parse(JSON.stringify(columns)));
    };
    const handleDragTaskEnd = () => {
      if (askForConfirmation.value) modalOpen.value = true;
    };

    const addColumn = () => {
      columns.push({
        id: columns.length + 1,
        title: "New Column " + columns.length,
        tasks: [
          {
            id: 1,
            title: "Provide documentation on integrations",
            date: "Sep 12",
            type: "Design",
            assignedTo: user1,
          },
        ],
      });
    };

    const handleColumnMove = (e: any) => {};

    const handleDragStart = (e: any) => {};
    const modifyDragItem = (dataTransfer: any) => {
      let img = new Image();
      img.src =
        "https://www.google.no/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
      dataTransfer.setDragImage(img, 0, 0);
    };
    return {
      columns,
      handleDragStart,
      modifyDragItem,
      addColumn,
      handleColumnMove,
      modalOpen,
      handleDragTaskStart,
      handleDragTaskEnd,
      handleTaskConfirm,
      handleTaskCancel,
      askForConfirmation,
    };
  },
};
</script>

<style scoped lang="scss">
.column-width {
  min-width: 320px;
  width: 320px;
}
/* Unfortunately @apply cannot be setup in codesandbox, 
  but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  &:after {
    border: 2px dashed #4299e1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f7fafc;
    border-radius: inherit;
  }
}
.ghost-column {
  &:after {
    border: 2px dashed #4299e1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f7fafc;
    border-radius: inherit;
  }
}
.active {
}
</style>
