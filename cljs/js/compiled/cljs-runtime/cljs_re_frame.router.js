goog.provide('cljs_re_frame.router');
cljs_re_frame.router.routes = (function (){var routes_STAR_ = cljs.core.PersistentHashMap.fromArrays(["","auth","profile","overview","accounts","pension-and-insurance","messages","payments-and-transfer","developer-support","investment"],[new cljs.core.Keyword(null,"front-page","front-page",-663760939),new cljs.core.Keyword(null,"auth","auth",1389754926),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"overview","overview",-435037267),new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"pension-and-insurance","pension-and-insurance",-2119660567),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"payments-and-transfer","payments-and-transfer",917406614),new cljs.core.Keyword(null,"developer-support","developer-support",1412347786),new cljs.core.Keyword(null,"investment","investment",-1072757208)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(routes_STAR_,"/samples/cljs/",routes_STAR_)], null);
})();
cljs_re_frame.router.history = (function (){var dispatch = (function (p1__22018_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-re-frame.router","route-changed","cljs-re-frame.router/route-changed",461575894),p1__22018_SHARP_], null));
});
var match = (function (p1__22019_SHARP_){
return bidi.bidi.match_route(cljs_re_frame.router.routes,p1__22019_SHARP_);
});
return pushy.core.pushy(dispatch,match);
})();
cljs_re_frame.router.match_route = (function cljs_re_frame$router$match_route(uri){
return bidi.bidi.match_route(cljs_re_frame.router.routes,uri);
});
cljs_re_frame.router.start_BANG_ = (function cljs_re_frame$router$start_BANG_(){
return cljs_re_frame.router.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
cljs_re_frame.router.path_for = (function cljs_re_frame$router$path_for(page){
var path = bidi.bidi.path_for(cljs_re_frame.router.routes,page);
console.log(["path-for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join(''));

console.log(path);

return path;
});
cljs_re_frame.router.set_token_BANG_ = (function cljs_re_frame$router$set_token_BANG_(token){
return cljs_re_frame.router.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,token);
});

//# sourceMappingURL=cljs_re_frame.router.js.map
