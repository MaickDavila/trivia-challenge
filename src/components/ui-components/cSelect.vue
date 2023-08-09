<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cSelect",
  props: {
    title: {
      type: String,
      default: "Select an option",
    },

    data: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<template>
  <select
    class="w-full focus:outline-none relative h-[40px] border shadow border-solid border-gray-300 overflow-hidden px-3 rounded-lg"
    @change="$emit('change', $event.target.value)"
  >
    <option value="0" class="text-gray-400">{{ title }}</option>
    <option :value="item.id" v-for="(item, i) in data" :key="i">
      {{ item.name }}
    </option>
  </select>
</template>
