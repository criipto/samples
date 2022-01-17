goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__22149){
var map__22150 = p__22149;
var map__22150__$1 = cljs.core.__destructure_map(map__22150);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__22151 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__22152 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__22152);

try{var vec__22153 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22156,transformer){
var vec__22157 = p__22156;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22157,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22157,(1),null);
var G__22160 = text;
var G__22161 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__22160,G__22161) : transformer.call(null,G__22160,G__22161));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22153,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22153,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__22151);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22207 = arguments.length;
var i__4865__auto___22208 = (0);
while(true){
if((i__4865__auto___22208 < len__4864__auto___22207)){
args__4870__auto__.push((arguments[i__4865__auto___22208]));

var G__22209 = (i__4865__auto___22208 + (1));
i__4865__auto___22208 = G__22209;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq22162){
var G__22163 = cljs.core.first(seq22162);
var seq22162__$1 = cljs.core.next(seq22162);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22163,seq22162__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__22164_22210 = cljs.core.seq(lines);
var chunk__22165_22211 = null;
var count__22166_22212 = (0);
var i__22167_22213 = (0);
while(true){
if((i__22167_22213 < count__22166_22212)){
var line_22214 = chunk__22165_22211.cljs$core$IIndexed$_nth$arity$2(null,i__22167_22213);
markdown.links.parse_reference_link(line_22214,references);


var G__22215 = seq__22164_22210;
var G__22216 = chunk__22165_22211;
var G__22217 = count__22166_22212;
var G__22218 = (i__22167_22213 + (1));
seq__22164_22210 = G__22215;
chunk__22165_22211 = G__22216;
count__22166_22212 = G__22217;
i__22167_22213 = G__22218;
continue;
} else {
var temp__5753__auto___22219 = cljs.core.seq(seq__22164_22210);
if(temp__5753__auto___22219){
var seq__22164_22220__$1 = temp__5753__auto___22219;
if(cljs.core.chunked_seq_QMARK_(seq__22164_22220__$1)){
var c__4679__auto___22221 = cljs.core.chunk_first(seq__22164_22220__$1);
var G__22222 = cljs.core.chunk_rest(seq__22164_22220__$1);
var G__22223 = c__4679__auto___22221;
var G__22224 = cljs.core.count(c__4679__auto___22221);
var G__22225 = (0);
seq__22164_22210 = G__22222;
chunk__22165_22211 = G__22223;
count__22166_22212 = G__22224;
i__22167_22213 = G__22225;
continue;
} else {
var line_22226 = cljs.core.first(seq__22164_22220__$1);
markdown.links.parse_reference_link(line_22226,references);


var G__22227 = cljs.core.next(seq__22164_22220__$1);
var G__22228 = null;
var G__22229 = (0);
var G__22230 = (0);
seq__22164_22210 = G__22227;
chunk__22165_22211 = G__22228;
count__22166_22212 = G__22229;
i__22167_22213 = G__22230;
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
var seq__22168_22231 = cljs.core.seq(lines);
var chunk__22169_22232 = null;
var count__22170_22233 = (0);
var i__22171_22234 = (0);
while(true){
if((i__22171_22234 < count__22170_22233)){
var line_22239 = chunk__22169_22232.cljs$core$IIndexed$_nth$arity$2(null,i__22171_22234);
markdown.links.parse_footnote_link(line_22239,footnotes);


var G__22240 = seq__22168_22231;
var G__22241 = chunk__22169_22232;
var G__22242 = count__22170_22233;
var G__22243 = (i__22171_22234 + (1));
seq__22168_22231 = G__22240;
chunk__22169_22232 = G__22241;
count__22170_22233 = G__22242;
i__22171_22234 = G__22243;
continue;
} else {
var temp__5753__auto___22244 = cljs.core.seq(seq__22168_22231);
if(temp__5753__auto___22244){
var seq__22168_22245__$1 = temp__5753__auto___22244;
if(cljs.core.chunked_seq_QMARK_(seq__22168_22245__$1)){
var c__4679__auto___22246 = cljs.core.chunk_first(seq__22168_22245__$1);
var G__22247 = cljs.core.chunk_rest(seq__22168_22245__$1);
var G__22248 = c__4679__auto___22246;
var G__22249 = cljs.core.count(c__4679__auto___22246);
var G__22250 = (0);
seq__22168_22231 = G__22247;
chunk__22169_22232 = G__22248;
count__22170_22233 = G__22249;
i__22171_22234 = G__22250;
continue;
} else {
var line_22251 = cljs.core.first(seq__22168_22245__$1);
markdown.links.parse_footnote_link(line_22251,footnotes);


var G__22252 = cljs.core.next(seq__22168_22245__$1);
var G__22253 = null;
var G__22254 = (0);
var G__22255 = (0);
seq__22168_22231 = G__22252;
chunk__22169_22232 = G__22253;
count__22170_22233 = G__22254;
i__22171_22234 = G__22255;
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
var vec__22176 = cljs.core.split_with((function (p1__22175_SHARP_){
return cljs.core.not_empty(p1__22175_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22176,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22176,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__22179 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__22180 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__22181 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__22182 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__22181);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__22182);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__22183 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22183,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__22189_22256 = lines__$1;
var vec__22190_22257 = G__22189_22256;
var seq__22191_22258 = cljs.core.seq(vec__22190_22257);
var first__22192_22259 = cljs.core.first(seq__22191_22258);
var seq__22191_22260__$1 = cljs.core.next(seq__22191_22258);
var line_22261 = first__22192_22259;
var more_22262 = seq__22191_22260__$1;
var state_22263 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__22189_22264__$1 = G__22189_22256;
var state_22265__$1 = state_22263;
while(true){
var vec__22196_22266 = G__22189_22264__$1;
var seq__22197_22267 = cljs.core.seq(vec__22196_22266);
var first__22198_22268 = cljs.core.first(seq__22197_22267);
var seq__22197_22269__$1 = cljs.core.next(seq__22197_22267);
var line_22270__$1 = first__22198_22268;
var more_22271__$1 = seq__22197_22269__$1;
var state_22272__$2 = state_22265__$1;
var line_22273__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_22272__$2))?"":line_22270__$1);
var state_22274__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22272__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_22272__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_22272__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_22272__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_22272__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_22271__$1))){
var G__22275 = more_22271__$1;
var G__22276 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_22273__$2,cljs.core.first(more_22271__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_22274__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_22273__$2.trim()));
G__22189_22264__$1 = G__22275;
state_22265__$1 = G__22276;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_22274__$3))),line_22273__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_22274__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__22180);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__22179);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22277 = arguments.length;
var i__4865__auto___22278 = (0);
while(true){
if((i__4865__auto___22278 < len__4864__auto___22277)){
args__4870__auto__.push((arguments[i__4865__auto___22278]));

var G__22279 = (i__4865__auto___22278 + (1));
i__4865__auto___22278 = G__22279;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq22199){
var G__22200 = cljs.core.first(seq22199);
var seq22199__$1 = cljs.core.next(seq22199);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22200,seq22199__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22280 = arguments.length;
var i__4865__auto___22281 = (0);
while(true){
if((i__4865__auto___22281 < len__4864__auto___22280)){
args__4870__auto__.push((arguments[i__4865__auto___22281]));

var G__22282 = (i__4865__auto___22281 + (1));
i__4865__auto___22281 = G__22282;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq22201){
var G__22202 = cljs.core.first(seq22201);
var seq22201__$1 = cljs.core.next(seq22201);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22202,seq22201__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22283 = arguments.length;
var i__4865__auto___22284 = (0);
while(true){
if((i__4865__auto___22284 < len__4864__auto___22283)){
args__4870__auto__.push((arguments[i__4865__auto___22284]));

var G__22285 = (i__4865__auto___22284 + (1));
i__4865__auto___22284 = G__22285;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq22203){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22203));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___22286 = arguments.length;
var i__4865__auto___22287 = (0);
while(true){
if((i__4865__auto___22287 < len__4864__auto___22286)){
args__4870__auto__.push((arguments[i__4865__auto___22287]));

var G__22288 = (i__4865__auto___22287 + (1));
i__4865__auto___22287 = G__22288;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq22204){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22204));
}));


//# sourceMappingURL=markdown.core.js.map
