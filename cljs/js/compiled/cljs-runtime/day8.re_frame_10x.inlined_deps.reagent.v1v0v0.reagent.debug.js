goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11802__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11803__i = 0, G__11803__a = new Array(arguments.length -  0);
while (G__11803__i < G__11803__a.length) {G__11803__a[G__11803__i] = arguments[G__11803__i + 0]; ++G__11803__i;}
  args = new cljs.core.IndexedSeq(G__11803__a,0,null);
} 
return G__11802__delegate.call(this,args);};
G__11802.cljs$lang$maxFixedArity = 0;
G__11802.cljs$lang$applyTo = (function (arglist__11804){
var args = cljs.core.seq(arglist__11804);
return G__11802__delegate(args);
});
G__11802.cljs$core$IFn$_invoke$arity$variadic = G__11802__delegate;
return G__11802;
})()
);

(o.error = (function() { 
var G__11805__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11806__i = 0, G__11806__a = new Array(arguments.length -  0);
while (G__11806__i < G__11806__a.length) {G__11806__a[G__11806__i] = arguments[G__11806__i + 0]; ++G__11806__i;}
  args = new cljs.core.IndexedSeq(G__11806__a,0,null);
} 
return G__11805__delegate.call(this,args);};
G__11805.cljs$lang$maxFixedArity = 0;
G__11805.cljs$lang$applyTo = (function (arglist__11807){
var args = cljs.core.seq(arglist__11807);
return G__11805__delegate(args);
});
G__11805.cljs$core$IFn$_invoke$arity$variadic = G__11805__delegate;
return G__11805;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.js.map
