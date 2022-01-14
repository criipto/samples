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
var G__20725 = arguments.length;
switch (G__20725) {
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
var seq__20726 = cljs.core.seq(Object.keys(localStorage));
var chunk__20727 = null;
var count__20728 = (0);
var i__20729 = (0);
while(true){
if((i__20729 < count__20728)){
var k = chunk__20727.cljs$core$IIndexed$_nth$arity$2(null,i__20729);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20735 = seq__20726;
var G__20736 = chunk__20727;
var G__20737 = count__20728;
var G__20738 = (i__20729 + (1));
seq__20726 = G__20735;
chunk__20727 = G__20736;
count__20728 = G__20737;
i__20729 = G__20738;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20726);
if(temp__5753__auto__){
var seq__20726__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20726__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20726__$1);
var G__20739 = cljs.core.chunk_rest(seq__20726__$1);
var G__20740 = c__4679__auto__;
var G__20741 = cljs.core.count(c__4679__auto__);
var G__20742 = (0);
seq__20726 = G__20739;
chunk__20727 = G__20740;
count__20728 = G__20741;
i__20729 = G__20742;
continue;
} else {
var k = cljs.core.first(seq__20726__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20743 = cljs.core.next(seq__20726__$1);
var G__20744 = null;
var G__20745 = (0);
var G__20746 = (0);
seq__20726 = G__20743;
chunk__20727 = G__20744;
count__20728 = G__20745;
i__20729 = G__20746;
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
