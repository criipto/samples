goog.provide('Authentication.authentication');
var module$node_modules$$criipto$auth_js$dist$criipto_auth=shadow.js.require("module$node_modules$$criipto$auth_js$dist$criipto_auth", {});
Authentication.authentication.redirect_uri = (new cljs.core.Delay((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.location.hostname,"localhost")){
return ["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),"/samples/cljs/"].join('');
} else {
return ["https://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),"/samples/cljs/"].join('');
}
}),null));
Authentication.authentication.auth_domain = "mnie-test.criipto.id";
Authentication.authentication.client_id = "urn:mnie:1010";
Authentication.authentication.acr_mitid = "urn:grn:authn:dk:mitid:low";
if((typeof Authentication !== 'undefined') && (typeof Authentication.authentication !== 'undefined') && (typeof Authentication.authentication.authenticator !== 'undefined')){
} else {
Authentication.authentication.authenticator = (function (){var session_storage = sessionStorage;
var args = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"domain","domain",1847214937),Authentication.authentication.auth_domain,new cljs.core.Keyword(null,"clientID","clientID",-1997444035),Authentication.authentication.client_id,new cljs.core.Keyword(null,"store","store",1512230022),session_storage], null));
var authenticator = (new module$node_modules$$criipto$auth_js$dist$criipto_auth(args));
var match_object = authenticator.redirect.match();
match_object.then((function (result){
var temp__5753__auto__ = (function (){var G__21763 = result;
if((G__21763 == null)){
return null;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__21763);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var parsed_result = temp__5753__auto__;
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(parsed_result,"error") == null)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authorized","authorized",509904454),parsed_result], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authorization-error","authorization-error",-329272671),parsed_result], null));
}
} else {
return null;
}
})).catch((function (err){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authorization-error","authorization-error",-329272671),err], null));
}));

return authenticator;
})();
}
Authentication.authentication.login = (function Authentication$authentication$login(){
console.log("redirect uri");

console.log(cljs.core.deref(Authentication.authentication.redirect_uri));

var args = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redirectUri","redirectUri",-530835168),cljs.core.deref(Authentication.authentication.redirect_uri),new cljs.core.Keyword(null,"acrValues","acrValues",411239607),Authentication.authentication.acr_mitid], null));
return Authentication.authentication.authenticator.redirect.authorize(args);
});
Authentication.authentication.json_string__GT_clj = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__21764_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__21764_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),(function (p1__21765_SHARP_){
return JSON.parse(p1__21765_SHARP_);
}));
Authentication.authentication.b64_enc_json__GT_clj = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(Authentication.authentication.json_string__GT_clj,goog.crypt.base64.decodeString);
Authentication.authentication.parse_id_token = (function Authentication$authentication$parse_id_token(id_token){
var vec__21766 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(id_token,/\./);
var header_base64 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21766,(0),null);
var payload_base64 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21766,(1),null);
var signature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21766,(2),null);
var header_parsed = Authentication.authentication.b64_enc_json__GT_clj(header_base64);
var payload_parsed = Authentication.authentication.b64_enc_json__GT_clj(payload_base64);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),header_parsed,new cljs.core.Keyword(null,"payload","payload",-383036092),payload_parsed,new cljs.core.Keyword(null,"signature","signature",1463754794),signature], null);
});
Authentication.authentication.js_storage_key_for_auth = ["oidc.user:",Authentication.authentication.auth_domain,":",Authentication.authentication.client_id].join('');
Authentication.authentication.save_token_to_js_storage_BANG_ = (function Authentication$authentication$save_token_to_js_storage_BANG_(js_storage){
return (function (p__21769){
var map__21770 = p__21769;
var map__21770__$1 = cljs.core.__destructure_map(map__21770);
var _db = map__21770__$1;
var authorization_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21770__$1,new cljs.core.Keyword(null,"authorization-result","authorization-result",1368017039));
var error_QMARK_ = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(authorization_result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"error","error",-978969032)], null)));
if((!(error_QMARK_))){
return js_storage.setItem(Authentication.authentication.js_storage_key_for_auth,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(authorization_result))));
} else {
return null;
}
});
});
Authentication.authentication.remove_token_from_js_storage_BANG_ = (function Authentication$authentication$remove_token_from_js_storage_BANG_(js_storage){
return (function (){
return js_storage.removeItem(Authentication.authentication.js_storage_key_for_auth);
});
});

//# sourceMappingURL=Authentication.authentication.js.map
