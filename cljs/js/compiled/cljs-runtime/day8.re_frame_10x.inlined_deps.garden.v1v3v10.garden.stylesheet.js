goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rule(var_args){
var args__4870__auto__ = [];
var len__4864__auto___14254 = arguments.length;
var i__4865__auto___14255 = (0);
while(true){
if((i__4865__auto___14255 < len__4864__auto___14254)){
args__4870__auto__.push((arguments[i__4865__auto___14255]));

var G__14256 = (i__4865__auto___14255 + (1));
i__4865__auto___14255 = G__14256;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__14257__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__14257 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__14258__i = 0, G__14258__a = new Array(arguments.length -  0);
while (G__14258__i < G__14258__a.length) {G__14258__a[G__14258__i] = arguments[G__14258__i + 0]; ++G__14258__i;}
  children = new cljs.core.IndexedSeq(G__14258__a,0,null);
} 
return G__14257__delegate.call(this,children);};
G__14257.cljs$lang$maxFixedArity = 0;
G__14257.cljs$lang$applyTo = (function (arglist__14259){
var children = cljs.core.seq(arglist__14259);
return G__14257__delegate(children);
});
G__14257.cljs$core$IFn$_invoke$arity$variadic = G__14257__delegate;
return G__14257;
})()
;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq14230){
var G__14231 = cljs.core.first(seq14230);
var seq14230__$1 = cljs.core.next(seq14230);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14231,seq14230__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__14260__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__14260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14261__i = 0, G__14261__a = new Array(arguments.length -  0);
while (G__14261__i < G__14261__a.length) {G__14261__a[G__14261__i] = arguments[G__14261__i + 0]; ++G__14261__i;}
  args = new cljs.core.IndexedSeq(G__14261__a,0,null);
} 
return G__14260__delegate.call(this,args);};
G__14260.cljs$lang$maxFixedArity = 0;
G__14260.cljs$lang$applyTo = (function (arglist__14262){
var args = cljs.core.seq(arglist__14262);
return G__14260__delegate(args);
});
G__14260.cljs$core$IFn$_invoke$arity$variadic = G__14260__delegate;
return G__14260;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___14263 = arguments.length;
var i__4865__auto___14264 = (0);
while(true){
if((i__4865__auto___14264 < len__4864__auto___14263)){
args__4870__auto__.push((arguments[i__4865__auto___14264]));

var G__14265 = (i__4865__auto___14264 + (1));
i__4865__auto___14264 = G__14265;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq14234){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14234));
}));

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_import(var_args){
var G__14244 = arguments.length;
switch (G__14244) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___14267 = arguments.length;
var i__4865__auto___14268 = (0);
while(true){
if((i__4865__auto___14268 < len__4864__auto___14267)){
args_arr__4885__auto__.push((arguments[i__4865__auto___14268]));

var G__14269 = (i__4865__auto___14268 + (1));
i__4865__auto___14268 = G__14269;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq14241){
var G__14242 = cljs.core.first(seq14241);
var seq14241__$1 = cljs.core.next(seq14241);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14242,seq14241__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_media(var_args){
var args__4870__auto__ = [];
var len__4864__auto___14270 = arguments.length;
var i__4865__auto___14271 = (0);
while(true){
if((i__4865__auto___14271 < len__4864__auto___14270)){
args__4870__auto__.push((arguments[i__4865__auto___14271]));

var G__14272 = (i__4865__auto___14271 + (1));
i__4865__auto___14271 = G__14272;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq14248){
var G__14249 = cljs.core.first(seq14248);
var seq14248__$1 = cljs.core.next(seq14248);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14249,seq14248__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_supports(var_args){
var args__4870__auto__ = [];
var len__4864__auto___14273 = arguments.length;
var i__4865__auto___14274 = (0);
while(true){
if((i__4865__auto___14274 < len__4864__auto___14273)){
args__4870__auto__.push((arguments[i__4865__auto___14274]));

var G__14275 = (i__4865__auto___14274 + (1));
i__4865__auto___14274 = G__14275;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq14250){
var G__14251 = cljs.core.first(seq14250);
var seq14250__$1 = cljs.core.next(seq14250);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14251,seq14250__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_keyframes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___14276 = arguments.length;
var i__4865__auto___14277 = (0);
while(true){
if((i__4865__auto___14277 < len__4864__auto___14276)){
args__4870__auto__.push((arguments[i__4865__auto___14277]));

var G__14278 = (i__4865__auto___14277 + (1));
i__4865__auto___14277 = G__14278;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq14252){
var G__14253 = cljs.core.first(seq14252);
var seq14252__$1 = cljs.core.next(seq14252);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14253,seq14252__$1);
}));

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.js.map
