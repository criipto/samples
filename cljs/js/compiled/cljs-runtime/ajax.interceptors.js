goog.provide('ajax.interceptors');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k21351,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__21355 = k21351;
var G__21355__$1 = (((G__21355 instanceof cljs.core.Keyword))?G__21355.fqn:null);
switch (G__21355__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21351,else__4505__auto__);

}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__21356){
var vec__21357 = p__21356;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21357,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21357,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__21360,opts){
var self__ = this;
var map__21361 = p__21360;
var map__21361__$1 = cljs.core.__destructure_map(map__21361);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21361__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__21362 = this;
var map__21362__$1 = cljs.core.__destructure_map(map__21362);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__21363,xhrio){
var self__ = this;
var map__21364 = p__21363;
var map__21364__$1 = cljs.core.__destructure_map(map__21364);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21364__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__21365 = this;
var map__21365__$1 = cljs.core.__destructure_map(map__21365);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21365__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21350){
var self__ = this;
var G__21350__$1 = this;
return (new cljs.core.RecordIter((0),G__21350__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21352,other21353){
var self__ = this;
var this21352__$1 = this;
return (((!((other21353 == null)))) && ((((this21352__$1.constructor === other21353.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21352__$1.name,other21353.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21352__$1.request,other21353.request)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21352__$1.response,other21353.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21352__$1.__extmap,other21353.__extmap)))))))))));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k21351){
var self__ = this;
var this__4509__auto____$1 = this;
var G__21368 = k21351;
var G__21368__$1 = (((G__21368 instanceof cljs.core.Keyword))?G__21368.fqn:null);
switch (G__21368__$1) {
case "name":
case "request":
case "response":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21351);

}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__21350){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__21369 = cljs.core.keyword_identical_QMARK_;
var expr__21370 = k__4511__auto__;
if(cljs.core.truth_((pred__21369.cljs$core$IFn$_invoke$arity$2 ? pred__21369.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__21370) : pred__21369.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__21370)))){
return (new ajax.interceptors.StandardInterceptor(G__21350,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21369.cljs$core$IFn$_invoke$arity$2 ? pred__21369.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"request","request",1772954723),expr__21370) : pred__21369.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__21370)))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__21350,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21369.cljs$core$IFn$_invoke$arity$2 ? pred__21369.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response","response",-1068424192),expr__21370) : pred__21369.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__21370)))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__21350,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__21350),null));
}
}
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"request","request",1772954723),self__.request,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"response","response",-1068424192),self__.response,null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__21350){
var self__ = this;
var this__4501__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__21350,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$type = true);

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"ajax.interceptors/StandardInterceptor",null,(1),null));
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"ajax.interceptors/StandardInterceptor");
}));

/**
 * Positional factory function for ajax.interceptors/StandardInterceptor.
 */
ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

/**
 * Factory function for ajax.interceptors/StandardInterceptor, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__21354){
var extmap__4542__auto__ = (function (){var G__21372 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21354,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], 0));
if(cljs.core.record_QMARK_(G__21354)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21372);
} else {
return G__21372;
}
})();
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21354),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__21354),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__21354),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m], 0)));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__21373,xhrio){
var map__21374 = p__21373;
var map__21374__$1 = cljs.core.__destructure_map(map__21374);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body(xhrio)], 0));
if(ajax.util.success_QMARK_(status)){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__4870__auto__ = [];
var len__4864__auto___21469 = arguments.length;
var i__4865__auto___21470 = (0);
while(true){
if((i__4865__auto___21470 < len__4864__auto___21469)){
args__4870__auto__.push((arguments[i__4865__auto___21470]));

var G__21471 = (i__4865__auto___21470 + (1));
i__4865__auto___21470 = G__21471;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
}));

(ajax.interceptors.fail.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ajax.interceptors.fail.cljs$lang$applyTo = (function (seq21375){
var G__21376 = cljs.core.first(seq21375);
var seq21375__$1 = cljs.core.next(seq21375);
var G__21377 = cljs.core.first(seq21375__$1);
var seq21375__$2 = cljs.core.next(seq21375__$1);
var G__21378 = cljs.core.first(seq21375__$2);
var seq21375__$3 = cljs.core.next(seq21375__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21376,G__21377,G__21378,seq21375__$3);
}));

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k21381,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__21385 = k21381;
var G__21385__$1 = (((G__21385 instanceof cljs.core.Keyword))?G__21385.fqn:null);
switch (G__21385__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21381,else__4505__auto__);

}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__21386){
var vec__21387 = p__21386;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21387,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21387,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__21390,request){
var self__ = this;
var map__21391 = p__21390;
var map__21391__$1 = cljs.core.__destructure_map(map__21391);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__21392 = this;
var map__21392__$1 = cljs.core.__destructure_map(map__21392);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__21379_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__4253__auto__ = p1__21379_SHARP_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
}));
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__21393,xhrio){
var self__ = this;
var map__21394 = p__21393;
var map__21394__$1 = cljs.core.__destructure_map(map__21394);
var format = map__21394__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__21395 = this;
var map__21395__$1 = cljs.core.__destructure_map(map__21395);
var format__$1 = map__21395__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21395__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__21397 = status;
switch (G__21397) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail("Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
return fail("Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail("Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(ajax.util.success_QMARK_(status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail(ajax.protocols._status_text(xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e21398){if((e21398 instanceof Object)){
var e = e21398;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e21398;

}
}
}
}catch (e21396){if((e21396 instanceof Object)){
var e = e21396;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exception","exception",-335277064),e], 0));
} else {
throw e21396;

}
}}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21380){
var self__ = this;
var G__21380__$1 = this;
return (new cljs.core.RecordIter((0),G__21380__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21382,other21383){
var self__ = this;
var this21382__$1 = this;
return (((!((other21383 == null)))) && ((((this21382__$1.constructor === other21383.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21382__$1.read,other21383.read)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21382__$1.description,other21383.description)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21382__$1.content_type,other21383.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21382__$1.__extmap,other21383.__extmap)))))))))));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k21381){
var self__ = this;
var this__4509__auto____$1 = this;
var G__21399 = k21381;
var G__21399__$1 = (((G__21399 instanceof cljs.core.Keyword))?G__21399.fqn:null);
switch (G__21399__$1) {
case "read":
case "description":
case "content-type":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21381);

}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__21380){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__21400 = cljs.core.keyword_identical_QMARK_;
var expr__21401 = k__4511__auto__;
if(cljs.core.truth_((pred__21400.cljs$core$IFn$_invoke$arity$2 ? pred__21400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read","read",1140058661),expr__21401) : pred__21400.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__21401)))){
return (new ajax.interceptors.ResponseFormat(G__21380,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21400.cljs$core$IFn$_invoke$arity$2 ? pred__21400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"description","description",-1428560544),expr__21401) : pred__21400.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__21401)))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__21380,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21400.cljs$core$IFn$_invoke$arity$2 ? pred__21400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__21401) : pred__21400.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__21401)))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__21380,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__21380),null));
}
}
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read","read",1140058661),self__.read,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type,null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__21380){
var self__ = this;
var this__4501__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__21380,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
}));

(ajax.interceptors.ResponseFormat.cljs$lang$type = true);

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ResponseFormat",null,(1),null));
}));

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"ajax.interceptors/ResponseFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ResponseFormat.
 */
ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

/**
 * Factory function for ajax.interceptors/ResponseFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__21384){
var extmap__4542__auto__ = (function (){var G__21403 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21384,new cljs.core.Keyword(null,"read","read",1140058661),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], 0));
if(cljs.core.record_QMARK_(G__21384)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21403);
} else {
return G__21403;
}
})();
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__21384),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__21384),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__21384),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k21405,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__21409 = k21405;
switch (G__21409) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21405,else__4505__auto__);

}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__21410){
var vec__21411 = p__21410;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21411,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21411,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__21414){
var self__ = this;
var map__21415 = p__21414;
var map__21415__$1 = cljs.core.__destructure_map(map__21415);
var request = map__21415__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__21416 = ajax.interceptors.get_request_format(format);
var map__21416__$1 = cljs.core.__destructure_map(map__21416);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21416__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = (((!((write == null))))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__4253__auto__ = headers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"body","body",-2049205669),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21404){
var self__ = this;
var G__21404__$1 = this;
return (new cljs.core.RecordIter((0),G__21404__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21406,other21407){
var self__ = this;
var this21406__$1 = this;
return (((!((other21407 == null)))) && ((((this21406__$1.constructor === other21407.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21406__$1.__extmap,other21407.__extmap)))));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k21405){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k21405);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__21404){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__21417 = cljs.core.keyword_identical_QMARK_;
var expr__21418 = k__4511__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__21404),null));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__21404){
var self__ = this;
var this__4501__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__21404,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true);

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ApplyRequestFormat",null,(1),null));
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"ajax.interceptors/ApplyRequestFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ApplyRequestFormat.
 */
ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ApplyRequestFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__21408){
var extmap__4542__auto__ = (function (){var G__21420 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__21408);
if(cljs.core.record_QMARK_(G__21408)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21420);
} else {
return G__21420;
}
})();
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(extmap__4542__auto__),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__21422 = arguments.length;
switch (G__21422) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__21423,uri){
var map__21424 = p__21423;
var map__21424__$1 = cljs.core.__destructure_map(map__21424);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));

var temp__5751__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5751__auto__)){
var final_url_params = temp__5751__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),(cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?"),ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,final_url_params)].join('');
} else {
return uri;
}
}));

(ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__21425){
var map__21426 = p__21425;
var map__21426__$1 = cljs.core.__destructure_map(map__21426);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));
return (function (uri){

var temp__5751__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5751__auto__)){
var final_url_params = temp__5751__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),(cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?"),ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,final_url_params)].join('');
} else {
return uri;
}
});
}));

(ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessUrlParameters = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k21428,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__21432 = k21428;
switch (G__21432) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21428,else__4505__auto__);

}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__21433){
var vec__21434 = p__21433;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21434,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21434,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__21437){
var self__ = this;
var map__21438 = p__21437;
var map__21438__$1 = cljs.core.__destructure_map(map__21438);
var request = map__21438__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21438__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
var if_get_reduce = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))?cljs.core.reduced:cljs.core.identity);
var G__21439 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request));
return (if_get_reduce.cljs$core$IFn$_invoke$arity$1 ? if_get_reduce.cljs$core$IFn$_invoke$arity$1(G__21439) : if_get_reduce.call(null,G__21439));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#ajax.interceptors.ProcessUrlParameters{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21427){
var self__ = this;
var G__21427__$1 = this;
return (new cljs.core.RecordIter((0),G__21427__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-516728758 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21429,other21430){
var self__ = this;
var this21429__$1 = this;
return (((!((other21430 == null)))) && ((((this21429__$1.constructor === other21430.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21429__$1.__extmap,other21430.__extmap)))));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k21428){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k21428);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__21427){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__21440 = cljs.core.keyword_identical_QMARK_;
var expr__21441 = k__4511__auto__;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__21427),null));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__21427){
var self__ = this;
var this__4501__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(G__21427,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(ajax.interceptors.ProcessUrlParameters.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$type = true);

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ProcessUrlParameters",null,(1),null));
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"ajax.interceptors/ProcessUrlParameters");
}));

/**
 * Positional factory function for ajax.interceptors/ProcessUrlParameters.
 */
ajax.interceptors.__GT_ProcessUrlParameters = (function ajax$interceptors$__GT_ProcessUrlParameters(){
return (new ajax.interceptors.ProcessUrlParameters(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ProcessUrlParameters, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ProcessUrlParameters = (function ajax$interceptors$map__GT_ProcessUrlParameters(G__21431){
var extmap__4542__auto__ = (function (){var G__21443 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__21431);
if(cljs.core.record_QMARK_(G__21431)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21443);
} else {
return G__21443;
}
})();
return (new ajax.interceptors.ProcessUrlParameters(null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k21445,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__21449 = k21445;
switch (G__21449) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21445,else__4505__auto__);

}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__21450){
var vec__21451 = p__21450;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__21454){
var self__ = this;
var map__21455 = p__21454;
var map__21455__$1 = cljs.core.__destructure_map(map__21455);
var request = map__21455__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21455__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21444){
var self__ = this;
var G__21444__$1 = this;
return (new cljs.core.RecordIter((0),G__21444__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21446,other21447){
var self__ = this;
var this21446__$1 = this;
return (((!((other21447 == null)))) && ((((this21446__$1.constructor === other21447.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21446__$1.__extmap,other21447.__extmap)))));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k21445){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k21445);
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__21444){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__21456 = cljs.core.keyword_identical_QMARK_;
var expr__21457 = k__4511__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__21444),null));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__21444){
var self__ = this;
var this__4501__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__21444,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.DirectSubmission.cljs$lang$type = true);

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"ajax.interceptors/DirectSubmission",null,(1),null));
}));

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"ajax.interceptors/DirectSubmission");
}));

/**
 * Positional factory function for ajax.interceptors/DirectSubmission.
 */
ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

/**
 * Factory function for ajax.interceptors/DirectSubmission, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__21448){
var extmap__4542__auto__ = (function (){var G__21459 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__21448);
if(cljs.core.record_QMARK_(G__21448)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21459);
} else {
return G__21459;
}
})();
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(extmap__4542__auto__),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessUrlParameters(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__21460){
var map__21461 = p__21460;
var map__21461__$1 = cljs.core.__destructure_map(map__21461);
var opts = map__21461__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21461__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(ajax.interceptors.is_response_format_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=ajax.interceptors.js.map
