import { class_type } from "../../fable_modules/fable-library.3.6.3/Reflection.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.1.57.0/Interop.fs.js";
import { ofArrayWithTail, singleton, ofArray, map } from "../../fable_modules/fable-library.3.6.3/List.js";
import { createElement } from "react";
import { createObj } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { Helpers_combineClasses } from "../../fable_modules/Feliz.Bulma.2.18.0/ElementBuilders.fs.js";
import { printf, toText } from "../../fable_modules/fable-library.3.6.3/String.js";
import { toShortDateString } from "../../fable_modules/fable-library.3.6.3/Date.js";
import { empty, singleton as singleton_1, append, delay, toList } from "../../fable_modules/fable-library.3.6.3/Seq.js";
import { fromParts, compare } from "../../fable_modules/fable-library.3.6.3/Decimal.js";
import { Account__get_LatestMovement, Account__get_Balance } from "../Models.js";

export class Account {
    constructor() {
    }
}

export function Account$reflection() {
    return class_type("App.Components.Account", void 0, Account);
}

export function Account_Transactions_Z2F12D0CA(account) {
    let elms_3, elms_1, elms, arg00_3;
    let header;
    const props_2 = ofArray([["className", "account header"], ["children", Interop_reactApi.Children.toArray(Array.from(map((name) => createElement("div", createObj(Helpers_combineClasses("column", ofArray([["className", name], ["className", "is-4"], ["children", name]])))), ofArray(["Date", "Message", "Amount"]))))]]);
    header = createElement("div", createObj(Helpers_combineClasses("columns", props_2)));
    const transactions = map((ledgerEntry) => {
        let props_4, props_10;
        let formatCurrency;
        const clo1 = toText(printf("%.2f"));
        formatCurrency = ((arg10) => clo1(arg10));
        const props_12 = ofArray([["className", "transaction"], ["children", Interop_reactApi.Children.toArray([(props_4 = ofArray([["className", "is-4"], ["children", toShortDateString(ledgerEntry.Date)]]), createElement("div", createObj(Helpers_combineClasses("column", props_4)))), createElement("div", createObj(Helpers_combineClasses("column", singleton(["children", ledgerEntry.Text])))), (props_10 = ofArray([["className", "is-4"], ["children", Interop_reactApi.Children.toArray([createElement("div", {
            className: "ledger-entry amount",
            children: formatCurrency(ledgerEntry.Amount),
        }), createElement("div", {
            className: "ledger-entry balance",
            children: formatCurrency(ledgerEntry.Balance),
        })])]]), createElement("div", createObj(Helpers_combineClasses("column", props_10))))])]]);
        return createElement("div", createObj(Helpers_combineClasses("columns", props_12)));
    }, account.Ledger);
    const props_22 = ofArray([["style", {
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
    }], ["children", Interop_reactApi.Children.toArray([(elms_3 = ofArray([(elms_1 = singleton((elms = singleton(createElement("figure", createObj(Helpers_combineClasses("image", singleton(["className", "is-32x32 icon vbars"]))))), createElement("div", {
        className: "media-left",
        children: Interop_reactApi.Children.toArray(Array.from(elms)),
    }))), createElement("article", {
        className: "media",
        children: Interop_reactApi.Children.toArray(Array.from(elms_1)),
    })), (arg00_3 = ofArrayWithTail([createElement("h1", createObj(Helpers_combineClasses("title", singleton(["children", account.Name])))), header], transactions), createElement("div", {
        className: "content",
        children: Interop_reactApi.Children.toArray(Array.from(arg00_3)),
    }))]), createElement("div", {
        className: "card-content",
        children: Interop_reactApi.Children.toArray(Array.from(elms_3)),
    }))])]]);
    return createElement("div", createObj(Helpers_combineClasses("card", props_22)));
}

export function Account_Box_130DA4ED(account_Box_130DA4EDInputProps) {
    let elms_3, elms_1, elms, arg00_1;
    const viewAccount = account_Box_130DA4EDInputProps.viewAccount;
    const accounts = account_Box_130DA4EDInputProps.accounts;
    let header;
    const props_2 = ofArray([["className", "account header"], ["children", Interop_reactApi.Children.toArray(Array.from(map((name) => createElement("div", createObj(Helpers_combineClasses("column", ofArray([["className", "is-4"], ["children", name]])))), ofArray(["Name", "Balance", "Recent transactions"]))))]]);
    header = createElement("div", createObj(Helpers_combineClasses("columns", props_2)));
    const accounts_1 = map((account) => {
        let props_6, props_8, copyOfStruct;
        const props_10 = ofArray([["onClick", (_arg1) => {
            window.location.href = toText(printf("#%s"))(account.Name);
            viewAccount(account.Name);
        }], ["className", "account"], ["children", Interop_reactApi.Children.toArray([createElement("div", createObj(Helpers_combineClasses("column", ofArray([["className", "is-4"], ["children", account.Name]])))), (props_6 = toList(delay(() => append(singleton_1(["className", "is-4"]), delay(() => append((compare(Account__get_Balance(account), fromParts(0, 0, 0, false, 0)) < 0) ? singleton_1(["style", {
            color: "#CD5C5C",
        }]) : empty(), delay(() => {
            let arg10_1;
            return singleton_1(["children", (arg10_1 = Account__get_Balance(account), toText(printf("%.2f"))(arg10_1))]);
        })))))), createElement("div", createObj(Helpers_combineClasses("column", props_6)))), (props_8 = ofArray([["className", "is-4"], ["children", (copyOfStruct = Account__get_LatestMovement(account), toShortDateString(copyOfStruct))]]), createElement("div", createObj(Helpers_combineClasses("column", props_8))))])]]);
        return createElement("div", createObj(Helpers_combineClasses("columns", props_10)));
    }, accounts);
    const props_20 = ofArray([["style", {
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
    }], ["children", Interop_reactApi.Children.toArray([(elms_3 = ofArray([(elms_1 = singleton((elms = singleton(createElement("figure", createObj(Helpers_combineClasses("image", singleton(["className", "is-32x32 icon vbars"]))))), createElement("div", {
        className: "media-left",
        children: Interop_reactApi.Children.toArray(Array.from(elms)),
    }))), createElement("article", {
        className: "media",
        children: Interop_reactApi.Children.toArray(Array.from(elms_1)),
    })), (arg00_1 = ofArrayWithTail([createElement("h1", createObj(Helpers_combineClasses("title", singleton(["children", "Accounts"])))), header], accounts_1), createElement("div", {
        className: "content",
        children: Interop_reactApi.Children.toArray(Array.from(arg00_1)),
    }))]), createElement("div", {
        className: "card-content",
        children: Interop_reactApi.Children.toArray(Array.from(elms_3)),
    }))])]]);
    return createElement("div", createObj(Helpers_combineClasses("card", props_20)));
}

//# sourceMappingURL=Account.js.map
