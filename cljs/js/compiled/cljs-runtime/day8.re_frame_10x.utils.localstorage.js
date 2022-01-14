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
var G__20739 = arguments.length;
switch (G__20739) {
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
var seq__20740 = cljs.core.seq(Object.keys(localStorage));
var chunk__20741 = null;
var count__20742 = (0);
var i__20743 = (0);
while(true){
if((i__20743 < count__20742)){
var k = chunk__20741.cljs$core$IIndexed$_nth$arity$2(null,i__20743);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20757 = seq__20740;
var G__20758 = chunk__20741;
var G__20759 = count__20742;
var G__20760 = (i__20743 + (1));
seq__20740 = G__20757;
chunk__20741 = G__20758;
count__20742 = G__20759;
i__20743 = G__20760;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20740);
if(temp__5753__auto__){
var seq__20740__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20740__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20740__$1);
var G__20761 = cljs.core.chunk_rest(seq__20740__$1);
var G__20762 = c__4679__auto__;
var G__20763 = cljs.core.count(c__4679__auto__);
var G__20764 = (0);
seq__20740 = G__20761;
chunk__20741 = G__20762;
count__20742 = G__20763;
i__20743 = G__20764;
continue;
} else {
var k = cljs.core.first(seq__20740__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20765 = cljs.core.next(seq__20740__$1);
var G__20766 = null;
var G__20767 = (0);
var G__20768 = (0);
seq__20740 = G__20765;
chunk__20741 = G__20766;
count__20742 = G__20767;
i__20743 = G__20768;
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
