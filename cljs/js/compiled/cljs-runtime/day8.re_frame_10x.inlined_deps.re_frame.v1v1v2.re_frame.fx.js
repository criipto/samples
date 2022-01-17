goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__15385 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__15386 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__15386);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15468 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15468)){
var new_db_15469 = temp__5753__auto___15468;
var fexpr__15387_15470 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15387_15470.cljs$core$IFn$_invoke$arity$1 ? fexpr__15387_15470.cljs$core$IFn$_invoke$arity$1(new_db_15469) : fexpr__15387_15470.call(null,new_db_15469));
} else {
}

var seq__15388 = cljs.core.seq(effects_without_db);
var chunk__15389 = null;
var count__15390 = (0);
var i__15391 = (0);
while(true){
if((i__15391 < count__15390)){
var vec__15398 = chunk__15389.cljs$core$IIndexed$_nth$arity$2(null,i__15391);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15398,(1),null);
var temp__5751__auto___15471 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15471)){
var effect_fn_15472 = temp__5751__auto___15471;
(effect_fn_15472.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15472.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15472.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15473 = seq__15388;
var G__15474 = chunk__15389;
var G__15475 = count__15390;
var G__15476 = (i__15391 + (1));
seq__15388 = G__15473;
chunk__15389 = G__15474;
count__15390 = G__15475;
i__15391 = G__15476;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15388);
if(temp__5753__auto__){
var seq__15388__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15388__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15388__$1);
var G__15480 = cljs.core.chunk_rest(seq__15388__$1);
var G__15481 = c__4679__auto__;
var G__15482 = cljs.core.count(c__4679__auto__);
var G__15483 = (0);
seq__15388 = G__15480;
chunk__15389 = G__15481;
count__15390 = G__15482;
i__15391 = G__15483;
continue;
} else {
var vec__15401 = cljs.core.first(seq__15388__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401,(1),null);
var temp__5751__auto___15484 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15484)){
var effect_fn_15485 = temp__5751__auto___15484;
(effect_fn_15485.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15485.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15485.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15486 = cljs.core.next(seq__15388__$1);
var G__15487 = null;
var G__15488 = (0);
var G__15489 = (0);
seq__15388 = G__15486;
chunk__15389 = G__15487;
count__15390 = G__15488;
i__15391 = G__15489;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15093__auto___15490 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__15094__auto___15491 = (end__15093__auto___15490 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15094__auto___15491,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__15093__auto___15490);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15385);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15492 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15492)){
var new_db_15493 = temp__5753__auto___15492;
var fexpr__15404_15494 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15404_15494.cljs$core$IFn$_invoke$arity$1 ? fexpr__15404_15494.cljs$core$IFn$_invoke$arity$1(new_db_15493) : fexpr__15404_15494.call(null,new_db_15493));
} else {
}

var seq__15405 = cljs.core.seq(effects_without_db);
var chunk__15406 = null;
var count__15407 = (0);
var i__15408 = (0);
while(true){
if((i__15408 < count__15407)){
var vec__15415 = chunk__15406.cljs$core$IIndexed$_nth$arity$2(null,i__15408);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415,(1),null);
var temp__5751__auto___15495 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15495)){
var effect_fn_15496 = temp__5751__auto___15495;
(effect_fn_15496.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15496.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15496.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15497 = seq__15405;
var G__15498 = chunk__15406;
var G__15499 = count__15407;
var G__15500 = (i__15408 + (1));
seq__15405 = G__15497;
chunk__15406 = G__15498;
count__15407 = G__15499;
i__15408 = G__15500;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15405);
if(temp__5753__auto__){
var seq__15405__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15405__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15405__$1);
var G__15501 = cljs.core.chunk_rest(seq__15405__$1);
var G__15502 = c__4679__auto__;
var G__15503 = cljs.core.count(c__4679__auto__);
var G__15504 = (0);
seq__15405 = G__15501;
chunk__15406 = G__15502;
count__15407 = G__15503;
i__15408 = G__15504;
continue;
} else {
var vec__15421 = cljs.core.first(seq__15405__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421,(1),null);
var temp__5751__auto___15505 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15505)){
var effect_fn_15506 = temp__5751__auto___15505;
(effect_fn_15506.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15506.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15506.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15509 = cljs.core.next(seq__15405__$1);
var G__15510 = null;
var G__15511 = (0);
var G__15512 = (0);
seq__15405 = G__15509;
chunk__15406 = G__15510;
count__15407 = G__15511;
i__15408 = G__15512;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__15424){
var map__15425 = p__15424;
var map__15425__$1 = cljs.core.__destructure_map(map__15425);
var effect = map__15425__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15425__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15425__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__15426 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15427 = null;
var count__15428 = (0);
var i__15429 = (0);
while(true){
if((i__15429 < count__15428)){
var effect = chunk__15427.cljs$core$IIndexed$_nth$arity$2(null,i__15429);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15516 = seq__15426;
var G__15517 = chunk__15427;
var G__15518 = count__15428;
var G__15519 = (i__15429 + (1));
seq__15426 = G__15516;
chunk__15427 = G__15517;
count__15428 = G__15518;
i__15429 = G__15519;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15426);
if(temp__5753__auto__){
var seq__15426__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15426__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15426__$1);
var G__15520 = cljs.core.chunk_rest(seq__15426__$1);
var G__15521 = c__4679__auto__;
var G__15522 = cljs.core.count(c__4679__auto__);
var G__15523 = (0);
seq__15426 = G__15520;
chunk__15427 = G__15521;
count__15428 = G__15522;
i__15429 = G__15523;
continue;
} else {
var effect = cljs.core.first(seq__15426__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15524 = cljs.core.next(seq__15426__$1);
var G__15525 = null;
var G__15526 = (0);
var G__15527 = (0);
seq__15426 = G__15524;
chunk__15427 = G__15525;
count__15428 = G__15526;
i__15429 = G__15527;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__15430 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__15431 = null;
var count__15432 = (0);
var i__15433 = (0);
while(true){
if((i__15433 < count__15432)){
var vec__15440 = chunk__15431.cljs$core$IIndexed$_nth$arity$2(null,i__15433);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___15528 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15528)){
var effect_fn_15529 = temp__5751__auto___15528;
(effect_fn_15529.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15529.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15529.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15530 = seq__15430;
var G__15531 = chunk__15431;
var G__15532 = count__15432;
var G__15533 = (i__15433 + (1));
seq__15430 = G__15530;
chunk__15431 = G__15531;
count__15432 = G__15532;
i__15433 = G__15533;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15430);
if(temp__5753__auto__){
var seq__15430__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15430__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15430__$1);
var G__15534 = cljs.core.chunk_rest(seq__15430__$1);
var G__15535 = c__4679__auto__;
var G__15536 = cljs.core.count(c__4679__auto__);
var G__15537 = (0);
seq__15430 = G__15534;
chunk__15431 = G__15535;
count__15432 = G__15536;
i__15433 = G__15537;
continue;
} else {
var vec__15443 = cljs.core.first(seq__15430__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15443,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15443,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___15538 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15538)){
var effect_fn_15539 = temp__5751__auto___15538;
(effect_fn_15539.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15539.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15539.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15540 = cljs.core.next(seq__15430__$1);
var G__15541 = null;
var G__15542 = (0);
var G__15543 = (0);
seq__15430 = G__15540;
chunk__15431 = G__15541;
count__15432 = G__15542;
i__15433 = G__15543;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__15446 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15447 = null;
var count__15448 = (0);
var i__15449 = (0);
while(true){
if((i__15449 < count__15448)){
var event = chunk__15447.cljs$core$IIndexed$_nth$arity$2(null,i__15449);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15544 = seq__15446;
var G__15545 = chunk__15447;
var G__15546 = count__15448;
var G__15547 = (i__15449 + (1));
seq__15446 = G__15544;
chunk__15447 = G__15545;
count__15448 = G__15546;
i__15449 = G__15547;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15446);
if(temp__5753__auto__){
var seq__15446__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15446__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15446__$1);
var G__15548 = cljs.core.chunk_rest(seq__15446__$1);
var G__15549 = c__4679__auto__;
var G__15550 = cljs.core.count(c__4679__auto__);
var G__15551 = (0);
seq__15446 = G__15548;
chunk__15447 = G__15549;
count__15448 = G__15550;
i__15449 = G__15551;
continue;
} else {
var event = cljs.core.first(seq__15446__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15552 = cljs.core.next(seq__15446__$1);
var G__15553 = null;
var G__15554 = (0);
var G__15555 = (0);
seq__15446 = G__15552;
chunk__15447 = G__15553;
count__15448 = G__15554;
i__15449 = G__15555;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__15458 = cljs.core.seq(value);
var chunk__15459 = null;
var count__15460 = (0);
var i__15461 = (0);
while(true){
if((i__15461 < count__15460)){
var event = chunk__15459.cljs$core$IIndexed$_nth$arity$2(null,i__15461);
clear_event(event);


var G__15557 = seq__15458;
var G__15558 = chunk__15459;
var G__15559 = count__15460;
var G__15560 = (i__15461 + (1));
seq__15458 = G__15557;
chunk__15459 = G__15558;
count__15460 = G__15559;
i__15461 = G__15560;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15458);
if(temp__5753__auto__){
var seq__15458__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15458__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15458__$1);
var G__15568 = cljs.core.chunk_rest(seq__15458__$1);
var G__15569 = c__4679__auto__;
var G__15570 = cljs.core.count(c__4679__auto__);
var G__15571 = (0);
seq__15458 = G__15568;
chunk__15459 = G__15569;
count__15460 = G__15570;
i__15461 = G__15571;
continue;
} else {
var event = cljs.core.first(seq__15458__$1);
clear_event(event);


var G__15574 = cljs.core.next(seq__15458__$1);
var G__15575 = null;
var G__15576 = (0);
var G__15577 = (0);
seq__15458 = G__15574;
chunk__15459 = G__15575;
count__15460 = G__15576;
i__15461 = G__15577;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
