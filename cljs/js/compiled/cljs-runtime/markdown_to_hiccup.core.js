goog.provide('markdown_to_hiccup.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","encode?","markdown-to-hiccup.core/encode?",-1516433262)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","encode?","markdown-to-hiccup.core/encode?",-1516433262)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22542){
return cljs.core.map_QMARK_(G__22542);
})], null),(function (G__22542){
return cljs.core.map_QMARK_(G__22542);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encode?","encode?",-640109139)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","encode?","markdown-to-hiccup.core/encode?",-1516433262)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("markdown-to-hiccup.core","md->hiccup","markdown-to-hiccup.core/md->hiccup",1623858518,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),null,null),new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),null,null,null));
/**
 * Accepts a markdown string and returns a hiccup data structure converted from that markdown.
 *   Also accepts an optional params map. Use the :encode? boolean key to specify whether
 *   or not you want html escape characters to be encoded. Example:
 *  (md->hiccup "#Title" {:encode? true})
 */
markdown_to_hiccup.core.md__GT_hiccup = (function markdown_to_hiccup$core$md__GT_hiccup(var_args){
var G__22544 = arguments.length;
switch (G__22544) {
case 2:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (md_str,params){
var valid_md = (cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)?(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))?cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),md_str):md_str):md_str);
var encode_QMARK_ = new cljs.core.Keyword(null,"encode?","encode?",-640109139).cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)?(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))?cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020),params):params):params));
var html = markdown.core.md__GT_html(valid_md);
var dom = hickory.core.parse(html);
var hiccup = cljs.core.first(hickory.core.as_hiccup(dom));
if(cljs.core.truth_(encode_QMARK_)){
return hiccup;
} else {
return markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$1(hiccup);
}
}));

(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (md_str){
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2(md_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encode?","encode?",-640109139),false], null));
}));

(markdown_to_hiccup.core.md__GT_hiccup.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated. Please use hiccup-in for better access to nested hiccup.
 *   Accepts a hiccup data structure and a keyword representing
 *   an html element tag (e.g. :body) and returns the first nested
 *   hiccup vector identified by the keyword.
 */
markdown_to_hiccup.core.hicc_in = (function markdown_to_hiccup$core$hicc_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22557 = arguments.length;
var i__4865__auto___22558 = (0);
while(true){
if((i__4865__auto___22558 < len__4864__auto___22557)){
args__4870__auto__.push((arguments[i__4865__auto___22558]));

var G__22559 = (i__4865__auto___22558 + (1));
i__4865__auto___22558 = G__22559;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kws){
while(true){
var kw = cljs.core.first(kws);
var root = cljs.core.first(hiccup);
if((kw == null)){
return hiccup;
} else {
if(cljs.core.empty_QMARK_(hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.map_QMARK_(root)){
var G__22560 = cljs.core.rest(hiccup);
var G__22561 = kws;
hiccup = G__22560;
kws = G__22561;
continue;
} else {
if(cljs.core.vector_QMARK_(root)){
var branch_result = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(markdown_to_hiccup.core.hicc_in,root,kws);
if(cljs.core.empty_QMARK_(branch_result)){
var G__22562 = cljs.core.rest(hiccup);
var G__22563 = kws;
hiccup = G__22562;
kws = G__22563;
continue;
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root,kw)){
var G__22564 = hiccup;
var G__22565 = cljs.core.rest(kws);
hiccup = G__22564;
kws = G__22565;
continue;
} else {
var G__22566 = cljs.core.rest(hiccup);
var G__22567 = kws;
hiccup = G__22566;
kws = G__22567;
continue;

}
}
}
}
}
break;
}
}));

(markdown_to_hiccup.core.hicc_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown_to_hiccup.core.hicc_in.cljs$lang$applyTo = (function (seq22545){
var G__22546 = cljs.core.first(seq22545);
var seq22545__$1 = cljs.core.next(seq22545);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22546,seq22545__$1);
}));

markdown_to_hiccup.core.keywords_QMARK_ = (function markdown_to_hiccup$core$keywords_QMARK_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22568 = arguments.length;
var i__4865__auto___22569 = (0);
while(true){
if((i__4865__auto___22569 < len__4864__auto___22568)){
args__4870__auto__.push((arguments[i__4865__auto___22569]));

var G__22570 = (i__4865__auto___22569 + (1));
i__4865__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,args);
}));

(markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$applyTo = (function (seq22547){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22547));
}));

/**
 * Accepts a list of [keyword count] pairs, and subtracts the count
 * of the first pair. If that count becomes negative, dec-front returns
 * the rest of the list. Otherwise, it returns the list with the new
 * count value for the first pair.
 */
markdown_to_hiccup.core.dec_front = (function markdown_to_hiccup$core$dec_front(kw_pairs){
var vec__22548 = cljs.core.first(kw_pairs);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22548,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22548,(1),null);
var new_count = (count - (1));
var new_pair = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new_count], null);
if((new_count < (0))){
return cljs.core.rest(kw_pairs);
} else {
return cljs.core.cons(new_pair,cljs.core.rest(kw_pairs));
}
});
/**
 * Accepts a list of keywords and numbers. Any place in which
 *   a number does not separate keywords, a zero will be inserted.
 *   Returns the arg list as a sequence of keyword -> number pairs
 *   nested as lists.
 */
markdown_to_hiccup.core.num_partition = (function markdown_to_hiccup$core$num_partition(args){
var arglist = args;
var ret_vec = cljs.core.PersistentVector.EMPTY;
while(true){
var curr_arg = cljs.core.first(arglist);
var prev_arg = cljs.core.peek(ret_vec);
if((curr_arg == null)){
if((prev_arg instanceof cljs.core.Keyword)){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret_vec,(0)));
} else {
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ret_vec);
}
} else {
if(markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([curr_arg,prev_arg], 0))){
var G__22571 = cljs.core.rest(arglist);
var G__22572 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret_vec,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([curr_arg], 0));
arglist = G__22571;
ret_vec = G__22572;
continue;
} else {
var G__22573 = cljs.core.rest(arglist);
var G__22574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret_vec,curr_arg);
arglist = G__22573;
ret_vec = G__22574;
continue;

}
}
break;
}
});
markdown_to_hiccup.core.same_length_QMARK_ = (function markdown_to_hiccup$core$same_length_QMARK_(coll_a,coll_b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll_a),cljs.core.count(coll_b));
});
/**
 * Recursive helper function for hiccup-in.
 */
markdown_to_hiccup.core.get_nested_hiccup = (function markdown_to_hiccup$core$get_nested_hiccup(hiccup,kw_pairs){
while(true){
var vec__22551 = cljs.core.first(kw_pairs);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(0),null);
var nth_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22551,(1),null);
var front = cljs.core.first(hiccup);
var remaining = cljs.core.rest(hiccup);
if(cljs.core.empty_QMARK_(hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if((kw == null)){
return hiccup;
} else {
if(cljs.core.map_QMARK_(front)){
var G__22575 = remaining;
var G__22576 = kw_pairs;
hiccup = G__22575;
kw_pairs = G__22576;
continue;
} else {
if(cljs.core.vector_QMARK_(front)){
var branch_result = (markdown_to_hiccup.core.get_nested_hiccup.cljs$core$IFn$_invoke$arity$2 ? markdown_to_hiccup.core.get_nested_hiccup.cljs$core$IFn$_invoke$arity$2(front,kw_pairs) : markdown_to_hiccup.core.get_nested_hiccup.call(null,front,kw_pairs));
if(cljs.core.empty_QMARK_(branch_result)){
var nested_front = cljs.core.first(front);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nested_front,kw)){
var G__22577 = remaining;
var G__22578 = markdown_to_hiccup.core.dec_front(kw_pairs);
hiccup = G__22577;
kw_pairs = G__22578;
continue;
} else {
var G__22579 = remaining;
var G__22580 = kw_pairs;
hiccup = G__22579;
kw_pairs = G__22580;
continue;
}
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(front,kw)){
var new_pairs = markdown_to_hiccup.core.dec_front(kw_pairs);
if(cljs.core.empty_QMARK_(new_pairs)){
return hiccup;
} else {
var G__22581 = remaining;
var G__22582 = new_pairs;
hiccup = G__22581;
kw_pairs = G__22582;
continue;

}
} else {
var G__22583 = remaining;
var G__22584 = kw_pairs;
hiccup = G__22583;
kw_pairs = G__22584;
continue;

}
}
}
}
}
break;
}
});
/**
 * Accepts a hiccup data structure and any series of args in keyword, index order.
 * Each keyword represents a hiccup element, and the paired index is which element at that level hiccup-in will look in.
 * If no number proceeds a keyword, hiccup-in will find the first element with that keyword.
 * Returns the nested hiccup vector identified by the keywords.
 * Example: (hiccup-in hiccup :html :body :div 0 :h1 2 :p)
 */
markdown_to_hiccup.core.hiccup_in = (function markdown_to_hiccup$core$hiccup_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22585 = arguments.length;
var i__4865__auto___22586 = (0);
while(true){
if((i__4865__auto___22586 < len__4864__auto___22585)){
args__4870__auto__.push((arguments[i__4865__auto___22586]));

var G__22587 = (i__4865__auto___22586 + (1));
i__4865__auto___22586 = G__22587;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kw_pairs){
var pathway = markdown_to_hiccup.core.num_partition(kw_pairs);
return markdown_to_hiccup.core.get_nested_hiccup(hiccup,pathway);
}));

(markdown_to_hiccup.core.hiccup_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown_to_hiccup.core.hiccup_in.cljs$lang$applyTo = (function (seq22554){
var G__22555 = cljs.core.first(seq22554);
var seq22554__$1 = cljs.core.next(seq22554);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22555,seq22554__$1);
}));

/**
 * Accepts hiccup and returns the same hiccup only
 * without the :html, :head, and :body elements. Useful
 * if you want to nest your markdown hiccup in existing
 * hiccup data structures.
 */
markdown_to_hiccup.core.component = (function markdown_to_hiccup$core$component(hiccup){
var body = markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic(hiccup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669)], 0));
return cljs.core.vec(cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest(body)));
});

//# sourceMappingURL=markdown_to_hiccup.core.js.map