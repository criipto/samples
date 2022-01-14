goog.provide('day8.re_frame_10x.view.event');
day8.re_frame_10x.view.event.code_border = ["1px solid ",day8.re_frame_10x.common_styles.white_background_border_color].join('');
day8.re_frame_10x.view.event.event_styles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-panel",".event-panel",1576114265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"19px 19px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bold",".bold",-1441945014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section",".event-section",174912480)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section--header",".event-section--header",1732674574),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.navbar_tint_lighter,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.common_styles.navbar_text_color,new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.common_styles.gs_19,new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.common_styles.gs_12], null)], null),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section--data",".event-section--data",477435343),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px_(day8.re_frame_10x.common_styles.gs_12,day8.re_frame_10x.common_styles.expansion_button_horizontal_padding),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden"], null)], null)], null);
day8.re_frame_10x.view.event.no_event_instructions = (function day8$re_frame_10x$view$event$no_event_instructions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),"Code trace is not available for this event"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Instructions for enabling Event Code Tracing",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/EventCodeTracing.md"], null)], null)], null);
});
day8.re_frame_10x.view.event.code_header = (function day8$re_frame_10x$view$event$code_header(code_execution_id,line){
var open_QMARK__path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null))),code_execution_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line)], null);
var max_column_width = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919)], null)));
var trace_id = code_execution_id;
var open_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779)], null))),open_QMARK__path);
var line_str = day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic(max_column_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(line)], 0));
var _EQ__GT_str = "=> ";
var result_length = ((max_column_width - ((_EQ__GT_str).length)) - ((line_str).length));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment__content",new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 6px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"17px",new cljs.core.Keyword(null,"height","height",1025178622),"17px",new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"#b0b2b4"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","set-code-visibility","code/set-code-visibility",-1072995010),open_QMARK__path,cljs.core.not(open_QMARK_)], null));

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow","span.arrow",1996640986),(cljs.core.truth_(open_QMARK_)?"\u25BC":"\u25B6")], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),line_str], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment__result",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),_EQ__GT_str,(((result_length > (0)))?day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic(result_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line)], 0)):null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment__button",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Copy to the clipboard, an expression that will return this form's value in the cljs repl",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
day8.re_frame_10x.utils.utils.copy_to_clipboard(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x","traced-result","day8.re-frame-10x/traced-result",1860750250,null),(new cljs.core.List(null,trace_id,(new cljs.core.List(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line),null,(1),null)),(2),null)),(3),null))], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.Keyword(null,"start","start",-355208981)], null));

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),"repl"], null)], null)], null);
});
day8.re_frame_10x.view.event.code_block = (function day8$re_frame_10x$view$event$code_block(code_execution_id,line){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-1px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 3px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null))),code_execution_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line)], null)], null)], null);
});
/**
 * Like re-seq but returns matches and indices
 */
day8.re_frame_10x.view.event.re_seq_idx = (function day8$re_frame_10x$view$event$re_seq_idx(var_args){
var G__19976 = arguments.length;
switch (G__19976) {
case 2:
return day8.re_frame_10x.view.event.re_seq_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.view.event.re_seq_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.view.event.re_seq_idx.cljs$core$IFn$_invoke$arity$2 = (function (re,s){
return day8.re_frame_10x.view.event.re_seq_idx.cljs$core$IFn$_invoke$arity$3(re,s,(0));
}));

(day8.re_frame_10x.view.event.re_seq_idx.cljs$core$IFn$_invoke$arity$3 = (function (re,s,offset){
var temp__5757__auto__ = re.exec(s);
if((temp__5757__auto__ == null)){
return null;
} else {
var matches = temp__5757__auto__;
var match_str = (matches[(0)]);
var match_vals = (((matches.length === (1)))?match_str:cljs.core.vec(matches));
var match_index = matches.index;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [match_vals,(offset + match_index)], null),(new cljs.core.LazySeq(null,(function (){
var post_idx = (matches.index + (function (){var x__4336__auto__ = (1);
var y__4337__auto__ = match_str.length;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());
if((post_idx <= s.length)){
return day8.re_frame_10x.view.event.re_seq_idx.cljs$core$IFn$_invoke$arity$3(re,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,post_idx),(offset + post_idx));
} else {
return null;
}
}),null,null)));
}
}));

(day8.re_frame_10x.view.event.re_seq_idx.cljs$lang$maxFixedArity = 3);

/**
 * given a string argument `s` it will return a vector of two values:
 *   - a modified version of `s`, call it s'
 *   - a vector of indexes, v
 * s' will be a copy of s in which all consecutive whitespace is collapsed to one whitespace
 * v  will be a vector of index for characters in s' back to the original s
 * For example:
 *    (collapse-whitespace-and-index "a b  c")
 * will return
 *     ["a b c" [0 1 2 3 5]]     ;; notice that the 4 is not there
 * 
 */
day8.re_frame_10x.view.event.collapse_whitespace_and_index = (function day8$re_frame_10x$view$event$collapse_whitespace_and_index(s){
var s_SINGLEQUOTE_ = clojure.string.replace(s,/\s+/," ");
var v = (function (){var v = cljs.core.PersistentVector.EMPTY;
var i_s = (0);
var i_s_SINGLEQUOTE_ = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((s_SINGLEQUOTE_).length),i_s_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.count(s));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i_s),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,i_s_SINGLEQUOTE_))){
var G__20000 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,i_s);
var G__20001 = (i_s + (1));
var G__20002 = (i_s_SINGLEQUOTE_ + (1));
v = G__20000;
i_s = G__20001;
i_s_SINGLEQUOTE_ = G__20002;
continue;
} else {
var G__20003 = v;
var G__20004 = (i_s + (1));
var G__20005 = i_s_SINGLEQUOTE_;
v = G__20003;
i_s = G__20004;
i_s_SINGLEQUOTE_ = G__20005;
continue;

}
}
break;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_SINGLEQUOTE_,v], null);
});
/**
 * Try and find the bounds of the form we are searching for. Uses some heuristics to
 *   try and avoid matching partial forms, e.g. 'default-|weeks| for the form 'weeks.
 */
day8.re_frame_10x.view.event.find_bounds = (function day8$re_frame_10x$view$event$find_bounds(form_str,search_str,num_seen){
if((search_str == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
var vec__19977 = day8.re_frame_10x.view.event.collapse_whitespace_and_index(form_str);
var form_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19977,(0),null);
var reindex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19977,(1),null);
var esc_str = goog.string.regExpEscape(search_str);
var regex = ["(\\s|\\(|\\[|\\{)","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc_str),")(\\s|\\)|\\]|\\})"].join('');
var re = cljs.core.re_pattern(regex);
var results = day8.re_frame_10x.view.event.re_seq_idx.cljs$core$IFn$_invoke$arity$2(re,form_str__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = search_str;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = num_seen;
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core.seq(results)) && ((cljs.core.count(results) >= num_seen)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(num_seen - (1)));
var vec__19980 = result;
var vec__19983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19980,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19983,(0),null);
var pre_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19983,(1),null);
var matched_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19983,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19980,(1),null);
var index__$1 = (index + cljs.core.count(pre_match));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,index__$1);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,(index__$1 + cljs.core.count(matched_form)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,stop], null);
} else {
var start = (function (){var G__19986 = form_str__$1;
var G__19986__$1 = (((G__19986 == null))?null:clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0)),G__19986));
if((G__19986__$1 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,G__19986__$1);
}
})();
var length = (((!((start == null))))?((cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0))).length):(1));
var end = (function (){var G__19987 = start;
var G__19987__$1 = (((G__19987 == null))?null:(length + G__19987));
if((G__19987__$1 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,G__19987__$1);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
}
}
});
day8.re_frame_10x.view.event.event_expression = (function day8$re_frame_10x$view$event$event_expression(){
var scroll_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-snapshot-before-update","get-snapshot-before-update",1307878330),(function day8$re_frame_10x$view$event$event_expression_$_event_expression_get_snapshot_before_update(this$,old_argv,new_argv){
var node = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(this$);
return cljs.core.reset_BANG_(scroll_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),node.scrollTop,new cljs.core.Keyword(null,"left","left",-399115937),node.scrollLeft], null));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function day8$re_frame_10x$view$event$event_expression_$_event_expression_component_did_update(this$){
var node = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(this$);
(node.scrollTop = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos)));

return (node.scrollLeft = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos)));
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"event-expression",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var highlighted_form = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614)], null)));
var form_str = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353)], null)));
var show_all_code_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201)], null)));
var vec__19988 = day8.re_frame_10x.view.event.find_bounds(form_str,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(highlighted_form),new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431).cljs$core$IFn$_invoke$arity$1(highlighted_form));
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(0),null);
var end_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19988,(1),null);
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,(0),start_index);
var highlight = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,start_index,end_index);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(form_str,end_index);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(show_all_code_QMARK_)?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) * (17))),"px"].join('')),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.white_background_color,new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","set-show-all-code?","code/set-show-all-code?",1632099789),cljs.core.not(show_all_code_QMARK_)], null));

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),(((!((highlighted_form == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),(new cljs.core.List(null,before,(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.code-listing--highlighted","span.code-listing--highlighted",-1247793188),highlight], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"hl"], null)),(new cljs.core.List(null,after,null,(1),null)),(2),null)),(3),null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),form_str], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null));
})], null));
});
day8.re_frame_10x.view.event.repl_msg_area = (function day8$re_frame_10x$view$event$repl_msg_area(){
var repl_msg_state = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495)], null)));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-running","re-running",-97387070),null,new cljs.core.Keyword(null,"running","running",1554969103),null], null), null),repl_msg_state))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"animation-name","animation-name",-302195330)],["white","nowrap","hidden","green","0","0px 4px","5000ms","5px","fade-clipboard-msg-re-frame-10x"]),new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.Keyword(null,"end","end",-268185958)], null));
})], null),"Clipboard now contains text for pasting into the REPL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null));
} else {
return null;
}
});
day8.re_frame_10x.view.event.repl_section = (function day8$re_frame_10x$view$event$repl_section(){
var execution_order_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","execution-order?","code/execution-order?",-1342853507)], null)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"height","height",1025178622),"23px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"2px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),execution_order_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"show trace in execution order",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","set-execution-order","code/set-execution-order",40898041),cljs.core.not(execution_order_QMARK_)], null));

return null;
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.repl_msg_area], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),"repl requires",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.common_styles.gs_7s], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Copy to the clipboard, the require form to set things up for the \"repl\" links below"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
day8.re_frame_10x.utils.utils.copy_to_clipboard("(require '[day8.re-frame-10x])");

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495),new cljs.core.Keyword(null,"start","start",-355208981)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_info,"https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/UsingTheRepl.md"], null)], null)], null);
});
day8.re_frame_10x.view.event.indent_block = (function day8$re_frame_10x$view$event$indent_block(indent_level,first_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function day8$re_frame_10x$view$event$indent_block_$_iter__19991(s__19992){
return (new cljs.core.LazySeq(null,(function (){
var s__19992__$1 = s__19992;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19992__$1);
if(temp__5753__auto__){
var s__19992__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19992__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__19992__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__19994 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__19993 = (0);
while(true){
if((i__19993 < size__4651__auto__)){
var num = cljs.core._nth(c__4650__auto__,i__19993);
cljs.core.chunk_append(b__19994,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"12px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.standard_background_color,new cljs.core.Keyword(null,"border-top","border-top",-158897573),(cljs.core.truth_(first_QMARK_)?day8.re_frame_10x.view.event.code_border:null),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),day8.re_frame_10x.view.event.code_border], null),new cljs.core.Keyword(null,"child","child",623967545),""], null));

var G__20006 = (i__19993 + (1));
i__19993 = G__20006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19994),day8$re_frame_10x$view$event$indent_block_$_iter__19991(cljs.core.chunk_rest(s__19992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19994),null);
}
} else {
var num = cljs.core.first(s__19992__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"12px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.standard_background_color,new cljs.core.Keyword(null,"border-top","border-top",-158897573),(cljs.core.truth_(first_QMARK_)?day8.re_frame_10x.view.event.code_border:null),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),day8.re_frame_10x.view.event.code_border], null),new cljs.core.Keyword(null,"child","child",623967545),""], null),day8$re_frame_10x$view$event$indent_block_$_iter__19991(cljs.core.rest(s__19992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(indent_level));
})())], null);
});
day8.re_frame_10x.view.event.event_fragments = (function day8$re_frame_10x$view$event$event_fragments(unordered_fragments,code_exec_id){
var code_open_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779)], null)));
var max_frags = (50);
var execution_order_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","execution-order?","code/execution-order?",-1342853507)], null)));
var fragments = (cljs.core.truth_(execution_order_QMARK_)?unordered_fragments:cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),unordered_fragments));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function day8$re_frame_10x$view$event$event_fragments_$_iter__19995(s__19996){
return (new cljs.core.LazySeq(null,(function (){
var s__19996__$1 = s__19996;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__19996__$1);
if(temp__5753__auto__){
var s__19996__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19996__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__19996__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__19998 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__19997 = (0);
while(true){
if((i__19997 < size__4651__auto__)){
var frag = cljs.core._nth(c__4650__auto__,i__19997);
cljs.core.chunk_append(b__19998,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frag);
var first_QMARK_ = (id === (0));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),((first_QMARK_)?null:"-1px")], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (i__19997,id,first_QMARK_,frag,c__4650__auto__,size__4651__auto__,b__19998,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments){
return (function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),frag], null));

return null;
});})(i__19997,id,first_QMARK_,frag,c__4650__auto__,size__4651__auto__,b__19998,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (i__19997,id,first_QMARK_,frag,c__4650__auto__,size__4651__auto__,b__19998,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments){
return (function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),frag], null));

return null;
});})(i__19997,id,first_QMARK_,frag,c__4650__auto__,size__4651__auto__,b__19998,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments))
], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),first_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_header,code_exec_id,frag], null)], null)], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(code_open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null))),code_exec_id,id], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_block,code_exec_id,frag,id], null)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__20007 = (i__19997 + (1));
i__19997 = G__20007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19998),day8$re_frame_10x$view$event$event_fragments_$_iter__19995(cljs.core.chunk_rest(s__19996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19998),null);
}
} else {
var frag = cljs.core.first(s__19996__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frag);
var first_QMARK_ = (id === (0));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),((first_QMARK_)?null:"-1px")], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (id,first_QMARK_,frag,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments){
return (function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),frag], null));

return null;
});})(id,first_QMARK_,frag,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (id,first_QMARK_,frag,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments){
return (function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),frag], null));

return null;
});})(id,first_QMARK_,frag,s__19996__$2,temp__5753__auto__,code_open_QMARK_,max_frags,execution_order_QMARK_,fragments))
], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),first_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_header,code_exec_id,frag], null)], null)], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(code_open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null))),code_exec_id,id], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.indent_block,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_block,code_exec_id,frag,id], null)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),day8$re_frame_10x$view$event$event_fragments_$_iter__19995(cljs.core.rest(s__19996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_frags,fragments));
})()),(((cljs.core.count(fragments) > max_frags))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),day8.re_frame_10x.common_styles.gs_5s,new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null),new cljs.core.Keyword(null,"label","label",1718410804),["(only showing first ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_frags)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(fragments))," traces)"].join('')], null):null)], null)], null);
});
day8.re_frame_10x.view.event.event_code = (function day8$re_frame_10x$view$event$event_code(){
var code_traces = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null)));
var code_execution = cljs.core.first(code_traces);
if(cljs.core.not(code_execution)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.no_event_instructions], null);
} else {
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"class","class",-2030961996),"code-panel",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_expression], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.repl_section], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_fragments,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line));
}),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(code_execution)),new cljs.core.Keyword(null,"trace-id","trace-id",681947249).cljs$core$IFn$_invoke$arity$1(code_execution)], null)], null)], null);
}
});
day8.re_frame_10x.view.event.render = (function day8$re_frame_10x$view$event$render(){
var epoch_id = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),"event-panel",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_code], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),"0px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),epoch_id], null));
});

//# sourceMappingURL=day8.re_frame_10x.view.event.js.map
