import { Record } from "../fable_modules/fable-library.3.6.3/Types.js";
import { float64_type, record_type, int32_type, string_type } from "../fable_modules/fable-library.3.6.3/Reflection.js";

export class UserProfile extends Record {
    constructor(identityscheme, authenticationtype, authenticationmethod, authenticationinstant, nameidentifier, sub, sessionindex, loA, ial, aal, fal, uuid, cprNumberIdentifier, birthdate, dateofbirth, age, name, country) {
        super();
        this.identityscheme = identityscheme;
        this.authenticationtype = authenticationtype;
        this.authenticationmethod = authenticationmethod;
        this.authenticationinstant = authenticationinstant;
        this.nameidentifier = nameidentifier;
        this.sub = sub;
        this.sessionindex = sessionindex;
        this.loA = loA;
        this.ial = ial;
        this.aal = aal;
        this.fal = fal;
        this.uuid = uuid;
        this.cprNumberIdentifier = cprNumberIdentifier;
        this.birthdate = birthdate;
        this.dateofbirth = dateofbirth;
        this.age = (age | 0);
        this.name = name;
        this.country = country;
    }
}

export function UserProfile$reflection() {
    return record_type("Oidc.UserProfile", [], UserProfile, () => [["identityscheme", string_type], ["authenticationtype", string_type], ["authenticationmethod", string_type], ["authenticationinstant", string_type], ["nameidentifier", string_type], ["sub", string_type], ["sessionindex", string_type], ["loA", string_type], ["ial", string_type], ["aal", string_type], ["fal", string_type], ["uuid", string_type], ["cprNumberIdentifier", string_type], ["birthdate", string_type], ["dateofbirth", string_type], ["age", int32_type], ["name", string_type], ["country", string_type]]);
}

export class UserInfo extends Record {
    constructor(code, id_token, access_token, token_type, scope, profile, expires_at) {
        super();
        this.code = code;
        this.id_token = id_token;
        this.access_token = access_token;
        this.token_type = token_type;
        this.scope = scope;
        this.profile = profile;
        this.expires_at = expires_at;
    }
}

export function UserInfo$reflection() {
    return record_type("Oidc.UserInfo", [], UserInfo, () => [["code", string_type], ["id_token", string_type], ["access_token", string_type], ["token_type", string_type], ["scope", string_type], ["profile", UserProfile$reflection()], ["expires_at", float64_type]]);
}

export function UserInfo_Parse_Z721C83C5(json) {
    const info = JSON.parse(json);
    const p = info["profile"];
    const profile = new UserProfile(p["identityscheme"], p["authenticationtype"], p["authenticationmethod"], p["authenticationinstant"], p["nameidentifier"], p["sub"], p["sessionindex"], p["loA"], p["ial"], p["aal"], p["fal"], p["uuid"], p["cprNumberIdentifier"], p["birthdate"], p["dateofbirth"], ~(~(p["age"])), p["name"], p["country"]);
    return new UserInfo(info["code"], info["id_token"], info["access_token"], info["token_type"], info["scope"], profile, info["expires_at"]);
}

export class Options extends Record {
    constructor(authority, client_id, redirect_uri, response_type, post_logout_redirect_uri, acr_values) {
        super();
        this.authority = authority;
        this.client_id = client_id;
        this.redirect_uri = redirect_uri;
        this.response_type = response_type;
        this.post_logout_redirect_uri = post_logout_redirect_uri;
        this.acr_values = acr_values;
    }
}

export function Options$reflection() {
    return record_type("Oidc.Options", [], Options, () => [["authority", string_type], ["client_id", string_type], ["redirect_uri", string_type], ["response_type", string_type], ["post_logout_redirect_uri", string_type], ["acr_values", string_type]]);
}

//# sourceMappingURL=OidcClient.js.map
