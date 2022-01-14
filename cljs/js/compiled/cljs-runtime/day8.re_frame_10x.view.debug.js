goog.provide('day8.re_frame_10x.view.debug');
day8.re_frame_10x.view.debug.render = (function day8$re_frame_10x$view$debug$render(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Number of epochs ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null)))], 0))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Beginning trace ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null)))], 0))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Ending ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null)))], 0))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Current epoch ID ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null)))], 0))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["debug-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"pre epoch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pre-epoch-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"match state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["match-state"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Epochs"], null),(function (){var current_match = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null)));
var iter__4652__auto__ = (function day8$re_frame_10x$view$debug$render_$_iter__20669(s__20670){
return (new cljs.core.LazySeq(null,(function (){
var s__20670__$1 = s__20670;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20670__$1);
if(temp__5753__auto__){
var s__20670__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20670__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__20670__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__20672 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__20671 = (0);
while(true){
if((i__20671 < size__4651__auto__)){
var match = cljs.core._nth(c__4650__auto__,i__20671);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
cljs.core.chunk_append(b__20672,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__20671,match_info,match,c__4650__auto__,size__4651__auto__,b__20672,s__20670__$2,temp__5753__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0))], null);
});})(i__20671,match_info,match,c__4650__auto__,size__4651__auto__,b__20672,s__20670__$2,temp__5753__auto__,current_match))
,day8.re_frame_10x.metamorphic.summarise_match(match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match_info))], null)));

var G__20673 = (i__20671 + (1));
i__20671 = G__20673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20672),day8$re_frame_10x$view$debug$render_$_iter__20669(cljs.core.chunk_rest(s__20670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20672),null);
}
} else {
var match = cljs.core.first(s__20670__$2);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (match_info,match,s__20670__$2,temp__5753__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0))], null);
});})(match_info,match,s__20670__$2,temp__5753__auto__,current_match))
,day8.re_frame_10x.metamorphic.summarise_match(match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match_info))], null)),day8$re_frame_10x$view$debug$render_$_iter__20669(cljs.core.rest(s__20670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null)))));
})()], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.debug.js.map
