// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36366){
var map__36367 = p__36366;
var map__36367__$1 = (((((!((map__36367 == null))))?(((((map__36367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36367):map__36367);
var m = map__36367__$1;
var n = cljs.core.get.call(null,map__36367__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36367__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36369_36391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36370_36392 = null;
var count__36371_36393 = (0);
var i__36372_36394 = (0);
while(true){
if((i__36372_36394 < count__36371_36393)){
var f_36395 = cljs.core._nth.call(null,chunk__36370_36392,i__36372_36394);
cljs.core.println.call(null,"  ",f_36395);


var G__36396 = seq__36369_36391;
var G__36397 = chunk__36370_36392;
var G__36398 = count__36371_36393;
var G__36399 = (i__36372_36394 + (1));
seq__36369_36391 = G__36396;
chunk__36370_36392 = G__36397;
count__36371_36393 = G__36398;
i__36372_36394 = G__36399;
continue;
} else {
var temp__5720__auto___36400 = cljs.core.seq.call(null,seq__36369_36391);
if(temp__5720__auto___36400){
var seq__36369_36401__$1 = temp__5720__auto___36400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36369_36401__$1)){
var c__4461__auto___36402 = cljs.core.chunk_first.call(null,seq__36369_36401__$1);
var G__36403 = cljs.core.chunk_rest.call(null,seq__36369_36401__$1);
var G__36404 = c__4461__auto___36402;
var G__36405 = cljs.core.count.call(null,c__4461__auto___36402);
var G__36406 = (0);
seq__36369_36391 = G__36403;
chunk__36370_36392 = G__36404;
count__36371_36393 = G__36405;
i__36372_36394 = G__36406;
continue;
} else {
var f_36407 = cljs.core.first.call(null,seq__36369_36401__$1);
cljs.core.println.call(null,"  ",f_36407);


var G__36408 = cljs.core.next.call(null,seq__36369_36401__$1);
var G__36409 = null;
var G__36410 = (0);
var G__36411 = (0);
seq__36369_36391 = G__36408;
chunk__36370_36392 = G__36409;
count__36371_36393 = G__36410;
i__36372_36394 = G__36411;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36412 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36412);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36412)))?cljs.core.second.call(null,arglists_36412):arglists_36412));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36373_36413 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36374_36414 = null;
var count__36375_36415 = (0);
var i__36376_36416 = (0);
while(true){
if((i__36376_36416 < count__36375_36415)){
var vec__36377_36417 = cljs.core._nth.call(null,chunk__36374_36414,i__36376_36416);
var name_36418 = cljs.core.nth.call(null,vec__36377_36417,(0),null);
var map__36380_36419 = cljs.core.nth.call(null,vec__36377_36417,(1),null);
var map__36380_36420__$1 = (((((!((map__36380_36419 == null))))?(((((map__36380_36419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36380_36419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36380_36419):map__36380_36419);
var doc_36421 = cljs.core.get.call(null,map__36380_36420__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36422 = cljs.core.get.call(null,map__36380_36420__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36418);

cljs.core.println.call(null," ",arglists_36422);

if(cljs.core.truth_(doc_36421)){
cljs.core.println.call(null," ",doc_36421);
} else {
}


var G__36423 = seq__36373_36413;
var G__36424 = chunk__36374_36414;
var G__36425 = count__36375_36415;
var G__36426 = (i__36376_36416 + (1));
seq__36373_36413 = G__36423;
chunk__36374_36414 = G__36424;
count__36375_36415 = G__36425;
i__36376_36416 = G__36426;
continue;
} else {
var temp__5720__auto___36427 = cljs.core.seq.call(null,seq__36373_36413);
if(temp__5720__auto___36427){
var seq__36373_36428__$1 = temp__5720__auto___36427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36373_36428__$1)){
var c__4461__auto___36429 = cljs.core.chunk_first.call(null,seq__36373_36428__$1);
var G__36430 = cljs.core.chunk_rest.call(null,seq__36373_36428__$1);
var G__36431 = c__4461__auto___36429;
var G__36432 = cljs.core.count.call(null,c__4461__auto___36429);
var G__36433 = (0);
seq__36373_36413 = G__36430;
chunk__36374_36414 = G__36431;
count__36375_36415 = G__36432;
i__36376_36416 = G__36433;
continue;
} else {
var vec__36382_36434 = cljs.core.first.call(null,seq__36373_36428__$1);
var name_36435 = cljs.core.nth.call(null,vec__36382_36434,(0),null);
var map__36385_36436 = cljs.core.nth.call(null,vec__36382_36434,(1),null);
var map__36385_36437__$1 = (((((!((map__36385_36436 == null))))?(((((map__36385_36436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36385_36436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36385_36436):map__36385_36436);
var doc_36438 = cljs.core.get.call(null,map__36385_36437__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36439 = cljs.core.get.call(null,map__36385_36437__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36435);

cljs.core.println.call(null," ",arglists_36439);

if(cljs.core.truth_(doc_36438)){
cljs.core.println.call(null," ",doc_36438);
} else {
}


var G__36440 = cljs.core.next.call(null,seq__36373_36428__$1);
var G__36441 = null;
var G__36442 = (0);
var G__36443 = (0);
seq__36373_36413 = G__36440;
chunk__36374_36414 = G__36441;
count__36375_36415 = G__36442;
i__36376_36416 = G__36443;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__36387 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36388 = null;
var count__36389 = (0);
var i__36390 = (0);
while(true){
if((i__36390 < count__36389)){
var role = cljs.core._nth.call(null,chunk__36388,i__36390);
var temp__5720__auto___36444__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36444__$1)){
var spec_36445 = temp__5720__auto___36444__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36445));
} else {
}


var G__36446 = seq__36387;
var G__36447 = chunk__36388;
var G__36448 = count__36389;
var G__36449 = (i__36390 + (1));
seq__36387 = G__36446;
chunk__36388 = G__36447;
count__36389 = G__36448;
i__36390 = G__36449;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__36387);
if(temp__5720__auto____$1){
var seq__36387__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36387__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36387__$1);
var G__36450 = cljs.core.chunk_rest.call(null,seq__36387__$1);
var G__36451 = c__4461__auto__;
var G__36452 = cljs.core.count.call(null,c__4461__auto__);
var G__36453 = (0);
seq__36387 = G__36450;
chunk__36388 = G__36451;
count__36389 = G__36452;
i__36390 = G__36453;
continue;
} else {
var role = cljs.core.first.call(null,seq__36387__$1);
var temp__5720__auto___36454__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___36454__$2)){
var spec_36455 = temp__5720__auto___36454__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36455));
} else {
}


var G__36456 = cljs.core.next.call(null,seq__36387__$1);
var G__36457 = null;
var G__36458 = (0);
var G__36459 = (0);
seq__36387 = G__36456;
chunk__36388 = G__36457;
count__36389 = G__36458;
i__36390 = G__36459;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1548047570932
