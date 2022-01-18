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
var _STAR_always_update_STAR__orig_val__16138 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16139 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16139);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__16140 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16141 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16141);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16140);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16138);
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
var G__16143 = arguments.length;
switch (G__16143) {
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

var vec__16144 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16144,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16144,(1),null);
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

var seq__16147_16168 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__16148_16169 = null;
var count__16149_16170 = (0);
var i__16150_16171 = (0);
while(true){
if((i__16150_16171 < count__16149_16170)){
var vec__16157_16172 = chunk__16148_16169.cljs$core$IIndexed$_nth$arity$2(null,i__16150_16171);
var container_16173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16157_16172,(0),null);
var comp_16174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16157_16172,(1),null);
reagent.dom.re_render_component(comp_16174,container_16173);


var G__16175 = seq__16147_16168;
var G__16176 = chunk__16148_16169;
var G__16177 = count__16149_16170;
var G__16178 = (i__16150_16171 + (1));
seq__16147_16168 = G__16175;
chunk__16148_16169 = G__16176;
count__16149_16170 = G__16177;
i__16150_16171 = G__16178;
continue;
} else {
var temp__5753__auto___16179 = cljs.core.seq(seq__16147_16168);
if(temp__5753__auto___16179){
var seq__16147_16180__$1 = temp__5753__auto___16179;
if(cljs.core.chunked_seq_QMARK_(seq__16147_16180__$1)){
var c__4679__auto___16181 = cljs.core.chunk_first(seq__16147_16180__$1);
var G__16182 = cljs.core.chunk_rest(seq__16147_16180__$1);
var G__16183 = c__4679__auto___16181;
var G__16184 = cljs.core.count(c__4679__auto___16181);
var G__16185 = (0);
seq__16147_16168 = G__16182;
chunk__16148_16169 = G__16183;
count__16149_16170 = G__16184;
i__16150_16171 = G__16185;
continue;
} else {
var vec__16162_16186 = cljs.core.first(seq__16147_16180__$1);
var container_16187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162_16186,(0),null);
var comp_16188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162_16186,(1),null);
reagent.dom.re_render_component(comp_16188,container_16187);


var G__16190 = cljs.core.next(seq__16147_16180__$1);
var G__16191 = null;
var G__16192 = (0);
var G__16193 = (0);
seq__16147_16168 = G__16190;
chunk__16148_16169 = G__16191;
count__16149_16170 = G__16192;
i__16150_16171 = G__16193;
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
