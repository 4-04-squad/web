<template>
    <div class="search-bar">
      <!-- Filter Search -->
      <input v-model='searchQuery' type="search" placeholder="Rechercher"/>
    </div>
    <table :id="`${className}-table`" :class="`table table--${className}`">
      <caption>{{ caption }}</caption>
      <thead>
        <tr>
          <th v-for="field in fields" :key='field' @click="sortTable(field)">
            {{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key='item'>
          <td v-for="field in fields" :key='field'>{{ item[field] }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed, ref } from "vue";
  import { sortBy } from 'lodash';

  interface TableData {
    [key: string]: string | number;
  }
  
  export default defineComponent({
    name: "Table",
    props: {
      caption: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        required: true,
      },
      data: {
        type: Array as () => TableData[],
        required: true,
      },
      fields: {
        type: Array as () => string[],
        required: true,
      },
    },
    setup(props) {
      const sort = ref(null) as any;
      const updatedList = ref([]) as any;
      const searchQuery = ref("") as any;
      console.log(props.data);
  
      // A function to sort the table
      const sortTable = (col: string) => {
        sort.value = true;
        // Use of _.sortBy() method
        updatedList.value = sortBy(props.data, col);
      };
  
      const sortedList = computed(() => {
        if (sort.value && updatedList.value) {
            return updatedList.value;
        } else {
            return props.data;
        }
        });
  
      // Filter Search
      const filteredList = computed(() => {
        return sortedList.value.filter((item: TableData) => {
          return (
            item.pseudo.toLowerCase().includes(searchQuery.value.toLowerCase()) !== -1 ||
            item.status.toLowerCase().includes(searchQuery.value.toLowerCase()) !== -1
          );
        });
      });
  
      return { sortTable, searchQuery, filteredList };
    },
  });
  </script>
  