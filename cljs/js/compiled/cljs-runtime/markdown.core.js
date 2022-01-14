goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__22404){
var map__22405 = p__22404;
var map__22405__$1 = cljs.core.__destructure_map(map__22405);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22405__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22405__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22405__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
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
var line_22486 = cljs.core.first(seq__22423_22477__$1);
markdown.links.parse_reference_link(line_22486,references);


var G__22487 = cljs.core.next(seq__22423_22477__$1);
var G__22488 = null;
var G__22489 = (0);
var G__22490 = (0);
seq__22423_22467 = G__22487;
chunk__22424_22468 = G__22488;
count__22425_22469 = G__22489;
i__22426_22470 = G__22490;
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
var seq__22430_22491 = cljs.core.seq(lines);
var chunk__22431_22492 = null;
var count__22432_22493 = (0);
var i__22433_22494 = (0);
while(true){
if((i__22433_22494 < count__22432_22493)){
var line_22495 = chunk__22431_22492.cljs$core$IIndexed$_nth$arity$2(null,i__22433_22494);
markdown.links.parse_footnote_link(line_22495,footnotes);


var G__22496 = seq__22430_22491;
var G__22497 = chunk__22431_22492;
var G__22498 = count__22432_22493;
var G__22499 = (i__22433_22494 + (1));
seq__22430_22491 = G__22496;
chunk__22431_22492 = G__22497;
count__22432_22493 = G__22498;
i__22433_22494 = G__22499;
continue;
} else {
var temp__5753__auto___22500 = cljs.core.seq(seq__22430_22491);
if(temp__5753__auto___22500){
var seq__22430_22501__$1 = temp__5753__auto___22500;
if(cljs.core.chunked_seq_QMARK_(seq__22430_22501__$1)){
var c__4679__auto___22502 = cljs.core.chunk_first(seq__22430_22501__$1);
var G__22503 = cljs.core.chunk_rest(seq__22430_22501__$1);
var G__22504 = c__4679__auto___22502;
var G__22505 = cljs.core.count(c__4679__auto___22502);
var G__22506 = (0);
seq__22430_22491 = G__22503;
chunk__22431_22492 = G__22504;
count__22432_22493 = G__22505;
i__22433_22494 = G__22506;
continue;
} else {
var line_22507 = cljs.core.first(seq__22430_22501__$1);
markdown.links.parse_footnote_link(line_22507,footnotes);


var G__22508 = cljs.core.next(seq__22430_22501__$1);
var G__22509 = null;
var G__22510 = (0);
var G__22511 = (0);
seq__22430_22491 = G__22508;
chunk__22431_22492 = G__22509;
count__22432_22493 = G__22510;
i__22433_22494 = G__22511;
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
var G__22448_22515 = lines__$1;
var vec__22449_22516 = G__22448_22515;
var seq__22450_22517 = cljs.core.seq(vec__22449_22516);
var first__22451_22518 = cljs.core.first(seq__22450_22517);
var seq__22450_22519__$1 = cljs.core.next(seq__22450_22517);
var line_22520 = first__22451_22518;
var more_22521 = seq__22450_22519__$1;
var state_22522 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__22448_22523__$1 = G__22448_22515;
var state_22524__$1 = state_22522;
while(true){
var vec__22455_22525 = G__22448_22523__$1;
var seq__22456_22526 = cljs.core.seq(vec__22455_22525);
var first__22457_22527 = cljs.core.first(seq__22456_22526);
var seq__22456_22528__$1 = cljs.core.next(seq__22456_22526);
var line_22529__$1 = first__22457_22527;
var more_22530__$1 = seq__22456_22528__$1;
var state_22531__$2 = state_22524__$1;
var line_22532__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_22531__$2))?"":line_22529__$1);
var state_22533__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22531__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22531__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_22531__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_22531__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_22531__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_22530__$1))){
var G__22537 = more_22530__$1;
var G__22538 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_22532__$2,cljs.core.first(more_22530__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_22533__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_22532__$2.trim()));
G__22448_22523__$1 = G__22537;
state_22524__$1 = G__22538;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_22533__$3))),line_22532__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_22533__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__22439);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__22438);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
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
var len__4864__auto___22542 = arguments.length;
var i__4865__auto___22543 = (0);
while(true){
if((i__4865__auto___22543 < len__4864__auto___22542)){
args__4870__auto__.push((arguments[i__4865__auto___22543]));

var G__22544 = (i__4865__auto___22543 + (1));
i__4865__auto___22543 = G__22544;
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
var len__4864__auto___22545 = arguments.length;
var i__4865__auto___22546 = (0);
while(true){
if((i__4865__auto___22546 < len__4864__auto___22545)){
args__4870__auto__.push((arguments[i__4865__auto___22546]));

var G__22547 = (i__4865__auto___22546 + (1));
i__4865__auto___22546 = G__22547;
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
var len__4864__auto___22548 = arguments.length;
var i__4865__auto___22549 = (0);
while(true){
if((i__4865__auto___22549 < len__4864__auto___22548)){
args__4870__auto__.push((arguments[i__4865__auto___22549]));

var G__22550 = (i__4865__auto___22549 + (1));
i__4865__auto___22549 = G__22550;
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
