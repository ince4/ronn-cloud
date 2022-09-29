import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React from "react";
import { request } from "../../utils/request";
import { genPassword } from "../../utils/common";

async function onClickLoginBtn() {
  const password = genPassword("p7512349");
  request("userLogin", {
    accountName: "ronn",
    password,
  });
}
async function onClickLoginBtn2() {
  request("ttt");
}

const HomePage = () => {
  return (
    <div onClick={onClickLoginBtn}>
      homepage
    </div>
  );
};

export default React.memo(HomePage);
