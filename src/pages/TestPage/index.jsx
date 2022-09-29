import Uploader from "../../components/Uploader";
// import React from "react";
import { onFileUpload } from "../../utils/upload";
import React, { useState, useEffect } from "react";
import { request } from "../../utils/request";
import { getBaseUrl } from "../../utils/common";

const Test = () => {
  const baseUrl = getBaseUrl()
  const [resourceList, setResourceList] = useState([]);

  useEffect(() => {
    getUserAllResource();
  }, []);

  async function getUserAllResource() {
    const res = await request("getUserAllResource", {});

    if (res.statusCode === 1) {
      setResourceList(res.resourceList);
      console.log(res.resourceList);
      console.log(resourceList);
    }

    // console.log(res)
    // console.log(resourceList)
  }

  return (
    <div>
      <label htmlFor="input-logo">上传</label>
      <input
        style={{ display: "none" }}
        id="input-logo"
        type="file"
        accept="image/*, video/*, .pdf"
        onChange={(e) => onFileUpload(e)}
        multiple="multiple"
      />

      <div>
        {resourceList.map((item, index) => {
          return <div key={index}>{item.fileName}
          <img src={baseUrl + '/resource/' + item.fileName} alt="" />
          </div>;
        })}
      </div>
    </div>
  );
};

export default React.memo(Test);
