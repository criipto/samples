goog.provide('pushy.core');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__21806 = h;
G__21806.setUseFragment(false);

G__21806.setPathPrefix("");

G__21806.setEnabled(true);

return G__21806;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
(t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
}));

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
(t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
}));

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__21808 = arguments.length;
switch (G__21808) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1(pushy.core.set_create_url_BANG_(pushy.core.set_retrieve_token_BANG_((new goog.history.Html5History.TokenTransformer()))));
}));

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_((new goog.history.Html5History(window,transformer)));
}));

(pushy.core.new_history.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
pushy.core.IHistory = function(){};

var pushy$core$IHistory$set_token_BANG_$dyn_21900 = (function() {
var G__21901 = null;
var G__21901__2 = (function (this$,token){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4551__auto__.call(null,this$,token));
} else {
var m__4549__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4549__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
var G__21901__3 = (function (this$,token,title){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4551__auto__.call(null,this$,token,title));
} else {
var m__4549__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4549__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
G__21901 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__21901__2.call(this,this$,token);
case 3:
return G__21901__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21901.cljs$core$IFn$_invoke$arity$2 = G__21901__2;
G__21901.cljs$core$IFn$_invoke$arity$3 = G__21901__3;
return G__21901;
})()
;
pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__21816 = arguments.length;
switch (G__21816) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_21900(this$,token);
}
}));

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_21900(this$,token,title);
}
}));

(pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$replace_token_BANG_$dyn_21909 = (function() {
var G__21910 = null;
var G__21910__2 = (function (this$,token){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4551__auto__.call(null,this$,token));
} else {
var m__4549__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4549__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
var G__21910__3 = (function (this$,token,title){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4551__auto__.call(null,this$,token,title));
} else {
var m__4549__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4549__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
G__21910 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__21910__2.call(this,this$,token);
case 3:
return G__21910__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21910.cljs$core$IFn$_invoke$arity$2 = G__21910__2;
G__21910.cljs$core$IFn$_invoke$arity$3 = G__21910__3;
return G__21910;
})()
;
pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__21824 = arguments.length;
switch (G__21824) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_21909(this$,token);
}
}));

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_21909(this$,token,title);
}
}));

(pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$get_token$dyn_21932 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (pushy.core.get_token[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (pushy.core.get_token["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-token",this$);
}
}
});
pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
return pushy$core$IHistory$get_token$dyn_21932(this$);
}
});

var pushy$core$IHistory$start_BANG_$dyn_21933 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (pushy.core.start_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.start!",this$);
}
}
});
pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$start_BANG_$dyn_21933(this$);
}
});

var pushy$core$IHistory$stop_BANG_$dyn_21934 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (pushy.core.stop_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.stop!",this$);
}
}
});
pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$stop_BANG_$dyn_21934(this$);
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21935 = arguments.length;
var i__4865__auto___21936 = (0);
while(true){
if((i__4865__auto___21936 < len__4864__auto___21935)){
args__4870__auto__.push((arguments[i__4865__auto___21936]));

var G__21937 = (i__4865__auto___21936 + (1));
i__4865__auto___21936 = G__21937;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__21855){
var map__21856 = p__21855;
var map__21856__$1 = cljs.core.__destructure_map(map__21856);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21856__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21856__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21856__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly(false));
var history = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core21857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core21857 = (function (event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,p__21855,history,processable_url_QMARK_,map__21856,match_fn,meta21858){
this.event_keys = event_keys;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.dispatch_fn = dispatch_fn;
this.p__21855 = p__21855;
this.history = history;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.map__21856 = map__21856;
this.match_fn = match_fn;
this.meta21858 = meta21858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(pushy.core.t_pushy$core21857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21859,meta21858__$1){
var self__ = this;
var _21859__$1 = this;
return (new pushy.core.t_pushy$core21857(self__.event_keys,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.dispatch_fn,self__.p__21855,self__.history,self__.processable_url_QMARK_,self__.map__21856,self__.match_fn,meta21858__$1));
}));

(pushy.core.t_pushy$core21857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21859){
var self__ = this;
var _21859__$1 = this;
return self__.meta21858;
}));

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
}));

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
}));

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
}));

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
}));

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$get_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
}));

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,(function (e){
var temp__5753__auto__ = (function (){var G__21860 = (function (){var G__21861 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__21861) : self__.match_fn.call(null,G__21861));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__21860) : self__.identity_fn.call(null,G__21860));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
})));

var temp__5753__auto___21938 = (function (){var G__21862 = (function (){var G__21863 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__21863) : self__.match_fn.call(null,G__21863));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__21862) : self__.identity_fn.call(null,G__21862));
})();
if(cljs.core.truth_(temp__5753__auto___21938)){
var match_21939 = temp__5753__auto___21938;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_21939) : self__.dispatch_fn.call(null,match_21939));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click((function (e){
var temp__5753__auto__ = (function (){var G__21864 = e;
var G__21864__$1 = (((G__21864 == null))?null:G__21864.target);
if((G__21864__$1 == null)){
return null;
} else {
return G__21864__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4251__auto__ = (self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1(uri) : self__.processable_url_QMARK_.call(null,uri));
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not(e.altKey)) && (((cljs.core.not(e.ctrlKey)) && (((cljs.core.not(e.metaKey)) && (((cljs.core.not(e.shiftKey)) && (((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (((((cljs.core.not(el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.getAttribute("data-pushy-ignore"),"false")))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)))))))))))));
} else {
return and__4251__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri(uri);
if(cljs.core.truth_((function (){var G__21875 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__21875) : self__.identity_fn.call(null,G__21875));
})())){
var temp__5751__auto___21941 = el.title;
if(cljs.core.truth_(temp__5751__auto___21941)){
var title_21942 = temp__5751__auto___21941;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_21942);
} else {
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$2(null,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_((self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1(next_token) : self__.prevent_default_when_no_match_QMARK_.call(null,next_token)))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
})));

return null;
}));

(pushy.core.t_pushy$core21857.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__21876_21943 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__21877_21944 = null;
var count__21878_21945 = (0);
var i__21879_21946 = (0);
while(true){
if((i__21879_21946 < count__21878_21945)){
var key_21950 = chunk__21877_21944.cljs$core$IIndexed$_nth$arity$2(null,i__21879_21946);
goog.events.unlistenByKey(key_21950);


var G__21951 = seq__21876_21943;
var G__21952 = chunk__21877_21944;
var G__21953 = count__21878_21945;
var G__21954 = (i__21879_21946 + (1));
seq__21876_21943 = G__21951;
chunk__21877_21944 = G__21952;
count__21878_21945 = G__21953;
i__21879_21946 = G__21954;
continue;
} else {
var temp__5753__auto___21955 = cljs.core.seq(seq__21876_21943);
if(temp__5753__auto___21955){
var seq__21876_21956__$1 = temp__5753__auto___21955;
if(cljs.core.chunked_seq_QMARK_(seq__21876_21956__$1)){
var c__4679__auto___21957 = cljs.core.chunk_first(seq__21876_21956__$1);
var G__21958 = cljs.core.chunk_rest(seq__21876_21956__$1);
var G__21959 = c__4679__auto___21957;
var G__21960 = cljs.core.count(c__4679__auto___21957);
var G__21961 = (0);
seq__21876_21943 = G__21958;
chunk__21877_21944 = G__21959;
count__21878_21945 = G__21960;
i__21879_21946 = G__21961;
continue;
} else {
var key_21962 = cljs.core.first(seq__21876_21956__$1);
goog.events.unlistenByKey(key_21962);


var G__21963 = cljs.core.next(seq__21876_21956__$1);
var G__21964 = null;
var G__21965 = (0);
var G__21966 = (0);
seq__21876_21943 = G__21963;
chunk__21877_21944 = G__21964;
count__21878_21945 = G__21965;
i__21879_21946 = G__21966;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
}));

(pushy.core.t_pushy$core21857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"p__21855","p__21855",1311977798,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"map__21856","map__21856",398842938,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"meta21858","meta21858",526040412,null)], null);
}));

(pushy.core.t_pushy$core21857.cljs$lang$type = true);

(pushy.core.t_pushy$core21857.cljs$lang$ctorStr = "pushy.core/t_pushy$core21857");

(pushy.core.t_pushy$core21857.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"pushy.core/t_pushy$core21857");
}));

/**
 * Positional factory function for pushy.core/t_pushy$core21857.
 */
pushy.core.__GT_t_pushy$core21857 = (function pushy$core$__GT_t_pushy$core21857(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,p__21855__$1,history__$1,processable_url_QMARK___$1,map__21856__$2,match_fn__$1,meta21858){
return (new pushy.core.t_pushy$core21857(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,p__21855__$1,history__$1,processable_url_QMARK___$1,map__21856__$2,match_fn__$1,meta21858));
});

}

return (new pushy.core.t_pushy$core21857(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,p__21855,history,processable_url_QMARK_,map__21856__$1,match_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(pushy.core.pushy.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(pushy.core.pushy.cljs$lang$applyTo = (function (seq21832){
var G__21833 = cljs.core.first(seq21832);
var seq21832__$1 = cljs.core.next(seq21832);
var G__21834 = cljs.core.first(seq21832__$1);
var seq21832__$2 = cljs.core.next(seq21832__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21833,G__21834,seq21832__$2);
}));

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__21892 = arguments.length;
switch (G__21892) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1(window);
}));

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
}));

(pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1);

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__21897 = arguments.length;
switch (G__21897) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3(dispatch_fn,match_fn,cljs.core.identity);
}));

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(dispatch_fn,match_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn], 0));
h.pushy$core$IHistory$start_BANG_$arity$1(null);

return h;
}));

(pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=pushy.core.js.map
