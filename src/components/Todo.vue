<template>
<tr>
  <td>
    <input type="checkbox" v-model="data.done" :checked="data.done">
  </td>
  <td>{{ data.description }}</td>
  <td v-if="data.done">
    <button @click="$emit('delete-todo')">Delete</button>
  </td>
</tr>
</template>

<script>
export default {
  name: "Todo",
  props: {
    data: Object,
  },
}
</script>
