<template>
  <div class="update">
    <div>
      <button @click="back">回上一頁</button>
    </div>
    <div>
      <!-- name -->
      <div>
        <label for="name">展覽名稱:</label>
        <input name="name" type="text" v-model="form.name" />
      </div>
      <!-- issuer -->
      <div>
        <label for="name">主辦單位:</label>
        <input name="name" type="text" v-model="form.issuer" />
      </div>
      <!-- phone -->
      <div>
        <label for="number">電話:</label>
        <input name="number" type="text" v-model="form.number" />
      </div>
      <!-- start -->
      <div>
        <label for="startDate">展出日期開始:</label>
        <input name="startDate" type="date" v-model="form.startDate" />
      </div>
      <!-- end -->
      <div>
        <label for="endDate">展出日期結束:</label>
        <input name="endDate" type="date" v-model="form.endDate" />
      </div>
      <button @click="update">送出</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "UpdateData",
  props: ["updateData"],
  data() {
    return {
      form: {
        id: 0,
        name: "",
        issuer: "",
        number: "",
        startDate: "",
        endDate: "",
      },
    };
  },
  methods: {
    async update() {
      await axios.put(`/api/manager/activity/${this.form.id}`, this.form);
    },
    back() {
      this.$emit("updateBack", "list");
    },
  },
  mounted() {
    this.form = this.updateData;
  },
};
</script>

<style scoped></style>
