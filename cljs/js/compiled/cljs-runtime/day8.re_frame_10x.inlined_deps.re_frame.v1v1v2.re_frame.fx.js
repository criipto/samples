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
var temp__5753__auto___15438 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15438)){
var new_db_15439 = temp__5753__auto___15438;
var fexpr__15359_15440 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15359_15440.cljs$core$IFn$_invoke$arity$1 ? fexpr__15359_15440.cljs$core$IFn$_invoke$arity$1(new_db_15439) : fexpr__15359_15440.call(null,new_db_15439));
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
var temp__5751__auto___15441 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15441)){
var effect_fn_15442 = temp__5751__auto___15441;
(effect_fn_15442.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15442.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15442.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15443 = seq__15360;
var G__15444 = chunk__15361;
var G__15445 = count__15362;
var G__15446 = (i__15363 + (1));
seq__15360 = G__15443;
chunk__15361 = G__15444;
count__15362 = G__15445;
i__15363 = G__15446;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15360);
if(temp__5753__auto__){
var seq__15360__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15360__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15360__$1);
var G__15447 = cljs.core.chunk_rest(seq__15360__$1);
var G__15448 = c__4679__auto__;
var G__15449 = cljs.core.count(c__4679__auto__);
var G__15450 = (0);
seq__15360 = G__15447;
chunk__15361 = G__15448;
count__15362 = G__15449;
i__15363 = G__15450;
continue;
} else {
var vec__15373 = cljs.core.first(seq__15360__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15373,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15373,(1),null);
var temp__5751__auto___15451 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15451)){
var effect_fn_15452 = temp__5751__auto___15451;
(effect_fn_15452.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15452.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15452.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15453 = cljs.core.next(seq__15360__$1);
var G__15454 = null;
var G__15455 = (0);
var G__15456 = (0);
seq__15360 = G__15453;
chunk__15361 = G__15454;
count__15362 = G__15455;
i__15363 = G__15456;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15093__auto___15457 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__15094__auto___15458 = (end__15093__auto___15457 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15094__auto___15458,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__15093__auto___15457);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15357);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15459 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15459)){
var new_db_15460 = temp__5753__auto___15459;
var fexpr__15376_15461 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15376_15461.cljs$core$IFn$_invoke$arity$1 ? fexpr__15376_15461.cljs$core$IFn$_invoke$arity$1(new_db_15460) : fexpr__15376_15461.call(null,new_db_15460));
} else {
}

var seq__15378 = cljs.core.seq(effects_without_db);
var chunk__15379 = null;
var count__15380 = (0);
var i__15381 = (0);
while(true){
if((i__15381 < count__15380)){
var vec__15392 = chunk__15379.cljs$core$IIndexed$_nth$arity$2(null,i__15381);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15392,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15392,(1),null);
var temp__5751__auto___15462 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15462)){
var effect_fn_15463 = temp__5751__auto___15462;
(effect_fn_15463.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15463.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15463.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15464 = seq__15378;
var G__15465 = chunk__15379;
var G__15466 = count__15380;
var G__15467 = (i__15381 + (1));
seq__15378 = G__15464;
chunk__15379 = G__15465;
count__15380 = G__15466;
i__15381 = G__15467;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15378);
if(temp__5753__auto__){
var seq__15378__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15378__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15378__$1);
var G__15469 = cljs.core.chunk_rest(seq__15378__$1);
var G__15470 = c__4679__auto__;
var G__15471 = cljs.core.count(c__4679__auto__);
var G__15472 = (0);
seq__15378 = G__15469;
chunk__15379 = G__15470;
count__15380 = G__15471;
i__15381 = G__15472;
continue;
} else {
var vec__15397 = cljs.core.first(seq__15378__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(1),null);
var temp__5751__auto___15473 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15473)){
var effect_fn_15474 = temp__5751__auto___15473;
(effect_fn_15474.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15474.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15474.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15475 = cljs.core.next(seq__15378__$1);
var G__15476 = null;
var G__15477 = (0);
var G__15478 = (0);
seq__15378 = G__15475;
chunk__15379 = G__15476;
count__15380 = G__15477;
i__15381 = G__15478;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__15402){
var map__15403 = p__15402;
var map__15403__$1 = cljs.core.__destructure_map(map__15403);
var effect = map__15403__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15403__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15403__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__15406 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15407 = null;
var count__15408 = (0);
var i__15409 = (0);
while(true){
if((i__15409 < count__15408)){
var effect = chunk__15407.cljs$core$IIndexed$_nth$arity$2(null,i__15409);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15479 = seq__15406;
var G__15480 = chunk__15407;
var G__15481 = count__15408;
var G__15482 = (i__15409 + (1));
seq__15406 = G__15479;
chunk__15407 = G__15480;
count__15408 = G__15481;
i__15409 = G__15482;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15406);
if(temp__5753__auto__){
var seq__15406__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15406__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15406__$1);
var G__15483 = cljs.core.chunk_rest(seq__15406__$1);
var G__15484 = c__4679__auto__;
var G__15485 = cljs.core.count(c__4679__auto__);
var G__15486 = (0);
seq__15406 = G__15483;
chunk__15407 = G__15484;
count__15408 = G__15485;
i__15409 = G__15486;
continue;
} else {
var effect = cljs.core.first(seq__15406__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15487 = cljs.core.next(seq__15406__$1);
var G__15488 = null;
var G__15489 = (0);
var G__15490 = (0);
seq__15406 = G__15487;
chunk__15407 = G__15488;
count__15408 = G__15489;
i__15409 = G__15490;
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
var seq__15411 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__15412 = null;
var count__15413 = (0);
var i__15414 = (0);
while(true){
if((i__15414 < count__15413)){
var vec__15421 = chunk__15412.cljs$core$IIndexed$_nth$arity$2(null,i__15414);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15421,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___15499 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15499)){
var effect_fn_15500 = temp__5751__auto___15499;
(effect_fn_15500.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15500.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15500.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15505 = seq__15411;
var G__15506 = chunk__15412;
var G__15507 = count__15413;
var G__15508 = (i__15414 + (1));
seq__15411 = G__15505;
chunk__15412 = G__15506;
count__15413 = G__15507;
i__15414 = G__15508;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15411);
if(temp__5753__auto__){
var seq__15411__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15411__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15411__$1);
var G__15509 = cljs.core.chunk_rest(seq__15411__$1);
var G__15510 = c__4679__auto__;
var G__15511 = cljs.core.count(c__4679__auto__);
var G__15512 = (0);
seq__15411 = G__15509;
chunk__15412 = G__15510;
count__15413 = G__15511;
i__15414 = G__15512;
continue;
} else {
var vec__15424 = cljs.core.first(seq__15411__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15424,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15424,(1),null);
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


var G__15515 = cljs.core.next(seq__15411__$1);
var G__15516 = null;
var G__15517 = (0);
var G__15518 = (0);
seq__15411 = G__15515;
chunk__15412 = G__15516;
count__15413 = G__15517;
i__15414 = G__15518;
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
var seq__15427 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15428 = null;
var count__15429 = (0);
var i__15430 = (0);
while(true){
if((i__15430 < count__15429)){
var event = chunk__15428.cljs$core$IIndexed$_nth$arity$2(null,i__15430);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15519 = seq__15427;
var G__15520 = chunk__15428;
var G__15521 = count__15429;
var G__15522 = (i__15430 + (1));
seq__15427 = G__15519;
chunk__15428 = G__15520;
count__15429 = G__15521;
i__15430 = G__15522;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15427);
if(temp__5753__auto__){
var seq__15427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15427__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15427__$1);
var G__15523 = cljs.core.chunk_rest(seq__15427__$1);
var G__15524 = c__4679__auto__;
var G__15525 = cljs.core.count(c__4679__auto__);
var G__15526 = (0);
seq__15427 = G__15523;
chunk__15428 = G__15524;
count__15429 = G__15525;
i__15430 = G__15526;
continue;
} else {
var event = cljs.core.first(seq__15427__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15527 = cljs.core.next(seq__15427__$1);
var G__15528 = null;
var G__15529 = (0);
var G__15530 = (0);
seq__15427 = G__15527;
chunk__15428 = G__15528;
count__15429 = G__15529;
i__15430 = G__15530;
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
var seq__15434 = cljs.core.seq(value);
var chunk__15435 = null;
var count__15436 = (0);
var i__15437 = (0);
while(true){
if((i__15437 < count__15436)){
var event = chunk__15435.cljs$core$IIndexed$_nth$arity$2(null,i__15437);
clear_event(event);


var G__15531 = seq__15434;
var G__15532 = chunk__15435;
var G__15533 = count__15436;
var G__15534 = (i__15437 + (1));
seq__15434 = G__15531;
chunk__15435 = G__15532;
count__15436 = G__15533;
i__15437 = G__15534;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15434);
if(temp__5753__auto__){
var seq__15434__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15434__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15434__$1);
var G__15535 = cljs.core.chunk_rest(seq__15434__$1);
var G__15536 = c__4679__auto__;
var G__15537 = cljs.core.count(c__4679__auto__);
var G__15538 = (0);
seq__15434 = G__15535;
chunk__15435 = G__15536;
count__15436 = G__15537;
i__15437 = G__15538;
continue;
} else {
var event = cljs.core.first(seq__15434__$1);
clear_event(event);


var G__15539 = cljs.core.next(seq__15434__$1);
var G__15540 = null;
var G__15541 = (0);
var G__15542 = (0);
seq__15434 = G__15539;
chunk__15435 = G__15540;
count__15436 = G__15541;
i__15437 = G__15542;
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
