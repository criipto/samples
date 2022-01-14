goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__22049){
var vec__22050 = p__22049;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22050,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__22055){
var map__22056 = p__22055;
var map__22056__$1 = cljs.core.__destructure_map(map__22056);
var request = map__22056__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22056__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22056__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__22053_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__22053_SHARP_));
}),(function (p1__22054_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__22054_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5751__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var on_request = temp__5751__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__22057 = cljs.core.seq(seq_request_maps);
var chunk__22058 = null;
var count__22059 = (0);
var i__22060 = (0);
while(true){
if((i__22060 < count__22059)){
var request__$1 = chunk__22058.cljs$core$IIndexed$_nth$arity$2(null,i__22060);
var xhrio_22063 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_22063);


var G__22064 = seq__22057;
var G__22065 = chunk__22058;
var G__22066 = count__22059;
var G__22067 = (i__22060 + (1));
seq__22057 = G__22064;
chunk__22058 = G__22065;
count__22059 = G__22066;
i__22060 = G__22067;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__22057);
if(temp__5753__auto__){
var seq__22057__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22057__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__22057__$1);
var G__22068 = cljs.core.chunk_rest(seq__22057__$1);
var G__22069 = c__4679__auto__;
var G__22070 = cljs.core.count(c__4679__auto__);
var G__22071 = (0);
seq__22057 = G__22068;
chunk__22058 = G__22069;
count__22059 = G__22070;
i__22060 = G__22071;
continue;
} else {
var request__$1 = cljs.core.first(seq__22057__$1);
var xhrio_22072 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_22072);


var G__22073 = cljs.core.next(seq__22057__$1);
var G__22074 = null;
var G__22075 = (0);
var G__22076 = (0);
seq__22057 = G__22073;
chunk__22058 = G__22074;
count__22059 = G__22075;
i__22060 = G__22076;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
