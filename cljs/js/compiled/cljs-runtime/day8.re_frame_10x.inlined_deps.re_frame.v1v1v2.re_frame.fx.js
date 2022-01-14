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
var _STAR_current_trace_STAR__orig_val__15360 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__15361 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__15361);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15454 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15454)){
var new_db_15455 = temp__5753__auto___15454;
var fexpr__15365_15456 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15365_15456.cljs$core$IFn$_invoke$arity$1 ? fexpr__15365_15456.cljs$core$IFn$_invoke$arity$1(new_db_15455) : fexpr__15365_15456.call(null,new_db_15455));
} else {
}

var seq__15366 = cljs.core.seq(effects_without_db);
var chunk__15367 = null;
var count__15368 = (0);
var i__15369 = (0);
while(true){
if((i__15369 < count__15368)){
var vec__15383 = chunk__15367.cljs$core$IIndexed$_nth$arity$2(null,i__15369);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383,(1),null);
var temp__5751__auto___15457 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15457)){
var effect_fn_15458 = temp__5751__auto___15457;
(effect_fn_15458.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15458.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15458.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15459 = seq__15366;
var G__15460 = chunk__15367;
var G__15461 = count__15368;
var G__15462 = (i__15369 + (1));
seq__15366 = G__15459;
chunk__15367 = G__15460;
count__15368 = G__15461;
i__15369 = G__15462;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15366);
if(temp__5753__auto__){
var seq__15366__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15366__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15366__$1);
var G__15463 = cljs.core.chunk_rest(seq__15366__$1);
var G__15464 = c__4679__auto__;
var G__15465 = cljs.core.count(c__4679__auto__);
var G__15466 = (0);
seq__15366 = G__15463;
chunk__15367 = G__15464;
count__15368 = G__15465;
i__15369 = G__15466;
continue;
} else {
var vec__15388 = cljs.core.first(seq__15366__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388,(1),null);
var temp__5751__auto___15467 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15467)){
var effect_fn_15468 = temp__5751__auto___15467;
(effect_fn_15468.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15468.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15468.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15469 = cljs.core.next(seq__15366__$1);
var G__15470 = null;
var G__15471 = (0);
var G__15472 = (0);
seq__15366 = G__15469;
chunk__15367 = G__15470;
count__15368 = G__15471;
i__15369 = G__15472;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15093__auto___15473 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__15094__auto___15474 = (end__15093__auto___15473 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15094__auto___15474,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__15093__auto___15473);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15360);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15475 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15475)){
var new_db_15476 = temp__5753__auto___15475;
var fexpr__15392_15477 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15392_15477.cljs$core$IFn$_invoke$arity$1 ? fexpr__15392_15477.cljs$core$IFn$_invoke$arity$1(new_db_15476) : fexpr__15392_15477.call(null,new_db_15476));
} else {
}

var seq__15393 = cljs.core.seq(effects_without_db);
var chunk__15394 = null;
var count__15395 = (0);
var i__15396 = (0);
while(true){
if((i__15396 < count__15395)){
var vec__15415 = chunk__15394.cljs$core$IIndexed$_nth$arity$2(null,i__15396);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15415,(1),null);
var temp__5751__auto___15478 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15478)){
var effect_fn_15479 = temp__5751__auto___15478;
(effect_fn_15479.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15479.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15479.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15480 = seq__15393;
var G__15481 = chunk__15394;
var G__15482 = count__15395;
var G__15483 = (i__15396 + (1));
seq__15393 = G__15480;
chunk__15394 = G__15481;
count__15395 = G__15482;
i__15396 = G__15483;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15393);
if(temp__5753__auto__){
var seq__15393__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15393__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15393__$1);
var G__15484 = cljs.core.chunk_rest(seq__15393__$1);
var G__15485 = c__4679__auto__;
var G__15486 = cljs.core.count(c__4679__auto__);
var G__15487 = (0);
seq__15393 = G__15484;
chunk__15394 = G__15485;
count__15395 = G__15486;
i__15396 = G__15487;
continue;
} else {
var vec__15418 = cljs.core.first(seq__15393__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15418,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15418,(1),null);
var temp__5751__auto___15488 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15488)){
var effect_fn_15489 = temp__5751__auto___15488;
(effect_fn_15489.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15489.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15489.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15490 = cljs.core.next(seq__15393__$1);
var G__15491 = null;
var G__15492 = (0);
var G__15493 = (0);
seq__15393 = G__15490;
chunk__15394 = G__15491;
count__15395 = G__15492;
i__15396 = G__15493;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__15421){
var map__15422 = p__15421;
var map__15422__$1 = cljs.core.__destructure_map(map__15422);
var effect = map__15422__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15422__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15422__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__15423 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15424 = null;
var count__15425 = (0);
var i__15426 = (0);
while(true){
if((i__15426 < count__15425)){
var effect = chunk__15424.cljs$core$IIndexed$_nth$arity$2(null,i__15426);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15500 = seq__15423;
var G__15501 = chunk__15424;
var G__15502 = count__15425;
var G__15503 = (i__15426 + (1));
seq__15423 = G__15500;
chunk__15424 = G__15501;
count__15425 = G__15502;
i__15426 = G__15503;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15423);
if(temp__5753__auto__){
var seq__15423__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15423__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15423__$1);
var G__15504 = cljs.core.chunk_rest(seq__15423__$1);
var G__15505 = c__4679__auto__;
var G__15506 = cljs.core.count(c__4679__auto__);
var G__15507 = (0);
seq__15423 = G__15504;
chunk__15424 = G__15505;
count__15425 = G__15506;
i__15426 = G__15507;
continue;
} else {
var effect = cljs.core.first(seq__15423__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15508 = cljs.core.next(seq__15423__$1);
var G__15509 = null;
var G__15510 = (0);
var G__15511 = (0);
seq__15423 = G__15508;
chunk__15424 = G__15509;
count__15425 = G__15510;
i__15426 = G__15511;
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
var seq__15427 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__15428 = null;
var count__15429 = (0);
var i__15430 = (0);
while(true){
if((i__15430 < count__15429)){
var vec__15437 = chunk__15428.cljs$core$IIndexed$_nth$arity$2(null,i__15430);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___15512 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15512)){
var effect_fn_15513 = temp__5751__auto___15512;
(effect_fn_15513.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15513.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15513.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15514 = seq__15427;
var G__15515 = chunk__15428;
var G__15516 = count__15429;
var G__15517 = (i__15430 + (1));
seq__15427 = G__15514;
chunk__15428 = G__15515;
count__15429 = G__15516;
i__15430 = G__15517;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15427);
if(temp__5753__auto__){
var seq__15427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15427__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15427__$1);
var G__15518 = cljs.core.chunk_rest(seq__15427__$1);
var G__15519 = c__4679__auto__;
var G__15520 = cljs.core.count(c__4679__auto__);
var G__15521 = (0);
seq__15427 = G__15518;
chunk__15428 = G__15519;
count__15429 = G__15520;
i__15430 = G__15521;
continue;
} else {
var vec__15442 = cljs.core.first(seq__15427__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15442,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15442,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___15522 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15522)){
var effect_fn_15523 = temp__5751__auto___15522;
(effect_fn_15523.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15523.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15523.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15524 = cljs.core.next(seq__15427__$1);
var G__15525 = null;
var G__15526 = (0);
var G__15527 = (0);
seq__15427 = G__15524;
chunk__15428 = G__15525;
count__15429 = G__15526;
i__15430 = G__15527;
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
var seq__15445 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15446 = null;
var count__15447 = (0);
var i__15448 = (0);
while(true){
if((i__15448 < count__15447)){
var event = chunk__15446.cljs$core$IIndexed$_nth$arity$2(null,i__15448);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15528 = seq__15445;
var G__15529 = chunk__15446;
var G__15530 = count__15447;
var G__15531 = (i__15448 + (1));
seq__15445 = G__15528;
chunk__15446 = G__15529;
count__15447 = G__15530;
i__15448 = G__15531;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15445);
if(temp__5753__auto__){
var seq__15445__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15445__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15445__$1);
var G__15532 = cljs.core.chunk_rest(seq__15445__$1);
var G__15533 = c__4679__auto__;
var G__15534 = cljs.core.count(c__4679__auto__);
var G__15535 = (0);
seq__15445 = G__15532;
chunk__15446 = G__15533;
count__15447 = G__15534;
i__15448 = G__15535;
continue;
} else {
var event = cljs.core.first(seq__15445__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15536 = cljs.core.next(seq__15445__$1);
var G__15537 = null;
var G__15538 = (0);
var G__15539 = (0);
seq__15445 = G__15536;
chunk__15446 = G__15537;
count__15447 = G__15538;
i__15448 = G__15539;
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
var seq__15450 = cljs.core.seq(value);
var chunk__15451 = null;
var count__15452 = (0);
var i__15453 = (0);
while(true){
if((i__15453 < count__15452)){
var event = chunk__15451.cljs$core$IIndexed$_nth$arity$2(null,i__15453);
clear_event(event);


var G__15540 = seq__15450;
var G__15541 = chunk__15451;
var G__15542 = count__15452;
var G__15543 = (i__15453 + (1));
seq__15450 = G__15540;
chunk__15451 = G__15541;
count__15452 = G__15542;
i__15453 = G__15543;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15450);
if(temp__5753__auto__){
var seq__15450__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15450__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15450__$1);
var G__15544 = cljs.core.chunk_rest(seq__15450__$1);
var G__15545 = c__4679__auto__;
var G__15546 = cljs.core.count(c__4679__auto__);
var G__15547 = (0);
seq__15450 = G__15544;
chunk__15451 = G__15545;
count__15452 = G__15546;
i__15453 = G__15547;
continue;
} else {
var event = cljs.core.first(seq__15450__$1);
clear_event(event);


var G__15548 = cljs.core.next(seq__15450__$1);
var G__15549 = null;
var G__15550 = (0);
var G__15551 = (0);
seq__15450 = G__15548;
chunk__15451 = G__15549;
count__15452 = G__15550;
i__15453 = G__15551;
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
