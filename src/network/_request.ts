import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { getToken } from "../utils/token";
import { showToast } from "../utils/showToast";

// import { nanoid } from "@reduxjs/toolkit";

// import { store } from "../../redux/store";
// import { addToast, removeToast } from "../../redux/toasts/toastsSlice";
// import { responseType } from "./responseType";

const SERVER_BASE_URL = "http://api.xiong35.cn/netease";

/** 根据哈希值判断有无重复发起的请求 */
const sendingRequest = new Set<string>();

/**
 * 失败会返回200以外的http状态码
 */
type HttpRes<T> = {
  /**
   * 错误提示信息, 出现错误时直接使用即可
   */
  msg: string;
  code?: number;
  data: T;
};

const DEFAULT_ERR_MSG = "出错了！";

export default async function _request<T = {}>(
  config: AxiosRequestConfig,
  shouldShowHint = true
) {
  const hashedReq = JSON.stringify({
    u: config.url,
    d: config.data,
    p: config.params,
  });
  if (sendingRequest.has(hashedReq)) return;
  sendingRequest.add(hashedReq);

  const instance = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: 60000,
    // withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      config.headers = config.headers || {};
      config.headers.Authorization = "Bearer " + (token?.value ?? "");
      return config;
    },
    (err) => {
      console.error(err);
    }
  );

  try {
    const res = await instance.request<HttpRes<T>>(config);
    if (res.status === 200 && res.data && res.data.code === 200) {
      return res.data.data;
    } else if (!res.data) {
      throw DEFAULT_ERR_MSG;
    } else {
      console.log(res.data);
      throw res.data.msg || DEFAULT_ERR_MSG;
    }
  } catch (err) {
    console.error("in request: ", { config, err });

    let errMsg = DEFAULT_ERR_MSG;
    if (typeof err === "string") {
      errMsg = err;
    } else if ((err as AxiosError).isAxiosError) {
      const axiosErr = err as AxiosError<HttpRes<T>>;
      if (axiosErr.response) {
        errMsg = axiosErr.response.data.msg;
      }
    } else if (err instanceof Error) {
      errMsg = err.message;
    }

    console.log({ errMsg });
    shouldShowHint && showToast(errMsg, "error");

    return null;
  } finally {
    setTimeout(() => {
      sendingRequest.delete(hashedReq);
    }, 70);
  }
}
