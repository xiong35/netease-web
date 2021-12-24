import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { showToast } from "../utils/showToast";

// import { nanoid } from "@reduxjs/toolkit";

// import { store } from "../../redux/store";
// import { addToast, removeToast } from "../../redux/toasts/toastsSlice";
// import { responseType } from "./responseType";

const SERVER_BASE_URL = "http://api.xiong35.cn/netease";

/**
 * 失败会返回200以外的http状态码
 */
type BaseHttpInfo = {
  /**
   * 错误提示信息, 出现错误时直接使用即可
   */
  msg?: string;
  code: number;
};

const DEFAULT_ERR_MSG = "出错了！";

export default async function _request<T = {}>(
  config: AxiosRequestConfig,
  shouldShowHint = true
) {
  const instance = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: 60000,
    // withCredentials: true,
  });

  try {
    /** 执行请求 */
    const res = await instance.request<T & BaseHttpInfo>(config);
    if (res.status === 200 && res.data && res.data.code === 200) {
      /**
       * 请求成功网易云会在 body 里返回 `code: 200`
       */
      return res.data;
    } else if (!res.data) {
      /**
       * 请求没有消息体(可能是请求都没达到后端)
       */
      throw DEFAULT_ERR_MSG;
    } else {
      /**
       * 其他情况(后端正常的报错)
       */
      throw res.data.msg || DEFAULT_ERR_MSG;
    }
  } catch (err) {
    console.error("in request: ", { config, err });

    let errMsg = DEFAULT_ERR_MSG;
    if (typeof err === "string") {
      /** 我自己 throw 的 error */
      errMsg = err;
    } else if ((err as AxiosError).isAxiosError) {
      /** http 状态码不为 200 */
      const axiosErr = err as AxiosError<BaseHttpInfo>;
      if (axiosErr.response) {
        errMsg = axiosErr.response.data.msg || DEFAULT_ERR_MSG;
      }
    } else if (err instanceof Error) {
      /** 其他错误 */
      errMsg = err.message;
    }

    /** 可能有个别请求不需要弹出提示 */
    shouldShowHint && showToast(errMsg, "error");

    /** 错误一律返回 null */
    return null;
  }
}
