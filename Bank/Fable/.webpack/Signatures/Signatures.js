import { Record } from "../fable_modules/fable-library.3.6.3/Types.js";
import { record_type, option_type, string_type } from "../fable_modules/fable-library.3.6.3/Reflection.js";

export class DocumentInfo extends Record {
    constructor(Title, Content, Reference) {
        super();
        this.Title = Title;
        this.Content = Content;
        this.Reference = Reference;
    }
}

export function DocumentInfo$reflection() {
    return record_type("Signatures.DocumentInfo", [], DocumentInfo, () => [["Title", string_type], ["Content", string_type], ["Reference", option_type(string_type)]]);
}

//# sourceMappingURL=Signatures.js.map
