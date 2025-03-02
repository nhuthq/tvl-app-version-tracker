<script lang="ts">
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";
import FilterRadios from "./FilterRadios.vue";

const searchLetter = ref("");
const radioButtonType = ref("All");

export default {
  components: { SearchBar, FilterRadios },
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
    handleFilter: (type: any) => {
      radioButtonType.value = type;
    },
  },
  computed: {
    filteredItemsByLetter() {
      let filteredItems = this.items;
      switch (radioButtonType.value) {
        case "Release":
          filteredItems = filteredItems.filter((item: any) =>
            item.status.includes("Release")
          );
          break;
        case "All":
        default:
          filteredItems = this.items;
          break;
      }

      if (searchLetter.value !== "") {
        filteredItems = filteredItems.filter((item: any) =>
          item.versions.includes(searchLetter.value)
        );
      }
      console.log("item.status", filteredItems);
      return filteredItems;
    },
  },
};
</script>

<template>
  <div class="related bg-gray-100 m-8">
    <div class="flex items-center justify-between">
      <SearchBar @search="handleSearch" />
      <FilterRadios @filterRelease="handleFilter" />
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
