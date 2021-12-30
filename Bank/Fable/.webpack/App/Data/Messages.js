import { comparePrimitives, compareArrays, createAtom } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { fold, collect, map, mapIndexed as mapIndexed_1, empty, isEmpty, ofArray } from "../../fable_modules/fable-library.3.6.3/List.js";
import { singleton } from "../../fable_modules/fable-library.3.6.3/AsyncBuilder.js";
import { Http_get } from "../../fable_modules/Fable.SimpleHttp.3.0.0/Http.fs.js";
import { sortBy, map as map_1, mapIndexed, sortByDescending } from "../../fable_modules/fable-library.3.6.3/Array.js";
import { parse } from "../../fable_modules/fable-library.3.6.3/Date.js";
import { Message, MessageType } from "../Models.js";
import { printf, toConsoleError, isNullOrWhiteSpace } from "../../fable_modules/fable-library.3.6.3/String.js";
import { parallel, startImmediate } from "../../fable_modules/fable-library.3.6.3/Async.js";
import { empty as empty_1, FSharpMap__Add, toList } from "../../fable_modules/fable-library.3.6.3/Map.js";
import { value as value_2 } from "../../fable_modules/fable-library.3.6.3/Option.js";

export let messages = createAtom(void 0);

export const sources = ofArray(["https://criipto-bank.netlify.app/feliz/messages.json", "/messages.json"]);

export function fetch$(setMessages) {
    const retrieveMessages = (priority, src) => singleton.Delay(() => singleton.Bind(Http_get(src), (_arg1) => {
        const statusCode = _arg1[0] | 0;
        const messagesRaw = _arg1[1];
        if (statusCode === 200) {
            const messages_1 = ofArray(sortByDescending((m_2) => [m_2.Unread ? 1 : 0, m_2.Date], mapIndexed((i, m_1) => (new Message(m_1["id"], m_1["title"], m_1["content"], m_1["from"], parse(m_1["date"], {}), (i % 5) !== 1, new MessageType(0))), ((JSON.parse(messagesRaw))["messages"]).filter((m) => (!isNullOrWhiteSpace(m["id"])))), {
                Compare: (x, y) => compareArrays(x, y),
            }));
            if (!isEmpty(messages_1)) {
                return singleton.Return([priority, messages_1]);
            }
            else {
                toConsoleError(printf("Failed retrieving from %s got %d - %s"))(src)(statusCode)(messagesRaw);
                return singleton.Return([priority, empty()]);
            }
        }
        else {
            toConsoleError(printf("Failed to retrieve messages %d %s from %s"))(statusCode)(messagesRaw)(src);
            return singleton.Return([priority, empty()]);
        }
    }));
    if (messages() == null) {
        startImmediate(singleton.Delay(() => singleton.Bind(parallel(mapIndexed_1(retrieveMessages, sources)), (_arg2) => {
            let list_3;
            const msgs = _arg2;
            messages(map((tuple_2) => tuple_2[1], toList((list_3 = collect((x_2) => x_2, ofArray(map_1((tuple_1) => tuple_1[1], sortBy((tuple) => tuple[0], msgs, {
                Compare: (x_1, y_1) => comparePrimitives(x_1, y_1),
            })))), fold((res, m_3) => FSharpMap__Add(res, m_3.Id, m_3), empty_1(), list_3)))), true);
            setMessages(value_2(messages()));
            return singleton.Zero();
        })));
    }
}

//# sourceMappingURL=Messages.js.map
