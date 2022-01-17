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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__21701,handler){
var map__21702 = p__21701;
var map__21702__$1 = cljs.core.__destructure_map(map__21702);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21702__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21702__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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

var temp__5753__auto___21724 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___21724)){
var response_type_21725 = temp__5753__auto___21724;
(this$__$1.responseType = cljs.core.name(response_type_21725));
} else {
}

var seq__21703_21726 = cljs.core.seq(headers);
var chunk__21704_21727 = null;
var count__21705_21728 = (0);
var i__21706_21729 = (0);
while(true){
if((i__21706_21729 < count__21705_21728)){
var vec__21715_21730 = chunk__21704_21727.cljs$core$IIndexed$_nth$arity$2(null,i__21706_21729);
var k_21731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715_21730,(0),null);
var v_21732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21715_21730,(1),null);
this$__$1.setRequestHeader(k_21731,v_21732);


var G__21733 = seq__21703_21726;
var G__21734 = chunk__21704_21727;
var G__21735 = count__21705_21728;
var G__21736 = (i__21706_21729 + (1));
seq__21703_21726 = G__21733;
chunk__21704_21727 = G__21734;
count__21705_21728 = G__21735;
i__21706_21729 = G__21736;
continue;
} else {
var temp__5753__auto___21737 = cljs.core.seq(seq__21703_21726);
if(temp__5753__auto___21737){
var seq__21703_21738__$1 = temp__5753__auto___21737;
if(cljs.core.chunked_seq_QMARK_(seq__21703_21738__$1)){
var c__4679__auto___21739 = cljs.core.chunk_first(seq__21703_21738__$1);
var G__21740 = cljs.core.chunk_rest(seq__21703_21738__$1);
var G__21741 = c__4679__auto___21739;
var G__21742 = cljs.core.count(c__4679__auto___21739);
var G__21743 = (0);
seq__21703_21726 = G__21740;
chunk__21704_21727 = G__21741;
count__21705_21728 = G__21742;
i__21706_21729 = G__21743;
continue;
} else {
var vec__21718_21744 = cljs.core.first(seq__21703_21738__$1);
var k_21745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718_21744,(0),null);
var v_21746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718_21744,(1),null);
this$__$1.setRequestHeader(k_21745,v_21746);


var G__21747 = cljs.core.next(seq__21703_21738__$1);
var G__21748 = null;
var G__21749 = (0);
var G__21750 = (0);
seq__21703_21726 = G__21747;
chunk__21704_21727 = G__21748;
count__21705_21728 = G__21749;
i__21706_21729 = G__21750;
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
