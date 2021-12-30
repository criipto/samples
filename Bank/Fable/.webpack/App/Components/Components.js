import { class_type } from "../../fable_modules/fable-library.3.6.3/Reflection.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.1.57.0/Interop.fs.js";
import { createElement } from "react";
import { createObj } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { Helpers_combineClasses } from "../../fable_modules/Feliz.Bulma.2.18.0/ElementBuilders.fs.js";
import { map, ofArray, singleton } from "../../fable_modules/fable-library.3.6.3/List.js";
import { printf, toText } from "../../fable_modules/fable-library.3.6.3/String.js";

export class Components {
    constructor() {
    }
}

export function Components$reflection() {
    return class_type("App.Components.Components", void 0, Components);
}

export function Components_IdCard_Z34C1F15A(user) {
    let elms_3, elms_1, elms, elms_2, props_6;
    const props_10 = ofArray([["style", {
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
    }], ["children", Interop_reactApi.Children.toArray([(elms_3 = ofArray([(elms_1 = singleton((elms = singleton(createElement("figure", createObj(Helpers_combineClasses("image", singleton(["className", "is-32x32 icon profile"]))))), createElement("div", {
        className: "media-left",
        children: Interop_reactApi.Children.toArray(Array.from(elms)),
    }))), createElement("article", {
        className: "media",
        children: Interop_reactApi.Children.toArray(Array.from(elms_1)),
    })), (elms_2 = ofArray([createElement("h1", createObj(Helpers_combineClasses("title", singleton(["children", user.Name])))), (props_6 = ofArray([["className", "is-size-6"], ["children", toText(printf("Fødselsdag: %s"))(user.DateOfBirth)]]), createElement("h2", createObj(Helpers_combineClasses("subtitle", props_6))))]), createElement("div", {
        className: "content",
        children: Interop_reactApi.Children.toArray(Array.from(elms_2)),
    }))]), createElement("div", {
        className: "card-content",
        children: Interop_reactApi.Children.toArray(Array.from(elms_3)),
    }))])]]);
    return createElement("div", createObj(Helpers_combineClasses("card", props_10)));
}

export function Components_Splash() {
    let props_41, props_15, props_13, props_27, props_25, props_23, props_31, props_29, props_39, props_37, props_35;
    const images = ofArray([["apartment", "Housing"], ["car", "Cars"], ["chart", "Investment"], ["wineglass", "Pension"], ["hand-holding-medical", "Insurance"], ["credit-card", "Cards"], ["coins", "Loans"], ["cardboard-box", "More products"]]);
    const imageTile = (tupledArg) => {
        const imageName = tupledArg[0];
        const subtitle = tupledArg[1];
        const props_2 = ofArray([["className", "is-child"], ["children", Interop_reactApi.Children.toArray([createElement("div", {
            className: toText(printf("menu-icon icon %s"))(imageName),
        }), createElement("div", {
            className: "menu-name",
            children: subtitle,
        })])]]);
        return createElement("div", createObj(Helpers_combineClasses("tile", props_2)));
    };
    const splashItems = ofArray([["signature", "Easy digital signing of sensitive documents", "Criipto provides %APPNAME% Bank’s secure and user-friendly signing solution so you can sign securely - on your computer and on the go."], ["power-off", "Easy login to %APPNAME% Bank", "%APPNAME% Bank is using Criipto\u0027s easy and secure login solution. It saves us a lot of money that we can spend on better service for you!"], ["mitid", "MitID has arrived - We have you covered", "Don’t worry. We have your back. With Criipto’s easy e-ID login solution we provide MitID and NemID login side-by-side."]]);
    const splashItem = (tupledArg_1) => {
        const icon = tupledArg_1[0];
        const title = tupledArg_1[1];
        const content = tupledArg_1[2];
        const props_9 = ofArray([["className", "is-child box splash-item"], ["children", Interop_reactApi.Children.toArray([createElement("div", {
            className: toText(printf("icon %s is-40h splash-item"))(icon),
        }), createElement("h1", createObj(Helpers_combineClasses("title", ofArray([["className", "splash-item"], ["children", title]])))), createElement("div", createObj(Helpers_combineClasses("content", ofArray([["className", "splash-item"], ["children", content]]))))])]]);
        return createElement("div", createObj(Helpers_combineClasses("tile", props_9)));
    };
    const elms = ofArray([createElement("div", createObj(Helpers_combineClasses("column", singleton(["className", "is-2"])))), (props_41 = ofArray([["className", "is-8"], ["children", Interop_reactApi.Children.toArray([(props_15 = ofArray([["className", "is-ancestor splash-menu"], ["children", Interop_reactApi.Children.toArray([(props_13 = ofArray([["className", "is-parent"], ["children", Interop_reactApi.Children.toArray(Array.from(map(imageTile, images)))]]), createElement("div", createObj(Helpers_combineClasses("tile", props_13))))])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_15)))), (props_27 = ofArray([["className", "is-ancestor"], ["children", Interop_reactApi.Children.toArray([(props_25 = ofArray([["className", "is-parent"], ["children", Interop_reactApi.Children.toArray([(props_23 = ofArray([["className", "is-child box banner"], ["children", Interop_reactApi.Children.toArray([createElement("div", {
        className: "banner overlay",
    }), createElement("div", {
        className: "banner-content",
        children: Interop_reactApi.Children.toArray([createElement("h2", createObj(Helpers_combineClasses("subtitle", ofArray([["className", "banner"], ["children", "BUSINESS TO BUSINESS"]])))), createElement("h1", createObj(Helpers_combineClasses("title", ofArray([["className", "banner"], ["children", "“We save 120 dev hours a year with Criipto’s e-ID login”"]]))))]),
    })])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_23))))])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_25))))])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_27)))), (props_31 = ofArray([["className", "is-ancestor"], ["children", Interop_reactApi.Children.toArray([(props_29 = ofArray([["className", "is-parent"], ["children", Interop_reactApi.Children.toArray(Array.from(map(splashItem, splashItems)))]]), createElement("div", createObj(Helpers_combineClasses("tile", props_29))))])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_31)))), (props_39 = ofArray([["className", "is-ancestor"], ["children", Interop_reactApi.Children.toArray([(props_37 = ofArray([["className", "is-parent"], ["children", Interop_reactApi.Children.toArray([(props_35 = ofArray([["className", "is-child call-to-action"], ["children", Interop_reactApi.Children.toArray([createElement("button", createObj(Helpers_combineClasses("button", ofArray([["className", "call-to-action"], ["children", "Become a customer in %APPNAME% Bank"]]))))])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_35))))])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_37))))])]]), createElement("div", createObj(Helpers_combineClasses("tile", props_39))))])]]), createElement("div", createObj(Helpers_combineClasses("column", props_41)))), createElement("div", createObj(Helpers_combineClasses("column", singleton(["className", "is-2"]))))]);
    return createElement("div", {
        className: "columns",
        children: Interop_reactApi.Children.toArray(Array.from(elms)),
    });
}

//# sourceMappingURL=Components.js.map
