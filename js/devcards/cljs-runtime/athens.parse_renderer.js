goog.provide('athens.parse_renderer');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.parser');
goog.require('athens.router');
goog.require('athens.style');
goog.require('instaparse.core');
goog.require('posh.reagent');
goog.require('stylefy.core');
athens.parse_renderer.page_link = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["-1px","all 0.05s ease","-1px","''",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),0.1),(-1),"0","-0.2em","inline-block","absolute","4px","-0.2em"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover:after","&:hover:after",975745128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null)], null)], null);
athens.parse_renderer.hashtag = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null);
athens.parse_renderer.image = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px"], null);
athens.parse_renderer.url_link = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.parse_renderer.block_ref = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em",new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.05s ease",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px","solid",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540))], null)], null),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"alias"], null)], null)], null)], null);
/**
 * Transforms Instaparse output to Hiccup.
 */
athens.parse_renderer.transform = (function athens$parse_renderer$transform(tree){
var G__57978 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"block","block",664686210),(function() { 
var G__57996__delegate = function (contents){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"block",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-line"], null)], null)], null),contents);
};
var G__57996 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__57997__i = 0, G__57997__a = new Array(arguments.length -  0);
while (G__57997__i < G__57997__a.length) {G__57997__a[G__57997__i] = arguments[G__57997__i + 0]; ++G__57997__i;}
  contents = new cljs.core.IndexedSeq(G__57997__a,0,null);
} 
return G__57996__delegate.call(this,contents);};
G__57996.cljs$lang$maxFixedArity = 0;
G__57996.cljs$lang$applyTo = (function (arglist__57998){
var contents = cljs.core.seq(arglist__57998);
return G__57996__delegate(contents);
});
G__57996.cljs$core$IFn$_invoke$arity$variadic = G__57996__delegate;
return G__57996;
})()
,new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function (title){
var node = (function (){var G__57980 = athens.db.dsdb;
var G__57981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__57982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__57980,G__57981,G__57982) : posh.reagent.pull.call(null,G__57980,G__57981,G__57982));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.page_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-link"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"[["], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)),e);
})], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"]]"], null)], null);
}),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),(function (uid){
var block = (function (){var G__57983 = athens.db.dsdb;
var G__57984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__57985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__57983,G__57984,G__57985) : posh.reagent.pull.call(null,G__57983,G__57984,G__57985));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.block_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-ref"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
})], null),(function (){var G__57986 = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block));
return (athens.parse_renderer.parse_and_render.cljs$core$IFn$_invoke$arity$1 ? athens.parse_renderer.parse_and_render.cljs$core$IFn$_invoke$arity$1(G__57986) : athens.parse_renderer.parse_and_render.call(null,G__57986));
})()], null)], null);
}),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function (tag_name){
var node = (function (){var G__57987 = athens.db.dsdb;
var G__57988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__57989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),tag_name], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__57987,G__57988,G__57989) : posh.reagent.pull.call(null,G__57987,G__57988,G__57989));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.parse_renderer.hashtag),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hashtag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"#"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents"], null),tag_name], null)], null);
}),new cljs.core.Keyword(null,"url-image","url-image",535142411),(function (p__57990){
var map__57991 = p__57990;
var map__57991__$1 = (((((!((map__57991 == null))))?(((((map__57991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57991):map__57991);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"url","url",276297046));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-image",new cljs.core.Keyword(null,"alt","alt",-3214426),alt,new cljs.core.Keyword(null,"src","src",-1651076051),url], null))], null);
}),new cljs.core.Keyword(null,"url-link","url-link",1615670141),(function (p__57993,text){
var map__57994 = p__57993;
var map__57994__$1 = (((((!((map__57994 == null))))?(((((map__57994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57994):map__57994);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57994__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.url_link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-link",new cljs.core.Keyword(null,"href","href",-793805698),url], null)),text], null);
}),new cljs.core.Keyword(null,"bold","bold",-116809535),(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents bold"], null),text], null);
})], null);
var G__57979 = tree;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__57978,G__57979) : instaparse.core.transform.call(null,G__57978,G__57979));
});
/**
 * Converts a string of block syntax to Hiccup, with fallback formatting if it can’t be parsed.
 */
athens.parse_renderer.parse_and_render = (function athens$parse_renderer$parse_and_render(string){
var result = athens.parser.parse_to_ast(string);
if(instaparse.core.failure_QMARK_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.core.get_failure(result)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),string], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec,athens.parse_renderer.transform(result)], null);
}
});

//# sourceMappingURL=athens.parse_renderer.js.map
