goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__20713 = arguments.length;
switch (G__20713) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__20714 = cljs.core.seq(Object.keys(localStorage));
var chunk__20715 = null;
var count__20716 = (0);
var i__20717 = (0);
while(true){
if((i__20717 < count__20716)){
var k = chunk__20715.cljs$core$IIndexed$_nth$arity$2(null,i__20717);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20723 = seq__20714;
var G__20724 = chunk__20715;
var G__20725 = count__20716;
var G__20726 = (i__20717 + (1));
seq__20714 = G__20723;
chunk__20715 = G__20724;
count__20716 = G__20725;
i__20717 = G__20726;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20714);
if(temp__5753__auto__){
var seq__20714__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20714__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20714__$1);
var G__20728 = cljs.core.chunk_rest(seq__20714__$1);
var G__20729 = c__4679__auto__;
var G__20730 = cljs.core.count(c__4679__auto__);
var G__20731 = (0);
seq__20714 = G__20728;
chunk__20715 = G__20729;
count__20716 = G__20730;
i__20717 = G__20731;
continue;
} else {
var k = cljs.core.first(seq__20714__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20735 = cljs.core.next(seq__20714__$1);
var G__20736 = null;
var G__20737 = (0);
var G__20738 = (0);
seq__20714 = G__20735;
chunk__20715 = G__20736;
count__20716 = G__20737;
i__20717 = G__20738;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
