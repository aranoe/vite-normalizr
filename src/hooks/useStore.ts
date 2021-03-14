import { reactive, readonly } from 'vue';

interface Store {
  error: string;
}

const _store = reactive<Store>({ error: "" });

export const useStore = () => {
  const updateErrors = (error: string) => (_store.error = error);

  return { store: readonly(_store), updateErrors };
};
