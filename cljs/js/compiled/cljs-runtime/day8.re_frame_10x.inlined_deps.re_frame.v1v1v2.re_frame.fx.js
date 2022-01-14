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
var _STAR_current_trace_STAR__orig_val__15357 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__15358 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__15358);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15451 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15451)){
var new_db_15452 = temp__5753__auto___15451;
var fexpr__15359_15453 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15359_15453.cljs$core$IFn$_invoke$arity$1 ? fexpr__15359_15453.cljs$core$IFn$_invoke$arity$1(new_db_15452) : fexpr__15359_15453.call(null,new_db_15452));
} else {
}

var seq__15360 = cljs.core.seq(effects_without_db);
var chunk__15361 = null;
var count__15362 = (0);
var i__15363 = (0);
while(true){
if((i__15363 < count__15362)){
var vec__15370 = chunk__15361.cljs$core$IIndexed$_nth$arity$2(null,i__15363);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15370,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15370,(1),null);
var temp__5751__auto___15454 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15454)){
var effect_fn_15455 = temp__5751__auto___15454;
(effect_fn_15455.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15455.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15455.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15456 = seq__15360;
var G__15457 = chunk__15361;
var G__15458 = count__15362;
var G__15459 = (i__15363 + (1));
seq__15360 = G__15456;
chunk__15361 = G__15457;
count__15362 = G__15458;
i__15363 = G__15459;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15360);
if(temp__5753__auto__){
var seq__15360__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15360__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15360__$1);
var G__15460 = cljs.core.chunk_rest(seq__15360__$1);
var G__15461 = c__4679__auto__;
var G__15462 = cljs.core.count(c__4679__auto__);
var G__15463 = (0);
seq__15360 = G__15460;
chunk__15361 = G__15461;
count__15362 = G__15462;
i__15363 = G__15463;
continue;
} else {
var vec__15373 = cljs.core.first(seq__15360__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15373,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15373,(1),null);
var temp__5751__auto___15464 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15464)){
var effect_fn_15465 = temp__5751__auto___15464;
(effect_fn_15465.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15465.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15465.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15466 = cljs.core.next(seq__15360__$1);
var G__15467 = null;
var G__15468 = (0);
var G__15469 = (0);
seq__15360 = G__15466;
chunk__15361 = G__15467;
count__15362 = G__15468;
i__15363 = G__15469;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15093__auto___15470 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__15094__auto___15471 = (end__15093__auto___15470 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15094__auto___15471,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__15093__auto___15470);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15357);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15472 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15472)){
var new_db_15473 = temp__5753__auto___15472;
var fexpr__15388_15474 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15388_15474.cljs$core$IFn$_invoke$arity$1 ? fexpr__15388_15474.cljs$core$IFn$_invoke$arity$1(new_db_15473) : fexpr__15388_15474.call(null,new_db_15473));
} else {
}

var seq__15389 = cljs.core.seq(effects_without_db);
var chunk__15390 = null;
var count__15391 = (0);
var i__15392 = (0);
while(true){
if((i__15392 < count__15391)){
var vec__15399 = chunk__15390.cljs$core$IIndexed$_nth$arity$2(null,i__15392);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15399,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15399,(1),null);
var temp__5751__auto___15475 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15475)){
var effect_fn_15476 = temp__5751__auto___15475;
(effect_fn_15476.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15476.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15476.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15477 = seq__15389;
var G__15478 = chunk__15390;
var G__15479 = count__15391;
var G__15480 = (i__15392 + (1));
seq__15389 = G__15477;
chunk__15390 = G__15478;
count__15391 = G__15479;
i__15392 = G__15480;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15389);
if(temp__5753__auto__){
var seq__15389__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15389__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15389__$1);
var G__15481 = cljs.core.chunk_rest(seq__15389__$1);
var G__15482 = c__4679__auto__;
var G__15483 = cljs.core.count(c__4679__auto__);
var G__15484 = (0);
seq__15389 = G__15481;
chunk__15390 = G__15482;
count__15391 = G__15483;
i__15392 = G__15484;
continue;
} else {
var vec__15402 = cljs.core.first(seq__15389__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15402,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15402,(1),null);
var temp__5751__auto___15485 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15485)){
var effect_fn_15486 = temp__5751__auto___15485;
(effect_fn_15486.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15486.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15486.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15487 = cljs.core.next(seq__15389__$1);
var G__15488 = null;
var G__15489 = (0);
var G__15490 = (0);
seq__15389 = G__15487;
chunk__15390 = G__15488;
count__15391 = G__15489;
i__15392 = G__15490;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__15405){
var map__15406 = p__15405;
var map__15406__$1 = cljs.core.__destructure_map(map__15406);
var effect = map__15406__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15406__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15406__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__15407 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15408 = null;
var count__15409 = (0);
var i__15410 = (0);
while(true){
if((i__15410 < count__15409)){
var effect = chunk__15408.cljs$core$IIndexed$_nth$arity$2(null,i__15410);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15491 = seq__15407;
var G__15492 = chunk__15408;
var G__15493 = count__15409;
var G__15494 = (i__15410 + (1));
seq__15407 = G__15491;
chunk__15408 = G__15492;
count__15409 = G__15493;
i__15410 = G__15494;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15407);
if(temp__5753__auto__){
var seq__15407__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15407__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15407__$1);
var G__15495 = cljs.core.chunk_rest(seq__15407__$1);
var G__15496 = c__4679__auto__;
var G__15497 = cljs.core.count(c__4679__auto__);
var G__15498 = (0);
seq__15407 = G__15495;
chunk__15408 = G__15496;
count__15409 = G__15497;
i__15410 = G__15498;
continue;
} else {
var effect = cljs.core.first(seq__15407__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15499 = cljs.core.next(seq__15407__$1);
var G__15500 = null;
var G__15501 = (0);
var G__15502 = (0);
seq__15407 = G__15499;
chunk__15408 = G__15500;
count__15409 = G__15501;
i__15410 = G__15502;
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

var temp__5751__auto___15503 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15503)){
var effect_fn_15504 = temp__5751__auto___15503;
(effect_fn_15504.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15504.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15504.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15505 = seq__15427;
var G__15506 = chunk__15428;
var G__15507 = count__15429;
var G__15508 = (i__15430 + (1));
seq__15427 = G__15505;
chunk__15428 = G__15506;
count__15429 = G__15507;
i__15430 = G__15508;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15427);
if(temp__5753__auto__){
var seq__15427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15427__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15427__$1);
var G__15509 = cljs.core.chunk_rest(seq__15427__$1);
var G__15510 = c__4679__auto__;
var G__15511 = cljs.core.count(c__4679__auto__);
var G__15512 = (0);
seq__15427 = G__15509;
chunk__15428 = G__15510;
count__15429 = G__15511;
i__15430 = G__15512;
continue;
} else {
var vec__15440 = cljs.core.first(seq__15427__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___15513 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15513)){
var effect_fn_15514 = temp__5751__auto___15513;
(effect_fn_15514.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15514.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15514.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15515 = cljs.core.next(seq__15427__$1);
var G__15516 = null;
var G__15517 = (0);
var G__15518 = (0);
seq__15427 = G__15515;
chunk__15428 = G__15516;
count__15429 = G__15517;
i__15430 = G__15518;
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
var seq__15443 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15444 = null;
var count__15445 = (0);
var i__15446 = (0);
while(true){
if((i__15446 < count__15445)){
var event = chunk__15444.cljs$core$IIndexed$_nth$arity$2(null,i__15446);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15519 = seq__15443;
var G__15520 = chunk__15444;
var G__15521 = count__15445;
var G__15522 = (i__15446 + (1));
seq__15443 = G__15519;
chunk__15444 = G__15520;
count__15445 = G__15521;
i__15446 = G__15522;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15443);
if(temp__5753__auto__){
var seq__15443__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15443__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15443__$1);
var G__15523 = cljs.core.chunk_rest(seq__15443__$1);
var G__15524 = c__4679__auto__;
var G__15525 = cljs.core.count(c__4679__auto__);
var G__15526 = (0);
seq__15443 = G__15523;
chunk__15444 = G__15524;
count__15445 = G__15525;
i__15446 = G__15526;
continue;
} else {
var event = cljs.core.first(seq__15443__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15527 = cljs.core.next(seq__15443__$1);
var G__15528 = null;
var G__15529 = (0);
var G__15530 = (0);
seq__15443 = G__15527;
chunk__15444 = G__15528;
count__15445 = G__15529;
i__15446 = G__15530;
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
var seq__15447 = cljs.core.seq(value);
var chunk__15448 = null;
var count__15449 = (0);
var i__15450 = (0);
while(true){
if((i__15450 < count__15449)){
var event = chunk__15448.cljs$core$IIndexed$_nth$arity$2(null,i__15450);
clear_event(event);


var G__15531 = seq__15447;
var G__15532 = chunk__15448;
var G__15533 = count__15449;
var G__15534 = (i__15450 + (1));
seq__15447 = G__15531;
chunk__15448 = G__15532;
count__15449 = G__15533;
i__15450 = G__15534;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15447);
if(temp__5753__auto__){
var seq__15447__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15447__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15447__$1);
var G__15535 = cljs.core.chunk_rest(seq__15447__$1);
var G__15536 = c__4679__auto__;
var G__15537 = cljs.core.count(c__4679__auto__);
var G__15538 = (0);
seq__15447 = G__15535;
chunk__15448 = G__15536;
count__15449 = G__15537;
i__15450 = G__15538;
continue;
} else {
var event = cljs.core.first(seq__15447__$1);
clear_event(event);


var G__15539 = cljs.core.next(seq__15447__$1);
var G__15540 = null;
var G__15541 = (0);
var G__15542 = (0);
seq__15447 = G__15539;
chunk__15448 = G__15540;
count__15449 = G__15541;
i__15450 = G__15542;
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
