import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";

let StartFunc = () => {
    if(StartFuncCheckFunc())
    {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../../CardMenu/ScreenMenu/ScreenMenu.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
    }
};

export { StartFunc };
