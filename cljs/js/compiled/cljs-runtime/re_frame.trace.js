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
var seq__20201_20228 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20202_20229 = null;
var count__20203_20230 = (0);
var i__20204_20231 = (0);
while(true){
if((i__20204_20231 < count__20203_20230)){
var vec__20215_20232 = chunk__20202_20229.cljs$core$IIndexed$_nth$arity$2(null,i__20204_20231);
var k_20233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20215_20232,(0),null);
var cb_20234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20215_20232,(1),null);
try{var G__20219_20235 = cljs.core.deref(re_frame.trace.traces);
(cb_20234.cljs$core$IFn$_invoke$arity$1 ? cb_20234.cljs$core$IFn$_invoke$arity$1(G__20219_20235) : cb_20234.call(null,G__20219_20235));
}catch (e20218){var e_20236 = e20218;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20233,"while storing",cljs.core.deref(re_frame.trace.traces),e_20236], 0));
}

var G__20237 = seq__20201_20228;
var G__20238 = chunk__20202_20229;
var G__20239 = count__20203_20230;
var G__20240 = (i__20204_20231 + (1));
seq__20201_20228 = G__20237;
chunk__20202_20229 = G__20238;
count__20203_20230 = G__20239;
i__20204_20231 = G__20240;
continue;
} else {
var temp__5753__auto___20252 = cljs.core.seq(seq__20201_20228);
if(temp__5753__auto___20252){
var seq__20201_20253__$1 = temp__5753__auto___20252;
if(cljs.core.chunked_seq_QMARK_(seq__20201_20253__$1)){
var c__4679__auto___20254 = cljs.core.chunk_first(seq__20201_20253__$1);
var G__20255 = cljs.core.chunk_rest(seq__20201_20253__$1);
var G__20256 = c__4679__auto___20254;
var G__20257 = cljs.core.count(c__4679__auto___20254);
var G__20258 = (0);
seq__20201_20228 = G__20255;
chunk__20202_20229 = G__20256;
count__20203_20230 = G__20257;
i__20204_20231 = G__20258;
continue;
} else {
var vec__20220_20259 = cljs.core.first(seq__20201_20253__$1);
var k_20260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20220_20259,(0),null);
var cb_20261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20220_20259,(1),null);
try{var G__20224_20262 = cljs.core.deref(re_frame.trace.traces);
(cb_20261.cljs$core$IFn$_invoke$arity$1 ? cb_20261.cljs$core$IFn$_invoke$arity$1(G__20224_20262) : cb_20261.call(null,G__20224_20262));
}catch (e20223){var e_20263 = e20223;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20260,"while storing",cljs.core.deref(re_frame.trace.traces),e_20263], 0));
}

var G__20264 = cljs.core.next(seq__20201_20253__$1);
var G__20265 = null;
var G__20266 = (0);
var G__20267 = (0);
seq__20201_20228 = G__20264;
chunk__20202_20229 = G__20265;
count__20203_20230 = G__20266;
i__20204_20231 = G__20267;
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
