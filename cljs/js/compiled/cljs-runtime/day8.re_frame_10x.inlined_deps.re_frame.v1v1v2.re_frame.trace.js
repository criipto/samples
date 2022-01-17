goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$start_trace(p__15113){
var map__15114 = p__15113;
var map__15114__$1 = cljs.core.__destructure_map(map__15114);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15114__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15114__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15114__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15114__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$tracing_cb_debounced(){
var seq__15115_15153 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs));
var chunk__15116_15154 = null;
var count__15117_15155 = (0);
var i__15118_15156 = (0);
while(true){
if((i__15118_15156 < count__15117_15155)){
var vec__15129_15157 = chunk__15116_15154.cljs$core$IIndexed$_nth$arity$2(null,i__15118_15156);
var k_15158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15129_15157,(0),null);
var cb_15159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15129_15157,(1),null);
try{var G__15133_15160 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_15159.cljs$core$IFn$_invoke$arity$1 ? cb_15159.cljs$core$IFn$_invoke$arity$1(G__15133_15160) : cb_15159.call(null,G__15133_15160));
}catch (e15132){var e_15161 = e15132;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15158,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_15161], 0));
}

var G__15162 = seq__15115_15153;
var G__15163 = chunk__15116_15154;
var G__15164 = count__15117_15155;
var G__15165 = (i__15118_15156 + (1));
seq__15115_15153 = G__15162;
chunk__15116_15154 = G__15163;
count__15117_15155 = G__15164;
i__15118_15156 = G__15165;
continue;
} else {
var temp__5753__auto___15166 = cljs.core.seq(seq__15115_15153);
if(temp__5753__auto___15166){
var seq__15115_15167__$1 = temp__5753__auto___15166;
if(cljs.core.chunked_seq_QMARK_(seq__15115_15167__$1)){
var c__4679__auto___15168 = cljs.core.chunk_first(seq__15115_15167__$1);
var G__15169 = cljs.core.chunk_rest(seq__15115_15167__$1);
var G__15170 = c__4679__auto___15168;
var G__15171 = cljs.core.count(c__4679__auto___15168);
var G__15172 = (0);
seq__15115_15153 = G__15169;
chunk__15116_15154 = G__15170;
count__15117_15155 = G__15171;
i__15118_15156 = G__15172;
continue;
} else {
var vec__15134_15173 = cljs.core.first(seq__15115_15167__$1);
var k_15174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15134_15173,(0),null);
var cb_15175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15134_15173,(1),null);
try{var G__15138_15176 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_15175.cljs$core$IFn$_invoke$arity$1 ? cb_15175.cljs$core$IFn$_invoke$arity$1(G__15138_15176) : cb_15175.call(null,G__15138_15176));
}catch (e15137){var e_15177 = e15137;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15174,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_15177], 0));
}

var G__15178 = cljs.core.next(seq__15115_15167__$1);
var G__15179 = null;
var G__15180 = (0);
var G__15181 = (0);
seq__15115_15153 = G__15178;
chunk__15116_15154 = G__15179;
count__15117_15155 = G__15180;
i__15118_15156 = G__15181;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.js.map
