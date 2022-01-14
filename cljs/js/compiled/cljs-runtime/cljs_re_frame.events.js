goog.provide('cljs_re_frame.events');
cljs_re_frame.events.messages_url = "https://criipto-bank.netlify.app/feliz/messages.json";
cljs_re_frame.events.js_storage = sessionStorage;
cljs_re_frame.events.set_token_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after(Authentication.authentication.save_token_to_js_storage_BANG_(cljs_re_frame.events.js_storage))], null);
cljs_re_frame.events.remove_token_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after(Authentication.authentication.remove_token_from_js_storage_BANG_(cljs_re_frame.events.js_storage))], null);
cljs_re_frame.events.read_local_storage = (function cljs_re_frame$events$read_local_storage(k){
var G__22077 = cljs_re_frame.events.js_storage.getItem(k);
if((G__22077 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__22077);
}
});
re_frame.core.reg_cofx(new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119),(function (cofx,_){
var token = cljs_re_frame.events.read_local_storage(Authentication.authentication.js_storage_key_for_auth);
var G__22079 = cofx;
if((!((token == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22079,new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119),token);
} else {
return G__22079;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),(function (p__22080,p__22081){
var map__22082 = p__22080;
var map__22082__$1 = cljs.core.__destructure_map(map__22082);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22082__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22083 = p__22081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),cljs_re_frame.router.path_for(active_page)], null)], null);
}));
cljs_re_frame.events.token_payload__GT_user_profile = (function cljs_re_frame$events$token_payload__GT_user_profile(payload){
return cljs.core.select_keys(payload,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"birthdate","birthdate",-534621599),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"cprNumberIdentifier","cprNumberIdentifier",-728346227),new cljs.core.Keyword(null,"country","country",312965309)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"authorized","authorized",509904454),cljs_re_frame.events.set_token_interceptor,(function (p__22086,p__22087){
var map__22088 = p__22086;
var map__22088__$1 = cljs.core.__destructure_map(map__22088);
var _cofx = map__22088__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22088__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22089 = p__22087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22089,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22089,(1),null);
var result_STAR_ = clojure.walk.keywordize_keys(result);
var parsed_result = (function (){var G__22092 = result_STAR_;
var G__22092__$1 = (((G__22092 == null))?null:new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(G__22092));
if((G__22092__$1 == null)){
return null;
} else {
return Authentication.authentication.parse_id_token(G__22092__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authorization-result","authorization-result",1368017039),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),result_STAR_,new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed_result], null)),new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313),(function (){var G__22093 = parsed_result;
var G__22093__$1 = (((G__22093 == null))?null:new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__22093));
if((G__22093__$1 == null)){
return null;
} else {
return cljs_re_frame.events.token_payload__GT_user_profile(G__22093__$1);
}
})()),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),new cljs.core.Keyword(null,"overview","overview",-435037267)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authorization-error","authorization-error",-329272671),(function (db,p__22094){
var vec__22095 = p__22094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095,(0),null);
var error_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"authorization-error-message","authorization-error-message",-1415565754),error_message);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("cljs-re-frame.events","initialize-db","cljs-re-frame.events/initialize-db",412710679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119))], null),(function (p__22098,_){
var map__22099 = p__22098;
var map__22099__$1 = cljs.core.__destructure_map(map__22099);
var _cofx = map__22099__$1;
var local_store_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119));
var parsed_token = (function (){var G__22100 = local_store_token;
var G__22100__$1 = (((G__22100 == null))?null:new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(G__22100));
if((G__22100__$1 == null)){
return null;
} else {
return Authentication.authentication.parse_id_token(G__22100__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs_re_frame.db.default_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authorization-result","authorization-result",1368017039),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),local_store_token,new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed_token], null)),new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313),(function (){var G__22101 = parsed_token;
var G__22101__$1 = (((G__22101 == null))?null:new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__22101));
if((G__22101__$1 == null)){
return null;
} else {
return cljs_re_frame.events.token_payload__GT_user_profile(G__22101__$1);
}
})())], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),(function (p__22102){
var map__22103 = p__22102;
var map__22103__$1 = cljs.core.__destructure_map(map__22103);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs_re_frame.router.set_token_BANG_(path);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.router","route-changed","cljs-re-frame.router/route-changed",461575894),(function (p__22104,p__22105){
var map__22106 = p__22104;
var map__22106__$1 = cljs.core.__destructure_map(map__22106);
var _cofx = map__22106__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22106__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22107 = p__22105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(0),null);
var map__22110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(1),null);
var map__22110__$1 = cljs.core.__destructure_map(map__22110);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22110__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var G__22111 = handler;
var G__22111__$1 = (((G__22111 instanceof cljs.core.Keyword))?G__22111.fqn:null);
switch (G__22111__$1) {
case "auth":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),new cljs.core.Keyword(null,"overview","overview",-435037267)),new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),cljs_re_frame.router.path_for(new cljs.core.Keyword(null,"overview","overview",-435037267))], null)], null);

break;
case "messages":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),new cljs.core.Keyword(null,"messages","messages",345434482)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383)], null)], null);

break;
case "overview":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),new cljs.core.Keyword(null,"overview","overview",-435037267)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383)], null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),handler)], null);

}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383),(function (p__22112,_){
var map__22113 = p__22112;
var map__22113__$1 = cljs.core.__destructure_map(map__22113);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22113__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"messages","messages",345434482)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),cljs_re_frame.events.messages_url,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyword?","keyword?",277265542),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","get-messages-success","cljs-re-frame.events/get-messages-success",-1128177407)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","endpoint-request-error","cljs-re-frame.events/endpoint-request-error",1813637320),new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","get-messages-success","cljs-re-frame.events/get-messages-success",-1128177407),(function (db,p__22115){
var vec__22116 = p__22115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22116,(0),null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22116,(1),null);
var old_messages = new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(db);
var new_messages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys(messages))));
var updated_messages = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_messages,new_messages], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"messages","messages",345434482)], null),false),new cljs.core.Keyword(null,"messages","messages",345434482),updated_messages);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","endpoint-request-error","cljs-re-frame.events/endpoint-request-error",1813637320),(function (db,p__22120){
var vec__22121 = p__22120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22121,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),request_type], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),request_type], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("cljs-re-frame.events","logout","cljs-re-frame.events/logout",-122634062),cljs_re_frame.events.remove_token_interceptor,(function (p__22124,_){
var map__22125 = p__22124;
var map__22125__$1 = cljs.core.__destructure_map(map__22125);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22125__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"authorization-result","authorization-result",1368017039),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313)], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),new cljs.core.Keyword(null,"front-page","front-page",-663760939)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","message-read","cljs-re-frame.events/message-read",-2116114258),(function (db,p__22126){
var vec__22127 = p__22126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22127,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22127,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482),id,new cljs.core.Keyword(null,"read?","read?",1000202823)], null),true);
}));

//# sourceMappingURL=cljs_re_frame.events.js.map
