const dbConfig = require("../lib/supabaseClient");

class menu {
  async getMenuItems() {
    try {
      const data = await dbConfig.from("tb_product").select("*");
      return {
        status: "true",
        data: data.data,
      };
    } catch (error) {
      console.error(error);
      return {
        status: "false",
        message: error.error,
      };
    }
  }
}

module.exports = new menu();
