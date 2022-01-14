goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__21699 = e.target.readyState;
var fexpr__21698 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__21698.cljs$core$IFn$_invoke$arity$1 ? fexpr__21698.cljs$core$IFn$_invoke$arity$1(G__21699) : fexpr__21698.call(null,G__21699));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21703,handler){
var map__21704 = p__21703;
var map__21704__$1 = cljs.core.__destructure_map(map__21704);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21704__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21704__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21704__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21704__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21704__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21704__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21704__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__21700_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__21700_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___21721 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___21721)){
var response_type_21722 = temp__5753__auto___21721;
(this$__$1.responseType = cljs.core.name(response_type_21722));
} else {
}

var seq__21705_21723 = cljs.core.seq(headers);
var chunk__21706_21724 = null;
var count__21707_21725 = (0);
var i__21708_21726 = (0);
while(true){
if((i__21708_21726 < count__21707_21725)){
var vec__21715_21727 = chunk__21706_21724.cljs$core$IIndexed$_nth$arity$2(null,i__21708_21726);
var k_21728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715_21727,(0),null);
var v_21729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715_21727,(1),null);
this$__$1.setRequestHeader(k_21728,v_21729);


var G__21730 = seq__21705_21723;
var G__21731 = chunk__21706_21724;
var G__21732 = count__21707_21725;
var G__21733 = (i__21708_21726 + (1));
seq__21705_21723 = G__21730;
chunk__21706_21724 = G__21731;
count__21707_21725 = G__21732;
i__21708_21726 = G__21733;
continue;
} else {
var temp__5753__auto___21734 = cljs.core.seq(seq__21705_21723);
if(temp__5753__auto___21734){
var seq__21705_21735__$1 = temp__5753__auto___21734;
if(cljs.core.chunked_seq_QMARK_(seq__21705_21735__$1)){
var c__4679__auto___21736 = cljs.core.chunk_first(seq__21705_21735__$1);
var G__21737 = cljs.core.chunk_rest(seq__21705_21735__$1);
var G__21738 = c__4679__auto___21736;
var G__21739 = cljs.core.count(c__4679__auto___21736);
var G__21740 = (0);
seq__21705_21723 = G__21737;
chunk__21706_21724 = G__21738;
count__21707_21725 = G__21739;
i__21708_21726 = G__21740;
continue;
} else {
var vec__21718_21741 = cljs.core.first(seq__21705_21735__$1);
var k_21742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718_21741,(0),null);
var v_21743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718_21741,(1),null);
this$__$1.setRequestHeader(k_21742,v_21743);


var G__21744 = cljs.core.next(seq__21705_21735__$1);
var G__21745 = null;
var G__21746 = (0);
var G__21747 = (0);
seq__21705_21723 = G__21744;
chunk__21706_21724 = G__21745;
count__21707_21725 = G__21746;
i__21708_21726 = G__21747;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4253__auto__ = body;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
