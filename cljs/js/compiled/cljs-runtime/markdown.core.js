goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__22408){
var map__22409 = p__22408;
var map__22409__$1 = cljs.core.__destructure_map(map__22409);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__22410 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__22411 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__22411);

try{var vec__22412 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22415,transformer){
var vec__22416 = p__22415;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22416,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22416,(1),null);
var G__22419 = text;
var G__22420 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__22419,G__22420) : transformer.call(null,G__22419,G__22420));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22412,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22412,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__22410);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22464 = arguments.length;
var i__4865__auto___22465 = (0);
while(true){
if((i__4865__auto___22465 < len__4864__auto___22464)){
args__4870__auto__.push((arguments[i__4865__auto___22465]));

var G__22466 = (i__4865__auto___22465 + (1));
i__4865__auto___22465 = G__22466;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq22421){
var G__22422 = cljs.core.first(seq22421);
var seq22421__$1 = cljs.core.next(seq22421);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22422,seq22421__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__22423_22467 = cljs.core.seq(lines);
var chunk__22424_22468 = null;
var count__22425_22469 = (0);
var i__22426_22470 = (0);
while(true){
if((i__22426_22470 < count__22425_22469)){
var line_22471 = chunk__22424_22468.cljs$core$IIndexed$_nth$arity$2(null,i__22426_22470);
markdown.links.parse_reference_link(line_22471,references);


var G__22472 = seq__22423_22467;
var G__22473 = chunk__22424_22468;
var G__22474 = count__22425_22469;
var G__22475 = (i__22426_22470 + (1));
seq__22423_22467 = G__22472;
chunk__22424_22468 = G__22473;
count__22425_22469 = G__22474;
i__22426_22470 = G__22475;
continue;
} else {
var temp__5753__auto___22476 = cljs.core.seq(seq__22423_22467);
if(temp__5753__auto___22476){
var seq__22423_22477__$1 = temp__5753__auto___22476;
if(cljs.core.chunked_seq_QMARK_(seq__22423_22477__$1)){
var c__4679__auto___22478 = cljs.core.chunk_first(seq__22423_22477__$1);
var G__22479 = cljs.core.chunk_rest(seq__22423_22477__$1);
var G__22480 = c__4679__auto___22478;
var G__22481 = cljs.core.count(c__4679__auto___22478);
var G__22482 = (0);
seq__22423_22467 = G__22479;
chunk__22424_22468 = G__22480;
count__22425_22469 = G__22481;
i__22426_22470 = G__22482;
continue;
} else {
var line_22483 = cljs.core.first(seq__22423_22477__$1);
markdown.links.parse_reference_link(line_22483,references);


var G__22484 = cljs.core.next(seq__22423_22477__$1);
var G__22485 = null;
var G__22486 = (0);
var G__22487 = (0);
seq__22423_22467 = G__22484;
chunk__22424_22468 = G__22485;
count__22425_22469 = G__22486;
i__22426_22470 = G__22487;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__22427_22488 = cljs.core.seq(lines);
var chunk__22428_22489 = null;
var count__22429_22490 = (0);
var i__22430_22491 = (0);
while(true){
if((i__22430_22491 < count__22429_22490)){
var line_22492 = chunk__22428_22489.cljs$core$IIndexed$_nth$arity$2(null,i__22430_22491);
markdown.links.parse_footnote_link(line_22492,footnotes);


var G__22493 = seq__22427_22488;
var G__22494 = chunk__22428_22489;
var G__22495 = count__22429_22490;
var G__22496 = (i__22430_22491 + (1));
seq__22427_22488 = G__22493;
chunk__22428_22489 = G__22494;
count__22429_22490 = G__22495;
i__22430_22491 = G__22496;
continue;
} else {
var temp__5753__auto___22497 = cljs.core.seq(seq__22427_22488);
if(temp__5753__auto___22497){
var seq__22427_22498__$1 = temp__5753__auto___22497;
if(cljs.core.chunked_seq_QMARK_(seq__22427_22498__$1)){
var c__4679__auto___22499 = cljs.core.chunk_first(seq__22427_22498__$1);
var G__22500 = cljs.core.chunk_rest(seq__22427_22498__$1);
var G__22501 = c__4679__auto___22499;
var G__22502 = cljs.core.count(c__4679__auto___22499);
var G__22503 = (0);
seq__22427_22488 = G__22500;
chunk__22428_22489 = G__22501;
count__22429_22490 = G__22502;
i__22430_22491 = G__22503;
continue;
} else {
var line_22504 = cljs.core.first(seq__22427_22498__$1);
markdown.links.parse_footnote_link(line_22504,footnotes);


var G__22505 = cljs.core.next(seq__22427_22498__$1);
var G__22506 = null;
var G__22507 = (0);
var G__22508 = (0);
seq__22427_22488 = G__22505;
chunk__22428_22489 = G__22506;
count__22429_22490 = G__22507;
i__22430_22491 = G__22508;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__22432 = cljs.core.split_with((function (p1__22431_SHARP_){
return cljs.core.not_empty(p1__22431_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22432,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22432,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__22435 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__22436 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__22437 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__22438 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__22437);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__22438);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__22439 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22439,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22439,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__22445_22509 = lines__$1;
var vec__22446_22510 = G__22445_22509;
var seq__22447_22511 = cljs.core.seq(vec__22446_22510);
var first__22448_22512 = cljs.core.first(seq__22447_22511);
var seq__22447_22513__$1 = cljs.core.next(seq__22447_22511);
var line_22514 = first__22448_22512;
var more_22515 = seq__22447_22513__$1;
var state_22516 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__22445_22517__$1 = G__22445_22509;
var state_22518__$1 = state_22516;
while(true){
var vec__22452_22519 = G__22445_22517__$1;
var seq__22453_22520 = cljs.core.seq(vec__22452_22519);
var first__22454_22521 = cljs.core.first(seq__22453_22520);
var seq__22453_22522__$1 = cljs.core.next(seq__22453_22520);
var line_22523__$1 = first__22454_22521;
var more_22524__$1 = seq__22453_22522__$1;
var state_22525__$2 = state_22518__$1;
var line_22526__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_22525__$2))?"":line_22523__$1);
var state_22527__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22525__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22525__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_22525__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_22525__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_22525__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_22524__$1))){
var G__22528 = more_22524__$1;
var G__22529 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_22526__$2,cljs.core.first(more_22524__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_22527__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_22526__$2.trim()));
G__22445_22517__$1 = G__22528;
state_22518__$1 = G__22529;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_22527__$3))),line_22526__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_22527__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__22436);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__22435);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22530 = arguments.length;
var i__4865__auto___22531 = (0);
while(true){
if((i__4865__auto___22531 < len__4864__auto___22530)){
args__4870__auto__.push((arguments[i__4865__auto___22531]));

var G__22532 = (i__4865__auto___22531 + (1));
i__4865__auto___22531 = G__22532;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq22455){
var G__22456 = cljs.core.first(seq22455);
var seq22455__$1 = cljs.core.next(seq22455);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22456,seq22455__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22533 = arguments.length;
var i__4865__auto___22534 = (0);
while(true){
if((i__4865__auto___22534 < len__4864__auto___22533)){
args__4870__auto__.push((arguments[i__4865__auto___22534]));

var G__22535 = (i__4865__auto___22534 + (1));
i__4865__auto___22534 = G__22535;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq22457){
var G__22458 = cljs.core.first(seq22457);
var seq22457__$1 = cljs.core.next(seq22457);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22458,seq22457__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22536 = arguments.length;
var i__4865__auto___22537 = (0);
while(true){
if((i__4865__auto___22537 < len__4864__auto___22536)){
args__4870__auto__.push((arguments[i__4865__auto___22537]));

var G__22538 = (i__4865__auto___22537 + (1));
i__4865__auto___22537 = G__22538;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq22459){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22459));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22539 = arguments.length;
var i__4865__auto___22540 = (0);
while(true){
if((i__4865__auto___22540 < len__4864__auto___22539)){
args__4870__auto__.push((arguments[i__4865__auto___22540]));

var G__22541 = (i__4865__auto___22540 + (1));
i__4865__auto___22540 = G__22541;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq22460){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22460));
}));


//# sourceMappingURL=markdown.core.js.map
