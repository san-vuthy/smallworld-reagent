// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34903_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34903_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34904 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34905 = null;
var count__34906 = (0);
var i__34907 = (0);
while(true){
if((i__34907 < count__34906)){
var n = cljs.core._nth.call(null,chunk__34905,i__34907);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34908 = seq__34904;
var G__34909 = chunk__34905;
var G__34910 = count__34906;
var G__34911 = (i__34907 + (1));
seq__34904 = G__34908;
chunk__34905 = G__34909;
count__34906 = G__34910;
i__34907 = G__34911;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34904);
if(temp__5720__auto__){
var seq__34904__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34904__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34904__$1);
var G__34912 = cljs.core.chunk_rest.call(null,seq__34904__$1);
var G__34913 = c__4461__auto__;
var G__34914 = cljs.core.count.call(null,c__4461__auto__);
var G__34915 = (0);
seq__34904 = G__34912;
chunk__34905 = G__34913;
count__34906 = G__34914;
i__34907 = G__34915;
continue;
} else {
var n = cljs.core.first.call(null,seq__34904__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34916 = cljs.core.next.call(null,seq__34904__$1);
var G__34917 = null;
var G__34918 = (0);
var G__34919 = (0);
seq__34904 = G__34916;
chunk__34905 = G__34917;
count__34906 = G__34918;
i__34907 = G__34919;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34920){
var vec__34921 = p__34920;
var _ = cljs.core.nth.call(null,vec__34921,(0),null);
var v = cljs.core.nth.call(null,vec__34921,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__34924){
var vec__34925 = p__34924;
var k = cljs.core.nth.call(null,vec__34925,(0),null);
var v = cljs.core.nth.call(null,vec__34925,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34937_34945 = cljs.core.seq.call(null,deps);
var chunk__34938_34946 = null;
var count__34939_34947 = (0);
var i__34940_34948 = (0);
while(true){
if((i__34940_34948 < count__34939_34947)){
var dep_34949 = cljs.core._nth.call(null,chunk__34938_34946,i__34940_34948);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34949;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34949));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34949,(depth + (1)),state);
} else {
}


var G__34950 = seq__34937_34945;
var G__34951 = chunk__34938_34946;
var G__34952 = count__34939_34947;
var G__34953 = (i__34940_34948 + (1));
seq__34937_34945 = G__34950;
chunk__34938_34946 = G__34951;
count__34939_34947 = G__34952;
i__34940_34948 = G__34953;
continue;
} else {
var temp__5720__auto___34954 = cljs.core.seq.call(null,seq__34937_34945);
if(temp__5720__auto___34954){
var seq__34937_34955__$1 = temp__5720__auto___34954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34937_34955__$1)){
var c__4461__auto___34956 = cljs.core.chunk_first.call(null,seq__34937_34955__$1);
var G__34957 = cljs.core.chunk_rest.call(null,seq__34937_34955__$1);
var G__34958 = c__4461__auto___34956;
var G__34959 = cljs.core.count.call(null,c__4461__auto___34956);
var G__34960 = (0);
seq__34937_34945 = G__34957;
chunk__34938_34946 = G__34958;
count__34939_34947 = G__34959;
i__34940_34948 = G__34960;
continue;
} else {
var dep_34961 = cljs.core.first.call(null,seq__34937_34955__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34961;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34961));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34961,(depth + (1)),state);
} else {
}


var G__34962 = cljs.core.next.call(null,seq__34937_34955__$1);
var G__34963 = null;
var G__34964 = (0);
var G__34965 = (0);
seq__34937_34945 = G__34962;
chunk__34938_34946 = G__34963;
count__34939_34947 = G__34964;
i__34940_34948 = G__34965;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34941){
var vec__34942 = p__34941;
var seq__34943 = cljs.core.seq.call(null,vec__34942);
var first__34944 = cljs.core.first.call(null,seq__34943);
var seq__34943__$1 = cljs.core.next.call(null,seq__34943);
var x = first__34944;
var xs = seq__34943__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34942,seq__34943,first__34944,seq__34943__$1,x,xs,get_deps__$1){
return (function (p1__34928_SHARP_){
return clojure.set.difference.call(null,p1__34928_SHARP_,x);
});})(vec__34942,seq__34943,first__34944,seq__34943__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34966 = cljs.core.seq.call(null,provides);
var chunk__34967 = null;
var count__34968 = (0);
var i__34969 = (0);
while(true){
if((i__34969 < count__34968)){
var prov = cljs.core._nth.call(null,chunk__34967,i__34969);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34970_34978 = cljs.core.seq.call(null,requires);
var chunk__34971_34979 = null;
var count__34972_34980 = (0);
var i__34973_34981 = (0);
while(true){
if((i__34973_34981 < count__34972_34980)){
var req_34982 = cljs.core._nth.call(null,chunk__34971_34979,i__34973_34981);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34982,prov);


var G__34983 = seq__34970_34978;
var G__34984 = chunk__34971_34979;
var G__34985 = count__34972_34980;
var G__34986 = (i__34973_34981 + (1));
seq__34970_34978 = G__34983;
chunk__34971_34979 = G__34984;
count__34972_34980 = G__34985;
i__34973_34981 = G__34986;
continue;
} else {
var temp__5720__auto___34987 = cljs.core.seq.call(null,seq__34970_34978);
if(temp__5720__auto___34987){
var seq__34970_34988__$1 = temp__5720__auto___34987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34970_34988__$1)){
var c__4461__auto___34989 = cljs.core.chunk_first.call(null,seq__34970_34988__$1);
var G__34990 = cljs.core.chunk_rest.call(null,seq__34970_34988__$1);
var G__34991 = c__4461__auto___34989;
var G__34992 = cljs.core.count.call(null,c__4461__auto___34989);
var G__34993 = (0);
seq__34970_34978 = G__34990;
chunk__34971_34979 = G__34991;
count__34972_34980 = G__34992;
i__34973_34981 = G__34993;
continue;
} else {
var req_34994 = cljs.core.first.call(null,seq__34970_34988__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34994,prov);


var G__34995 = cljs.core.next.call(null,seq__34970_34988__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34970_34978 = G__34995;
chunk__34971_34979 = G__34996;
count__34972_34980 = G__34997;
i__34973_34981 = G__34998;
continue;
}
} else {
}
}
break;
}


var G__34999 = seq__34966;
var G__35000 = chunk__34967;
var G__35001 = count__34968;
var G__35002 = (i__34969 + (1));
seq__34966 = G__34999;
chunk__34967 = G__35000;
count__34968 = G__35001;
i__34969 = G__35002;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34966);
if(temp__5720__auto__){
var seq__34966__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34966__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34966__$1);
var G__35003 = cljs.core.chunk_rest.call(null,seq__34966__$1);
var G__35004 = c__4461__auto__;
var G__35005 = cljs.core.count.call(null,c__4461__auto__);
var G__35006 = (0);
seq__34966 = G__35003;
chunk__34967 = G__35004;
count__34968 = G__35005;
i__34969 = G__35006;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34966__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34974_35007 = cljs.core.seq.call(null,requires);
var chunk__34975_35008 = null;
var count__34976_35009 = (0);
var i__34977_35010 = (0);
while(true){
if((i__34977_35010 < count__34976_35009)){
var req_35011 = cljs.core._nth.call(null,chunk__34975_35008,i__34977_35010);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35011,prov);


var G__35012 = seq__34974_35007;
var G__35013 = chunk__34975_35008;
var G__35014 = count__34976_35009;
var G__35015 = (i__34977_35010 + (1));
seq__34974_35007 = G__35012;
chunk__34975_35008 = G__35013;
count__34976_35009 = G__35014;
i__34977_35010 = G__35015;
continue;
} else {
var temp__5720__auto___35016__$1 = cljs.core.seq.call(null,seq__34974_35007);
if(temp__5720__auto___35016__$1){
var seq__34974_35017__$1 = temp__5720__auto___35016__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34974_35017__$1)){
var c__4461__auto___35018 = cljs.core.chunk_first.call(null,seq__34974_35017__$1);
var G__35019 = cljs.core.chunk_rest.call(null,seq__34974_35017__$1);
var G__35020 = c__4461__auto___35018;
var G__35021 = cljs.core.count.call(null,c__4461__auto___35018);
var G__35022 = (0);
seq__34974_35007 = G__35019;
chunk__34975_35008 = G__35020;
count__34976_35009 = G__35021;
i__34977_35010 = G__35022;
continue;
} else {
var req_35023 = cljs.core.first.call(null,seq__34974_35017__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35023,prov);


var G__35024 = cljs.core.next.call(null,seq__34974_35017__$1);
var G__35025 = null;
var G__35026 = (0);
var G__35027 = (0);
seq__34974_35007 = G__35024;
chunk__34975_35008 = G__35025;
count__34976_35009 = G__35026;
i__34977_35010 = G__35027;
continue;
}
} else {
}
}
break;
}


var G__35028 = cljs.core.next.call(null,seq__34966__$1);
var G__35029 = null;
var G__35030 = (0);
var G__35031 = (0);
seq__34966 = G__35028;
chunk__34967 = G__35029;
count__34968 = G__35030;
i__34969 = G__35031;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35032_35036 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35033_35037 = null;
var count__35034_35038 = (0);
var i__35035_35039 = (0);
while(true){
if((i__35035_35039 < count__35034_35038)){
var ns_35040 = cljs.core._nth.call(null,chunk__35033_35037,i__35035_35039);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35040);


var G__35041 = seq__35032_35036;
var G__35042 = chunk__35033_35037;
var G__35043 = count__35034_35038;
var G__35044 = (i__35035_35039 + (1));
seq__35032_35036 = G__35041;
chunk__35033_35037 = G__35042;
count__35034_35038 = G__35043;
i__35035_35039 = G__35044;
continue;
} else {
var temp__5720__auto___35045 = cljs.core.seq.call(null,seq__35032_35036);
if(temp__5720__auto___35045){
var seq__35032_35046__$1 = temp__5720__auto___35045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35032_35046__$1)){
var c__4461__auto___35047 = cljs.core.chunk_first.call(null,seq__35032_35046__$1);
var G__35048 = cljs.core.chunk_rest.call(null,seq__35032_35046__$1);
var G__35049 = c__4461__auto___35047;
var G__35050 = cljs.core.count.call(null,c__4461__auto___35047);
var G__35051 = (0);
seq__35032_35036 = G__35048;
chunk__35033_35037 = G__35049;
count__35034_35038 = G__35050;
i__35035_35039 = G__35051;
continue;
} else {
var ns_35052 = cljs.core.first.call(null,seq__35032_35046__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35052);


var G__35053 = cljs.core.next.call(null,seq__35032_35046__$1);
var G__35054 = null;
var G__35055 = (0);
var G__35056 = (0);
seq__35032_35036 = G__35053;
chunk__35033_35037 = G__35054;
count__35034_35038 = G__35055;
i__35035_35039 = G__35056;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35057__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35058__i = 0, G__35058__a = new Array(arguments.length -  0);
while (G__35058__i < G__35058__a.length) {G__35058__a[G__35058__i] = arguments[G__35058__i + 0]; ++G__35058__i;}
  args = new cljs.core.IndexedSeq(G__35058__a,0,null);
} 
return G__35057__delegate.call(this,args);};
G__35057.cljs$lang$maxFixedArity = 0;
G__35057.cljs$lang$applyTo = (function (arglist__35059){
var args = cljs.core.seq(arglist__35059);
return G__35057__delegate(args);
});
G__35057.cljs$core$IFn$_invoke$arity$variadic = G__35057__delegate;
return G__35057;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35060_SHARP_,p2__35061_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35060_SHARP_)),p2__35061_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35062_SHARP_,p2__35063_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35062_SHARP_),p2__35063_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35064 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35064.addCallback(((function (G__35064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35064))
);

G__35064.addErrback(((function (G__35064){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35064))
);

return G__35064;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35065){if((e35065 instanceof Error)){
var e = e35065;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35065;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35066){if((e35066 instanceof Error)){
var e = e35066;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35066;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35067 = cljs.core._EQ_;
var expr__35068 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35067.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35068))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35067.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35068))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35067.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35068))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35067,expr__35068){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35067,expr__35068))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35070,callback){
var map__35071 = p__35070;
var map__35071__$1 = (((((!((map__35071 == null))))?(((((map__35071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35071):map__35071);
var file_msg = map__35071__$1;
var request_url = cljs.core.get.call(null,map__35071__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35071,map__35071__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35071,map__35071__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__){
return (function (state_35109){
var state_val_35110 = (state_35109[(1)]);
if((state_val_35110 === (7))){
var inst_35105 = (state_35109[(2)]);
var state_35109__$1 = state_35109;
var statearr_35111_35137 = state_35109__$1;
(statearr_35111_35137[(2)] = inst_35105);

(statearr_35111_35137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (1))){
var state_35109__$1 = state_35109;
var statearr_35112_35138 = state_35109__$1;
(statearr_35112_35138[(2)] = null);

(statearr_35112_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (4))){
var inst_35075 = (state_35109[(7)]);
var inst_35075__$1 = (state_35109[(2)]);
var state_35109__$1 = (function (){var statearr_35113 = state_35109;
(statearr_35113[(7)] = inst_35075__$1);

return statearr_35113;
})();
if(cljs.core.truth_(inst_35075__$1)){
var statearr_35114_35139 = state_35109__$1;
(statearr_35114_35139[(1)] = (5));

} else {
var statearr_35115_35140 = state_35109__$1;
(statearr_35115_35140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (15))){
var inst_35090 = (state_35109[(8)]);
var inst_35088 = (state_35109[(9)]);
var inst_35092 = inst_35090.call(null,inst_35088);
var state_35109__$1 = state_35109;
var statearr_35116_35141 = state_35109__$1;
(statearr_35116_35141[(2)] = inst_35092);

(statearr_35116_35141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (13))){
var inst_35099 = (state_35109[(2)]);
var state_35109__$1 = state_35109;
var statearr_35117_35142 = state_35109__$1;
(statearr_35117_35142[(2)] = inst_35099);

(statearr_35117_35142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (6))){
var state_35109__$1 = state_35109;
var statearr_35118_35143 = state_35109__$1;
(statearr_35118_35143[(2)] = null);

(statearr_35118_35143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (17))){
var inst_35096 = (state_35109[(2)]);
var state_35109__$1 = state_35109;
var statearr_35119_35144 = state_35109__$1;
(statearr_35119_35144[(2)] = inst_35096);

(statearr_35119_35144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (3))){
var inst_35107 = (state_35109[(2)]);
var state_35109__$1 = state_35109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35109__$1,inst_35107);
} else {
if((state_val_35110 === (12))){
var state_35109__$1 = state_35109;
var statearr_35120_35145 = state_35109__$1;
(statearr_35120_35145[(2)] = null);

(statearr_35120_35145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (2))){
var state_35109__$1 = state_35109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35109__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35110 === (11))){
var inst_35080 = (state_35109[(10)]);
var inst_35086 = figwheel.client.file_reloading.blocking_load.call(null,inst_35080);
var state_35109__$1 = state_35109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35109__$1,(14),inst_35086);
} else {
if((state_val_35110 === (9))){
var inst_35080 = (state_35109[(10)]);
var state_35109__$1 = state_35109;
if(cljs.core.truth_(inst_35080)){
var statearr_35121_35146 = state_35109__$1;
(statearr_35121_35146[(1)] = (11));

} else {
var statearr_35122_35147 = state_35109__$1;
(statearr_35122_35147[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (5))){
var inst_35081 = (state_35109[(11)]);
var inst_35075 = (state_35109[(7)]);
var inst_35080 = cljs.core.nth.call(null,inst_35075,(0),null);
var inst_35081__$1 = cljs.core.nth.call(null,inst_35075,(1),null);
var state_35109__$1 = (function (){var statearr_35123 = state_35109;
(statearr_35123[(10)] = inst_35080);

(statearr_35123[(11)] = inst_35081__$1);

return statearr_35123;
})();
if(cljs.core.truth_(inst_35081__$1)){
var statearr_35124_35148 = state_35109__$1;
(statearr_35124_35148[(1)] = (8));

} else {
var statearr_35125_35149 = state_35109__$1;
(statearr_35125_35149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (14))){
var inst_35080 = (state_35109[(10)]);
var inst_35090 = (state_35109[(8)]);
var inst_35088 = (state_35109[(2)]);
var inst_35089 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35090__$1 = cljs.core.get.call(null,inst_35089,inst_35080);
var state_35109__$1 = (function (){var statearr_35126 = state_35109;
(statearr_35126[(8)] = inst_35090__$1);

(statearr_35126[(9)] = inst_35088);

return statearr_35126;
})();
if(cljs.core.truth_(inst_35090__$1)){
var statearr_35127_35150 = state_35109__$1;
(statearr_35127_35150[(1)] = (15));

} else {
var statearr_35128_35151 = state_35109__$1;
(statearr_35128_35151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (16))){
var inst_35088 = (state_35109[(9)]);
var inst_35094 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35088);
var state_35109__$1 = state_35109;
var statearr_35129_35152 = state_35109__$1;
(statearr_35129_35152[(2)] = inst_35094);

(statearr_35129_35152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (10))){
var inst_35101 = (state_35109[(2)]);
var state_35109__$1 = (function (){var statearr_35130 = state_35109;
(statearr_35130[(12)] = inst_35101);

return statearr_35130;
})();
var statearr_35131_35153 = state_35109__$1;
(statearr_35131_35153[(2)] = null);

(statearr_35131_35153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35110 === (8))){
var inst_35081 = (state_35109[(11)]);
var inst_35083 = eval(inst_35081);
var state_35109__$1 = state_35109;
var statearr_35132_35154 = state_35109__$1;
(statearr_35132_35154[(2)] = inst_35083);

(statearr_35132_35154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31367__auto__))
;
return ((function (switch__31272__auto__,c__31367__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31273__auto__ = null;
var figwheel$client$file_reloading$state_machine__31273__auto____0 = (function (){
var statearr_35133 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35133[(0)] = figwheel$client$file_reloading$state_machine__31273__auto__);

(statearr_35133[(1)] = (1));

return statearr_35133;
});
var figwheel$client$file_reloading$state_machine__31273__auto____1 = (function (state_35109){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_35109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e35134){if((e35134 instanceof Object)){
var ex__31276__auto__ = e35134;
var statearr_35135_35155 = state_35109;
(statearr_35135_35155[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35156 = state_35109;
state_35109 = G__35156;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31273__auto__ = function(state_35109){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31273__auto____1.call(this,state_35109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31273__auto____0;
figwheel$client$file_reloading$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31273__auto____1;
return figwheel$client$file_reloading$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__))
})();
var state__31369__auto__ = (function (){var statearr_35136 = f__31368__auto__.call(null);
(statearr_35136[(6)] = c__31367__auto__);

return statearr_35136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__))
);

return c__31367__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35158 = arguments.length;
switch (G__35158) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35160,callback){
var map__35161 = p__35160;
var map__35161__$1 = (((((!((map__35161 == null))))?(((((map__35161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35161):map__35161);
var file_msg = map__35161__$1;
var namespace = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35161,map__35161__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35161,map__35161__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35163){
var map__35164 = p__35163;
var map__35164__$1 = (((((!((map__35164 == null))))?(((((map__35164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35164):map__35164);
var file_msg = map__35164__$1;
var namespace = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35166){
var map__35167 = p__35166;
var map__35167__$1 = (((((!((map__35167 == null))))?(((((map__35167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35167):map__35167);
var file_msg = map__35167__$1;
var namespace = cljs.core.get.call(null,map__35167__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35169,callback){
var map__35170 = p__35169;
var map__35170__$1 = (((((!((map__35170 == null))))?(((((map__35170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35170):map__35170);
var file_msg = map__35170__$1;
var request_url = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31367__auto___35220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___35220,out){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___35220,out){
return (function (state_35205){
var state_val_35206 = (state_35205[(1)]);
if((state_val_35206 === (1))){
var inst_35179 = cljs.core.seq.call(null,files);
var inst_35180 = cljs.core.first.call(null,inst_35179);
var inst_35181 = cljs.core.next.call(null,inst_35179);
var inst_35182 = files;
var state_35205__$1 = (function (){var statearr_35207 = state_35205;
(statearr_35207[(7)] = inst_35180);

(statearr_35207[(8)] = inst_35181);

(statearr_35207[(9)] = inst_35182);

return statearr_35207;
})();
var statearr_35208_35221 = state_35205__$1;
(statearr_35208_35221[(2)] = null);

(statearr_35208_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (2))){
var inst_35188 = (state_35205[(10)]);
var inst_35182 = (state_35205[(9)]);
var inst_35187 = cljs.core.seq.call(null,inst_35182);
var inst_35188__$1 = cljs.core.first.call(null,inst_35187);
var inst_35189 = cljs.core.next.call(null,inst_35187);
var inst_35190 = (inst_35188__$1 == null);
var inst_35191 = cljs.core.not.call(null,inst_35190);
var state_35205__$1 = (function (){var statearr_35209 = state_35205;
(statearr_35209[(10)] = inst_35188__$1);

(statearr_35209[(11)] = inst_35189);

return statearr_35209;
})();
if(inst_35191){
var statearr_35210_35222 = state_35205__$1;
(statearr_35210_35222[(1)] = (4));

} else {
var statearr_35211_35223 = state_35205__$1;
(statearr_35211_35223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (3))){
var inst_35203 = (state_35205[(2)]);
var state_35205__$1 = state_35205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35205__$1,inst_35203);
} else {
if((state_val_35206 === (4))){
var inst_35188 = (state_35205[(10)]);
var inst_35193 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35188);
var state_35205__$1 = state_35205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35205__$1,(7),inst_35193);
} else {
if((state_val_35206 === (5))){
var inst_35199 = cljs.core.async.close_BANG_.call(null,out);
var state_35205__$1 = state_35205;
var statearr_35212_35224 = state_35205__$1;
(statearr_35212_35224[(2)] = inst_35199);

(statearr_35212_35224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (6))){
var inst_35201 = (state_35205[(2)]);
var state_35205__$1 = state_35205;
var statearr_35213_35225 = state_35205__$1;
(statearr_35213_35225[(2)] = inst_35201);

(statearr_35213_35225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35206 === (7))){
var inst_35189 = (state_35205[(11)]);
var inst_35195 = (state_35205[(2)]);
var inst_35196 = cljs.core.async.put_BANG_.call(null,out,inst_35195);
var inst_35182 = inst_35189;
var state_35205__$1 = (function (){var statearr_35214 = state_35205;
(statearr_35214[(12)] = inst_35196);

(statearr_35214[(9)] = inst_35182);

return statearr_35214;
})();
var statearr_35215_35226 = state_35205__$1;
(statearr_35215_35226[(2)] = null);

(statearr_35215_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31367__auto___35220,out))
;
return ((function (switch__31272__auto__,c__31367__auto___35220,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto____0 = (function (){
var statearr_35216 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35216[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto__);

(statearr_35216[(1)] = (1));

return statearr_35216;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto____1 = (function (state_35205){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_35205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e35217){if((e35217 instanceof Object)){
var ex__31276__auto__ = e35217;
var statearr_35218_35227 = state_35205;
(statearr_35218_35227[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35228 = state_35205;
state_35205 = G__35228;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto__ = function(state_35205){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto____1.call(this,state_35205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___35220,out))
})();
var state__31369__auto__ = (function (){var statearr_35219 = f__31368__auto__.call(null);
(statearr_35219[(6)] = c__31367__auto___35220);

return statearr_35219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___35220,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35229,opts){
var map__35230 = p__35229;
var map__35230__$1 = (((((!((map__35230 == null))))?(((((map__35230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35230):map__35230);
var eval_body = cljs.core.get.call(null,map__35230__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35230__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35232){var e = e35232;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35233_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35233_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35234){
var vec__35235 = p__35234;
var k = cljs.core.nth.call(null,vec__35235,(0),null);
var v = cljs.core.nth.call(null,vec__35235,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35238){
var vec__35239 = p__35238;
var k = cljs.core.nth.call(null,vec__35239,(0),null);
var v = cljs.core.nth.call(null,vec__35239,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35245,p__35246){
var map__35247 = p__35245;
var map__35247__$1 = (((((!((map__35247 == null))))?(((((map__35247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35247):map__35247);
var opts = map__35247__$1;
var before_jsload = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35248 = p__35246;
var map__35248__$1 = (((((!((map__35248 == null))))?(((((map__35248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35248):map__35248);
var msg = map__35248__$1;
var files = cljs.core.get.call(null,map__35248__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35248__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35248__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35402){
var state_val_35403 = (state_35402[(1)]);
if((state_val_35403 === (7))){
var inst_35265 = (state_35402[(7)]);
var inst_35264 = (state_35402[(8)]);
var inst_35262 = (state_35402[(9)]);
var inst_35263 = (state_35402[(10)]);
var inst_35270 = cljs.core._nth.call(null,inst_35263,inst_35265);
var inst_35271 = figwheel.client.file_reloading.eval_body.call(null,inst_35270,opts);
var inst_35272 = (inst_35265 + (1));
var tmp35404 = inst_35264;
var tmp35405 = inst_35262;
var tmp35406 = inst_35263;
var inst_35262__$1 = tmp35405;
var inst_35263__$1 = tmp35406;
var inst_35264__$1 = tmp35404;
var inst_35265__$1 = inst_35272;
var state_35402__$1 = (function (){var statearr_35407 = state_35402;
(statearr_35407[(7)] = inst_35265__$1);

(statearr_35407[(8)] = inst_35264__$1);

(statearr_35407[(9)] = inst_35262__$1);

(statearr_35407[(11)] = inst_35271);

(statearr_35407[(10)] = inst_35263__$1);

return statearr_35407;
})();
var statearr_35408_35491 = state_35402__$1;
(statearr_35408_35491[(2)] = null);

(statearr_35408_35491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (20))){
var inst_35305 = (state_35402[(12)]);
var inst_35313 = figwheel.client.file_reloading.sort_files.call(null,inst_35305);
var state_35402__$1 = state_35402;
var statearr_35409_35492 = state_35402__$1;
(statearr_35409_35492[(2)] = inst_35313);

(statearr_35409_35492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (27))){
var state_35402__$1 = state_35402;
var statearr_35410_35493 = state_35402__$1;
(statearr_35410_35493[(2)] = null);

(statearr_35410_35493[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (1))){
var inst_35254 = (state_35402[(13)]);
var inst_35251 = before_jsload.call(null,files);
var inst_35252 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35253 = (function (){return ((function (inst_35254,inst_35251,inst_35252,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35242_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35242_SHARP_);
});
;})(inst_35254,inst_35251,inst_35252,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35254__$1 = cljs.core.filter.call(null,inst_35253,files);
var inst_35255 = cljs.core.not_empty.call(null,inst_35254__$1);
var state_35402__$1 = (function (){var statearr_35411 = state_35402;
(statearr_35411[(14)] = inst_35252);

(statearr_35411[(15)] = inst_35251);

(statearr_35411[(13)] = inst_35254__$1);

return statearr_35411;
})();
if(cljs.core.truth_(inst_35255)){
var statearr_35412_35494 = state_35402__$1;
(statearr_35412_35494[(1)] = (2));

} else {
var statearr_35413_35495 = state_35402__$1;
(statearr_35413_35495[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (24))){
var state_35402__$1 = state_35402;
var statearr_35414_35496 = state_35402__$1;
(statearr_35414_35496[(2)] = null);

(statearr_35414_35496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (39))){
var inst_35355 = (state_35402[(16)]);
var state_35402__$1 = state_35402;
var statearr_35415_35497 = state_35402__$1;
(statearr_35415_35497[(2)] = inst_35355);

(statearr_35415_35497[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (46))){
var inst_35397 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35416_35498 = state_35402__$1;
(statearr_35416_35498[(2)] = inst_35397);

(statearr_35416_35498[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (4))){
var inst_35299 = (state_35402[(2)]);
var inst_35300 = cljs.core.List.EMPTY;
var inst_35301 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35300);
var inst_35302 = (function (){return ((function (inst_35299,inst_35300,inst_35301,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35243_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35243_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35243_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35243_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_35299,inst_35300,inst_35301,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35303 = cljs.core.filter.call(null,inst_35302,files);
var inst_35304 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35305 = cljs.core.concat.call(null,inst_35303,inst_35304);
var state_35402__$1 = (function (){var statearr_35417 = state_35402;
(statearr_35417[(17)] = inst_35301);

(statearr_35417[(12)] = inst_35305);

(statearr_35417[(18)] = inst_35299);

return statearr_35417;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35418_35499 = state_35402__$1;
(statearr_35418_35499[(1)] = (16));

} else {
var statearr_35419_35500 = state_35402__$1;
(statearr_35419_35500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (15))){
var inst_35289 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35420_35501 = state_35402__$1;
(statearr_35420_35501[(2)] = inst_35289);

(statearr_35420_35501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (21))){
var inst_35315 = (state_35402[(19)]);
var inst_35315__$1 = (state_35402[(2)]);
var inst_35316 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35315__$1);
var state_35402__$1 = (function (){var statearr_35421 = state_35402;
(statearr_35421[(19)] = inst_35315__$1);

return statearr_35421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35402__$1,(22),inst_35316);
} else {
if((state_val_35403 === (31))){
var inst_35400 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35402__$1,inst_35400);
} else {
if((state_val_35403 === (32))){
var inst_35355 = (state_35402[(16)]);
var inst_35360 = inst_35355.cljs$lang$protocol_mask$partition0$;
var inst_35361 = (inst_35360 & (64));
var inst_35362 = inst_35355.cljs$core$ISeq$;
var inst_35363 = (cljs.core.PROTOCOL_SENTINEL === inst_35362);
var inst_35364 = ((inst_35361) || (inst_35363));
var state_35402__$1 = state_35402;
if(cljs.core.truth_(inst_35364)){
var statearr_35422_35502 = state_35402__$1;
(statearr_35422_35502[(1)] = (35));

} else {
var statearr_35423_35503 = state_35402__$1;
(statearr_35423_35503[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (40))){
var inst_35377 = (state_35402[(20)]);
var inst_35376 = (state_35402[(2)]);
var inst_35377__$1 = cljs.core.get.call(null,inst_35376,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35378 = cljs.core.get.call(null,inst_35376,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35379 = cljs.core.not_empty.call(null,inst_35377__$1);
var state_35402__$1 = (function (){var statearr_35424 = state_35402;
(statearr_35424[(21)] = inst_35378);

(statearr_35424[(20)] = inst_35377__$1);

return statearr_35424;
})();
if(cljs.core.truth_(inst_35379)){
var statearr_35425_35504 = state_35402__$1;
(statearr_35425_35504[(1)] = (41));

} else {
var statearr_35426_35505 = state_35402__$1;
(statearr_35426_35505[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (33))){
var state_35402__$1 = state_35402;
var statearr_35427_35506 = state_35402__$1;
(statearr_35427_35506[(2)] = false);

(statearr_35427_35506[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (13))){
var inst_35275 = (state_35402[(22)]);
var inst_35279 = cljs.core.chunk_first.call(null,inst_35275);
var inst_35280 = cljs.core.chunk_rest.call(null,inst_35275);
var inst_35281 = cljs.core.count.call(null,inst_35279);
var inst_35262 = inst_35280;
var inst_35263 = inst_35279;
var inst_35264 = inst_35281;
var inst_35265 = (0);
var state_35402__$1 = (function (){var statearr_35428 = state_35402;
(statearr_35428[(7)] = inst_35265);

(statearr_35428[(8)] = inst_35264);

(statearr_35428[(9)] = inst_35262);

(statearr_35428[(10)] = inst_35263);

return statearr_35428;
})();
var statearr_35429_35507 = state_35402__$1;
(statearr_35429_35507[(2)] = null);

(statearr_35429_35507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (22))){
var inst_35319 = (state_35402[(23)]);
var inst_35318 = (state_35402[(24)]);
var inst_35323 = (state_35402[(25)]);
var inst_35315 = (state_35402[(19)]);
var inst_35318__$1 = (state_35402[(2)]);
var inst_35319__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35318__$1);
var inst_35320 = (function (){var all_files = inst_35315;
var res_SINGLEQUOTE_ = inst_35318__$1;
var res = inst_35319__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35319,inst_35318,inst_35323,inst_35315,inst_35318__$1,inst_35319__$1,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35244_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35244_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35319,inst_35318,inst_35323,inst_35315,inst_35318__$1,inst_35319__$1,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35321 = cljs.core.filter.call(null,inst_35320,inst_35318__$1);
var inst_35322 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35323__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35322);
var inst_35324 = cljs.core.not_empty.call(null,inst_35323__$1);
var state_35402__$1 = (function (){var statearr_35430 = state_35402;
(statearr_35430[(23)] = inst_35319__$1);

(statearr_35430[(24)] = inst_35318__$1);

(statearr_35430[(26)] = inst_35321);

(statearr_35430[(25)] = inst_35323__$1);

return statearr_35430;
})();
if(cljs.core.truth_(inst_35324)){
var statearr_35431_35508 = state_35402__$1;
(statearr_35431_35508[(1)] = (23));

} else {
var statearr_35432_35509 = state_35402__$1;
(statearr_35432_35509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (36))){
var state_35402__$1 = state_35402;
var statearr_35433_35510 = state_35402__$1;
(statearr_35433_35510[(2)] = false);

(statearr_35433_35510[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (41))){
var inst_35377 = (state_35402[(20)]);
var inst_35381 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35382 = cljs.core.map.call(null,inst_35381,inst_35377);
var inst_35383 = cljs.core.pr_str.call(null,inst_35382);
var inst_35384 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35383)].join('');
var inst_35385 = figwheel.client.utils.log.call(null,inst_35384);
var state_35402__$1 = state_35402;
var statearr_35434_35511 = state_35402__$1;
(statearr_35434_35511[(2)] = inst_35385);

(statearr_35434_35511[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (43))){
var inst_35378 = (state_35402[(21)]);
var inst_35388 = (state_35402[(2)]);
var inst_35389 = cljs.core.not_empty.call(null,inst_35378);
var state_35402__$1 = (function (){var statearr_35435 = state_35402;
(statearr_35435[(27)] = inst_35388);

return statearr_35435;
})();
if(cljs.core.truth_(inst_35389)){
var statearr_35436_35512 = state_35402__$1;
(statearr_35436_35512[(1)] = (44));

} else {
var statearr_35437_35513 = state_35402__$1;
(statearr_35437_35513[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (29))){
var inst_35355 = (state_35402[(16)]);
var inst_35319 = (state_35402[(23)]);
var inst_35318 = (state_35402[(24)]);
var inst_35321 = (state_35402[(26)]);
var inst_35323 = (state_35402[(25)]);
var inst_35315 = (state_35402[(19)]);
var inst_35351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35354 = (function (){var all_files = inst_35315;
var res_SINGLEQUOTE_ = inst_35318;
var res = inst_35319;
var files_not_loaded = inst_35321;
var dependencies_that_loaded = inst_35323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35351,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35353){
var map__35438 = p__35353;
var map__35438__$1 = (((((!((map__35438 == null))))?(((((map__35438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35438):map__35438);
var namespace = cljs.core.get.call(null,map__35438__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35351,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35355__$1 = cljs.core.group_by.call(null,inst_35354,inst_35321);
var inst_35357 = (inst_35355__$1 == null);
var inst_35358 = cljs.core.not.call(null,inst_35357);
var state_35402__$1 = (function (){var statearr_35440 = state_35402;
(statearr_35440[(16)] = inst_35355__$1);

(statearr_35440[(28)] = inst_35351);

return statearr_35440;
})();
if(inst_35358){
var statearr_35441_35514 = state_35402__$1;
(statearr_35441_35514[(1)] = (32));

} else {
var statearr_35442_35515 = state_35402__$1;
(statearr_35442_35515[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (44))){
var inst_35378 = (state_35402[(21)]);
var inst_35391 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35378);
var inst_35392 = cljs.core.pr_str.call(null,inst_35391);
var inst_35393 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35392)].join('');
var inst_35394 = figwheel.client.utils.log.call(null,inst_35393);
var state_35402__$1 = state_35402;
var statearr_35443_35516 = state_35402__$1;
(statearr_35443_35516[(2)] = inst_35394);

(statearr_35443_35516[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (6))){
var inst_35296 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35444_35517 = state_35402__$1;
(statearr_35444_35517[(2)] = inst_35296);

(statearr_35444_35517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (28))){
var inst_35321 = (state_35402[(26)]);
var inst_35348 = (state_35402[(2)]);
var inst_35349 = cljs.core.not_empty.call(null,inst_35321);
var state_35402__$1 = (function (){var statearr_35445 = state_35402;
(statearr_35445[(29)] = inst_35348);

return statearr_35445;
})();
if(cljs.core.truth_(inst_35349)){
var statearr_35446_35518 = state_35402__$1;
(statearr_35446_35518[(1)] = (29));

} else {
var statearr_35447_35519 = state_35402__$1;
(statearr_35447_35519[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (25))){
var inst_35319 = (state_35402[(23)]);
var inst_35335 = (state_35402[(2)]);
var inst_35336 = cljs.core.not_empty.call(null,inst_35319);
var state_35402__$1 = (function (){var statearr_35448 = state_35402;
(statearr_35448[(30)] = inst_35335);

return statearr_35448;
})();
if(cljs.core.truth_(inst_35336)){
var statearr_35449_35520 = state_35402__$1;
(statearr_35449_35520[(1)] = (26));

} else {
var statearr_35450_35521 = state_35402__$1;
(statearr_35450_35521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (34))){
var inst_35371 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
if(cljs.core.truth_(inst_35371)){
var statearr_35451_35522 = state_35402__$1;
(statearr_35451_35522[(1)] = (38));

} else {
var statearr_35452_35523 = state_35402__$1;
(statearr_35452_35523[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (17))){
var state_35402__$1 = state_35402;
var statearr_35453_35524 = state_35402__$1;
(statearr_35453_35524[(2)] = recompile_dependents);

(statearr_35453_35524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (3))){
var state_35402__$1 = state_35402;
var statearr_35454_35525 = state_35402__$1;
(statearr_35454_35525[(2)] = null);

(statearr_35454_35525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (12))){
var inst_35292 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35455_35526 = state_35402__$1;
(statearr_35455_35526[(2)] = inst_35292);

(statearr_35455_35526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (2))){
var inst_35254 = (state_35402[(13)]);
var inst_35261 = cljs.core.seq.call(null,inst_35254);
var inst_35262 = inst_35261;
var inst_35263 = null;
var inst_35264 = (0);
var inst_35265 = (0);
var state_35402__$1 = (function (){var statearr_35456 = state_35402;
(statearr_35456[(7)] = inst_35265);

(statearr_35456[(8)] = inst_35264);

(statearr_35456[(9)] = inst_35262);

(statearr_35456[(10)] = inst_35263);

return statearr_35456;
})();
var statearr_35457_35527 = state_35402__$1;
(statearr_35457_35527[(2)] = null);

(statearr_35457_35527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (23))){
var inst_35319 = (state_35402[(23)]);
var inst_35318 = (state_35402[(24)]);
var inst_35321 = (state_35402[(26)]);
var inst_35323 = (state_35402[(25)]);
var inst_35315 = (state_35402[(19)]);
var inst_35326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35328 = (function (){var all_files = inst_35315;
var res_SINGLEQUOTE_ = inst_35318;
var res = inst_35319;
var files_not_loaded = inst_35321;
var dependencies_that_loaded = inst_35323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35326,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35327){
var map__35458 = p__35327;
var map__35458__$1 = (((((!((map__35458 == null))))?(((((map__35458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35458):map__35458);
var request_url = cljs.core.get.call(null,map__35458__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35326,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35329 = cljs.core.reverse.call(null,inst_35323);
var inst_35330 = cljs.core.map.call(null,inst_35328,inst_35329);
var inst_35331 = cljs.core.pr_str.call(null,inst_35330);
var inst_35332 = figwheel.client.utils.log.call(null,inst_35331);
var state_35402__$1 = (function (){var statearr_35460 = state_35402;
(statearr_35460[(31)] = inst_35326);

return statearr_35460;
})();
var statearr_35461_35528 = state_35402__$1;
(statearr_35461_35528[(2)] = inst_35332);

(statearr_35461_35528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (35))){
var state_35402__$1 = state_35402;
var statearr_35462_35529 = state_35402__$1;
(statearr_35462_35529[(2)] = true);

(statearr_35462_35529[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (19))){
var inst_35305 = (state_35402[(12)]);
var inst_35311 = figwheel.client.file_reloading.expand_files.call(null,inst_35305);
var state_35402__$1 = state_35402;
var statearr_35463_35530 = state_35402__$1;
(statearr_35463_35530[(2)] = inst_35311);

(statearr_35463_35530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (11))){
var state_35402__$1 = state_35402;
var statearr_35464_35531 = state_35402__$1;
(statearr_35464_35531[(2)] = null);

(statearr_35464_35531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (9))){
var inst_35294 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35465_35532 = state_35402__$1;
(statearr_35465_35532[(2)] = inst_35294);

(statearr_35465_35532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (5))){
var inst_35265 = (state_35402[(7)]);
var inst_35264 = (state_35402[(8)]);
var inst_35267 = (inst_35265 < inst_35264);
var inst_35268 = inst_35267;
var state_35402__$1 = state_35402;
if(cljs.core.truth_(inst_35268)){
var statearr_35466_35533 = state_35402__$1;
(statearr_35466_35533[(1)] = (7));

} else {
var statearr_35467_35534 = state_35402__$1;
(statearr_35467_35534[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (14))){
var inst_35275 = (state_35402[(22)]);
var inst_35284 = cljs.core.first.call(null,inst_35275);
var inst_35285 = figwheel.client.file_reloading.eval_body.call(null,inst_35284,opts);
var inst_35286 = cljs.core.next.call(null,inst_35275);
var inst_35262 = inst_35286;
var inst_35263 = null;
var inst_35264 = (0);
var inst_35265 = (0);
var state_35402__$1 = (function (){var statearr_35468 = state_35402;
(statearr_35468[(7)] = inst_35265);

(statearr_35468[(8)] = inst_35264);

(statearr_35468[(9)] = inst_35262);

(statearr_35468[(32)] = inst_35285);

(statearr_35468[(10)] = inst_35263);

return statearr_35468;
})();
var statearr_35469_35535 = state_35402__$1;
(statearr_35469_35535[(2)] = null);

(statearr_35469_35535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (45))){
var state_35402__$1 = state_35402;
var statearr_35470_35536 = state_35402__$1;
(statearr_35470_35536[(2)] = null);

(statearr_35470_35536[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (26))){
var inst_35319 = (state_35402[(23)]);
var inst_35318 = (state_35402[(24)]);
var inst_35321 = (state_35402[(26)]);
var inst_35323 = (state_35402[(25)]);
var inst_35315 = (state_35402[(19)]);
var inst_35338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35340 = (function (){var all_files = inst_35315;
var res_SINGLEQUOTE_ = inst_35318;
var res = inst_35319;
var files_not_loaded = inst_35321;
var dependencies_that_loaded = inst_35323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35338,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35339){
var map__35471 = p__35339;
var map__35471__$1 = (((((!((map__35471 == null))))?(((((map__35471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35471):map__35471);
var namespace = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35338,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35341 = cljs.core.map.call(null,inst_35340,inst_35319);
var inst_35342 = cljs.core.pr_str.call(null,inst_35341);
var inst_35343 = figwheel.client.utils.log.call(null,inst_35342);
var inst_35344 = (function (){var all_files = inst_35315;
var res_SINGLEQUOTE_ = inst_35318;
var res = inst_35319;
var files_not_loaded = inst_35321;
var dependencies_that_loaded = inst_35323;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35338,inst_35340,inst_35341,inst_35342,inst_35343,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35319,inst_35318,inst_35321,inst_35323,inst_35315,inst_35338,inst_35340,inst_35341,inst_35342,inst_35343,state_val_35403,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35345 = setTimeout(inst_35344,(10));
var state_35402__$1 = (function (){var statearr_35473 = state_35402;
(statearr_35473[(33)] = inst_35343);

(statearr_35473[(34)] = inst_35338);

return statearr_35473;
})();
var statearr_35474_35537 = state_35402__$1;
(statearr_35474_35537[(2)] = inst_35345);

(statearr_35474_35537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (16))){
var state_35402__$1 = state_35402;
var statearr_35475_35538 = state_35402__$1;
(statearr_35475_35538[(2)] = reload_dependents);

(statearr_35475_35538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (38))){
var inst_35355 = (state_35402[(16)]);
var inst_35373 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35355);
var state_35402__$1 = state_35402;
var statearr_35476_35539 = state_35402__$1;
(statearr_35476_35539[(2)] = inst_35373);

(statearr_35476_35539[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (30))){
var state_35402__$1 = state_35402;
var statearr_35477_35540 = state_35402__$1;
(statearr_35477_35540[(2)] = null);

(statearr_35477_35540[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (10))){
var inst_35275 = (state_35402[(22)]);
var inst_35277 = cljs.core.chunked_seq_QMARK_.call(null,inst_35275);
var state_35402__$1 = state_35402;
if(inst_35277){
var statearr_35478_35541 = state_35402__$1;
(statearr_35478_35541[(1)] = (13));

} else {
var statearr_35479_35542 = state_35402__$1;
(statearr_35479_35542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (18))){
var inst_35309 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
if(cljs.core.truth_(inst_35309)){
var statearr_35480_35543 = state_35402__$1;
(statearr_35480_35543[(1)] = (19));

} else {
var statearr_35481_35544 = state_35402__$1;
(statearr_35481_35544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (42))){
var state_35402__$1 = state_35402;
var statearr_35482_35545 = state_35402__$1;
(statearr_35482_35545[(2)] = null);

(statearr_35482_35545[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (37))){
var inst_35368 = (state_35402[(2)]);
var state_35402__$1 = state_35402;
var statearr_35483_35546 = state_35402__$1;
(statearr_35483_35546[(2)] = inst_35368);

(statearr_35483_35546[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35403 === (8))){
var inst_35262 = (state_35402[(9)]);
var inst_35275 = (state_35402[(22)]);
var inst_35275__$1 = cljs.core.seq.call(null,inst_35262);
var state_35402__$1 = (function (){var statearr_35484 = state_35402;
(statearr_35484[(22)] = inst_35275__$1);

return statearr_35484;
})();
if(inst_35275__$1){
var statearr_35485_35547 = state_35402__$1;
(statearr_35485_35547[(1)] = (10));

} else {
var statearr_35486_35548 = state_35402__$1;
(statearr_35486_35548[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31272__auto__,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto____0 = (function (){
var statearr_35487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35487[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto__);

(statearr_35487[(1)] = (1));

return statearr_35487;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto____1 = (function (state_35402){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_35402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e35488){if((e35488 instanceof Object)){
var ex__31276__auto__ = e35488;
var statearr_35489_35549 = state_35402;
(statearr_35489_35549[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35550 = state_35402;
state_35402 = G__35550;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto__ = function(state_35402){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto____1.call(this,state_35402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31369__auto__ = (function (){var statearr_35490 = f__31368__auto__.call(null);
(statearr_35490[(6)] = c__31367__auto__);

return statearr_35490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__,map__35247,map__35247__$1,opts,before_jsload,on_jsload,reload_dependents,map__35248,map__35248__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31367__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35553,link){
var map__35554 = p__35553;
var map__35554__$1 = (((((!((map__35554 == null))))?(((((map__35554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35554):map__35554);
var file = cljs.core.get.call(null,map__35554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__35554,map__35554__$1,file){
return (function (p1__35551_SHARP_,p2__35552_SHARP_){
if(cljs.core._EQ_.call(null,p1__35551_SHARP_,p2__35552_SHARP_)){
return p1__35551_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__35554,map__35554__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35557){
var map__35558 = p__35557;
var map__35558__$1 = (((((!((map__35558 == null))))?(((((map__35558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35558):map__35558);
var match_length = cljs.core.get.call(null,map__35558__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35558__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35556_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35556_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35560_SHARP_,p2__35561_SHARP_){
return cljs.core.assoc.call(null,p1__35560_SHARP_,cljs.core.get.call(null,p2__35561_SHARP_,key),p2__35561_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35562 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35562);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35562);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35563,p__35564){
var map__35565 = p__35563;
var map__35565__$1 = (((((!((map__35565 == null))))?(((((map__35565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35565):map__35565);
var on_cssload = cljs.core.get.call(null,map__35565__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35566 = p__35564;
var map__35566__$1 = (((((!((map__35566 == null))))?(((((map__35566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35566):map__35566);
var files_msg = map__35566__$1;
var files = cljs.core.get.call(null,map__35566__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1548047568296
