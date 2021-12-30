import { comparePrimitives, createAtom } from "../../fable_modules/fable-library.3.6.3/Util.js";
import { fold, collect, map as map_2, mapIndexed, empty, isEmpty, ofArray } from "../../fable_modules/fable-library.3.6.3/List.js";
import { singleton } from "../../fable_modules/fable-library.3.6.3/AsyncBuilder.js";
import { Http_get, Http_request, Http_method, Http_send } from "../../fable_modules/Fable.SimpleHttp.3.0.0/Http.fs.js";
import { HttpMethod } from "../../fable_modules/Fable.SimpleHttp.3.0.0/Types.fs.js";
import { toConsoleError, printf, toConsole } from "../../fable_modules/fable-library.3.6.3/String.js";
import { value as value_2, map } from "../../fable_modules/fable-library.3.6.3/Option.js";
import { Document$ } from "../Models.js";
import { startImmediate, parallel } from "../../fable_modules/fable-library.3.6.3/Async.js";
import { sortBy, map as map_1 } from "../../fable_modules/fable-library.3.6.3/Array.js";
import { empty as empty_1, FSharpMap__Add, toList } from "../../fable_modules/fable-library.3.6.3/Map.js";

export let documents = createAtom(void 0);

export const sources = ofArray(["https://criipto-bank.netlify.app/feliz/documents.json", "/documents.json"]);

export function fetch$(setDocuments) {
    const readDocument = (doc) => singleton.Delay(() => singleton.Bind(Http_send(Http_method(new HttpMethod(0), Http_request(doc["documentUrl"]))), (_arg1) => {
        const response = _arg1;
        let content;
        const matchValue = response.statusCode | 0;
        if (matchValue === 200) {
            content = response.responseText;
        }
        else {
            const errorStatus = matchValue | 0;
            const errors = response.responseText;
            toConsole(printf("Error retrieving document: %s"))(errors);
            content = (void 0);
        }
        const doc_1 = map((content_1) => (new Document$(doc["name"], content_1, ((doc["reference"]) == null) ? (void 0) : (doc["reference"]))), content);
        return singleton.Return(doc_1);
    }));
    const retrieveDocuments = (priority, src) => singleton.Delay(() => singleton.Bind(Http_get(src), (_arg2) => {
        const statusCode = _arg2[0] | 0;
        const documentsRaw = _arg2[1];
        if (statusCode === 200) {
            return singleton.Bind(parallel(map_1((doc_2) => readDocument(doc_2), (JSON.parse(documentsRaw))["documents"])), (_arg3) => {
                const docs = _arg3;
                const documents_1 = ofArray(map_1((option_2) => value_2(option_2), docs.filter((option_1) => (option_1 != null))));
                if (!isEmpty(documents_1)) {
                    return singleton.Return([priority, documents_1]);
                }
                else {
                    toConsoleError(printf("Failed retrieving from %s got %d - %s"))(src)(statusCode)(documentsRaw);
                    return singleton.Return([priority, empty()]);
                }
            });
        }
        else {
            toConsoleError(printf("Failed to retrieve documents %d %s from %s"))(statusCode)(documentsRaw)(src);
            return singleton.Return([priority, empty()]);
        }
    }));
    if (documents() == null) {
        startImmediate(singleton.Delay(() => singleton.Bind(parallel(mapIndexed(retrieveDocuments, sources)), (_arg4) => {
            let list_3;
            const docs_1 = _arg4;
            documents(map_2((tuple_2) => tuple_2[1], toList((list_3 = collect((x_1) => x_1, ofArray(map_1((tuple_1) => tuple_1[1], sortBy((tuple) => tuple[0], docs_1, {
                Compare: (x, y) => comparePrimitives(x, y),
            })))), fold((res, doc_3) => FSharpMap__Add(res, doc_3.Name, doc_3), empty_1(), list_3)))), true);
            setDocuments(value_2(documents()));
            return singleton.Zero();
        })));
    }
}

//# sourceMappingURL=Documents.js.map
