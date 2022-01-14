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
var G__20785 = arguments.length;
switch (G__20785) {
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
var seq__20786 = cljs.core.seq(Object.keys(localStorage));
var chunk__20787 = null;
var count__20788 = (0);
var i__20789 = (0);
while(true){
if((i__20789 < count__20788)){
var k = chunk__20787.cljs$core$IIndexed$_nth$arity$2(null,i__20789);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20791 = seq__20786;
var G__20792 = chunk__20787;
var G__20793 = count__20788;
var G__20794 = (i__20789 + (1));
seq__20786 = G__20791;
chunk__20787 = G__20792;
count__20788 = G__20793;
i__20789 = G__20794;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20786);
if(temp__5753__auto__){
var seq__20786__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20786__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20786__$1);
var G__20795 = cljs.core.chunk_rest(seq__20786__$1);
var G__20796 = c__4679__auto__;
var G__20797 = cljs.core.count(c__4679__auto__);
var G__20798 = (0);
seq__20786 = G__20795;
chunk__20787 = G__20796;
count__20788 = G__20797;
i__20789 = G__20798;
continue;
} else {
var k = cljs.core.first(seq__20786__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__20799 = cljs.core.next(seq__20786__$1);
var G__20800 = null;
var G__20801 = (0);
var G__20802 = (0);
seq__20786 = G__20799;
chunk__20787 = G__20800;
count__20788 = G__20801;
i__20789 = G__20802;
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
