goog.provide('athens.components');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.util');
goog.require('re_frame.core');
athens.components.todo_on_click = (function athens$components$todo_on_click(uid,from_str,to_str){
var current_block_content = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null)));
var G__56212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","string","block/string",-2066596447),clojure.string.replace(current_block_content,from_str,to_str),new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56212) : re_frame.core.dispatch.call(null,G__56212));
});
athens.components.find_weblink = (function athens$components$find_weblink(content){
return cljs.core.re_find(/http.*/,content);
});
athens.components.component_todo = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[TODO\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.components.todo_on_click(uid,/\{\{\[\[TODO\]\]\}\}/,"{{[[DONE]]}}");
})], null)], null);
})], null);
athens.components.component_done = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[DONE\]\]/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,uid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),"true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.components.todo_on_click(uid,/\{\{\[\[DONE\]\]\}\}/,"{{[[TODO]]}}");
})], null)], null);
})], null);
athens.components.component_youtube_embed = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/\[\[youtube\]\]\:.*/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-16-9","div.media-16-9",-1557022170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/.*v=([a-zA-Z0-9_\-]+)/,content),(1)))].join(''),new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"], null)], null)], null);
})], null);
athens.components.component_generic_embed = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"match","match",1220059550),/iframe\:.*/,new cljs.core.Keyword(null,"render","render",-1408033454),(function (content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-16-9","div.media-16-9",-1557022170),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),athens.components.find_weblink(content)], null)], null)], null);
})], null);
athens.components.components = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.component_todo,athens.components.component_done,athens.components.component_youtube_embed,athens.components.component_generic_embed], null);
athens.components.empty_component = (function athens$components$empty_component(content,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),content], null);
});
/**
 * Renders a component using its parse tree & its uid.
 */
athens.components.render_component = (function athens$components$render_component(content,uid){
var render = cljs.core.some((function (comp){
if(cljs.core.truth_(cljs.core.re_matches(new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$1(comp),content))){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(comp);
} else {
return null;
}
}),athens.components.components);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),(cljs.core.truth_(render)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,content,uid], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.components.empty_component,content,uid], null))], null);
});

//# sourceMappingURL=athens.components.js.map
