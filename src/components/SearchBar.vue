<script lang="ts">
export default {
  name: "SearchBar",
  props: {},
  emits: ["search"],
  methods: {
    onInput(event: any) {
      this.$emit("search", event.target.value);
    },
  },
};
</script>

<template>
  <form class="py-3 px-4 flex items-center">
    <label class="sr-only">Search</label>
    <div class="related">
      <input
        type="text"
        id="search"
        @input="onInput"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        placeholder="Search"
      />
    </div>
  </form>
</template>
