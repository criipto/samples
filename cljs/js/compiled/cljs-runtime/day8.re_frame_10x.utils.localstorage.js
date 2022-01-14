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
var G__20765 = arguments.length;
switch (G__20765) {
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
var seq__20766 = cljs.core.seq(Object.keys(localStorage));
var chunk__20767 = null;
var count__20768 = (0);
var i__20769 = (0);
while(true){
if((i__20769 < count__20768)){
var k = chunk__20767.cljs$core$IIndexed$_nth$arity$2(null,i__20769);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20771 = seq__20766;
var G__20772 = chunk__20767;
var G__20773 = count__20768;
var G__20774 = (i__20769 + (1));
seq__20766 = G__20771;
chunk__20767 = G__20772;
count__20768 = G__20773;
i__20769 = G__20774;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20766);
if(temp__5753__auto__){
var seq__20766__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20766__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20766__$1);
var G__20775 = cljs.core.chunk_rest(seq__20766__$1);
var G__20776 = c__4679__auto__;
var G__20777 = cljs.core.count(c__4679__auto__);
var G__20778 = (0);
seq__20766 = G__20775;
chunk__20767 = G__20776;
count__20768 = G__20777;
i__20769 = G__20778;
continue;
} else {
var k = cljs.core.first(seq__20766__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20779 = cljs.core.next(seq__20766__$1);
var G__20780 = null;
var G__20781 = (0);
var G__20782 = (0);
seq__20766 = G__20779;
chunk__20767 = G__20780;
count__20768 = G__20781;
i__20769 = G__20782;
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
