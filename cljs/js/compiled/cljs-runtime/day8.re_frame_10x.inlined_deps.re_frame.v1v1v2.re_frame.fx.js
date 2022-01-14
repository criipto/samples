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
var temp__5753__auto___15460 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15460)){
var new_db_15461 = temp__5753__auto___15460;
var fexpr__15387_15462 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15387_15462.cljs$core$IFn$_invoke$arity$1 ? fexpr__15387_15462.cljs$core$IFn$_invoke$arity$1(new_db_15461) : fexpr__15387_15462.call(null,new_db_15461));
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
var temp__5751__auto___15463 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15463)){
var effect_fn_15464 = temp__5751__auto___15463;
(effect_fn_15464.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15464.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15464.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15465 = seq__15388;
var G__15466 = chunk__15389;
var G__15467 = count__15390;
var G__15468 = (i__15391 + (1));
seq__15388 = G__15465;
chunk__15389 = G__15466;
count__15390 = G__15467;
i__15391 = G__15468;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15388);
if(temp__5753__auto__){
var seq__15388__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15388__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15388__$1);
var G__15471 = cljs.core.chunk_rest(seq__15388__$1);
var G__15472 = c__4679__auto__;
var G__15473 = cljs.core.count(c__4679__auto__);
var G__15474 = (0);
seq__15388 = G__15471;
chunk__15389 = G__15472;
count__15390 = G__15473;
i__15391 = G__15474;
continue;
} else {
var vec__15401 = cljs.core.first(seq__15388__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15401,(1),null);
var temp__5751__auto___15475 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15475)){
var effect_fn_15476 = temp__5751__auto___15475;
(effect_fn_15476.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15476.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15476.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15477 = cljs.core.next(seq__15388__$1);
var G__15478 = null;
var G__15479 = (0);
var G__15480 = (0);
seq__15388 = G__15477;
chunk__15389 = G__15478;
count__15390 = G__15479;
i__15391 = G__15480;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15093__auto___15481 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__15094__auto___15482 = (end__15093__auto___15481 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15094__auto___15482,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__15093__auto___15481);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__15385);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___15484 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___15484)){
var new_db_15485 = temp__5753__auto___15484;
var fexpr__15404_15486 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__15404_15486.cljs$core$IFn$_invoke$arity$1 ? fexpr__15404_15486.cljs$core$IFn$_invoke$arity$1(new_db_15485) : fexpr__15404_15486.call(null,new_db_15485));
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
var temp__5751__auto___15488 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15488)){
var effect_fn_15489 = temp__5751__auto___15488;
(effect_fn_15489.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15489.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15489.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15490 = seq__15405;
var G__15491 = chunk__15406;
var G__15492 = count__15407;
var G__15493 = (i__15408 + (1));
seq__15405 = G__15490;
chunk__15406 = G__15491;
count__15407 = G__15492;
i__15408 = G__15493;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15405);
if(temp__5753__auto__){
var seq__15405__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15405__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15405__$1);
var G__15494 = cljs.core.chunk_rest(seq__15405__$1);
var G__15495 = c__4679__auto__;
var G__15496 = cljs.core.count(c__4679__auto__);
var G__15497 = (0);
seq__15405 = G__15494;
chunk__15406 = G__15495;
count__15407 = G__15496;
i__15408 = G__15497;
continue;
} else {
var vec__15418 = cljs.core.first(seq__15405__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15418,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15418,(1),null);
var temp__5751__auto___15498 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15498)){
var effect_fn_15499 = temp__5751__auto___15498;
(effect_fn_15499.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15499.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15499.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15500 = cljs.core.next(seq__15405__$1);
var G__15501 = null;
var G__15502 = (0);
var G__15503 = (0);
seq__15405 = G__15500;
chunk__15406 = G__15501;
count__15407 = G__15502;
i__15408 = G__15503;
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


var G__15504 = seq__15423;
var G__15505 = chunk__15424;
var G__15506 = count__15425;
var G__15507 = (i__15426 + (1));
seq__15423 = G__15504;
chunk__15424 = G__15505;
count__15425 = G__15506;
i__15426 = G__15507;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15423);
if(temp__5753__auto__){
var seq__15423__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15423__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15423__$1);
var G__15508 = cljs.core.chunk_rest(seq__15423__$1);
var G__15509 = c__4679__auto__;
var G__15510 = cljs.core.count(c__4679__auto__);
var G__15511 = (0);
seq__15423 = G__15508;
chunk__15424 = G__15509;
count__15425 = G__15510;
i__15426 = G__15511;
continue;
} else {
var effect = cljs.core.first(seq__15423__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__15514 = cljs.core.next(seq__15423__$1);
var G__15515 = null;
var G__15516 = (0);
var G__15517 = (0);
seq__15423 = G__15514;
chunk__15424 = G__15515;
count__15425 = G__15516;
i__15426 = G__15517;
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

var temp__5751__auto___15518 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15518)){
var effect_fn_15519 = temp__5751__auto___15518;
(effect_fn_15519.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15519.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15519.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15521 = seq__15427;
var G__15522 = chunk__15428;
var G__15523 = count__15429;
var G__15524 = (i__15430 + (1));
seq__15427 = G__15521;
chunk__15428 = G__15522;
count__15429 = G__15523;
i__15430 = G__15524;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15427);
if(temp__5753__auto__){
var seq__15427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15427__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15427__$1);
var G__15525 = cljs.core.chunk_rest(seq__15427__$1);
var G__15526 = c__4679__auto__;
var G__15527 = cljs.core.count(c__4679__auto__);
var G__15528 = (0);
seq__15427 = G__15525;
chunk__15428 = G__15526;
count__15429 = G__15527;
i__15430 = G__15528;
continue;
} else {
var vec__15440 = cljs.core.first(seq__15427__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15440,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___15539 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___15539)){
var effect_fn_15540 = temp__5751__auto___15539;
(effect_fn_15540.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15540.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15540.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15541 = cljs.core.next(seq__15427__$1);
var G__15542 = null;
var G__15543 = (0);
var G__15544 = (0);
seq__15427 = G__15541;
chunk__15428 = G__15542;
count__15429 = G__15543;
i__15430 = G__15544;
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


var G__15545 = seq__15443;
var G__15546 = chunk__15444;
var G__15547 = count__15445;
var G__15548 = (i__15446 + (1));
seq__15443 = G__15545;
chunk__15444 = G__15546;
count__15445 = G__15547;
i__15446 = G__15548;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15443);
if(temp__5753__auto__){
var seq__15443__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15443__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15443__$1);
var G__15553 = cljs.core.chunk_rest(seq__15443__$1);
var G__15554 = c__4679__auto__;
var G__15555 = cljs.core.count(c__4679__auto__);
var G__15556 = (0);
seq__15443 = G__15553;
chunk__15444 = G__15554;
count__15445 = G__15555;
i__15446 = G__15556;
continue;
} else {
var event = cljs.core.first(seq__15443__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__15557 = cljs.core.next(seq__15443__$1);
var G__15558 = null;
var G__15559 = (0);
var G__15560 = (0);
seq__15443 = G__15557;
chunk__15444 = G__15558;
count__15445 = G__15559;
i__15446 = G__15560;
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


var G__15561 = seq__15450;
var G__15562 = chunk__15451;
var G__15563 = count__15452;
var G__15564 = (i__15453 + (1));
seq__15450 = G__15561;
chunk__15451 = G__15562;
count__15452 = G__15563;
i__15453 = G__15564;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15450);
if(temp__5753__auto__){
var seq__15450__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15450__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__15450__$1);
var G__15565 = cljs.core.chunk_rest(seq__15450__$1);
var G__15566 = c__4679__auto__;
var G__15567 = cljs.core.count(c__4679__auto__);
var G__15568 = (0);
seq__15450 = G__15565;
chunk__15451 = G__15566;
count__15452 = G__15567;
i__15453 = G__15568;
continue;
} else {
var event = cljs.core.first(seq__15450__$1);
clear_event(event);


var G__15569 = cljs.core.next(seq__15450__$1);
var G__15570 = null;
var G__15571 = (0);
var G__15572 = (0);
seq__15450 = G__15569;
chunk__15451 = G__15570;
count__15452 = G__15571;
i__15453 = G__15572;
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
