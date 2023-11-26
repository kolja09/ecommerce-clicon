<template>
  <div class="wrapper">
    <div class="app__container">
      <support-form />
      <support-content />
    </div>
  </div>
</template>
  
  <script lang="ts">
import SupportForm from "@/components/SupportForm/SupportForm.vue";
import SupportContent from "@/components/SupportContent/SupportContent.vue";

export default {
  name: "SupportView",
  components: { SupportForm, SupportContent },
};
</script>
  
  <style lang="scss" scoped>
</style>>
  