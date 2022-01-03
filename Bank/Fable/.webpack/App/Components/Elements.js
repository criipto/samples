import { union_type, string_type, class_type } from "../../fable_modules/fable-library.3.6.3/Reflection.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.1.57.0/Interop.fs.js";
import { empty, singleton, append, delay, toList } from "../../fable_modules/fable-library.3.6.3/Seq.js";
import { createElement } from "react";
import { value as value_12 } from "../../fable_modules/fable-library.3.6.3/Option.js";
import { printf, toText } from "../../fable_modules/fable-library.3.6.3/String.js";
import { ofArray } from "../../fable_modules/fable-library.3.6.3/List.js";
import { createObj } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { Helpers_combineClasses } from "../../fable_modules/Feliz.Bulma.2.18.0/ElementBuilders.fs.js";
import { Union } from "../../fable_modules/fable-library.3.6.3/Types.js";

export class Elements {
    constructor() {
    }
}

export function Elements$reflection() {
    return class_type("App.Components.Elements", void 0, Elements);
}

export function Elements_IconButton_62C67EE5(elements_IconButton_62C67EE5InputProps) {
    const action = elements_IconButton_62C67EE5InputProps.action;
    const iconName = elements_IconButton_62C67EE5InputProps.iconName;
    const label = elements_IconButton_62C67EE5InputProps.label;
    const props_2 = ofArray([["onClick", action], ["style", {
        backgroundColor: "transparent",
        borderStyle: "none",
        fontSize: 18 + "px",
    }], ["children", Interop_reactApi.Children.toArray(Array.from(toList(delay(() => append((label != null) ? singleton(createElement("span", {
        className: "navbar-item",
        children: value_12(label),
    })) : empty(), delay(() => {
        let arg10;
        return (iconName != null) ? singleton(createElement("div", {
            className: (arg10 = value_12(iconName), toText(printf("icon %s"))(arg10)),
        })) : empty();
    }))))))]]);
    return createElement("a", createObj(Helpers_combineClasses("button", props_2)));
}

export class Types_View extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Overview", "Account", "Transfer", "Invest", "Pensions", "Messages", "Profile", "DevSupport", "Accounts"];
    }
    toString() {
        const x = this;
        switch (x.tag) {
            case 8: {
                return "Accounts";
            }
            case 1: {
                const n = x.fields[0];
                return toText(printf("Account - %s"))(n);
            }
            case 2: {
                return "Payments \u0026 Transfer";
            }
            case 3: {
                return "Investment";
            }
            case 4: {
                return "Pension and Insurance";
            }
            case 5: {
                return "Messages";
            }
            case 6: {
                return "Profile";
            }
            case 7: {
                return "Developer Support";
            }
            default: {
                return "Overview";
            }
        }
    }
}

export function Types_View$reflection() {
    return union_type("App.Components.Types.View", [], Types_View, () => [[], [["Item", string_type]], [], [], [], [], [], [], []]);
}

export function Types_View__get_IconName(x) {
    switch (x.tag) {
        case 8: {
            return "coins";
        }
        case 1: {
            const n = x.fields[0];
            return "";
        }
        case 2: {
            return "arrows";
        }
        case 3: {
            return "chart";
        }
        case 4: {
            return "wineglass";
        }
        case 5: {
            return "envelope";
        }
        case 6: {
            return "profile";
        }
        case 7: {
            return "code";
        }
        default: {
            return "lamp";
        }
    }
}

//# sourceMappingURL=Elements.js.map
