<script lang="ts">
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";

const searchLetter = ref("");

export default {
  components: { SearchBar },
  name: "VersionsTable",
  props: {
    items: {
      type: Array<any>,
      required: true,
    },
  },
  methods: {
    handleSearch: (letter: any) => {
      searchLetter.value = letter;
    },
  },
  computed: {
    filteredItemsByLetter() {
      if (searchLetter.value !== "") {
        return this.items.filter((item: any) =>
          item.status.includes(searchLetter.value)
        );
      } else {
        return this.items;
      }
    },
  },
};
</script>

<template>
  <div class="related bg-gray-100 m-8">
    <div class="flex items-center justify-between">
      <SearchBar @search="handleSearch" />
    </div>
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-g ray-500 uppercase bg-blue-100">
        <tr>
          <th class="py-4 px-3">Version</th>
          <th class="py-4 px-3">Build</th>
          <th class="py-4 px-3">Status</th>
          <th class="py-4 px-3">User</th>
          <th class="py-4 px-3">Release date</th>
          <th class="py-4 px-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredItemsByLetter"
          :key="item.id"
          class="border-b border-gray-500"
        >
          <td class="py-4 px-3 font-medium text-gray-900">
            {{ item.versions }}
          </td>
          <td class="py-4 px-3 font-medium text-gray-900">{{ item.build }}</td>
          <td class="py-4 px-3">{{ item.status }}</td>
          <td class="py-4 px-3">{{ item.user }}</td>
          <td class="py-4 px-3">{{ item.releaseDate }}</td>
          <td class="py-4 px-3 flex justify-end items-center">
            <a href="#" class="text-indigo-500 hover:underline">Details</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
