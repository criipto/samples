import { Union, Record } from "../../fable_modules/fable-library.3.6.3/Types.js";
import { class_type, union_type, string_type, record_type, lambda_type, obj_type, unit_type } from "../../fable_modules/fable-library.3.6.3/Reflection.js";
import { bulmaAccordion } from "../../../node_modules/bulma-extensions/dist/js/bulma-extensions.js";
import { createElement } from "react";
import { equals, comparePrimitives, min, createObj } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { Markdown_ToHtml_Z3EA62BCD } from "../../fable_modules/Fable.Formatting.Markdown.1.0.1/Markdown.fs.js";
import { map, mapIndexed, ofArray, length, take, singleton } from "../../fable_modules/fable-library.3.6.3/List.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.1.57.0/Interop.fs.js";
import { Helpers_combineClasses } from "../../fable_modules/Feliz.Bulma.2.18.0/ElementBuilders.fs.js";
import { printf, toText } from "../../fable_modules/fable-library.3.6.3/String.js";
import { Message as Message_1 } from "../Models.js";
import { empty, singleton as singleton_1, append, delay, toList } from "../../fable_modules/fable-library.3.6.3/Seq.js";
import { toString } from "../../fable_modules/fable-library.3.6.3/Date.js";
import { Types_View } from "./Elements.js";

export class Imports_Accordion extends Record {
    constructor(attach) {
        super();
        this.attach = attach;
    }
}

export function Imports_Accordion$reflection() {
    return record_type("App.Components.Imports.Accordion", [], Imports_Accordion, () => [["attach", lambda_type(unit_type, obj_type)]]);
}

export function Imports_attach() {
    bulmaAccordion.attach();
}

export class ActionType extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Link", "Action"];
    }
}

export function ActionType$reflection() {
    return union_type("App.Components.ActionType", [], ActionType, () => [[["href", string_type]], [["Item", lambda_type(unit_type, unit_type)]]]);
}

export class Message {
    constructor() {
    }
}

export function Message$reflection() {
    return class_type("App.Components.Message", void 0, Message);
}

export function Message_$ctor() {
    return new Message();
}

export function Message_MarkdownDiv_Z721C83C5(message_MarkdownDiv_Z721C83C5InputProps) {
    let content;
    const x = message_MarkdownDiv_Z721C83C5InputProps.x;
    return createElement("div", createObj(singleton((content = Markdown_ToHtml_Z3EA62BCD(x), ["dangerouslySetInnerHTML", {
        __html: content,
    }]))));
}

export function Message_List_3D36A079(message_List_3D36A079InputProps) {
    let elms_3, elms_1, elms, elms_2;
    const cancelSignatureOrder = message_List_3D36A079InputProps.cancelSignatureOrder;
    const maxCount = message_List_3D36A079InputProps.maxCount;
    const setView = message_List_3D36A079InputProps.setView;
    const setMessages = message_List_3D36A079InputProps.setMessages;
    const messages = message_List_3D36A079InputProps.messages;
    const title = message_List_3D36A079InputProps.title;
    let msgs;
    if (maxCount != null) {
        const maxCount_1 = maxCount | 0;
        msgs = take(min((x, y) => comparePrimitives(x, y), length(messages), maxCount_1), messages);
    }
    else {
        msgs = messages;
    }
    const actionButton = (actionText, action) => {
        let action_1;
        if (action.tag === 1) {
            const f = action.fields[0];
            action_1 = ["onClick", (_arg1) => {
                f();
            }];
        }
        else {
            const actionLink = action.fields[0];
            action_1 = ["href", actionLink];
        }
        const props_2 = ofArray([action_1, ["className", "reply"], ["children", Interop_reactApi.Children.toArray([createElement("span", {
            children: [actionText],
        }), createElement("div", {
            className: "icon reply",
        })])]]);
        return createElement("a", createObj(Helpers_combineClasses("button", props_2)));
    };
    const messageViews = mapIndexed((i, message) => {
        let children;
        let buttons;
        const matchValue = message.Type;
        if (matchValue.tag === 1) {
            const orderId = matchValue.fields[1];
            const href = matchValue.fields[0];
            buttons = ofArray([actionButton("Sign ", new ActionType(0, href)), actionButton("Reject ", new ActionType(1, cancelSignatureOrder(orderId)))]);
        }
        else {
            buttons = singleton(actionButton("Reply ", new ActionType(0, toText(printf("mailto:support@criipto.com?subject=%s\u0026body=%s"))(message.Subject)(message.Content))));
        }
        return createElement("article", {
            className: "accordion message-item",
            children: Interop_reactApi.Children.toArray([createElement("div", {
                className: toText(printf("accordion-header toggle message-item message-item-%d"))(i),
                onClick: (_arg2) => {
                    const messageHeader = document.getElementsByClassName(toText(printf("message-item-%d"))(i))[0];
                    messageHeader.parentElement.classList.toggle("is-active");
                    const dot = messageHeader.getElementsByClassName("dot")[0];
                    if ((!(dot == null)) && (!dot.classList.contains("read"))) {
                        const value_17 = dot.classList.add("read");
                    }
                    setMessages(map((m) => {
                        if (equals(m, message)) {
                            return new Message_1(m.Id, m.Subject, m.Content, m.From, m.Date, false, m.Type);
                        }
                        else {
                            return m;
                        }
                    }, messages));
                },
                children: Interop_reactApi.Children.toArray([(children = ofArray([createElement("div", {
                    className: "message-item from",
                    children: Interop_reactApi.Children.toArray(Array.from(toList(delay(() => append(message.Unread ? singleton_1(createElement("div", {
                        style: {
                            marginRight: 12,
                        },
                        className: "icon dot",
                    })) : empty(), delay(() => {
                        let arg00_2;
                        return singleton_1((arg00_2 = ((message.From + " ") + toString(message.Date, "yyyy-MM-dd")), createElement("span", {
                            children: [arg00_2],
                        })));
                    })))))),
                }), createElement("span", {
                    className: "message-item subject",
                    children: message.Subject,
                })]), createElement("div", {
                    children: Interop_reactApi.Children.toArray(Array.from(children)),
                }))]),
            }), createElement("div", {
                className: "accordion-body",
                children: Interop_reactApi.Children.toArray([createElement("div", {
                    className: "accordion-content message-item",
                    children: Interop_reactApi.Children.toArray([createElement(Message_MarkdownDiv_Z721C83C5, {
                        x: message.Content,
                    })]),
                }), createElement("section", {
                    children: Interop_reactApi.Children.toArray(Array.from(buttons)),
                })]),
            })]),
        });
    }, msgs);
    const props_24 = ofArray([["style", {
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
    }], ["children", Interop_reactApi.Children.toArray([(elms_3 = ofArray([(elms_1 = singleton((elms = singleton(createElement("figure", createObj(Helpers_combineClasses("image", singleton(["className", "is-32x32 icon envelope"]))))), createElement("div", {
        className: "media-left",
        children: Interop_reactApi.Children.toArray(Array.from(elms)),
    }))), createElement("article", {
        className: "media",
        children: Interop_reactApi.Children.toArray(Array.from(elms_1)),
    })), (elms_2 = toList(delay(() => append(singleton_1(createElement("h1", createObj(Helpers_combineClasses("title", singleton(["children", title]))))), delay(() => append(singleton_1(createElement("section", {
        className: "accordions",
        children: Interop_reactApi.Children.toArray(Array.from(messageViews)),
    })), delay(() => ((length(msgs) < length(messages)) ? singleton_1(createElement("a", {
        onClick: (_arg3) => {
            setView(new Types_View(5));
        },
        children: "Show all messages",
    })) : empty()))))))), createElement("div", {
        className: "content",
        children: Interop_reactApi.Children.toArray(Array.from(elms_2)),
    }))]), createElement("div", {
        className: "card-content",
        children: Interop_reactApi.Children.toArray(Array.from(elms_3)),
    }))])]]);
    return createElement("div", createObj(Helpers_combineClasses("card", props_24)));
}

//# sourceMappingURL=Message.js.map
