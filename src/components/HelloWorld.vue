<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-autocomplete
          :items="items"
          label="Autocomplete"
          placeholder="Placeholder"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="6">
        <v-combobox
          :items="items"
          label="Combobox"
          placeholder="Placeholder"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="6">
        <v-file-input
          label="FileInput"
          placeholder="Placeholder"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="6">
        <v-overflow-btn
          :items="items"
          label="OverflowBtn"
          placeholder="Placeholder"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="6">
        <v-select
          :items="items"
          label="Select"
          placeholder="Placeholder"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="6">
        <v-textarea
          label="Textarea"
          placeholder="Placeholder"
          persistent-placeholder
          rows="1"
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="TextField"
          placeholder="Placeholder"
          persistent-placeholder
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      items: ["aaa", "bbb", "ccc"],
    };
  },
};
</script>
