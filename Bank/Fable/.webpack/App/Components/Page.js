import { int32_type, obj_type, array_type, anonRecord_type, string_type, bool_type, class_type } from "../../fable_modules/fable-library.3.6.3/Reflection.js";
import { sumBy, empty, cons, head, find, ofArray, singleton, filter } from "../../fable_modules/fable-library.3.6.3/List.js";
import { Interop_reactApi } from "../../fable_modules/Feliz.1.57.0/Interop.fs.js";
import { Types_View, Types_View__get_IconName } from "./Elements.js";
import { toConsoleError, toBase64String, toConsole, replace, printf, toText } from "../../fable_modules/fable-library.3.6.3/String.js";
import { createElement } from "react";
import { createObj } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { Helpers_combineClasses } from "../../fable_modules/Feliz.Bulma.2.18.0/ElementBuilders.fs.js";
import { toString } from "../../fable_modules/fable-library.3.6.3/Types.js";
import { Components_Splash, Components_IdCard_Z34C1F15A } from "./Components.js";
import { Message_List_3D36A079 } from "./Message.js";
import { Account_Transactions_Z2F12D0CA, Account_Box_130DA4ED } from "./Account.js";
import { startImmediate } from "../../fable_modules/fable-library.3.6.3/Async.js";
import { singleton as singleton_1 } from "../../fable_modules/fable-library.3.6.3/AsyncBuilder.js";
import { map } from "../../fable_modules/fable-library.3.6.3/Array.js";
import { DocumentInfo } from "../../Signatures/Signatures.js";
import { createTypeInfo } from "../../fable_modules/Fable.SimpleJson.3.22.0/TypeInfo.Converter.fs.js";
import { Convert_serialize } from "../../fable_modules/Fable.SimpleJson.3.22.0/Json.Converter.fs.js";
import { Headers_authorization, Headers_contentType, Http_headers, Http_request, Http_method, Http_content, Http_send } from "../../fable_modules/Fable.SimpleHttp.3.0.0/Http.fs.js";
import { HttpMethod, BodyContent } from "../../fable_modules/Fable.SimpleHttp.3.0.0/Types.fs.js";
import { FSharpResult$2 } from "../../fable_modules/fable-library.3.6.3/Choice.js";
import { get_Unicode } from "../../fable_modules/fable-library.3.6.3/Encoding.js";
import { getTicks, now } from "../../fable_modules/fable-library.3.6.3/Date.js";
import { toString as toString_1 } from "../../fable_modules/fable-library.3.6.3/Long.js";
import { User, Message, MessageType } from "../Models.js";
import { useFeliz_React__React_useState_Static_1505 } from "../../fable_modules/Feliz.1.57.0/React.fs.js";
import { fetch$ } from "../Data/Messages.js";
import { fetch$ as fetch$_1 } from "../Data/Documents.js";
import { map as map_1 } from "../../fable_modules/fable-library.3.6.3/Option.js";
import { generate } from "../Data/Statements.js";
import { Navigation_SidePanel_AB71DB6, Navigation_Topbar_700867CD } from "./Navigation.js";
import { isAuthenticated, logIn, hasRequestedAuthentication, logOut } from "../../Authentication/Identity.js";

export class Page {
    constructor() {
    }
}

export function Page$reflection() {
    return class_type("App.Components.Page", void 0, Page);
}

export function Page_$ctor() {
    return new Page();
}

(() => {
    Page.accordions = [];
})();

export function Page_Overview_2B9534(page_Overview_2B9534InputProps) {
    const setMessages = page_Overview_2B9534InputProps.setMessages;
    const documents = page_Overview_2B9534InputProps.documents;
    const messages = page_Overview_2B9534InputProps.messages;
    const setView = page_Overview_2B9534InputProps.setView;
    const activeView = page_Overview_2B9534InputProps.activeView;
    const user = page_Overview_2B9534InputProps.user;
    const removeMessage = (predicate) => {
        setMessages(filter((arg) => (!predicate(arg)), messages));
    };
    const placeholderContent = (v) => {
        let elms_3, elms_1, elms, props, arg10, elms_2, props_4;
        const props_8 = ofArray([["style", {
            boxShadow: "none",
            backgroundColor: "#FFFFFF",
        }], ["children", Interop_reactApi.Children.toArray([(elms_3 = ofArray([(elms_1 = singleton((elms = singleton((props = singleton(["className", (arg10 = Types_View__get_IconName(v), toText(printf("is-32x32 icon %s"))(arg10))]), createElement("figure", createObj(Helpers_combineClasses("image", props))))), createElement("div", {
            className: "media-left",
            children: Interop_reactApi.Children.toArray(Array.from(elms)),
        }))), createElement("article", {
            className: "media",
            children: Interop_reactApi.Children.toArray(Array.from(elms_1)),
        })), (elms_2 = singleton((props_4 = singleton(["children", toString(v)]), createElement("h1", createObj(Helpers_combineClasses("title", props_4))))), createElement("div", {
            className: "content",
            children: Interop_reactApi.Children.toArray(Array.from(elms_2)),
        }))]), createElement("div", {
            className: "card-content",
            children: Interop_reactApi.Children.toArray(Array.from(elms_3)),
        }))])]]);
        return createElement("div", createObj(Helpers_combineClasses("card", props_8)));
    };
    const cancelSignatureOrder = (orderId) => Page_cancelSignatureOrder(removeMessage, user.Token, orderId);
    let components;
    switch (activeView.tag) {
        case 0: {
            components = ofArray([createElement(Components_IdCard_Z34C1F15A, user), createElement(Message_List_3D36A079, {
                title: "New messages",
                messages: messages,
                setMessages: setMessages,
                setView: setView,
                maxCount: 2,
                cancelSignatureOrder: cancelSignatureOrder,
            }), createElement(Account_Box_130DA4ED, {
                accounts: user.Accounts,
                viewAccount: (name_14) => {
                    setView(new Types_View(1, name_14));
                },
            })]);
            break;
        }
        case 8: {
            components = singleton(createElement(Account_Box_130DA4ED, {
                accounts: user.Accounts,
                viewAccount: (name_15) => {
                    setView(new Types_View(1, name_15));
                },
            }));
            break;
        }
        case 1: {
            const name_16 = activeView.fields[0];
            const account = find((a) => (a.Name === name_16), user.Accounts);
            components = singleton(createElement(Account_Transactions_Z2F12D0CA, account));
            break;
        }
        case 5: {
            components = singleton(createElement(Message_List_3D36A079, {
                title: "Messages",
                messages: messages,
                setMessages: setMessages,
                setView: setView,
                maxCount: void 0,
                cancelSignatureOrder: cancelSignatureOrder,
            }));
            break;
        }
        case 4: {
            startImmediate(singleton_1.Delay(() => {
                let json, arg00_2, typeInfo;
                const doc = head(documents);
                const docName = replace(doc.Name, "%USERNAME%", user.Name);
                const content = replace(doc.Content, "%USERNAME%", user.Name);
                return singleton_1.Bind((json = ((arg00_2 = {
                    disableVerifyEvidenceProvider: false,
                    documents: map((doc_1) => {
                        let matchValue, s;
                        return {
                            Content: doc_1.Content,
                            Reference: (matchValue = doc_1.Reference, (matchValue != null) ? ((s = matchValue, s)) : null),
                            Title: doc_1.Title,
                        };
                    }, [new DocumentInfo(docName, content, void 0)]),
                    evidenceProviders: null,
                    fixDocumentFormattingErrors: true,
                    maxSignatories: 14,
                    signatories: null,
                    signatoryUIRedirectUri: null,
                    title: "Signature order",
                    webhookUrl: null,
                }, (typeInfo = createTypeInfo(anonRecord_type(["disableVerifyEvidenceProvider", bool_type], ["documents", array_type(anonRecord_type(["Content", string_type], ["Reference", string_type], ["Title", string_type]))], ["evidenceProviders", obj_type], ["fixDocumentFormattingErrors", bool_type], ["maxSignatories", int32_type], ["signatories", obj_type], ["signatoryUIRedirectUri", obj_type], ["title", string_type], ["webhookUrl", obj_type])), Convert_serialize(arg00_2, typeInfo)))), singleton_1.Delay(() => {
                    let req_1;
                    return singleton_1.Bind(Http_send(Http_content(new BodyContent(1, json), (req_1 = Http_method(new HttpMethod(1), Http_request("/signing/createSignatureOrder")), Http_headers(ofArray([Headers_contentType("application/json"), Headers_authorization(toText(printf("Bearer %s"))(user.Token))]), req_1)))), (_arg1) => {
                        const response = _arg1;
                        const matchValue_1 = response.statusCode | 0;
                        if (matchValue_1 === 200) {
                            const response_1 = response.responseText;
                            toConsole(printf("Received: %s"))(response_1);
                            return singleton_1.Return(new FSharpResult$2(0, JSON.parse(response_1)));
                        }
                        else {
                            const errorStatus = matchValue_1 | 0;
                            const errors = response.responseText;
                            toConsole(printf("Got erros: %s"))(errors);
                            return singleton_1.Return(new FSharpResult$2(1, errors));
                        }
                    });
                })), (_arg2) => {
                    const signatureOrderResult = _arg2;
                    if (signatureOrderResult.tag === 1) {
                        const e_1 = signatureOrderResult.fields[0];
                        toConsole(printf("Error occurred while creating signature order %s"))(e_1);
                        return singleton_1.Zero();
                    }
                    else {
                        const order = signatureOrderResult.fields[0];
                        startImmediate(singleton_1.Delay(() => {
                            let json_2, arg00_6, typeInfo_1;
                            const userRef = toBase64String(get_Unicode().getBytes(user.Name));
                            return singleton_1.Bind((json_2 = ((arg00_6 = {
                                Signatory: {
                                    documents: null,
                                    evidenceValidation: null,
                                    reference: userRef,
                                },
                                SignatureOrderId: order["id"],
                            }, (typeInfo_1 = createTypeInfo(anonRecord_type(["Signatory", anonRecord_type(["documents", obj_type], ["evidenceValidation", obj_type], ["reference", string_type])], ["SignatureOrderId", string_type])), Convert_serialize(arg00_6, typeInfo_1)))), singleton_1.Delay(() => {
                                let req_5;
                                return singleton_1.Bind(Http_send(Http_content(new BodyContent(1, json_2), (req_5 = Http_method(new HttpMethod(1), Http_request("/signing/addSignatory")), Http_headers(ofArray([Headers_contentType("application/json"), Headers_authorization(toText(printf("Bearer %s"))(user.Token))]), req_5)))), (_arg1_1) => {
                                    const response_2 = _arg1_1;
                                    const matchValue_2 = response_2.statusCode | 0;
                                    if (matchValue_2 === 200) {
                                        const response_3 = response_2.responseText;
                                        toConsole(printf("Received: %s"))(response_3);
                                        return singleton_1.Return(new FSharpResult$2(0, JSON.parse(response_3)));
                                    }
                                    else {
                                        const errorStatus_1 = matchValue_2 | 0;
                                        const errors_1 = response_2.responseText;
                                        toConsole(printf("Got erros: %s"))(errors_1);
                                        return singleton_1.Return(new FSharpResult$2(1, errors_1));
                                    }
                                });
                            })), (_arg3) => {
                                let copyOfStruct_1, copyOfStruct;
                                const signatoryAddedResult = _arg3;
                                if (signatoryAddedResult.tag === 1) {
                                    const e = signatoryAddedResult.fields[0];
                                    toConsoleError(printf("Erros while adding signatory %s"))(e);
                                    return singleton_1.Zero();
                                }
                                else {
                                    const signatoryAdded = signatoryAddedResult.fields[0];
                                    const linkToDoc = (signatoryAdded["signatory"])["documentLink"];
                                    const msg = new Message(userRef + ((copyOfStruct_1 = ((copyOfStruct = now(), getTicks(copyOfStruct))), toString_1(copyOfStruct_1))), "Document to be signed", "Your loan is awaiting your signature. To read the document and sign it press the button below", "Your bank advisor", now(), true, new MessageType(1, linkToDoc, order["id"]));
                                    setMessages(cons(msg, messages));
                                    return singleton_1.Zero();
                                }
                            });
                        }));
                        return singleton_1.Zero();
                    }
                });
            }));
            components = singleton(placeholderContent(new Types_View(4)));
            break;
        }
        default: {
            const v_1 = activeView;
            components = singleton(placeholderContent(v_1));
        }
    }
    return createElement("div", {
        className: "container",
        children: Interop_reactApi.Children.toArray(Array.from(components)),
    });
}

export function Page_Layout() {
    let elms, props_6, props_2, props_4;
    const patternInput = useFeliz_React__React_useState_Static_1505(new Types_View(0));
    const view = patternInput[0];
    const setView = patternInput[1];
    const patternInput_1 = useFeliz_React__React_useState_Static_1505(void 0);
    const user = patternInput_1[0];
    const _setUser = patternInput_1[1];
    const patternInput_2 = useFeliz_React__React_useState_Static_1505(empty());
    const messages = patternInput_2[0];
    const _setMessages = patternInput_2[1];
    const patternInput_3 = useFeliz_React__React_useState_Static_1505(empty());
    const setDocuments = patternInput_3[1];
    const documents = patternInput_3[0];
    const patternInput_4 = useFeliz_React__React_useState_Static_1505(0);
    const unreadCount = patternInput_4[0] | 0;
    const setUnread = patternInput_4[1];
    const reduceUnreadCount = () => {
        setUnread(unreadCount - 1);
    };
    const setMessages = (msgs) => {
        const unreadCount_1 = sumBy((m) => {
            if (m.Unread) {
                return 1;
            }
            else {
                return 0;
            }
        }, msgs, {
            GetZero: () => 0,
            Add: (x, y) => (x + y),
        }) | 0;
        setUnread(unreadCount_1);
        _setMessages(msgs);
    };
    fetch$(setMessages);
    fetch$_1(setDocuments);
    const setUser = (oidcUser) => {
        const user_1 = map_1((ou) => (new User(ou.profile.name, ou.profile.birthdate, generate(ou.profile.name, 200), ou.id_token)), oidcUser);
        if (user_1 == null) {
        }
        else {
            _setUser(user_1);
        }
    };
    if (user != null) {
        const user_2 = user;
        const children_3 = ofArray([createElement(Navigation_Topbar_700867CD, {
            userButtonText: "Log off",
            action: () => {
                logOut();
            },
        }), (elms = singleton((props_6 = ofArray([["style", {
            marginTop: 40,
        }], ["className", "is-centered"], ["children", Interop_reactApi.Children.toArray([(props_2 = ofArray([["style", {
            boxShadow: "none",
        }], ["className", "is-one-quarter"], ["className", "is-one-fifth-fullhd"], ["children", Interop_reactApi.Children.toArray([createElement(Navigation_SidePanel_AB71DB6, {
            messageCount: unreadCount,
            activeView: view,
            setView: setView,
        })])]]), createElement("div", createObj(Helpers_combineClasses("column", props_2)))), (props_4 = singleton(["children", Interop_reactApi.Children.toArray([createElement(Page_Overview_2B9534, {
            user: user_2,
            activeView: view,
            setView: setView,
            messages: messages,
            documents: documents,
            setMessages: setMessages,
        })])]), createElement("div", createObj(Helpers_combineClasses("column", props_4))))])]]), createElement("div", createObj(Helpers_combineClasses("columns", props_6))))), createElement("div", {
            className: "container",
            children: Interop_reactApi.Children.toArray(Array.from(elms)),
        }))]);
        return createElement("div", {
            children: Interop_reactApi.Children.toArray(Array.from(children_3)),
        });
    }
    else if (!hasRequestedAuthentication()) {
        const children = ofArray([createElement(Navigation_Topbar_700867CD, {
            userButtonText: "Log on",
            action: () => {
                logIn();
            },
        }), createElement(Components_Splash, null)]);
        return createElement("div", {
            children: Interop_reactApi.Children.toArray(Array.from(children)),
        });
    }
    else {
        const value_1 = isAuthenticated(setUser);
        return createElement("div", {});
    }
}

function Page_cancelSignatureOrder(removeMessage, userToken, orderId) {
    const identifyMessage = (msg) => {
        let oid;
        const matchValue = msg.Type;
        let pattern_matching_result;
        if (matchValue.tag === 1) {
            if ((oid = matchValue.fields[1], oid === orderId)) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                return true;
            }
            case 1: {
                return false;
            }
        }
    };
    return () => {
        startImmediate(singleton_1.Delay(() => {
            let json, typeInfo;
            return singleton_1.Bind((json = ((typeInfo = createTypeInfo(string_type), Convert_serialize(orderId, typeInfo))), singleton_1.Delay(() => {
                let req_1;
                return singleton_1.Bind(Http_send(Http_content(new BodyContent(1, json), (req_1 = Http_method(new HttpMethod(1), Http_request("/signing/cancelSignatureOrder")), Http_headers(ofArray([Headers_contentType("application/json"), Headers_authorization(toText(printf("Bearer %s"))(userToken))]), req_1)))), (_arg1) => {
                    const response = _arg1;
                    const matchValue_1 = response.statusCode | 0;
                    if (matchValue_1 === 200) {
                        const response_1 = response.responseText;
                        toConsole(printf("Received: %s"))(response_1);
                        return singleton_1.Return(new FSharpResult$2(0, response_1));
                    }
                    else {
                        const errorStatus = matchValue_1 | 0;
                        const errors = response.responseText;
                        toConsole(printf("Got erros: %s"))(errors);
                        return singleton_1.Return(new FSharpResult$2(1, errors));
                    }
                });
            })), (_arg1_1) => {
                const res = _arg1_1;
                if (res.tag === 1) {
                    const e = res.fields[0];
                    toConsoleError(printf("Failed to cancel %s. Errors: %s"))(orderId)(e);
                    return singleton_1.Zero();
                }
                else {
                    const res_1 = res.fields[0];
                    toConsole(printf("Cancel: %A"))(res_1);
                    removeMessage(identifyMessage);
                    return singleton_1.Zero();
                }
            });
        }));
    };
}

//# sourceMappingURL=Page.js.map
