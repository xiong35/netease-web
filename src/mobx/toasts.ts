import { makeAutoObservable } from "mobx";
import { setTimeout } from "timers";

import { Toast } from "../models/Toast";
import { UserProfile } from "../models/User";

/**
 * 音乐播放相关全局状态
 */
class ToastsState {
  /** 个人信息 */
  toasts: Toast[] = [];

  private curId = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addToast(value: string, severity: Toast["severity"]) {
    const id = this.curId++;
    this.toasts.push({ id, severity, value });

    setTimeout(() => {
      const toSplice = this.toasts.findIndex((t) => t.id === id);
      this.toasts.splice(toSplice, 1);
    }, 2000);
  }
}

export const ToastsStore = new ToastsState();
