goog.provide('athens.parse_renderer');
goog.require('cljs.core');
goog.require('athens.components');
goog.require('athens.db');
goog.require('athens.parser');
goog.require('athens.router');
goog.require('athens.style');
goog.require('instaparse.core');
goog.require('posh.reagent');
goog.require('stylefy.core');
athens.parse_renderer.page_link = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["-1px","all 0.05s ease","-1px","''",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),0.1),(-1),"0","-0.2em","inline-block","absolute","0.25rem","-0.2em"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover:after","&:hover:after",975745128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null)], null);
athens.parse_renderer.hashtag = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null);
athens.parse_renderer.image = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.125rem"], null);
athens.parse_renderer.url_link = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.parse_renderer.block_ref = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em",new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.05s ease",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px","solid",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540))], null)], null),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"alias"], null)], null)], null)], null);
/**
 * Gets a block's node from the display string name (or partially parsed string tree)
 */
athens.parse_renderer.pull_node_from_string = (function athens$parse_renderer$pull_node_from_string(string){
var G__58337 = athens.db.dsdb;
var G__58338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),["",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
if(typeof el === 'string'){
return el;
} else {
return ["[[",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null))),"]]"].join('');
}
}),string)))].join('')], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__58337,G__58338,G__58339) : posh.reagent.pull.call(null,G__58337,G__58338,G__58339));
});
/**
 * Renders a page link given the title of the page.
 */
athens.parse_renderer.render_page_link = (function athens$parse_renderer$render_page_link(title){
var node = athens.parse_renderer.pull_node_from_string(title);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.page_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-link"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"[["], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)),e);
})], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(title)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"]]"], null)], null);
});
/**
 * Transforms Instaparse output to Hiccup.
 */
athens.parse_renderer.transform = (function athens$parse_renderer$transform(tree,uid){
var G__58340 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"url-image","url-image",535142411),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"page-link","page-link",-169621200),new cljs.core.Keyword(null,"pre-formatted","pre-formatted",797009626),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"url-link","url-link",1615670141)],[(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents bold"], null),text], null);
}),(function() { 
var G__58356__delegate = function (contents){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"block",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-line"], null)], null)], null),contents);
};
var G__58356 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__58357__i = 0, G__58357__a = new Array(arguments.length -  0);
while (G__58357__i < G__58357__a.length) {G__58357__a[G__58357__i] = arguments[G__58357__i + 0]; ++G__58357__i;}
  contents = new cljs.core.IndexedSeq(G__58357__a,0,null);
} 
return G__58356__delegate.call(this,contents);};
G__58356.cljs$lang$maxFixedArity = 0;
G__58356.cljs$lang$applyTo = (function (arglist__58358){
var contents = cljs.core.seq(arglist__58358);
return G__58356__delegate(contents);
});
G__58356.cljs$core$IFn$_invoke$arity$variadic = G__58356__delegate;
return G__58356;
})()
,(function (p__58342){
var map__58343 = p__58342;
var map__58343__$1 = (((((!((map__58343 == null))))?(((((map__58343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58343):map__58343);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"url","url",276297046));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-image",new cljs.core.Keyword(null,"alt","alt",-3214426),alt,new cljs.core.Keyword(null,"src","src",-1651076051),url], null))], null);
}),(function() { 
var G__58359__delegate = function (contents){
return athens.components.render_component(cljs.core.first(contents),uid);
};
var G__58359 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__58360__i = 0, G__58360__a = new Array(arguments.length -  0);
while (G__58360__i < G__58360__a.length) {G__58360__a[G__58360__i] = arguments[G__58360__i + 0]; ++G__58360__i;}
  contents = new cljs.core.IndexedSeq(G__58360__a,0,null);
} 
return G__58359__delegate.call(this,contents);};
G__58359.cljs$lang$maxFixedArity = 0;
G__58359.cljs$lang$applyTo = (function (arglist__58361){
var contents = cljs.core.seq(arglist__58361);
return G__58359__delegate(contents);
});
G__58359.cljs$core$IFn$_invoke$arity$variadic = G__58359__delegate;
return G__58359;
})()
,(function() { 
var G__58362__delegate = function (title){
return athens.parse_renderer.render_page_link(title);
};
var G__58362 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__58363__i = 0, G__58363__a = new Array(arguments.length -  0);
while (G__58363__i < G__58363__a.length) {G__58363__a[G__58363__i] = arguments[G__58363__i + 0]; ++G__58363__i;}
  title = new cljs.core.IndexedSeq(G__58363__a,0,null);
} 
return G__58362__delegate.call(this,title);};
G__58362.cljs$lang$maxFixedArity = 0;
G__58362.cljs$lang$applyTo = (function (arglist__58364){
var title = cljs.core.seq(arglist__58364);
return G__58362__delegate(title);
});
G__58362.cljs$core$IFn$_invoke$arity$variadic = G__58362__delegate;
return G__58362;
})()
,(function (text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),text], null);
}),(function (uid__$1){
var block = (function (){var G__58345 = athens.db.dsdb;
var G__58346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__58345,G__58346,G__58347) : posh.reagent.pull.call(null,G__58345,G__58346,G__58347));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.block_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-ref"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$1);
})], null),(function (){var G__58348 = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block));
var G__58349 = uid__$1;
return (athens.parse_renderer.parse_and_render.cljs$core$IFn$_invoke$arity$2 ? athens.parse_renderer.parse_and_render.cljs$core$IFn$_invoke$arity$2(G__58348,G__58349) : athens.parse_renderer.parse_and_render.call(null,G__58348,G__58349));
})()], null)], null);
}),(function() { 
var G__58368__delegate = function (tag_name){
var parsed_name = cljs.core.concat.cljs$core$IFn$_invoke$arity$1(tag_name);
var node = (function (){var G__58350 = athens.db.dsdb;
var G__58351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__58352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),parsed_name], null);
return (posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(G__58350,G__58351,G__58352) : posh.reagent.pull.call(null,G__58350,G__58351,G__58352));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.hashtag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hashtag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)));
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"#"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents"], null),parsed_name], null)], null);
};
var G__58368 = function (var_args){
var tag_name = null;
if (arguments.length > 0) {
var G__58375__i = 0, G__58375__a = new Array(arguments.length -  0);
while (G__58375__i < G__58375__a.length) {G__58375__a[G__58375__i] = arguments[G__58375__i + 0]; ++G__58375__i;}
  tag_name = new cljs.core.IndexedSeq(G__58375__a,0,null);
} 
return G__58368__delegate.call(this,tag_name);};
G__58368.cljs$lang$maxFixedArity = 0;
G__58368.cljs$lang$applyTo = (function (arglist__58377){
var tag_name = cljs.core.seq(arglist__58377);
return G__58368__delegate(tag_name);
});
G__58368.cljs$core$IFn$_invoke$arity$variadic = G__58368__delegate;
return G__58368;
})()
,(function (p__58353,text){
var map__58354 = p__58353;
var map__58354__$1 = (((((!((map__58354 == null))))?(((((map__58354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58354):map__58354);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.url_link,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-link",new cljs.core.Keyword(null,"href","href",-793805698),url], null)),text], null);
})]);
var G__58341 = tree;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__58340,G__58341) : instaparse.core.transform.call(null,G__58340,G__58341));
});
/**
 * Converts a string of block syntax to Hiccup, with fallback formatting if it can’t be parsed.
 */
athens.parse_renderer.parse_and_render = (function athens$parse_renderer$parse_and_render(string,uid){
var result = athens.parser.parse_to_ast(string);
if(instaparse.core.failure_QMARK_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.core.get_failure(result)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),string], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec,athens.parse_renderer.transform(result,uid)], null);
}
});

//# sourceMappingURL=athens.parse_renderer.js.map
