// legacy_hash_id: a_0Mio28
import helper_functions from "../../helper_functions.app.mjs";

export default {
  key: "helper_functions-base64-encode-string",
  name: "Base64 Encode String",
  description: "Accepts a string, returns a Base64 encoded string",
  version: "0.1.1",
  type: "action",
  props: {
    helper_functions,
    data: {
      type: "string",
    },
  },
  async run({ $ }) {
    const buffer = Buffer.from(this.data, "utf8");
    $.export("data", buffer.toString("base64"));
  },
};
