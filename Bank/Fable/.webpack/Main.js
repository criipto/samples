import { render } from "react-dom";
import { createElement } from "react";
import { Page_Layout } from "./App/Components/Page.js";
import "../src/styles/global.scss";


document.title = "%APPNAME% Bank";

render(createElement(Page_Layout, null), document.getElementById("app"));

//# sourceMappingURL=Main.js.map
