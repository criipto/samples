import { Union, Record } from "../fable_modules/fable-library.3.6.3/Types.js";
import { list_type, option_type, bool_type, union_type, record_type, string_type, class_type } from "../fable_modules/fable-library.3.6.3/Reflection.js";
import { head, isEmpty, sortByDescending, sumBy } from "../fable_modules/fable-library.3.6.3/List.js";
import { op_Addition } from "../fable_modules/fable-library.3.6.3/Decimal.js";
import Decimal from "../fable_modules/fable-library.3.6.3/Decimal.js";
import { date, now, compare } from "../fable_modules/fable-library.3.6.3/Date.js";

export class LedgerEntry extends Record {
    constructor(Date$, Amount, Balance, Text$) {
        super();
        this.Date = Date$;
        this.Amount = Amount;
        this.Balance = Balance;
        this.Text = Text$;
    }
}

export function LedgerEntry$reflection() {
    return record_type("Models.LedgerEntry", [], LedgerEntry, () => [["Date", class_type("System.DateTime")], ["Amount", class_type("System.Decimal")], ["Balance", class_type("System.Decimal")], ["Text", string_type]]);
}

export class MessageType extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Plain", "Signature"];
    }
}

export function MessageType$reflection() {
    return union_type("Models.MessageType", [], MessageType, () => [[], [["href", string_type], ["orderId", string_type]]]);
}

export class Message extends Record {
    constructor(Id, Subject, Content, From, Date$, Unread, Type) {
        super();
        this.Id = Id;
        this.Subject = Subject;
        this.Content = Content;
        this.From = From;
        this.Date = Date$;
        this.Unread = Unread;
        this.Type = Type;
    }
}

export function Message$reflection() {
    return record_type("Models.Message", [], Message, () => [["Id", string_type], ["Subject", string_type], ["Content", string_type], ["From", string_type], ["Date", class_type("System.DateTime")], ["Unread", bool_type], ["Type", MessageType$reflection()]]);
}

export class Document$ extends Record {
    constructor(Name, Content, Reference) {
        super();
        this.Name = Name;
        this.Content = Content;
        this.Reference = Reference;
    }
}

export function Document$$reflection() {
    return record_type("Models.Document", [], Document$, () => [["Name", string_type], ["Content", string_type], ["Reference", option_type(string_type)]]);
}

export class Account extends Record {
    constructor(Name, Ledger) {
        super();
        this.Name = Name;
        this.Ledger = Ledger;
    }
}

export function Account$reflection() {
    return record_type("Models.Account", [], Account, () => [["Name", string_type], ["Ledger", list_type(LedgerEntry$reflection())]]);
}

export function Account__get_Balance(x) {
    return sumBy((l) => l.Amount, x.Ledger, {
        GetZero: () => (new Decimal(0)),
        Add: (x_1, y) => op_Addition(x_1, y),
    });
}

export function Account__get_LatestMovement(x) {
    const matchValue = sortByDescending((l) => l.Date, x.Ledger, {
        Compare: (x_1, y) => compare(x_1, y),
    });
    if (!isEmpty(matchValue)) {
        const l_1 = head(matchValue);
        return l_1.Date;
    }
    else {
        let copyOfStruct = now();
        return date(copyOfStruct);
    }
}

export class User extends Record {
    constructor(Name, DateOfBirth, Accounts, Token) {
        super();
        this.Name = Name;
        this.DateOfBirth = DateOfBirth;
        this.Accounts = Accounts;
        this.Token = Token;
    }
}

export function User$reflection() {
    return record_type("Models.User", [], User, () => [["Name", string_type], ["DateOfBirth", string_type], ["Accounts", list_type(Account$reflection())], ["Token", string_type]]);
}

//# sourceMappingURL=Models.js.map
