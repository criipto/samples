goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__15714__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15715__i = 0, G__15715__a = new Array(arguments.length -  0);
while (G__15715__i < G__15715__a.length) {G__15715__a[G__15715__i] = arguments[G__15715__i + 0]; ++G__15715__i;}
  args = new cljs.core.IndexedSeq(G__15715__a,0,null);
} 
return G__15714__delegate.call(this,args);};
G__15714.cljs$lang$maxFixedArity = 0;
G__15714.cljs$lang$applyTo = (function (arglist__15716){
var args = cljs.core.seq(arglist__15716);
return G__15714__delegate(args);
});
G__15714.cljs$core$IFn$_invoke$arity$variadic = G__15714__delegate;
return G__15714;
})()
);

(o.error = (function() { 
var G__15717__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15718__i = 0, G__15718__a = new Array(arguments.length -  0);
while (G__15718__i < G__15718__a.length) {G__15718__a[G__15718__i] = arguments[G__15718__i + 0]; ++G__15718__i;}
  args = new cljs.core.IndexedSeq(G__15718__a,0,null);
} 
return G__15717__delegate.call(this,args);};
G__15717.cljs$lang$maxFixedArity = 0;
G__15717.cljs$lang$applyTo = (function (arglist__15719){
var args = cljs.core.seq(arglist__15719);
return G__15717__delegate(args);
});
G__15717.cljs$core$IFn$_invoke$arity$variadic = G__15717__delegate;
return G__15717;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
