goog.provide('cljs_re_frame.events');
cljs_re_frame.events.messages_url = "https://criipto-bank.netlify.app/feliz/messages.json";
cljs_re_frame.events.js_token_storage = sessionStorage;
cljs_re_frame.events.read_local_storage = (function cljs_re_frame$events$read_local_storage(k){
var G__21816 = cljs_re_frame.events.js_token_storage.getItem(k);
if((G__21816 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__21816);
}
});
re_frame.core.reg_cofx(new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119),(function (cofx,_){
var token = cljs_re_frame.events.read_local_storage(Authentication.authentication.js_storage_key_for_auth);
var G__21817 = cofx;
if((!((token == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21817,new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119),token);
} else {
return G__21817;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),(function (p__21818,p__21819){
var map__21820 = p__21818;
var map__21820__$1 = cljs.core.__destructure_map(map__21820);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21820__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21821 = p__21819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21821,(0),null);
var active_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21821,(1),null);
var G__21824 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page)], null);
if(cljs.core.truth_((function (){var fexpr__21825 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overview","overview",-435037267),null,new cljs.core.Keyword(null,"messages","messages",345434482),null], null), null);
return (fexpr__21825.cljs$core$IFn$_invoke$arity$1 ? fexpr__21825.cljs$core$IFn$_invoke$arity$1(active_page) : fexpr__21825.call(null,active_page));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21824,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383)], null));
} else {
return G__21824;
}
}));
cljs_re_frame.events.token_payload__GT_user_profile = (function cljs_re_frame$events$token_payload__GT_user_profile(payload){
return cljs.core.select_keys(payload,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"birthdate","birthdate",-534621599),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"cprNumberIdentifier","cprNumberIdentifier",-728346227),new cljs.core.Keyword(null,"country","country",312965309)], null));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"authorized","authorized",509904454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after(Authentication.authentication.save_token_to_js_storage_BANG_(cljs_re_frame.events.js_token_storage))], null),(function (p__21826,p__21827){
var map__21828 = p__21826;
var map__21828__$1 = cljs.core.__destructure_map(map__21828);
var _cofx = map__21828__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21829 = p__21827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21829,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21829,(1),null);
var result_STAR_ = clojure.walk.keywordize_keys(result);
var parsed_result = (function (){var G__21832 = result_STAR_;
var G__21832__$1 = (((G__21832 == null))?null:new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(G__21832));
if((G__21832__$1 == null)){
return null;
} else {
return Authentication.authentication.parse_id_token(G__21832__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authorization-result","authorization-result",1368017039),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),result_STAR_,new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed_result], null)),new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313),(function (){var G__21833 = parsed_result;
var G__21833__$1 = (((G__21833 == null))?null:new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__21833));
if((G__21833__$1 == null)){
return null;
} else {
return cljs_re_frame.events.token_payload__GT_user_profile(G__21833__$1);
}
})()),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),new cljs.core.Keyword(null,"overview","overview",-435037267)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authorization-error","authorization-error",-329272671),(function (db,p__21834){
var vec__21835 = p__21834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21835,(0),null);
var error_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21835,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"authorization-error-message","authorization-error-message",-1415565754),error_message);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("cljs-re-frame.events","initialize-db","cljs-re-frame.events/initialize-db",412710679),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119))], null),(function (p__21838,_){
var map__21839 = p__21838;
var map__21839__$1 = cljs.core.__destructure_map(map__21839);
var _cofx = map__21839__$1;
var local_store_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword("cljs-re-frame.events","local-store-token","cljs-re-frame.events/local-store-token",1929263119));
var parsed_token = (function (){var G__21840 = local_store_token;
var G__21840__$1 = (((G__21840 == null))?null:new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(G__21840));
if((G__21840__$1 == null)){
return null;
} else {
return Authentication.authentication.parse_id_token(G__21840__$1);
}
})();
var G__21841 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs_re_frame.db.default_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"authorization-result","authorization-result",1368017039),new cljs.core.Keyword(null,"token","token",-1211463215)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),local_store_token,new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed_token], null)),new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313),(function (){var G__21842 = parsed_token;
var G__21842__$1 = (((G__21842 == null))?null:new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__21842));
if((G__21842__$1 == null)){
return null;
} else {
return cljs_re_frame.events.token_payload__GT_user_profile(G__21842__$1);
}
})())], null);
if((!((local_store_token == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21841,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383)], null));
} else {
return G__21841;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383),(function (p__21857,_){
var map__21858 = p__21857;
var map__21858__$1 = cljs.core.__destructure_map(map__21858);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21858__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"messages","messages",345434482)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),cljs_re_frame.events.messages_url,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyword?","keyword?",277265542),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","get-messages-success","cljs-re-frame.events/get-messages-success",-1128177407)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","endpoint-request-error","cljs-re-frame.events/endpoint-request-error",1813637320),new cljs.core.Keyword("cljs-re-frame.events","get-messages","cljs-re-frame.events/get-messages",-2109823383)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","get-messages-success","cljs-re-frame.events/get-messages-success",-1128177407),(function (db,p__21859){
var vec__21860 = p__21859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21860,(0),null);
var messages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21860,(1),null);
var old_messages = new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(db);
var new_messages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys(messages))));
var updated_messages = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_messages,new_messages], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"messages","messages",345434482)], null),false),new cljs.core.Keyword(null,"messages","messages",345434482),updated_messages);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","endpoint-request-error","cljs-re-frame.events/endpoint-request-error",1813637320),(function (db,p__21863){
var vec__21864 = p__21863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21864,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21864,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21864,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),request_type], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),request_type], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("cljs-re-frame.events","logout","cljs-re-frame.events/logout",-122634062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after(Authentication.authentication.remove_token_from_js_storage_BANG_(cljs_re_frame.events.js_token_storage))], null),(function (p__21867,_){
var map__21868 = p__21867;
var map__21868__$1 = cljs.core.__destructure_map(map__21868);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"authorization-result","authorization-result",1368017039),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user-profile","user-profile",-1783018313)], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),new cljs.core.Keyword(null,"front-page","front-page",-663760939)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs-re-frame.events","toggle-message","cljs-re-frame.events/toggle-message",-1648719279),(function (db,p__21869){
var vec__21870 = p__21869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(1),null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482),id,new cljs.core.Keyword(null,"unfolded?","unfolded?",1183794305)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.not,false)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482),id,new cljs.core.Keyword(null,"read?","read?",1000202823)], null),true);
}));

//# sourceMappingURL=cljs_re_frame.events.js.map
