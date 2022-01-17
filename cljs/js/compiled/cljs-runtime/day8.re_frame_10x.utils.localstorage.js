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
var G__20751 = arguments.length;
switch (G__20751) {
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
var seq__20753 = cljs.core.seq(Object.keys(localStorage));
var chunk__20754 = null;
var count__20755 = (0);
var i__20756 = (0);
while(true){
if((i__20756 < count__20755)){
var k = chunk__20754.cljs$core$IIndexed$_nth$arity$2(null,i__20756);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20760 = seq__20753;
var G__20761 = chunk__20754;
var G__20762 = count__20755;
var G__20763 = (i__20756 + (1));
seq__20753 = G__20760;
chunk__20754 = G__20761;
count__20755 = G__20762;
i__20756 = G__20763;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20753);
if(temp__5753__auto__){
var seq__20753__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20753__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20753__$1);
var G__20764 = cljs.core.chunk_rest(seq__20753__$1);
var G__20765 = c__4679__auto__;
var G__20766 = cljs.core.count(c__4679__auto__);
var G__20767 = (0);
seq__20753 = G__20764;
chunk__20754 = G__20765;
count__20755 = G__20766;
i__20756 = G__20767;
continue;
} else {
var k = cljs.core.first(seq__20753__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20768 = cljs.core.next(seq__20753__$1);
var G__20769 = null;
var G__20770 = (0);
var G__20771 = (0);
seq__20753 = G__20768;
chunk__20754 = G__20769;
count__20755 = G__20770;
i__20756 = G__20771;
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
