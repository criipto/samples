import { head } from "../fable_modules/fable-library.3.6.3/Array.js";
import { toConsoleError, toConsole, printf, toText, split } from "../fable_modules/fable-library.3.6.3/String.js";
import { UserInfo_Parse_Z721C83C5, Options } from "./OidcClient.js";
import { UserManager } from "oidc-client";
import { create, now, op_Subtraction } from "../fable_modules/fable-library.3.6.3/Date.js";
import { totalSeconds } from "../fable_modules/fable-library.3.6.3/TimeSpan.js";
import { bind } from "../fable_modules/fable-library.3.6.3/Option.js";

const options = (() => {
    const url = head(split(window.location.href, ["?", "#"]));
    return new Options("https://fablecriipto-test.criipto.id", "urn:my:application:identifier:1744", url, "code", url, "urn:grn:authn:dk:mitid:low");
})();

const userManager = new UserManager(options);

export const storageKey = toText(printf("oidc.user:%s:%s"))(options.authority)(options.client_id);

export const storage = sessionStorage;

export function tryGetUserProfileFromStorage() {
    const userInfo = storage.getItem(storageKey);
    if (userInfo == null) {
        return void 0;
    }
    else {
        return UserInfo_Parse_Z721C83C5(userInfo);
    }
}

export function tryGetUserProfile(cont) {
    const matchValue = tryGetUserProfileFromStorage();
    if (matchValue == null) {
        userManager.processSigninResponse().then((userInfo) => {
            const json = JSON.stringify(userInfo);
            storage.setItem(storageKey, toText(printf("%A"))(json));
            cont(userInfo);
        }).catch((err) => {
            console.error("Error processing signin:", err);
            cont(void 0);
        });
    }
    else {
        const userInfo_1 = matchValue;
        cont(userInfo_1);
    }
}

export function hasRequestedAuthentication() {
    const href = window.location.href;
    return href.indexOf("code=") >= 0;
}

export function isAuthenticated(updateUserProfile) {
    const hasExpired = (userProfile) => {
        let copyOfStruct;
        return userProfile.expires_at > ((copyOfStruct = op_Subtraction(now(), create(1970, 1, 1, 0, 0, 0, 0)), totalSeconds(copyOfStruct)));
    };
    tryGetUserProfile((arg) => {
        updateUserProfile(bind((userProfile_1) => {
            toConsole(printf("Expires at: %A"))(userProfile_1.expires_at);
            if (hasExpired(userProfile_1)) {
                storage.removeItem(storageKey);
                return void 0;
            }
            else {
                return userProfile_1;
            }
        }, arg));
    });
}

export function logOut() {
    try {
        storage.removeItem(storageKey);
        userManager.signoutRedirect();
    }
    catch (e) {
        const arg10 = e.message;
        toConsoleError(printf("Eror when logging out: %s"))(arg10);
    }
}

export function logIn() {
    return userManager.signinRedirect();
}

//# sourceMappingURL=Identity.js.map
