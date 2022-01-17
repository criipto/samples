goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20453 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20454 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20454);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___20539 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___20539)){
var new_db_20540 = temp__5753__auto___20539;
var fexpr__20456_20541 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20456_20541.cljs$core$IFn$_invoke$arity$1 ? fexpr__20456_20541.cljs$core$IFn$_invoke$arity$1(new_db_20540) : fexpr__20456_20541.call(null,new_db_20540));
} else {
}

var seq__20458 = cljs.core.seq(effects_without_db);
var chunk__20459 = null;
var count__20460 = (0);
var i__20461 = (0);
while(true){
if((i__20461 < count__20460)){
var vec__20468 = chunk__20459.cljs$core$IIndexed$_nth$arity$2(null,i__20461);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468,(1),null);
var temp__5751__auto___20542 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20542)){
var effect_fn_20543 = temp__5751__auto___20542;
(effect_fn_20543.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20543.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20543.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20544 = seq__20458;
var G__20545 = chunk__20459;
var G__20546 = count__20460;
var G__20547 = (i__20461 + (1));
seq__20458 = G__20544;
chunk__20459 = G__20545;
count__20460 = G__20546;
i__20461 = G__20547;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20458);
if(temp__5753__auto__){
var seq__20458__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20458__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20458__$1);
var G__20548 = cljs.core.chunk_rest(seq__20458__$1);
var G__20549 = c__4679__auto__;
var G__20550 = cljs.core.count(c__4679__auto__);
var G__20551 = (0);
seq__20458 = G__20548;
chunk__20459 = G__20549;
count__20460 = G__20550;
i__20461 = G__20551;
continue;
} else {
var vec__20474 = cljs.core.first(seq__20458__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(1),null);
var temp__5751__auto___20552 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20552)){
var effect_fn_20553 = temp__5751__auto___20552;
(effect_fn_20553.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20553.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20553.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20554 = cljs.core.next(seq__20458__$1);
var G__20555 = null;
var G__20556 = (0);
var G__20557 = (0);
seq__20458 = G__20554;
chunk__20459 = G__20555;
count__20460 = G__20556;
i__20461 = G__20557;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20179__auto___20558 = re_frame.interop.now();
var duration__20180__auto___20559 = (end__20179__auto___20558 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20180__auto___20559,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20179__auto___20558);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20453);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___20560 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___20560)){
var new_db_20561 = temp__5753__auto___20560;
var fexpr__20477_20562 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20477_20562.cljs$core$IFn$_invoke$arity$1 ? fexpr__20477_20562.cljs$core$IFn$_invoke$arity$1(new_db_20561) : fexpr__20477_20562.call(null,new_db_20561));
} else {
}

var seq__20478 = cljs.core.seq(effects_without_db);
var chunk__20479 = null;
var count__20480 = (0);
var i__20481 = (0);
while(true){
if((i__20481 < count__20480)){
var vec__20501 = chunk__20479.cljs$core$IIndexed$_nth$arity$2(null,i__20481);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20501,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20501,(1),null);
var temp__5751__auto___20563 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20563)){
var effect_fn_20564 = temp__5751__auto___20563;
(effect_fn_20564.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20564.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20564.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20565 = seq__20478;
var G__20566 = chunk__20479;
var G__20567 = count__20480;
var G__20568 = (i__20481 + (1));
seq__20478 = G__20565;
chunk__20479 = G__20566;
count__20480 = G__20567;
i__20481 = G__20568;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20478);
if(temp__5753__auto__){
var seq__20478__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20478__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20478__$1);
var G__20569 = cljs.core.chunk_rest(seq__20478__$1);
var G__20570 = c__4679__auto__;
var G__20571 = cljs.core.count(c__4679__auto__);
var G__20572 = (0);
seq__20478 = G__20569;
chunk__20479 = G__20570;
count__20480 = G__20571;
i__20481 = G__20572;
continue;
} else {
var vec__20504 = cljs.core.first(seq__20478__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20504,(1),null);
var temp__5751__auto___20573 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20573)){
var effect_fn_20574 = temp__5751__auto___20573;
(effect_fn_20574.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20574.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20574.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20575 = cljs.core.next(seq__20478__$1);
var G__20576 = null;
var G__20577 = (0);
var G__20578 = (0);
seq__20478 = G__20575;
chunk__20479 = G__20576;
count__20480 = G__20577;
i__20481 = G__20578;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__20507){
var map__20508 = p__20507;
var map__20508__$1 = cljs.core.__destructure_map(map__20508);
var effect = map__20508__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20508__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20508__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__20509 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20510 = null;
var count__20511 = (0);
var i__20512 = (0);
while(true){
if((i__20512 < count__20511)){
var effect = chunk__20510.cljs$core$IIndexed$_nth$arity$2(null,i__20512);
re_frame.fx.dispatch_later(effect);


var G__20580 = seq__20509;
var G__20581 = chunk__20510;
var G__20582 = count__20511;
var G__20583 = (i__20512 + (1));
seq__20509 = G__20580;
chunk__20510 = G__20581;
count__20511 = G__20582;
i__20512 = G__20583;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20509);
if(temp__5753__auto__){
var seq__20509__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20509__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20509__$1);
var G__20584 = cljs.core.chunk_rest(seq__20509__$1);
var G__20585 = c__4679__auto__;
var G__20586 = cljs.core.count(c__4679__auto__);
var G__20587 = (0);
seq__20509 = G__20584;
chunk__20510 = G__20585;
count__20511 = G__20586;
i__20512 = G__20587;
continue;
} else {
var effect = cljs.core.first(seq__20509__$1);
re_frame.fx.dispatch_later(effect);


var G__20588 = cljs.core.next(seq__20509__$1);
var G__20589 = null;
var G__20590 = (0);
var G__20591 = (0);
seq__20509 = G__20588;
chunk__20510 = G__20589;
count__20511 = G__20590;
i__20512 = G__20591;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__20513 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20514 = null;
var count__20515 = (0);
var i__20516 = (0);
while(true){
if((i__20516 < count__20515)){
var vec__20523 = chunk__20514.cljs$core$IIndexed$_nth$arity$2(null,i__20516);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20523,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20592 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20592)){
var effect_fn_20593 = temp__5751__auto___20592;
(effect_fn_20593.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20593.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20593.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20594 = seq__20513;
var G__20595 = chunk__20514;
var G__20596 = count__20515;
var G__20597 = (i__20516 + (1));
seq__20513 = G__20594;
chunk__20514 = G__20595;
count__20515 = G__20596;
i__20516 = G__20597;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20513);
if(temp__5753__auto__){
var seq__20513__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20513__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20513__$1);
var G__20598 = cljs.core.chunk_rest(seq__20513__$1);
var G__20599 = c__4679__auto__;
var G__20600 = cljs.core.count(c__4679__auto__);
var G__20601 = (0);
seq__20513 = G__20598;
chunk__20514 = G__20599;
count__20515 = G__20600;
i__20516 = G__20601;
continue;
} else {
var vec__20526 = cljs.core.first(seq__20513__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20526,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20526,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___20602 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___20602)){
var effect_fn_20603 = temp__5751__auto___20602;
(effect_fn_20603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20604 = cljs.core.next(seq__20513__$1);
var G__20605 = null;
var G__20606 = (0);
var G__20607 = (0);
seq__20513 = G__20604;
chunk__20514 = G__20605;
count__20515 = G__20606;
i__20516 = G__20607;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__20531 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20532 = null;
var count__20533 = (0);
var i__20534 = (0);
while(true){
if((i__20534 < count__20533)){
var event = chunk__20532.cljs$core$IIndexed$_nth$arity$2(null,i__20534);
re_frame.router.dispatch(event);


var G__20608 = seq__20531;
var G__20609 = chunk__20532;
var G__20610 = count__20533;
var G__20611 = (i__20534 + (1));
seq__20531 = G__20608;
chunk__20532 = G__20609;
count__20533 = G__20610;
i__20534 = G__20611;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20531);
if(temp__5753__auto__){
var seq__20531__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20531__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20531__$1);
var G__20612 = cljs.core.chunk_rest(seq__20531__$1);
var G__20613 = c__4679__auto__;
var G__20614 = cljs.core.count(c__4679__auto__);
var G__20615 = (0);
seq__20531 = G__20612;
chunk__20532 = G__20613;
count__20533 = G__20614;
i__20534 = G__20615;
continue;
} else {
var event = cljs.core.first(seq__20531__$1);
re_frame.router.dispatch(event);


var G__20616 = cljs.core.next(seq__20531__$1);
var G__20617 = null;
var G__20618 = (0);
var G__20619 = (0);
seq__20531 = G__20616;
chunk__20532 = G__20617;
count__20533 = G__20618;
i__20534 = G__20619;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__20535 = cljs.core.seq(value);
var chunk__20536 = null;
var count__20537 = (0);
var i__20538 = (0);
while(true){
if((i__20538 < count__20537)){
var event = chunk__20536.cljs$core$IIndexed$_nth$arity$2(null,i__20538);
clear_event(event);


var G__20620 = seq__20535;
var G__20621 = chunk__20536;
var G__20622 = count__20537;
var G__20623 = (i__20538 + (1));
seq__20535 = G__20620;
chunk__20536 = G__20621;
count__20537 = G__20622;
i__20538 = G__20623;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20535);
if(temp__5753__auto__){
var seq__20535__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20535__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20535__$1);
var G__20624 = cljs.core.chunk_rest(seq__20535__$1);
var G__20625 = c__4679__auto__;
var G__20626 = cljs.core.count(c__4679__auto__);
var G__20627 = (0);
seq__20535 = G__20624;
chunk__20536 = G__20625;
count__20537 = G__20626;
i__20538 = G__20627;
continue;
} else {
var event = cljs.core.first(seq__20535__$1);
clear_event(event);


var G__20628 = cljs.core.next(seq__20535__$1);
var G__20629 = null;
var G__20630 = (0);
var G__20631 = (0);
seq__20535 = G__20628;
chunk__20536 = G__20629;
count__20537 = G__20630;
i__20538 = G__20631;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
