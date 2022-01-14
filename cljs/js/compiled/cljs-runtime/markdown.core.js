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
var len__4864__auto___22469 = arguments.length;
var i__4865__auto___22470 = (0);
while(true){
if((i__4865__auto___22470 < len__4864__auto___22469)){
args__4870__auto__.push((arguments[i__4865__auto___22470]));

var G__22471 = (i__4865__auto___22470 + (1));
i__4865__auto___22470 = G__22471;
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
var seq__22426_22472 = cljs.core.seq(lines);
var chunk__22427_22473 = null;
var count__22428_22474 = (0);
var i__22429_22475 = (0);
while(true){
if((i__22429_22475 < count__22428_22474)){
var line_22476 = chunk__22427_22473.cljs$core$IIndexed$_nth$arity$2(null,i__22429_22475);
markdown.links.parse_reference_link(line_22476,references);


var G__22477 = seq__22426_22472;
var G__22478 = chunk__22427_22473;
var G__22479 = count__22428_22474;
var G__22480 = (i__22429_22475 + (1));
seq__22426_22472 = G__22477;
chunk__22427_22473 = G__22478;
count__22428_22474 = G__22479;
i__22429_22475 = G__22480;
continue;
} else {
var temp__5753__auto___22481 = cljs.core.seq(seq__22426_22472);
if(temp__5753__auto___22481){
var seq__22426_22482__$1 = temp__5753__auto___22481;
if(cljs.core.chunked_seq_QMARK_(seq__22426_22482__$1)){
var c__4679__auto___22483 = cljs.core.chunk_first(seq__22426_22482__$1);
var G__22484 = cljs.core.chunk_rest(seq__22426_22482__$1);
var G__22485 = c__4679__auto___22483;
var G__22486 = cljs.core.count(c__4679__auto___22483);
var G__22487 = (0);
seq__22426_22472 = G__22484;
chunk__22427_22473 = G__22485;
count__22428_22474 = G__22486;
i__22429_22475 = G__22487;
continue;
} else {
var line_22488 = cljs.core.first(seq__22426_22482__$1);
markdown.links.parse_reference_link(line_22488,references);


var G__22489 = cljs.core.next(seq__22426_22482__$1);
var G__22490 = null;
var G__22491 = (0);
var G__22492 = (0);
seq__22426_22472 = G__22489;
chunk__22427_22473 = G__22490;
count__22428_22474 = G__22491;
i__22429_22475 = G__22492;
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
var seq__22430_22493 = cljs.core.seq(lines);
var chunk__22431_22494 = null;
var count__22432_22495 = (0);
var i__22433_22496 = (0);
while(true){
if((i__22433_22496 < count__22432_22495)){
var line_22497 = chunk__22431_22494.cljs$core$IIndexed$_nth$arity$2(null,i__22433_22496);
markdown.links.parse_footnote_link(line_22497,footnotes);


var G__22498 = seq__22430_22493;
var G__22499 = chunk__22431_22494;
var G__22500 = count__22432_22495;
var G__22501 = (i__22433_22496 + (1));
seq__22430_22493 = G__22498;
chunk__22431_22494 = G__22499;
count__22432_22495 = G__22500;
i__22433_22496 = G__22501;
continue;
} else {
var temp__5753__auto___22502 = cljs.core.seq(seq__22430_22493);
if(temp__5753__auto___22502){
var seq__22430_22503__$1 = temp__5753__auto___22502;
if(cljs.core.chunked_seq_QMARK_(seq__22430_22503__$1)){
var c__4679__auto___22504 = cljs.core.chunk_first(seq__22430_22503__$1);
var G__22505 = cljs.core.chunk_rest(seq__22430_22503__$1);
var G__22506 = c__4679__auto___22504;
var G__22507 = cljs.core.count(c__4679__auto___22504);
var G__22508 = (0);
seq__22430_22493 = G__22505;
chunk__22431_22494 = G__22506;
count__22432_22495 = G__22507;
i__22433_22496 = G__22508;
continue;
} else {
var line_22509 = cljs.core.first(seq__22430_22503__$1);
markdown.links.parse_footnote_link(line_22509,footnotes);


var G__22510 = cljs.core.next(seq__22430_22503__$1);
var G__22511 = null;
var G__22512 = (0);
var G__22513 = (0);
seq__22430_22493 = G__22510;
chunk__22431_22494 = G__22511;
count__22432_22495 = G__22512;
i__22433_22496 = G__22513;
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
var vec__22435 = cljs.core.split_with((function (p1__22434_SHARP_){
return cljs.core.not_empty(p1__22434_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22435,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22435,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__22438 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__22439 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__22440 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__22441 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__22440);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__22441);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__22442 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22442,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22442,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__22448_22514 = lines__$1;
var vec__22449_22515 = G__22448_22514;
var seq__22450_22516 = cljs.core.seq(vec__22449_22515);
var first__22451_22517 = cljs.core.first(seq__22450_22516);
var seq__22450_22518__$1 = cljs.core.next(seq__22450_22516);
var line_22519 = first__22451_22517;
var more_22520 = seq__22450_22518__$1;
var state_22521 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__22448_22522__$1 = G__22448_22514;
var state_22523__$1 = state_22521;
while(true){
var vec__22455_22524 = G__22448_22522__$1;
var seq__22456_22525 = cljs.core.seq(vec__22455_22524);
var first__22457_22526 = cljs.core.first(seq__22456_22525);
var seq__22456_22527__$1 = cljs.core.next(seq__22456_22525);
var line_22528__$1 = first__22457_22526;
var more_22529__$1 = seq__22456_22527__$1;
var state_22530__$2 = state_22523__$1;
var line_22531__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_22530__$2))?"":line_22528__$1);
var state_22532__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22530__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22530__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_22530__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_22530__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_22530__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_22529__$1))){
var G__22533 = more_22529__$1;
var G__22534 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_22531__$2,cljs.core.first(more_22529__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_22532__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_22531__$2.trim()));
G__22448_22522__$1 = G__22533;
state_22523__$1 = G__22534;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_22532__$3))),line_22531__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_22532__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__22439);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__22438);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22535 = arguments.length;
var i__4865__auto___22536 = (0);
while(true){
if((i__4865__auto___22536 < len__4864__auto___22535)){
args__4870__auto__.push((arguments[i__4865__auto___22536]));

var G__22537 = (i__4865__auto___22536 + (1));
i__4865__auto___22536 = G__22537;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq22458){
var G__22459 = cljs.core.first(seq22458);
var seq22458__$1 = cljs.core.next(seq22458);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22459,seq22458__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22538 = arguments.length;
var i__4865__auto___22539 = (0);
while(true){
if((i__4865__auto___22539 < len__4864__auto___22538)){
args__4870__auto__.push((arguments[i__4865__auto___22539]));

var G__22540 = (i__4865__auto___22539 + (1));
i__4865__auto___22539 = G__22540;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq22460){
var G__22461 = cljs.core.first(seq22460);
var seq22460__$1 = cljs.core.next(seq22460);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22461,seq22460__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22541 = arguments.length;
var i__4865__auto___22542 = (0);
while(true){
if((i__4865__auto___22542 < len__4864__auto___22541)){
args__4870__auto__.push((arguments[i__4865__auto___22542]));

var G__22543 = (i__4865__auto___22542 + (1));
i__4865__auto___22542 = G__22543;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq22462){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22462));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22544 = arguments.length;
var i__4865__auto___22545 = (0);
while(true){
if((i__4865__auto___22545 < len__4864__auto___22544)){
args__4870__auto__.push((arguments[i__4865__auto___22545]));

var G__22546 = (i__4865__auto___22545 + (1));
i__4865__auto___22545 = G__22546;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq22463){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22463));
}));


//# sourceMappingURL=markdown.core.js.map
