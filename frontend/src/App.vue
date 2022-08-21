<template>
  <div id="app">
    <div v-if="config === 'list'">
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
        <!-- number -->
        <div>
          <label for="number">電話:</label>
          <input name="number" type="number" v-model="form.number" />
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
        <button @click="insert">送出</button>
      </div>
      <!-- list -->
      <div>
        <table>
          <thead>
            <tr>
              <th>展出日期</th>
              <th></th>
              <th>展覽名稱</th>
              <th>主辦單位</th>
              <th>電話號碼</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in list" :key="n.id">
              <td>{{ n.startDate }}~</td>
              <td>{{ n.endDate }}</td>
              <td>{{ n.name }}</td>
              <td>{{ n.issuer }}</td>
              <td>{{ n.number }}</td>
              <td>
                <button @click="update(n)">更新</button>
                <button @click="deleteOne(n)">刪除此項</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button @click="deleteAll">刪除全部</button>
      </div>
    </div>
    <Update
      v-if="config === 'update'"
      :updateData="updateData"
      @updateBack="updateBack"
    />
  </div>
</template>

<script>
const axios = require("axios");
import Update from "./components/Update.vue";
export default {
  name: "App",
  components: {
    Update,
  },
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
      list: [],
      config: "list",
      updateData: {},
    };
  },
  methods: {
    async insert() {
      const returnData = await axios.post("/api/manager/activity", {
        name: this.form.name,
        issuer: this.form.issuer,
        number: this.form.number,
        startDate: this.form.startDate,
        endDate: this.form.endDate,
      });
      this.fetch(returnData.data.data);
    },
    update(n) {
      this.updateData = n;
      this.config = "update";
    },
    updateBack(config) {
      this.config = config;
    },
    async deleteOne(n) {
      const returnData = await axios.delete(`/api/manager/activity/${n.id}`);
      this.fetch(returnData.data.data);
    },
    async deleteAll() {
      const returnData = await axios.delete(
        "/api/manager/activity/all",
        this.list
      );
      this.fetch(returnData.data.data);
    },
    fetch(data) {
      this.list = data;
    },
  },
  async mounted() {
    const returnData = await axios.get("/api/activity/list");
    this.fetch(returnData.data.data);
  },
};
</script>

<style>
#app h1 {
  color: red;
}
</style>
