export interface IOpt {
    menu: IMenuItem;
    words: Array<string>;
}
/**
 * 菜单项
 *
 * @export
 * @interface IMenuItem
 */
export interface IMenuItem {
    /**
     * 展开菜单时，陈述的文字
     *
     * @type {string}
     * @memberof IMenuItem
     */
    $title?: string;
    /**
     * 点击每一项菜单时，进行的操作
     * string    - 陈述文字
     * Function  - 执行回调方法
     * ImenuItem - 子菜单
     *
     * @type {string|Function|IMenuItem}
     * @memberof IMenuItem
     */
    [prop: string]: string | Function | IMenuItem;
}
