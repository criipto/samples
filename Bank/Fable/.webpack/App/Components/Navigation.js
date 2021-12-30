import { class_type } from "../../fable_modules/fable-library.3.6.3/Reflection.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.1.57.0/Interop.fs.js";
import { empty, singleton, delay, toList } from "../../fable_modules/fable-library.3.6.3/Seq.js";
import { createElement } from "react";
import { printf, toText } from "../../fable_modules/fable-library.3.6.3/String.js";
import { value as value_28 } from "../../fable_modules/fable-library.3.6.3/Option.js";
import { toString } from "../../fable_modules/fable-library.3.6.3/Types.js";
import { singleton as singleton_1, ofArray, collect } from "../../fable_modules/fable-library.3.6.3/List.js";
import { createObj, equals } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { Helpers_combineClasses } from "../../fable_modules/Feliz.Bulma.2.18.0/ElementBuilders.fs.js";
import { Elements_IconButton_62C67EE5, Types_View } from "./Elements.js";

export class Navigation {
    constructor() {
    }
}

export function Navigation$reflection() {
    return class_type("App.Components.Navigation", void 0, Navigation);
}

export function Navigation_SidePanel_AB71DB6(navigation_SidePanel_AB71DB6InputProps) {
    const setView = navigation_SidePanel_AB71DB6InputProps.setView;
    const activeView = navigation_SidePanel_AB71DB6InputProps.activeView;
    const messageCount = navigation_SidePanel_AB71DB6InputProps.messageCount;
    const createMenuItem = (tupledArg) => {
        let elms;
        const iconName = tupledArg[0];
        const view = tupledArg[1];
        const count = tupledArg[2];
        return ["children", Interop_reactApi.Children.toArray([(elms = toList(delay(() => singleton(createElement("div", {
            className: toText(printf("icon %s"))(iconName),
            children: Interop_reactApi.Children.toArray(Array.from(toList(delay(() => ((count != null) ? singleton(createElement("span", {
                className: "badge is-danger",
                children: value_28(count),
            })) : empty()))))),
        })))), createElement("span", {
            className: "panel-icon",
            children: Interop_reactApi.Children.toArray(Array.from(elms)),
        })), createElement("span", {
            children: toString(view),
        })])];
    };
    const menuItems = collect((tupledArg_1) => {
        let props_4;
        const viewName = tupledArg_1[0];
        const view_1 = tupledArg_1[1];
        const notification = tupledArg_1[2];
        const className = equals(activeView, view_1) ? "is-active menu-item" : "menu-item";
        return ofArray([(props_4 = ofArray([["className", className], ["onClick", (_arg1) => {
            setView(view_1);
        }], createMenuItem([viewName, view_1, notification])]), createElement("div", createObj(Helpers_combineClasses("panel-block", props_4)))), createElement("br", {})]);
    }, ofArray([["lamp", new Types_View(0), void 0], ["arrows", new Types_View(2), void 0], ["chart", new Types_View(3), void 0], ["wineglass", new Types_View(4), void 0], ["envelope", new Types_View(5), (messageCount > 0) ? messageCount : (void 0)], ["profile", new Types_View(6), void 0], ["code", new Types_View(7), void 0]]));
    const props_7 = ofArray([["style", {
        boxShadow: "none",
    }], ["children", Interop_reactApi.Children.toArray(Array.from(menuItems))]]);
    return createElement("nav", createObj(Helpers_combineClasses("panel", props_7)));
}

export function Navigation_Topbar_700867CD(navigation_Topbar_700867CDInputProps) {
    let elms, props_4, elms_3, elms_2, elms_1, tupledArg;
    const action = navigation_Topbar_700867CDInputProps.action;
    const userButtonText = navigation_Topbar_700867CDInputProps.userButtonText;
    const elms_4 = ofArray([(elms = ofArray([createElement("div", createObj(Helpers_combineClasses("navbar-item", singleton_1(["className", "icon credit-card-logo"])))), (props_4 = ofArray([["className", "logo-text"], ["children", Interop_reactApi.Children.toArray([createElement("span", {
        className: "app-name",
        children: "%APPNAME%",
    }), createElement("span", {
        className: "bank",
        children: "Bank",
    })])]]), createElement("div", createObj(Helpers_combineClasses("navbar-item", props_4))))]), createElement("div", {
        className: "navbar-start",
        children: Interop_reactApi.Children.toArray(Array.from(elms)),
    })), (elms_3 = singleton_1((elms_2 = singleton_1((elms_1 = singleton_1((tupledArg = [userButtonText, "power-off-white", (_arg2) => {
        action();
    }], createElement(Elements_IconButton_62C67EE5, {
        label: tupledArg[0],
        iconName: tupledArg[1],
        action: tupledArg[2],
    }))), createElement("div", {
        className: "buttons",
        children: Interop_reactApi.Children.toArray(Array.from(elms_1)),
    }))), createElement("div", {
        className: "navbar-item",
        children: Interop_reactApi.Children.toArray(Array.from(elms_2)),
    }))), createElement("div", {
        className: "navbar-end",
        children: Interop_reactApi.Children.toArray(Array.from(elms_3)),
    }))]);
    return createElement("div", {
        className: "navbar-menu",
        children: Interop_reactApi.Children.toArray(Array.from(elms_4)),
    });
}

//# sourceMappingURL=Navigation.js.map
