goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20199){
var map__20200 = p__20199;
var map__20200__$1 = cljs.core.__destructure_map(map__20200);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20200__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20200__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20200__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20200__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__20201_20237 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20202_20238 = null;
var count__20203_20239 = (0);
var i__20204_20240 = (0);
while(true){
if((i__20204_20240 < count__20203_20239)){
var vec__20215_20241 = chunk__20202_20238.cljs$core$IIndexed$_nth$arity$2(null,i__20204_20240);
var k_20242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20215_20241,(0),null);
var cb_20243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20215_20241,(1),null);
try{var G__20219_20244 = cljs.core.deref(re_frame.trace.traces);
(cb_20243.cljs$core$IFn$_invoke$arity$1 ? cb_20243.cljs$core$IFn$_invoke$arity$1(G__20219_20244) : cb_20243.call(null,G__20219_20244));
}catch (e20218){var e_20245 = e20218;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20242,"while storing",cljs.core.deref(re_frame.trace.traces),e_20245], 0));
}

var G__20246 = seq__20201_20237;
var G__20247 = chunk__20202_20238;
var G__20248 = count__20203_20239;
var G__20249 = (i__20204_20240 + (1));
seq__20201_20237 = G__20246;
chunk__20202_20238 = G__20247;
count__20203_20239 = G__20248;
i__20204_20240 = G__20249;
continue;
} else {
var temp__5753__auto___20250 = cljs.core.seq(seq__20201_20237);
if(temp__5753__auto___20250){
var seq__20201_20251__$1 = temp__5753__auto___20250;
if(cljs.core.chunked_seq_QMARK_(seq__20201_20251__$1)){
var c__4679__auto___20252 = cljs.core.chunk_first(seq__20201_20251__$1);
var G__20253 = cljs.core.chunk_rest(seq__20201_20251__$1);
var G__20254 = c__4679__auto___20252;
var G__20255 = cljs.core.count(c__4679__auto___20252);
var G__20256 = (0);
seq__20201_20237 = G__20253;
chunk__20202_20238 = G__20254;
count__20203_20239 = G__20255;
i__20204_20240 = G__20256;
continue;
} else {
var vec__20220_20257 = cljs.core.first(seq__20201_20251__$1);
var k_20258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20220_20257,(0),null);
var cb_20259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20220_20257,(1),null);
try{var G__20224_20260 = cljs.core.deref(re_frame.trace.traces);
(cb_20259.cljs$core$IFn$_invoke$arity$1 ? cb_20259.cljs$core$IFn$_invoke$arity$1(G__20224_20260) : cb_20259.call(null,G__20224_20260));
}catch (e20223){var e_20261 = e20223;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20258,"while storing",cljs.core.deref(re_frame.trace.traces),e_20261], 0));
}

var G__20262 = cljs.core.next(seq__20201_20251__$1);
var G__20263 = null;
var G__20264 = (0);
var G__20265 = (0);
seq__20201_20237 = G__20262;
chunk__20202_20238 = G__20263;
count__20203_20239 = G__20264;
i__20204_20240 = G__20265;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
