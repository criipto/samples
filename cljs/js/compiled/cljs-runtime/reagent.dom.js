goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__16146 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16147 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16147);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__16148 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16149 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16149);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16148);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16146);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
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
reagent.dom.render = (function reagent$dom$render(var_args){
var G__16151 = arguments.length;
switch (G__16151) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__16152 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16152,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16152,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
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
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__16155_16177 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__16156_16178 = null;
var count__16157_16179 = (0);
var i__16158_16180 = (0);
while(true){
if((i__16158_16180 < count__16157_16179)){
var vec__16165_16181 = chunk__16156_16178.cljs$core$IIndexed$_nth$arity$2(null,i__16158_16180);
var container_16182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165_16181,(0),null);
var comp_16183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165_16181,(1),null);
reagent.dom.re_render_component(comp_16183,container_16182);


var G__16184 = seq__16155_16177;
var G__16185 = chunk__16156_16178;
var G__16186 = count__16157_16179;
var G__16187 = (i__16158_16180 + (1));
seq__16155_16177 = G__16184;
chunk__16156_16178 = G__16185;
count__16157_16179 = G__16186;
i__16158_16180 = G__16187;
continue;
} else {
var temp__5753__auto___16188 = cljs.core.seq(seq__16155_16177);
if(temp__5753__auto___16188){
var seq__16155_16189__$1 = temp__5753__auto___16188;
if(cljs.core.chunked_seq_QMARK_(seq__16155_16189__$1)){
var c__4679__auto___16190 = cljs.core.chunk_first(seq__16155_16189__$1);
var G__16191 = cljs.core.chunk_rest(seq__16155_16189__$1);
var G__16192 = c__4679__auto___16190;
var G__16193 = cljs.core.count(c__4679__auto___16190);
var G__16194 = (0);
seq__16155_16177 = G__16191;
chunk__16156_16178 = G__16192;
count__16157_16179 = G__16193;
i__16158_16180 = G__16194;
continue;
} else {
var vec__16173_16195 = cljs.core.first(seq__16155_16189__$1);
var container_16196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16173_16195,(0),null);
var comp_16197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16173_16195,(1),null);
reagent.dom.re_render_component(comp_16197,container_16196);


var G__16198 = cljs.core.next(seq__16155_16189__$1);
var G__16199 = null;
var G__16200 = (0);
var G__16201 = (0);
seq__16155_16177 = G__16198;
chunk__16156_16178 = G__16199;
count__16157_16179 = G__16200;
i__16158_16180 = G__16201;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
