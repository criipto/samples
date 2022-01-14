goog.provide('cljs_re_frame.views');
cljs_re_frame.views.print_date = (function cljs_re_frame$views$print_date(d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getDate()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getMonth()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getFullYear())].join('');
});
cljs_re_frame.views.nav_items = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.Keyword(null,"icon","icon",1679606541),"lamp",new cljs.core.Keyword(null,"text","text",-1790561697),"Overview"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"icon","icon",1679606541),"coins",new cljs.core.Keyword(null,"text","text",-1790561697),"Accounts"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"payments-and-transfer","payments-and-transfer",917406614),new cljs.core.Keyword(null,"icon","icon",1679606541),"arrows",new cljs.core.Keyword(null,"text","text",-1790561697),"Payments & Transfer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"investment","investment",-1072757208),new cljs.core.Keyword(null,"icon","icon",1679606541),"chart",new cljs.core.Keyword(null,"text","text",-1790561697),"Investment"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pension-and-insurance","pension-and-insurance",-2119660567),new cljs.core.Keyword(null,"icon","icon",1679606541),"wineglass",new cljs.core.Keyword(null,"text","text",-1790561697),"Pension & Insurance"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"icon","icon",1679606541),"envelope",new cljs.core.Keyword(null,"text","text",-1790561697),"Messages"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"icon","icon",1679606541),"profile",new cljs.core.Keyword(null,"text","text",-1790561697),"Profile"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"developer-support","developer-support",1412347786),new cljs.core.Keyword(null,"icon","icon",1679606541),"code",new cljs.core.Keyword(null,"text","text",-1790561697),"Developer Support"], null)], null)));
cljs_re_frame.views.create_columns = (function cljs_re_frame$views$create_columns(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22664 = arguments.length;
var i__4865__auto___22665 = (0);
while(true){
if((i__4865__auto___22665 < len__4864__auto___22664)){
args__4870__auto__.push((arguments[i__4865__auto___22665]));

var G__22666 = (i__4865__auto___22665 + (1));
i__4865__auto___22665 = G__22666;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs_re_frame.views.create_columns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs_re_frame.views.create_columns.cljs$core$IFn$_invoke$arity$variadic = (function (attributes,columns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.account","div.columns.account",1780641784),attributes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$iter__22587(s__22588){
return (new cljs.core.LazySeq(null,(function (){
var s__22588__$1 = s__22588;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22588__$1);
if(temp__5753__auto__){
var s__22588__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22588__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22588__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22590 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22589 = (0);
while(true){
if((i__22589 < size__4651__auto__)){
var map__22591 = cljs.core._nth(c__4650__auto__,i__22589);
var map__22591__$1 = cljs.core.__destructure_map(map__22591);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22591__$1,new cljs.core.Keyword(null,"content","content",15833224));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
cljs.core.chunk_append(b__22590,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-4","div.column.is-4",-186249880),cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.random_uuid())),content], null));

var G__22667 = (i__22589 + (1));
i__22589 = G__22667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22590),cljs_re_frame$views$iter__22587(cljs.core.chunk_rest(s__22588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22590),null);
}
} else {
var map__22592 = cljs.core.first(s__22588__$2);
var map__22592__$1 = cljs.core.__destructure_map(map__22592);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,new cljs.core.Keyword(null,"content","content",15833224));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-4","div.column.is-4",-186249880),cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.random_uuid())),content], null),cljs_re_frame$views$iter__22587(cljs.core.rest(s__22588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(columns);
})()], null)], null);
}));

(cljs_re_frame.views.create_columns.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_re_frame.views.create_columns.cljs$lang$applyTo = (function (seq22585){
var G__22586 = cljs.core.first(seq22585);
var seq22585__$1 = cljs.core.next(seq22585);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22586,seq22585__$1);
}));

cljs_re_frame.views.log_in_button = (function cljs_re_frame$views$log_in_button(){
var auth_user_info = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","auth-user","cljs-re-frame.subs/auth-user",1230127717)], null)));
var button_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null);
var log_in_fn = Authentication.authentication.login;
var log_off_fn = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","logout","cljs-re-frame.events/logout",-122634062)], null));
});
var button = (function (text,on_click_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),button_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-item","span.navbar-item",-716648886),text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.power-off-white","div.icon.power-off-white",825614794)], null)], null)], null);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttons","div.buttons",-536342249),(((auth_user_info == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [button,"Log on",log_in_fn], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [button,"Log off",log_off_fn], null))], null);
});
cljs_re_frame.views.page_content = (function cljs_re_frame$views$page_content(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22668 = arguments.length;
var i__4865__auto___22669 = (0);
while(true){
if((i__4865__auto___22669 < len__4864__auto___22668)){
args__4870__auto__.push((arguments[i__4865__auto___22669]));

var G__22670 = (i__4865__auto___22669 + (1));
i__4865__auto___22669 = G__22670;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return cljs_re_frame.views.page_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(cljs_re_frame.views.page_content.cljs$core$IFn$_invoke$arity$variadic = (function (p__22597){
var map__22598 = p__22597;
var map__22598__$1 = cljs.core.__destructure_map(map__22598);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22598__$1,new cljs.core.Keyword(null,"title","title",636505583));
var page_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22598__$1,new cljs.core.Keyword(null,"page-type","page-type",1653920164));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22598__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.media","article.media",651402967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-left","div.media-left",-1702208304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image","figure.image",-1216510536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["is-32x32 icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1((cljs_re_frame.views.nav_items.cljs$core$IFn$_invoke$arity$1 ? cljs_re_frame.views.nav_items.cljs$core$IFn$_invoke$arity$1(page_type) : cljs_re_frame.views.nav_items.call(null,page_type))))].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),(function (){var or__4253__auto__ = title;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1((cljs_re_frame.views.nav_items.cljs$core$IFn$_invoke$arity$1 ? cljs_re_frame.views.nav_items.cljs$core$IFn$_invoke$arity$1(page_type) : cljs_re_frame.views.nav_items.call(null,page_type)));
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null)], null)], null)], null);
}));

(cljs_re_frame.views.page_content.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_re_frame.views.page_content.cljs$lang$applyTo = (function (seq22596){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22596));
}));

cljs_re_frame.views.profile = (function cljs_re_frame$views$profile(){
var auth_error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","auth-error","cljs-re-frame.subs/auth-error",-642064779)], null)));
var auth_user_info = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","auth-user","cljs-re-frame.subs/auth-user",1230127717)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(auth_user_info)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$profile_$_iter__22599(s__22600){
return (new cljs.core.LazySeq(null,(function (){
var s__22600__$1 = s__22600;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22600__$1);
if(temp__5753__auto__){
var s__22600__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22600__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22600__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22602 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22601 = (0);
while(true){
if((i__22601 < size__4651__auto__)){
var vec__22603 = cljs.core._nth(c__4650__auto__,i__22601);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22603,(1),null);
cljs.core.chunk_append(b__22602,cljs_re_frame.views.create_columns.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["auth-user-info-",cljs.core.name(k)].join('')], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),clojure.string.capitalize(cljs.core.name(k))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),v], null)], 0)));

var G__22671 = (i__22601 + (1));
i__22601 = G__22671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22602),cljs_re_frame$views$profile_$_iter__22599(cljs.core.chunk_rest(s__22600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22602),null);
}
} else {
var vec__22606 = cljs.core.first(s__22600__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(1),null);
return cljs.core.cons(cljs_re_frame.views.create_columns.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["auth-user-info-",cljs.core.name(k)].join('')], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),clojure.string.capitalize(cljs.core.name(k))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),v], null)], 0)),cljs_re_frame$views$profile_$_iter__22599(cljs.core.rest(s__22600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(auth_user_info);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-danger","button.button.is-danger",-948547713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","logout","cljs-re-frame.events/logout",-122634062)], null));
})], null),"Log off"], null)], null):null),(cljs.core.truth_(auth_error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["auth error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth_error)].join('')], null):null)], null);
})], null);
});
cljs_re_frame.views.accounts_view = (function cljs_re_frame$views$accounts_view(){
var accounts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","accounts","cljs-re-frame.subs/accounts",-1419868465)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.create_columns,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"Name"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"Balance"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"Recent Transactions"], null)], null),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$accounts_view_$_iter__22609(s__22610){
return (new cljs.core.LazySeq(null,(function (){
var s__22610__$1 = s__22610;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22610__$1);
if(temp__5753__auto__){
var s__22610__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22610__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22610__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22612 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22611 = (0);
while(true){
if((i__22611 < size__4651__auto__)){
var map__22613 = cljs.core._nth(c__4650__auto__,i__22611);
var map__22613__$1 = cljs.core.__destructure_map(map__22613);
var account_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613__$1,new cljs.core.Keyword(null,"account-name","account-name",-296718226));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
var last_transaction_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613__$1,new cljs.core.Keyword(null,"last-transaction-date","last-transaction-date",-996917074));
cljs.core.chunk_append(b__22612,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.create_columns,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),account_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),balance], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs_re_frame.views.print_date(last_transaction_date)], null)], null));

var G__22672 = (i__22611 + (1));
i__22611 = G__22672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22612),cljs_re_frame$views$accounts_view_$_iter__22609(cljs.core.chunk_rest(s__22610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22612),null);
}
} else {
var map__22614 = cljs.core.first(s__22610__$2);
var map__22614__$1 = cljs.core.__destructure_map(map__22614);
var account_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22614__$1,new cljs.core.Keyword(null,"account-name","account-name",-296718226));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22614__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22614__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
var last_transaction_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22614__$1,new cljs.core.Keyword(null,"last-transaction-date","last-transaction-date",-996917074));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.create_columns,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),account_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),balance], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs_re_frame.views.print_date(last_transaction_date)], null)], null),cljs_re_frame$views$accounts_view_$_iter__22609(cljs.core.rest(s__22610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(accounts);
})()], null);
});
cljs_re_frame.views.accounts = (function cljs_re_frame$views$accounts(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.accounts_view], null);
})], null);
});
cljs_re_frame.views.payments_and_transfer = (function cljs_re_frame$views$payments_and_transfer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"payments-and-transfer","payments-and-transfer",917406614),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
})], null);
});
cljs_re_frame.views.investment = (function cljs_re_frame$views$investment(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"investment","investment",-1072757208),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
})], null);
});
cljs_re_frame.views.pension_and_insurance = (function cljs_re_frame$views$pension_and_insurance(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"pension-and-insurance","pension-and-insurance",-2119660567),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
})], null);
});
cljs_re_frame.views.message_view = (function cljs_re_frame$views$message_view(p__22615){
var map__22616 = p__22615;
var map__22616__$1 = cljs.core.__destructure_map(map__22616);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"content","content",15833224));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var read_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"read?","read?",1000202823));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.accordion.message-item","article.accordion.message-item",562067276),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accordion-header.message-item.toggle","div.accordion-header.message-item.toggle",2136147732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["message-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","message-read","cljs-re-frame.events/message-read",-2116114258),id], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-item.from","div.message-item.from",-1302335383),((cljs.core.not(read_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.dot","div.icon.dot",-1154159780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"12px"], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.message-item.subject","span.message-item.subject",-210160403),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accordion-body","div.accordion-body",1303030834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.accordion-content.message-item","div.accordion-content.message-item",-1810970509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),markdown_to_hiccup.core.component(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1(content))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.reply","a.button.reply",-169092752),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"mailto:support@criipto.com"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Reply"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.reply","div.icon.reply",-1775425900)], null)], null)], null)], null);
});
cljs_re_frame.views.messages = (function cljs_re_frame$views$messages(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"content","content",15833224),(function (){
var messages = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"date","date",-1463434462),(function (p1__22618_SHARP_,p2__22617_SHARP_){
return cljs.core.compare(p2__22617_SHARP_,p1__22618_SHARP_);
}),cljs.core.vals(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","messages","cljs-re-frame.subs/messages",935050883)], null)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.accordions","section.accordions",508279418),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$messages_$_iter__22619(s__22620){
return (new cljs.core.LazySeq(null,(function (){
var s__22620__$1 = s__22620;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22620__$1);
if(temp__5753__auto__){
var s__22620__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22620__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22620__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22622 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22621 = (0);
while(true){
if((i__22621 < size__4651__auto__)){
var vec__22623 = cljs.core._nth(c__4650__auto__,i__22621);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22623,(0),null);
var map__22626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22623,(1),null);
var map__22626__$1 = cljs.core.__destructure_map(map__22626);
var message = map__22626__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__22622,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["message-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.message_view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,new cljs.core.Keyword(null,"index","index",-1531685915),index)], null)], null));

var G__22673 = (i__22621 + (1));
i__22621 = G__22673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22622),cljs_re_frame$views$messages_$_iter__22619(cljs.core.chunk_rest(s__22620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22622),null);
}
} else {
var vec__22627 = cljs.core.first(s__22620__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22627,(0),null);
var map__22630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22627,(1),null);
var map__22630__$1 = cljs.core.__destructure_map(map__22630);
var message = map__22630__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["message-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.message_view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,new cljs.core.Keyword(null,"index","index",-1531685915),index)], null)], null),cljs_re_frame$views$messages_$_iter__22619(cljs.core.rest(s__22620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,messages));
})()], null);
})], null);
});
cljs_re_frame.views.developer_support = (function cljs_re_frame$views$developer_support(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"developer-support","developer-support",1412347786),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"http://criipto.slack.com/"], null);
})], null);
});
cljs_re_frame.views.front_page_icons = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"apartment",new cljs.core.Keyword(null,"text","text",-1790561697),"Housing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"car",new cljs.core.Keyword(null,"text","text",-1790561697),"Cars"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"chart",new cljs.core.Keyword(null,"text","text",-1790561697),"Investment"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"wineglass",new cljs.core.Keyword(null,"text","text",-1790561697),"Pension"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"hand-holding-medical",new cljs.core.Keyword(null,"text","text",-1790561697),"Insurance"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"credit-card",new cljs.core.Keyword(null,"text","text",-1790561697),"Cards"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"coins",new cljs.core.Keyword(null,"text","text",-1790561697),"Loans"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),"cardboard-box",new cljs.core.Keyword(null,"text","text",-1790561697),"More products"], null)], null);
cljs_re_frame.views.tiles_content = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Easy digital signing of sensitive documents",new cljs.core.Keyword(null,"text","text",-1790561697),"Criipto provides Criipto Bank\u2019s secure and user-friendly signing solution so you can sign securely - on your computer and on the go.",new cljs.core.Keyword(null,"icon","icon",1679606541),"signature"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Easy login to Criipto Bank",new cljs.core.Keyword(null,"text","text",-1790561697),"Criipto Bank is using Criipto's easy and secure login solution. It saves us a lot of money that we can spend on better service for you!'",new cljs.core.Keyword(null,"icon","icon",1679606541),"power-off"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"MitID has arrived - We have you covered",new cljs.core.Keyword(null,"text","text",-1790561697),"Don\u2019t worry. We have your back. With Criipto\u2019s easy e-ID login solution we provide MitID and NemID login side-by-side.",new cljs.core.Keyword(null,"icon","icon",1679606541),"mitid"], null)], null);
cljs_re_frame.views.front_page = (function cljs_re_frame$views$front_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-2","div.column.is-2",-1290805620)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-8","div.column.is-8",-1085172808),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor.splash-menu","div.tile.is-ancestor.splash-menu",-613960652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-parent","div.tile.is-parent",1322828362),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$front_page_$_iter__22631(s__22632){
return (new cljs.core.LazySeq(null,(function (){
var s__22632__$1 = s__22632;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22632__$1);
if(temp__5753__auto__){
var s__22632__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22632__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22632__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22634 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22633 = (0);
while(true){
if((i__22633 < size__4651__auto__)){
var map__22635 = cljs.core._nth(c__4650__auto__,i__22633);
var map__22635__$1 = cljs.core.__destructure_map(map__22635);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22635__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__22634,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child","div.tile.is-child",-1119574467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["front-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-icon.icon","div.menu-icon.icon",822102269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-name","div.menu-name",870778293),text], null)], null));

var G__22674 = (i__22633 + (1));
i__22633 = G__22674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22634),cljs_re_frame$views$front_page_$_iter__22631(cljs.core.chunk_rest(s__22632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22634),null);
}
} else {
var map__22636 = cljs.core.first(s__22632__$2);
var map__22636__$1 = cljs.core.__destructure_map(map__22636);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22636__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22636__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child","div.tile.is-child",-1119574467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["front-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-icon.icon","div.menu-icon.icon",822102269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-name","div.menu-name",870778293),text], null)], null),cljs_re_frame$views$front_page_$_iter__22631(cljs.core.rest(s__22632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs_re_frame.views.front_page_icons);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor","div.tile.is-ancestor",2069912078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-parent","div.tile.is-parent",1322828362),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child.box.banner","div.tile.is-child.box.banner",531425093),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner.overlay","div.banner.overlay",-1474078886)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner-content","div.banner-content",-1827311019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.banner","h2.subtitle.banner",-104997659),"BUSINESS TO BUSINESS"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.banner","h1.title.banner",-522043134),"\u201CWe save 120 dev hours a year with Criipto\u2019s e-ID login\u201D"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-ancestor","div.tile.is-ancestor",2069912078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-parent","div.tile.is-parent",1322828362),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$front_page_$_iter__22637(s__22638){
return (new cljs.core.LazySeq(null,(function (){
var s__22638__$1 = s__22638;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22638__$1);
if(temp__5753__auto__){
var s__22638__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22638__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22638__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22640 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22639 = (0);
while(true){
if((i__22639 < size__4651__auto__)){
var map__22641 = cljs.core._nth(c__4650__auto__,i__22639);
var map__22641__$1 = cljs.core.__destructure_map(map__22641);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__22640,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child.box.splash-item","div.tile.is-child.box.splash-item",-364140570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["front-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.is-40h.splash-item","div.icon.is-40h.splash-item",2139423453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.splash-item","h1.title.splash-item",1576367212),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.splash-item","div.content.splash-item",559838704),text], null)], null));

var G__22675 = (i__22639 + (1));
i__22639 = G__22675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22640),cljs_re_frame$views$front_page_$_iter__22637(cljs.core.chunk_rest(s__22638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22640),null);
}
} else {
var map__22642 = cljs.core.first(s__22638__$2);
var map__22642__$1 = cljs.core.__destructure_map(map__22642);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.is-child.box.splash-item","div.tile.is-child.box.splash-item",-364140570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["front-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.is-40h.splash-item","div.icon.is-40h.splash-item",2139423453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.splash-item","h1.title.splash-item",1576367212),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.splash-item","div.content.splash-item",559838704),text], null)], null),cljs_re_frame$views$front_page_$_iter__22637(cljs.core.rest(s__22638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs_re_frame.views.tiles_content);
})()], null)], null)], null)], null);
});
cljs_re_frame.views.overview = (function cljs_re_frame$views$overview(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var auth_user_info = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","auth-user","cljs-re-frame.subs/auth-user",1230127717)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(auth_user_info),new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.is-size-6","h2.subtitle.is-size-6",-1506156457),["F\u00F8dselsdag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"birthdate","birthdate",-534621599).cljs$core$IFn$_invoke$arity$1(auth_user_info))].join('')], null);
})], null);
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"content","content",15833224),(function (){
var messages = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"date","date",-1463434462),(function (p1__22644_SHARP_,p2__22643_SHARP_){
return cljs.core.compare(p2__22643_SHARP_,p1__22644_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read?","read?",1000202823),cljs.core.vals(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","messages","cljs-re-frame.subs/messages",935050883)], null)))))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.accordions","section.accordions",508279418),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$overview_$_iter__22645(s__22646){
return (new cljs.core.LazySeq(null,(function (){
var s__22646__$1 = s__22646;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22646__$1);
if(temp__5753__auto__){
var s__22646__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22646__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22646__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22648 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22647 = (0);
while(true){
if((i__22647 < size__4651__auto__)){
var vec__22649 = cljs.core._nth(c__4650__auto__,i__22647);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22649,(0),null);
var map__22652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22649,(1),null);
var map__22652__$1 = cljs.core.__destructure_map(map__22652);
var message = map__22652__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22652__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__22648,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["message-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.message_view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,new cljs.core.Keyword(null,"index","index",-1531685915),index)], null)], null));

var G__22676 = (i__22647 + (1));
i__22647 = G__22676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22648),cljs_re_frame$views$overview_$_iter__22645(cljs.core.chunk_rest(s__22646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22648),null);
}
} else {
var vec__22653 = cljs.core.first(s__22646__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22653,(0),null);
var map__22656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22653,(1),null);
var map__22656__$1 = cljs.core.__destructure_map(map__22656);
var message = map__22656__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22656__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["message-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.message_view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(message,new cljs.core.Keyword(null,"index","index",-1531685915),index)], null)], null),cljs_re_frame$views$overview_$_iter__22645(cljs.core.rest(s__22646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,messages));
})()], null);
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.page_content,new cljs.core.Keyword(null,"page-type","page-type",1653920164),new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"content","content",15833224),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.accounts_view], null);
})], null)], null);
});
cljs_re_frame.views.pages = (function cljs_re_frame$views$pages(page_name){
var G__22657 = page_name;
var G__22657__$1 = (((G__22657 instanceof cljs.core.Keyword))?G__22657.fqn:null);
switch (G__22657__$1) {
case "accounts":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.accounts], null);

break;
case "developer-support":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.developer_support], null);

break;
case "investment":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.investment], null);

break;
case "messages":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.messages], null);

break;
case "overview":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.overview], null);

break;
case "payments-and-transfer":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.payments_and_transfer], null);

break;
case "pension-and-insurance":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.pension_and_insurance], null);

break;
case "profile":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.profile], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_re_frame.views.overview], null);

}
});
cljs_re_frame.views.navigation_menu = (function cljs_re_frame$views$navigation_menu(){
var number_of_unread_messages = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.subs","number-of-unread-messages","cljs-re-frame.subs/number-of-unread-messages",1083665720)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter.is-one-fifth-fullhd","div.column.is-one-quarter.is-one-fifth-fullhd",366967655),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.panel","nav.panel",-933286493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4652__auto__ = (function cljs_re_frame$views$navigation_menu_$_iter__22658(s__22659){
return (new cljs.core.LazySeq(null,(function (){
var s__22659__$1 = s__22659;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__22659__$1);
if(temp__5753__auto__){
var s__22659__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22659__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__22659__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__22661 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__22660 = (0);
while(true){
if((i__22660 < size__4651__auto__)){
var map__22662 = cljs.core._nth(c__4650__auto__,i__22660);
var map__22662__$1 = cljs.core.__destructure_map(map__22662);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22662__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append(b__22661,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-item.panel-block","div.menu-item.panel-block",1117097393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22660,map__22662,map__22662__$1,id,icon,text,c__4650__auto__,size__4651__auto__,b__22661,s__22659__$2,temp__5753__auto__,number_of_unread_messages){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),id], null));
});})(i__22660,map__22662,map__22662__$1,id,icon,text,c__4650__auto__,size__4651__auto__,b__22661,s__22659__$2,temp__5753__auto__,number_of_unread_messages))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"messages","messages",345434482))) && (((0) < number_of_unread_messages))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-danger"], null),number_of_unread_messages], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null));

var G__22678 = (i__22660 + (1));
i__22660 = G__22678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22661),cljs_re_frame$views$navigation_menu_$_iter__22658(cljs.core.chunk_rest(s__22659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22661),null);
}
} else {
var map__22663 = cljs.core.first(s__22659__$2);
var map__22663__$1 = cljs.core.__destructure_map(map__22663);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu-item.panel-block","div.menu-item.panel-block",1117097393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22663,map__22663__$1,id,icon,text,s__22659__$2,temp__5753__auto__,number_of_unread_messages){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.events","set-active-page","cljs-re-frame.events/set-active-page",103486923),id], null));
});})(map__22663,map__22663__$1,id,icon,text,s__22659__$2,temp__5753__auto__,number_of_unread_messages))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"messages","messages",345434482))) && (((0) < number_of_unread_messages))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-danger"], null),number_of_unread_messages], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),cljs_re_frame$views$navigation_menu_$_iter__22658(cljs.core.rest(s__22659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(cljs_re_frame.views.nav_items));
})()], null)], null)], null);
});

//# sourceMappingURL=cljs_re_frame.views.js.map
