goog.provide('time_literals.read_write');
goog.require('cljs.core');
goog.require('java.time');
goog.require('cljs.reader');
time_literals.read_write.print_to_string = (function time_literals$read_write$print_to_string(t,o){
return ["#time/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),"\""].join('');
});
time_literals.read_write.print_period = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"period");
time_literals.read_write.print_date = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"date");
time_literals.read_write.print_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"date-time");
time_literals.read_write.print_zoned_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"zoned-date-time");
time_literals.read_write.print_offset_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"offset-time");
time_literals.read_write.print_instant = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"instant");
time_literals.read_write.print_offset_date_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"offset-date-time");
time_literals.read_write.print_zone = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"zone");
time_literals.read_write.print_day_of_week = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"day-of-week");
time_literals.read_write.print_time = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"time");
time_literals.read_write.print_month = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"month");
time_literals.read_write.print_month_day = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"month-day");
time_literals.read_write.print_duration = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"duration");
time_literals.read_write.print_year = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"year");
time_literals.read_write.print_year_month = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(time_literals.read_write.print_to_string,"year-month");
time_literals.read_write.print_time_literals_cljs_BANG_ = (function time_literals$read_write$print_time_literals_cljs_BANG_(){
(java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.MonthDay.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_month_day(d__$1));
}));

(java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_year_month(d__$1));
}));

(java.time.Year.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_year(d__$1));
}));

(java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_zoned_date_time(d__$1));
}));

(java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_offset_time(d__$1));
}));

(java.time.Instant.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_instant(d__$1));
}));

(java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_zone(d__$1));
}));

(java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_date(d__$1));
}));

(java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_time(d__$1));
}));

(java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_date_time(d__$1));
}));

(java.time.Month.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Month.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_month(d__$1));
}));

(java.time.Period.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_period(d__$1));
}));

(java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_day_of_week(d__$1));
}));

(java.time.Duration.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

return (java.time.Duration.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write(writer,time_literals.read_write.print_duration(d__$1));
}));
});
time_literals.read_write.print_time_literals_clj_BANG_ = (function time_literals$read_write$print_time_literals_clj_BANG_(){
return null;
});
time_literals.read_write.tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("time","instant","time/instant",-2013236992,null),new cljs.core.Symbol("time","duration","time/duration",-1273941668,null),new cljs.core.Symbol("time","offset-date-time","time/offset-date-time",-1254592482,null),new cljs.core.Symbol("time","day-of-week","time/day-of-week",-1018890461,null),new cljs.core.Symbol("time","time","time/time",-1246984162,null),new cljs.core.Symbol("time","year-month","time/year-month",-1840595535,null),new cljs.core.Symbol("time","offset-time","time/offset-time",-1026521346,null),new cljs.core.Symbol("time","period","time/period",1291634901,null),new cljs.core.Symbol("time","zoned-date-time","time/zoned-date-time",-2125640645,null),new cljs.core.Symbol("time","month","time/month",-324062169,null),new cljs.core.Symbol("time","date","time/date",179823674,null),new cljs.core.Symbol("time","year","time/year",1979222727,null),new cljs.core.Symbol("time","month-day","time/month-day",61138729,null),new cljs.core.Symbol("time","date-time","time/date-time",1814680468,null),new cljs.core.Symbol("time","zone","time/zone",-580695523,null)],[(function (t){
return java.time.Instant.parse(t);
}),(function (t){
return java.time.Duration.parse(t);
}),(function (t){
return java.time.OffsetDateTime.parse(t);
}),(function (t){
return java.time.DayOfWeek.valueOf(t);
}),(function (t){
return java.time.LocalTime.parse(t);
}),(function (t){
return java.time.YearMonth.parse(t);
}),(function (t){
return java.time.OffsetTime.parse(t);
}),(function (t){
return java.time.Period.parse(t);
}),(function (t){
return java.time.ZonedDateTime.parse(t);
}),(function (t){
return java.time.Month.valueOf(t);
}),(function (t){
return java.time.LocalDate.parse(t);
}),(function (t){
return java.time.Year.parse(t);
}),(function (t){
return java.time.MonthDay.parse(t);
}),(function (t){
return java.time.LocalDateTime.parse(t);
}),(function (t){
return java.time.ZoneId.of(t);
})]);
var seq__33000_33027 = cljs.core.seq(time_literals.read_write.tags);
var chunk__33001_33028 = null;
var count__33002_33029 = (0);
var i__33003_33030 = (0);
while(true){
if((i__33003_33030 < count__33002_33029)){
var vec__33010_33031 = chunk__33001_33028.cljs$core$IIndexed$_nth$arity$2(null,i__33003_33030);
var tag_33032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33010_33031,(0),null);
var read_fn_33033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33010_33031,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_33032,read_fn_33033);


var G__33034 = seq__33000_33027;
var G__33035 = chunk__33001_33028;
var G__33036 = count__33002_33029;
var G__33037 = (i__33003_33030 + (1));
seq__33000_33027 = G__33034;
chunk__33001_33028 = G__33035;
count__33002_33029 = G__33036;
i__33003_33030 = G__33037;
continue;
} else {
var temp__5735__auto___33038 = cljs.core.seq(seq__33000_33027);
if(temp__5735__auto___33038){
var seq__33000_33039__$1 = temp__5735__auto___33038;
if(cljs.core.chunked_seq_QMARK_(seq__33000_33039__$1)){
var c__4556__auto___33040 = cljs.core.chunk_first(seq__33000_33039__$1);
var G__33041 = cljs.core.chunk_rest(seq__33000_33039__$1);
var G__33042 = c__4556__auto___33040;
var G__33043 = cljs.core.count(c__4556__auto___33040);
var G__33044 = (0);
seq__33000_33027 = G__33041;
chunk__33001_33028 = G__33042;
count__33002_33029 = G__33043;
i__33003_33030 = G__33044;
continue;
} else {
var vec__33013_33045 = cljs.core.first(seq__33000_33039__$1);
var tag_33046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33013_33045,(0),null);
var read_fn_33047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33013_33045,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_33046,read_fn_33047);


var G__33048 = cljs.core.next(seq__33000_33039__$1);
var G__33049 = null;
var G__33050 = (0);
var G__33051 = (0);
seq__33000_33027 = G__33048;
chunk__33001_33028 = G__33049;
count__33002_33029 = G__33050;
i__33003_33030 = G__33051;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=time_literals.read_write.js.map
