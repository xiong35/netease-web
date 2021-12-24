import { makeAutoObservable } from "mobx";

type Theme = "light" | "dark";
const themeKey = "netease-f_theme";

/**
 * 头部导航条相关全局状态
 */
class TheTopbarState {
  /** SearchBar*/
  /** 显示搜索下拉框 */
  searchDpShown = false;

  /** Login */
  /** 显示登录框 */
  loginDpShown = false;
  /** 显示登录Toggle */
  loginTgShown = false;
  /** 是否同意条款 */
  lgTermsAgreed = false;

  /** Login - DpToggle */
  LDTClassName = "c-the_top_bar-right-login-dropdown-toggle hidden";

  /** 是否切换为暗色主题 */
  theme: Theme = (localStorage.getItem(themeKey) || "light") as Theme;

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * 设置搜索下拉框是否可见
   * @param void
   * @returns void
   */

  toggleShowSearchDp() {
    this.searchDpShown = !this.searchDpShown;
  }

  /**
   * 设置登录下拉框是否可见
   * @param void
   * @returns void
   */

  toggleShowLoginDp() {
    this.loginDpShown = !this.loginDpShown;
  }

  /**
   * 设置登录Toggle是否可见
   * @param void
   * @returns void
   */

  toggleShowLoginTg() {
    this.loginTgShown = !this.loginTgShown;
  }

  /**
   * 设置登录Toggle是否可见
   * @param void
   * @returns void
   */

  toggleSetAgreed() {
    this.lgTermsAgreed = !this.lgTermsAgreed;
  }

  /**
   * 设置DpToggle的类名，以决定它是否显示
   * @param void
   * @returns void
   */

  setLDTClassName(name: string) {
    this.LDTClassName = name;
  }

  toggleSetTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeKey, this.theme);
  }
}

export const TheTopbarStore = new TheTopbarState();
