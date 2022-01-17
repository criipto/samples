goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__16375 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16376 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16376);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__16377 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16378 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16378);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16377);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16375);
}});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__16382 = arguments.length;
switch (G__16382) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var vec__16387 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(1),null);
var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var seq__16394_16411 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__16395_16412 = null;
var count__16396_16413 = (0);
var i__16397_16414 = (0);
while(true){
if((i__16397_16414 < count__16396_16413)){
var vec__16404_16415 = chunk__16395_16412.cljs$core$IIndexed$_nth$arity$2(null,i__16397_16414);
var container_16416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16404_16415,(0),null);
var comp_16417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16404_16415,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_16417,container_16416);


var G__16418 = seq__16394_16411;
var G__16419 = chunk__16395_16412;
var G__16420 = count__16396_16413;
var G__16421 = (i__16397_16414 + (1));
seq__16394_16411 = G__16418;
chunk__16395_16412 = G__16419;
count__16396_16413 = G__16420;
i__16397_16414 = G__16421;
continue;
} else {
var temp__5753__auto___16422 = cljs.core.seq(seq__16394_16411);
if(temp__5753__auto___16422){
var seq__16394_16423__$1 = temp__5753__auto___16422;
if(cljs.core.chunked_seq_QMARK_(seq__16394_16423__$1)){
var c__4679__auto___16424 = cljs.core.chunk_first(seq__16394_16423__$1);
var G__16425 = cljs.core.chunk_rest(seq__16394_16423__$1);
var G__16426 = c__4679__auto___16424;
var G__16427 = cljs.core.count(c__4679__auto___16424);
var G__16428 = (0);
seq__16394_16411 = G__16425;
chunk__16395_16412 = G__16426;
count__16396_16413 = G__16427;
i__16397_16414 = G__16428;
continue;
} else {
var vec__16407_16429 = cljs.core.first(seq__16394_16423__$1);
var container_16430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16407_16429,(0),null);
var comp_16431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16407_16429,(1),null);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_16431,container_16430);


var G__16432 = cljs.core.next(seq__16394_16423__$1);
var G__16433 = null;
var G__16434 = (0);
var G__16435 = (0);
seq__16394_16411 = G__16432;
chunk__16395_16412 = G__16433;
count__16396_16413 = G__16434;
i__16397_16414 = G__16435;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.js.map
