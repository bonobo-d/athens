goog.provide('athens.views.breadcrumbs');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('stylefy.core');
athens.views.breadcrumbs.breadcrumbs_list_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["stretch",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"hidden","none","nowrap","1 1 auto","0",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"inherit",new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto 0"], null)], null)], null),"flex","row","inherit","0"]);
athens.views.breadcrumbs.breadcrumb_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"2.5em",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:last-child","&:last-child",1329794843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0.15em",new cljs.core.Keyword(null,"content","content",15833224),"'>'",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"transform","transform",1381301764),"scaleX(0.5)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-child:before","&:first-child:before",1120925146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"none"], null)], null)], null)], null);
athens.views.breadcrumbs.breadcrumbs_list = (function athens$views$breadcrumbs$breadcrumbs_list(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58180 = arguments.length;
var i__4790__auto___58181 = (0);
while(true){
if((i__4790__auto___58181 < len__4789__auto___58180)){
args__4795__auto__.push((arguments[i__4790__auto___58181]));

var G__58182 = (i__4790__auto___58181 + (1));
i__4790__auto___58181 = G__58182;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.views.breadcrumbs.breadcrumbs_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.views.breadcrumbs.breadcrumbs_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__58172,children){
var map__58173 = p__58172;
var map__58173__$1 = (((((!((map__58173 == null))))?(((((map__58173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58173):map__58173);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58173__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.breadcrumbs.breadcrumbs_list_style,style], 0))),children], null));
}));

(athens.views.breadcrumbs.breadcrumbs_list.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.views.breadcrumbs.breadcrumbs_list.cljs$lang$applyTo = (function (seq58170){
var G__58171 = cljs.core.first(seq58170);
var seq58170__$1 = cljs.core.next(seq58170);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58171,seq58170__$1);
}));

athens.views.breadcrumbs.breadcrumb = (function athens$views$breadcrumbs$breadcrumb(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58183 = arguments.length;
var i__4790__auto___58184 = (0);
while(true){
if((i__4790__auto___58184 < len__4789__auto___58183)){
args__4795__auto__.push((arguments[i__4790__auto___58184]));

var G__58185 = (i__4790__auto___58184 + (1));
i__4790__auto___58184 = G__58185;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.views.breadcrumbs.breadcrumb.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.views.breadcrumbs.breadcrumb.cljs$core$IFn$_invoke$arity$variadic = (function (p__58177,label){
var map__58178 = p__58177;
var map__58178__$1 = (((((!((map__58178 == null))))?(((((map__58178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58178):map__58178);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58178__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.breadcrumbs.breadcrumb_style,style], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),label], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null)], null);
}));

(athens.views.breadcrumbs.breadcrumb.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.views.breadcrumbs.breadcrumb.cljs$lang$applyTo = (function (seq58175){
var G__58176 = cljs.core.first(seq58175);
var seq58175__$1 = cljs.core.next(seq58175);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58176,seq58175__$1);
}));


//# sourceMappingURL=athens.views.breadcrumbs.js.map
