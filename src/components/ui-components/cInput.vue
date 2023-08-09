<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "cInput",
  props: {
    placeHolder: {
      type: String,
      default: "Ingrese su nombre...",
    },
  },
});
</script>

<template>
  <input
    type="text"
    class="rounded-lg text-xl p-2 border shadow-md focus:outline-none"
    :placeholder="placeHolder"
    @input="$emit('input', $event.target.value)"
  />
</template>
