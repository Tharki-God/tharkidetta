(function(K,e,O,m,q,n,d,G,g){"use strict";const C={hiddenChannelIcon:"lock",faded:!1,sort:"native",showPerms:!0,showAdmin:"exclude",stopMarkingUnread:!1,shouldShowEmptyCategory:!0,alwaysCollapse:!1,debugMode:!1,channels:{GUILD_TEXT:!0,GUILD_VOICE:!0,GUILD_ANNOUNCEMENT:!0,GUILD_STORE:!0,GUILD_STAGE_VOICE:!0,GUILD_FORUM:!0},blacklistedGuilds:{},collapsed:{}},J=d.findByStoreName("PermissionStore"),{ChannelRecordBase:Q}=d.findByProps("ChannelRecordBase")??{},T=d.findByStoreName("ChannelStore"),$=d.findByProps("isCollapsed","getCollapsedCategories"),ee=d.findByStoreName("GuildStore"),fe=d.findByStoreName("GuildMemberStore"),ge=d.findByStoreName("ChannelListStore"),te=d.findByProps("getChannels","getDefaultChannel"),ne=d.findByStoreName("UserGuildSettingsStore"),ae=d.findByStoreName("UserStore"),Ce=d.findByProps("jumpToMessage","_sendMessage"),U=d.findByProps("isForumPostUnread"),Y=d.findByName("BaseChannelItem",!1),I=d.findByProps("ChannelTypes","Permissions"),B=d.findByName("Svg",!1),ye=d.findByName("DrawerTabBar",!1),pe=d.findByName("Navigator",!1),Re=d.findByStoreName("SelectedGuildStore"),Ee=d.findByStoreName("SelectedChannelStore"),re=d.findByName("ThemedRolePill"),V=d.findByProps("deserialize","invert","has"),se=Object.assign({},d.findByProps("fetchProfile","getUser"),d.findByProps("showUserProfile")),we=d.findByProps("isRoleHigher","makeEveryoneOverwrite"),be=d.findByProps("parseTopic","parseInlineReply"),oe=d.findByProps("getGuildIconURL","getDefaultAvatarURL"),W=d.findByProps("categoryCollapse","categoryCollapseAll");d.findByProps("transitionToChannel","transitionToPrivateChannel");const{View:ie}=m.General;var X=e.React.memo(function(t){n.storage.hiddenChannelIcon??=C.hiddenChannelIcon,n.storage.faded??=C.faded;const a=e.stylesheet.createThemedStyleSheet({view:{verticalAlign:"center",justifyContent:"center",alignItems:"center",marginLeft:5},svg:{color:n.storage.faded?e.constants?.ThemeColorMap?.INTERACTIVE_MUTED??"#D1D1D1D1":e.constants?.ThemeColorMap?.CHANNELS_DEFAULT??"#D1D1D1"}});return n.storage.hiddenChannelIcon==="lock"?e.React.createElement(ie,{style:a.view},e.React.createElement(B.Svg,{width:t.width??16,height:t.height??16,viewBox:"0 0 24 24"},e.React.createElement(B.G,{stroke:"none",fill:a.svg.color},e.React.createElement(B.Path,{d:"M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"})))):n.storage.hiddenChannelIcon==="eye"?e.React.createElement(ie,{style:a.view},e.React.createElement(B.Svg,{width:t.width??16,height:t.height??16,viewBox:"0 0 24 24"},e.React.createElement(B.G,{stroke:"none",fill:a.svg.color},e.React.createElement(B.Path,{d:"M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"}),e.React.createElement(B.Path,{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"}),e.React.createElement(B.Polygon,{points:"22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "})))):null});const le=function(t){return`${t.charAt(0).toUpperCase()}${t.substring(1).toLowerCase()}`},Se=function(t,a){return Math.floor(Math.random()*(a-t+1)+t)},Ae=function(t){t=Number(t);const a=Math.floor(t/3600),s=Math.floor(t%3600/60),r=Math.floor(t%3600%60),c=a>0?`${a}${a===1?" hour":" hours"}`:"",y=s>0?`${s}${s===1?" minute":" minutes"}`:"",i=r>0?`${r}${r===1?" second":" seconds"}`:"";return c+y+i},me=function(t){try{const a=parseInt(t,10).toString(2).padStart(64,"0").substring(0,42),s=parseInt(a,2)+14200704e5;return new Date(s).toLocaleString()}catch{return"(Failed to get date)"}},Ie=function(t){for(const a of t)a.shouldShowEmptyCategory=function(){return!0}},z=function(t){if(!t)return;const a=Object.values(t.channels);t.shownChannelIds=a.sort(function(s,r){const c=s.record.position+(s.record.isGuildVocal()?1e4:0)+(s.record.isHidden()?1e5:0),y=r.record.position+(r.record.isGuildVocal()?1e4:0)+(r.record.isHidden()?1e5:0);return c<y?-1:c>y?1:0}).map(function(s){return s.id})},ce=function(t){if(!t)return{channels:[],amount:0};const a=T.getMutableGuildChannelsForGuild(t),s=Object.values(a).filter(function(r){return r.isHidden()&&r.type!==I.ChannelTypes.GUILD_CATEGORY});return{channels:s,amount:s.length}},F={},De=function(t,a){const s=ce(a);F[a]||(F[a]=[]);for(const r of t){const c=Object.entries(r.channels).map(function(y){let[i,R]=y;return s.channels.some(function(h){return h.id===i})?(F[a].some(function(h){return h[0]===i})||F[a].push([i,R]),!1):[i,R]}).filter(Boolean);r.channels=Object.fromEntries(c)}return{records:Object.fromEntries(F[a]),...s}},w=function(){G.findInTree(d.common.FluxDispatcher,function(t){return t?.name==="PermissionStore"&&t?.actionHandler?.name==="handleConnectionOpen"},{}).actionHandler(),G.findInTree(d.common.FluxDispatcher,function(t){return t?.name==="ChannelListStore"&&t?.actionHandler?.name==="handleReset"},{}).actionHandler()},{ScrollView:Pe}=m.General,{FormRow:S,FormRadioRow:H,FormSwitchRow:j}=m.Forms;var Te=e.React.memo(function(){return n.storage.hiddenChannelIcon??=C.hiddenChannelIcon,n.storage.faded??=C.faded,n.storage.sort??=C.sort,n.storage.showPerms??=C.showPerms,n.storage.showAdmin??=C.showAdmin,n.storage.stopMarkingUnread??=C.stopMarkingUnread,n.storage.alwaysCollapse??=C.alwaysCollapse,n.storage.shouldShowEmptyCategory??=C.shouldShowEmptyCategory,q.useProxy(n.storage),e.React.createElement(Pe,null,e.React.createElement(S,{label:"Hidden Channel Icon",subLabel:"What icon to show as indicator for hidden channels.",leading:e.React.createElement(X,{width:24,height:24,key:n.storage.hiddenChannelIcon})}),e.React.createElement(H,{label:"Lock Icon",onPress:function(){n.storage.hiddenChannelIcon="lock",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.hiddenChannelIcon==="lock",style:{marginHorizontal:12}}),e.React.createElement(H,{label:"Eye Icon",onPress:function(){n.storage.hiddenChannelIcon="eye",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.hiddenChannelIcon==="eye",style:{marginHorizontal:12}}),e.React.createElement(H,{label:"None",onPress:function(){n.storage.hiddenChannelIcon="false",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.hiddenChannelIcon==="false",style:{marginHorizontal:12}}),e.React.createElement(j,{label:"Faded Channel",subLabel:"Fade away hidden channel like if they are muted.",value:n.storage.faded,onValueChange:function(t){n.storage.faded=t,w()},note:""}),e.React.createElement(S,{label:"Sorting Order",subLabel:"Where to display Hidden Channels.",leading:e.React.createElement(S.Icon,{source:O.getAssetIDByName("ic_forum_channel_sort_order_24px")})}),e.React.createElement(H,{label:"Hidden Channels in the native Discord order (default)",onPress:function(){n.storage.sort="native",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.sort==="native",style:{marginHorizontal:12}}),e.React.createElement(H,{label:"Hidden Channels at the bottom of the Category",onPress:function(){n.storage.sort="bottom",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.sort==="bottom",style:{marginHorizontal:12}}),e.React.createElement(H,{label:"Hidden Channels in a separate Category at the bottom",onPress:function(){n.storage.sort="extra",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.sort==="extra",style:{marginHorizontal:12}}),e.React.createElement(j,{label:"Show Permissions",subLabel:"Show what roles/users can access the hidden channel.",value:n.storage.showPerms,onValueChange:function(t){n.storage.showPerms=t,w()},note:""}),e.React.createElement(S,{label:"Show Admin Roles",subLabel:"Show roles that have ADMINISTRATOR permission in the hidden channel page (requires 'Shows Permission' enabled).",leading:e.React.createElement(S.Icon,{source:O.getAssetIDByName("ic_progress_wrench_24px")})}),e.React.createElement(H,{label:"Show only channel specific roles",onPress:function(){n.storage.showAdmin="channel",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.showAdmin==="channel",style:{marginHorizontal:12}}),e.React.createElement(H,{label:"Include Bot Roles",onPress:function(){n.storage.showAdmin="include",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.showAdmin==="include",style:{marginHorizontal:12}}),e.React.createElement(H,{label:"Exclude Bot Roles",onPress:function(){n.storage.showAdmin="exclude",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.showAdmin==="exclude",style:{marginHorizontal:12}}),e.React.createElement(H,{label:"Don't Show Administrator Roles",onPress:function(){n.storage.showAdmin="false",w()},trailing:e.React.createElement(S.Arrow,null),selected:n.storage.showAdmin==="false",style:{marginHorizontal:12}}),e.React.createElement(j,{label:"Stop marking hidden channels as read",subLabel:"Stops the plugin from marking hidden channels as read.",value:n.storage.stopMarkingUnread,onValueChange:function(t){n.storage.stopMarkingUnread=t,w()},note:""}),e.React.createElement(j,{label:"Collapse Hidden Category",subLabel:"Collapse hidden category by default (requires sorting order as extra category).",value:n.storage.alwaysCollapse,onValueChange:function(t){n.storage.alwaysCollapse=t,w()},note:""}),e.React.createElement(j,{label:"Show Empty Category",subLabel:"Show Empty Category either because there were no channels in it or all channels are under hidden channels category.",value:n.storage.shouldShowEmptyCategory,onValueChange:function(t){n.storage.shouldShowEmptyCategory=t,w()},note:""}))});const{ScrollView:Me}=m.General,{FormSwitchRow:ve}=m.Forms;var Ne=e.React.memo(function(){return n.storage.channels??=C.channels,q.useProxy(n.storage),e.React.createElement(Me,null,...Object.keys(n.storage.channels).map(function(t){return e.React.createElement(ve,{label:`Show ${le(t.split("_")[1])}${t.split("_").length===3?` ${le(t.split("_")[2])}`:""} Channels`,value:n.storage.channels[t],onValueChange:function(a){n.storage.channels[t]=a,w()},note:""})}))});const{ScrollView:He,Image:_e}=m.General,{FormRow:Le,FormSwitch:Ge}=m.Forms;var Ue=e.React.memo(function(){n.storage.blacklistedGuilds??=C.blacklistedGuilds,q.useProxy(n.storage);const[t,a]=e.React.useState([]);return e.React.createElement(He,{style:{flex:1}},e.React.createElement(m.Search,{style:{padding:15},placeholder:"Search guilds",onChangeText:function(s){return a(s.split(" "))}}),...Object.values(ee.getGuilds()).filter(function(s){return t?t.every(function(r){return s?.name?.toLowerCase().includes(r.toLowerCase())})||t.every(function(r){return s?.description?.toLowerCase().includes(r.toLowerCase())})||t.some(function(r){return s?.name?.toLowerCase().includes(r.toLowerCase())})&&t.some(function(r){return s?.description?.toLowerCase().includes(r.toLowerCase())})||t.some(function(r){return s?.id?.includes(r)}):!0}).sort(function(s,r){return s.name.localeCompare(r.name)}).map(function(s){return e.React.createElement(Le,{label:s.name,subLabel:"Allows you to tap double tap on any messages to reply to them.",leading:e.React.createElement(_e,{style:{borderRadius:120,height:24,width:24},source:{uri:oe.getGuildIconURL(s)??oe.getDefaultAvatarURL(Se(0,69))}}),trailing:e.React.createElement(Ge,{value:n.storage.blacklistedGuilds[s.id],onValueChange:function(){n.storage.blacklistedGuilds[s.id]=!n.storage.blacklistedGuilds[s.id],w()}})})}))});const{BundleUpdaterManager:Be}=window.nativeModuleProxy??{},{ScrollView:Oe}=m.General,{FormRow:M}=m.Forms;var ke=e.React.memo(function(){const t=e.NavigationNative.useNavigation();return e.React.createElement(Oe,null,e.React.createElement(M,{label:"General Settings",leading:e.React.createElement(M.Icon,{source:O.getAssetIDByName("ic_settings")}),trailing:function(){return e.React.createElement(M.Arrow,null)},onPress:function(){return t.push("VendettaCustomPage",{title:"General Settings",render:Te})}}),e.React.createElement(M,{label:"Choose what channels you want to display",leading:e.React.createElement(M.Icon,{source:O.getAssetIDByName("ic_forum_channel_locked")}),trailing:function(){return e.React.createElement(M.Arrow,null)},onPress:function(){return t.push("VendettaCustomPage",{title:"Choose what channels you want to display",render:Ne})}}),e.React.createElement(M,{label:"Guilds Blacklist",leading:e.React.createElement(M.Icon,{source:O.getAssetIDByName("ic_guild_grid_24px")}),trailing:function(){return e.React.createElement(M.Arrow,null)},onPress:function(){return t.push("VendettaCustomPage",{title:"Guilds Blacklist",render:Ue})}}),e.React.createElement(M,{label:"Reload Discord",leading:e.React.createElement(M.Icon,{source:O.getAssetIDByName("ic_message_retry")}),onPress:function(){return Be.reload()}}))});function xe(){const t=J?.can?.prototype?.constructor;Q.prototype.isHidden??=function(){for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];const{type:c}=this;return![1,3].includes(c)&&!t?.(e.constants.Permissions.VIEW_CHANNEL,this)}}function Ve(){n.storage.collapsed??=C.collapsed,n.storage.alwaysCollapse??=C.alwaysCollapse,n.storage.sort??=C.sort,n.storage.blacklistedGuilds??=C.blacklistedGuilds,n.storage.shouldShowEmptyCategory??=C.shouldShowEmptyCategory;const t=g.after("getCollapsedCategories",$,function(o,l){return{...l,...n.storage.collapsed}});u.push(t);const a=g.after("isCollapsed",$,function(o,l){return o[0]?.endsWith("hidden")?n.storage.alwaysCollapse?n.storage.alwaysCollapse&&n.storage.collapsed[o[0]]!==!1:n.storage.collapsed[o[0]]:l});u.push(a);const s=g.after("categoryCollapse",W,function(o,l){if(!o[0]?.endsWith("hidden")||n.storage.collapsed[o[0]])return l;const f=n.storage.collapsed;f[o[0]]=!0,n.storage.collapsed=f});u.push(s);const r=g.after("categoryCollapseAll",W,function(o,l){if(n.storage.collapsed[`${o[0]}_hidden`])return l;const f=n.storage.collapsed;f[`${o[0]}_hidden`]=!0,n.storage.collapsed=f});u.push(r);const c=g.after("categoryExpand",W,function(o,l){if(!o[0]?.endsWith("hidden"))return l;const f=n.storage.collapsed;f[o[0]]=!1,n.storage.collapsed=f});u.push(c);const y=g.after("categoryExpandAll",W,function(o){const l=n.storage.collapsed;l[`${o[0]}_hidden`]=!1,n.storage.collapsed=l});u.push(y);const i=g.after("getChannels",te,function(o,l){const f=l[I.ChannelTypes.GUILD_CATEGORY],D=`${o[0]}_hidden`,v=f?.find(function(p){return p.channel.id==D});if(!v)return l;const P=f.filter(function(p){return p.channel.id!==D}),L=(P[P.length-1]||{comparator:0}).comparator+1;return Object.defineProperty(v.channel,"position",{value:L,writable:!0}),Object.defineProperty(v,"comparator",{value:L,writable:!0}),l});u.push(i);const R=g.after("getMutableGuildChannelsForGuild",T,function(o,l){if(n.storage.sort!=="extra"||n.storage.blacklistedGuilds[o[0]])return l;const f=`${o[0]}_hidden`,D=new Q({guild_id:o[0],id:f,name:"Hidden Channels",type:I.ChannelTypes.GUILD_CATEGORY}),v=te.getChannels(o[0])[I.ChannelTypes.GUILD_CATEGORY];return Object.defineProperty(D,"position",{value:(v[v.length-1]||{comparator:0}).comparator+1,writable:!0}),l[f]||(l[f]=D),l});u.push(R);const h=g.after("getGuild",ge,function(o,l){if(n.storage.blacklistedGuilds[o[0]])return l;switch(n.storage.sort){case"bottom":{z(l.guildChannels.favoritesCategory),z(l.guildChannels.recentsCategory),z(l.guildChannels.noParentCategory);for(const f in l.guildChannels.categories)z(l.guildChannels.categories[f]);break}case"extra":{const f=`${o[0]}_hidden`,D=l.guildChannels.categories[f],v=De([l.guildChannels.favoritesCategory,l.guildChannels.recentsCategory,l.guildChannels.noParentCategory,...Object.values(l.guildChannels.categories).filter(function(P){return P.id!==f})],o[0]);D.channels=Object.fromEntries(Object.entries(v.records).map(function(P){let[L,p]=P;return p.category=D,[L,p]})),D.isCollapsed=n.storage.alwaysCollapse&&n.storage.collapsed[f]!==!1,D.shownChannelIds=n.storage.collapsed[f]||l.guildChannels.collapsedCategoryIds[f]||D.isCollapsed?[]:v.channels.sort(function(P,L){const p=P.position+(P.isGuildVocal()?1e4:1e5),b=L.position+(L.isGuildVocal()?1e4:1e5);return p<b?-1:p>b?1:0}).map(function(P){return P.id});break}}return n.storage.shouldShowEmptyCategory&&Ie([...Object.values(l.guildChannels.categories).filter(function(f){return!f.id.includes("hidden")})]),l});u.push(h)}function Fe(){const t=g.instead("fetchMessages",Ce,function(a,s){if(!T.getChannel(a[0].channelId)?.isHidden?.())return s.call(this,...a)});u.push(t)}function je(){n.storage.blacklistedGuilds??=C.blacklistedGuilds,n.storage.channels??=C.channels;const t=g.after("can",J,function(a,s){return a[1]?.isHidden?.()?a[0]==I.Permissions.VIEW_CHANNEL?!n.storage.blacklistedGuilds[a[1].guild_id]&&n.storage.channels[I.ChannelTypes[a[1].type]]:a[0]==I.Permissions.CONNECT?!1:s:s});u.push(t)}function Ye(){n.storage.stopMarkingUnread??=C.stopMarkingUnread;const t=g.after("getGuildChannelUnreadState",U,function(h,o){return h[0]?.isHidden?.()&&n.storage.stopMarkingUnread?{mentionCount:0,hasNotableUnread:!1}:o});u.push(t);const a=g.after("getMentionCount",U,function(h,o){return T.getChannel(h[0])?.isHidden?.()&&n.storage.stopMarkingUnread?0:o});u.push(a);const s=g.after("getUnreadCount",U,function(h,o){return T.getChannel(h[0])?.isHidden?.()&&n.storage.stopMarkingUnread?0:o});u.push(s);const r=g.after("hasNotableUnread",U,function(h,o){return o&&!T.getChannel(h[0])?.isHidden?.()&&n.storage.stopMarkingUnread});u.push(r);const c=g.after("hasRelevantUnread",U,function(h,o){return o&&!h[0].isHidden?.()&&n.storage.stopMarkingUnread});u.push(c);const y=g.after("hasTrackedUnread",U,function(h,o){return o&&!T.getChannel(h[0])?.isHidden?.()&&n.storage.stopMarkingUnread});u.push(y);const i=g.after("hasUnread",U,function(h,o){return o&&!T.getChannel(h[0])?.isHidden?.()&&n.storage.stopMarkingUnread});u.push(i);const R=g.after("hasUnreadPins",U,function(h,o){return o&&!T.getChannel(h[0])?.isHidden?.()&&n.storage.stopMarkingUnread});u.push(R)}const{View:de,Text:he,Image:We,Pressable:ze}=m.General;var Ze=e.React.memo(function(t){const a=e.stylesheet.createThemedStyleSheet({container:{minHeight:45,flexDirection:"row",marginVertical:10,justifyContent:"center",alignItems:"center"},avatarContainer:{width:32,height:32,borderRadius:16,overflow:"hidden"},avatar:{width:42,height:42},infoContainer:{marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"center"},username:{color:e.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1",fontSize:20,fontWeight:"bold"},discriminator:{fontSize:16,color:e.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1"}});return e.React.createElement(ze,{accessibilityRole:"button",style:a.container,onPress:function(){return se.showUserProfile({userId:t.user.id})},android_ripple:{color:"#ffffff12"},accessibilityLabel:t.user.username,accessibilityHint:"Double tap to view profile"},e.React.createElement(de,{style:a.avatarContainer},e.React.createElement(We,{source:t.user.getAvatarSource(),style:a.avatar})),e.React.createElement(de,{style:a.infoContainer},e.React.createElement(he,{style:a.username},t.user.username),t.user.discriminator!=="0"&&e.React.createElement(he,{style:a.discriminator},"#",t.user.discriminator)))});const{View:_,Text:A,ScrollView:Ke,Image:qe,Pressable:Xe}=m.General;var Je=e.React.memo(function(t){n.storage.showAdmin??=C.showAdmin,n.storage.showPerms??=C.showPerms;const a=e.stylesheet.createThemedStyleSheet({image:{width:100,height:100,padding:5,marginBottom:15},container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:e.constants.ThemeColorMap?.BACKGROUND_PRIMARY??"#00000000"},none:{color:e.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1",fontSize:14,fontFamily:e.constants.Fonts?.PRIMARY_SEMIBOLD,marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25,paddingTop:5,textAlign:"center"},permissionContainer:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:e.constants.ThemeColorMap?.BACKGROUND_SECONDARY_ALT??"#00000010"},header:{color:e.constants.ThemeColorMap?.HEADER_PRIMARY??"#D1D1D1",fontFamily:e.constants.Fonts?.PRIMARY_SEMIBOLD,fontWeight:"bold",fontSize:24},description:{color:e.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1",fontSize:16,fontFamily:e.constants.Fonts?.PRIMARY_SEMIBOLD,marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25,paddingTop:5,textAlign:"center"},topicContainer:{backgroundColor:e.constants.ThemeColorMap?.BACKGROUND_TERTIARY??"#000000F0",maxWidth:"90%"},topicRowContainer:{maxWidth:"89%",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",marginBottom:10},topicText:{margin:5,color:e.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1"},moreInfo:{marginTop:5},permissionHeader:{color:e.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1",fontSize:16,fontFamily:e.constants.Fonts?.PRIMARY_MEDIUM,marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25,paddingTop:5,textAlign:"center",marginTop:5},permissionHeaderBorder:{borderTopWidth:1},mentionContainer:{marginTop:2.5,marginBottom:2.5},roleContainer:{paddingTop:2.5,flexDirection:"column",justifyContent:"center"},tagContainer:{marginTop:5,backgroundColor:e.constants.ThemeColorMap?.BACKGROUND_SECONDARY_ALT??"#00000010",padding:10,borderRadius:5,color:e.constants.ThemeColorMap?.HEADER_SECONDARY??"#D1D1D1"},tag:{color:e.constants.ThemeColorMap?.HEADER_PRIMARY??"#D1D1D1",fontFamily:e.constants.Fonts?.PRIMARY_SEMIBOLD,fontWeight:"bold",fontSize:16,marginTop:5,textAlign:"center",marginLeft:2.5,marginRight:2.5,paddingLeft:25,paddingRight:25}}),[s,r]=e.React.useState(null),[c,y]=e.React.useState(!1),[i,R]=e.React.useState([]),[h,o]=e.React.useState([]),[l,f]=e.React.useState([]),D=function(){if(!t.channel.topic)return;const p=be.parseTopic(t.channel.topic),b=[],E=[];if(!p)return;for(const k of p)if(typeof k=="string"&&k.includes(`
`)){const Z=k.split(`
`);for(const x of Z)b.push(x),E.push([...b]),b.length=0}else b.push(k);b.length&&E?.push(b),c||E?.splice(2,0,["Click to View More..."]);const N=E?.slice(0,c?E.length:3)?.map(function(k,Z){return e.React.createElement(_,{key:Z,style:a.topicRowContainer},k.map(function(x,st){return typeof x=="string"?e.React.createElement(A,{key:`${st}${Z}`,style:x==="Click to View More..."?{fontWeight:"bold",fontFamily:e.constants.Fonts?.PRIMARY_SEMIBOLD,...a.topicText}:a.topicText},x):x}))}),rt=e.React.createElement(Xe,{accessibilityRole:"button",style:a.container,onPress:function(){return y(!c)},android_ripple:{color:"#ffffff12"},accessibilityLabel:"Channel Topic"},e.React.createElement(_,{style:a.topicContainer},N));r(rt)},v=function(){const p=Object.values(t.channel.permissionOverwrites).filter(function(E){return E&&E?.type===0&&(n.storage.showAdmin!=="false"&&V.has(t.guild.roles[E.id].permissions,I.Permissions.ADMINISTRATOR)||V.has(E.allow,I.Permissions.VIEW_CHANNEL)||V.has(t.guild.roles[E.id].permissions,I.Permissions.VIEW_CHANNEL)&&!V.has(E.deny,I.Permissions.VIEW_CHANNEL))});if(!p?.length)return R([e.React.createElement(A,{style:a.none},"None")]);const b=p.map(function(E){return e.React.createElement(re,{guildId:t.guild.id,role:t.guild.roles[E.id]})});return R(b)},P=function(){if(n.storage.showAdmin==="false")return o([e.React.createElement(A,{style:a.none},"None")]);const p=Object.values(t.guild.roles).filter(function(E){return V.has(E.permissions,I.Permissions.ADMINISTRATOR)&&(n.storage.showAdmin==="include"||n.storage.showAdmin==="exclude"&&!E.tags?.bot_id)});if(!p?.length)return o([e.React.createElement(A,{style:a.none},"None")]);const b=p.map(function(E){return e.React.createElement(re,{guildId:t.guild.id,role:t.guild.roles[E.id]})});return o(b)},L=async function(){const p=Object.values(t.channel.permissionOverwrites).filter(function(N){return Boolean(N&&N?.type===1)});for(const N of p)await se.fetchProfile(N.id,{guildId:t.guild.id,withMutualGuilds:!1});const b=Object.values(t.channel.permissionOverwrites).filter(function(N){return Boolean(we.can({permission:I.Permissions.VIEW_CHANNEL,user:ae.getUser(N.id),context:t.channel})&&fe.isMember(t.guild.id,N.id))});if(!b?.length)return f([e.React.createElement(A,{style:a.none},"None")]);const E=b.map(function(N){return e.React.createElement(Ze,{user:ae.getUser(N.id),guild:t.guild})});return f(E)};return e.React.useEffect(function(){D()},[t.channel.topic,c]),e.React.useEffect(function(){v(),P(),L()},[t.channel.id]),e.React.createElement(_,{style:a.container},e.React.createElement(Ke,null,e.React.createElement(_,{style:a.container},e.React.createElement(qe,{style:a.image,source:{uri:"https://tharki-god.github.io/files-random-host/unknown%20copy.png"}}),e.React.createElement(A,{style:a.header},"This is a hidden channel."),e.React.createElement(A,{style:a.description},"You cannot see the contents of this channel.",t.channel.topic&&` However, you may see its ${t.channel.type!==15?"topic":"guidelines"}.`),s,t.channel.lastMessageId&&e.React.createElement(A,{style:{...a.description,...a.moreInfo}},"Last message sent:"," ",me(t.channel.lastMessageId)),t.channel.rateLimitPerUser>0&&e.React.createElement(A,{style:{...a.description,...a.moreInfo}},"Slowmode:",Ae(t.channel.rateLimitPerUser)),t.channel.nsfw&&e.React.createElement(A,{style:{...a.description,...a.moreInfo}},"Age-Restricted Channel (NSFW) \u{1F51E}"),n.storage.showPerms&&t.channel.permissionOverwrites&&e.React.createElement(_,{style:a.permissionContainer},e.React.createElement(A,{style:a.permissionHeader},"Users that can see this channel:"),e.React.createElement(_,{style:a.mentionContainer},l),e.React.createElement(A,{style:{...a.permissionHeader,...a.permissionHeaderBorder}},"Channel-specific roles:"),e.React.createElement(_,{style:a.roleContainer},i),n.storage.showAdmin!=="false"&&n.storage.showAdmin!=="channel"&&e.React.createElement(_,null,e.React.createElement(A,{style:{...a.permissionHeader,...a.permissionHeaderBorder}},"Admin roles:"),e.React.createElement(_,{style:a.roleContainer},h))),t.channel.type===15&&t.channel.availableTags&&e.React.createElement(_,{style:a.tagContainer},e.React.createElement(A,{style:{...a.description,...a.moreInfo}},"Forum Tags:"),t.channel.availableTags&&t.channel.availableTags.length>0&&t.channel.availableTags.map(function(p){return e.React.createElement(A,{style:a.tag},`${p.emojiName} ${p.name}`)})))))});const{View:Qe}=m.General,$e=function(){n.storage.faded??=C.faded;const t=g.after("render",Qe,function(s,r){const c=G.findInReactTree(r,function(i){return i.props?.channel&&i.props?.isRulesChannel&&typeof i.type.type=="function"});if(!c)return r;const y=g.after("type",c.type,function(i,R){let[{channel:h}]=i;return h?.isHidden?.()&&G.findInReactTree(R,function(o){return o!==R&&Array.isArray(o.props?.children)})?.props?.children?.push(React.createElement(X,null)),R});u.push(y),t()});u.push(t);const a=g.after("default",Y,function(s,r){const{channel:c}=G.findInTree(s[0],function(i){return i?.channel},{})??{};if(!c?.isHidden?.())return r;const y=G.findInReactTree(r,function(i){return i!==r&&Array.isArray(i.props?.children)});y?.props?.children?.push?.(React.createElement(X,null)),r.props.onPress=function(){return null};for(const i of y.props.children)i?.props?.mode===Y.ChannelModes.LOCKED&&(i.props.mode=n.storage.faded?Y.ChannelModes.MUTED:Y.ChannelModes.DEFAULT,i.props.source&&(i.props.source=169));return r});u.push(a)},et=function(){n.storage.faded??=C.faded;const t=g.after("getMutedChannels",ne,function(s,r){if(!n.storage.faded)return r;const c=ce(s[0]).channels.map(function(y){return y.id});return new Set([...r,...c])});u.push(t);const a=g.after("isChannelMuted",ne,function(s,r){const c=T.getChannel(s[1]);return!n.storage.faded||!c?.isHidden()?r:!0});u.push(a)},tt=function(){const t=g.after("default",pe,function(s,r){const c=Re.getGuildId(),y=Ee.getChannelId(c),i=T.getChannel(y),R=G.findInTree(r,function(h){return h?.CHANNEL?.headerRight},{});return i?.isHidden?.()&&R?.CHANNEL&&(R.CHANNEL.headerRight=function(){return null},R.CHANNEL.headerTitle=function(){return null},R.CHANNEL.render=function(){return React.createElement(Je,{channel:i,guild:ee.getGuild(i.guild_id)})}),r});u.push(t);const a=g.after("default",ye,function(s,r){const c=G.findInReactTree(r,function(i){return i?.props?.guildId&&i?.props?.channelId&&typeof i?.type?.type=="function"});if(!c?.type)return r;const y=g.after("type",c.type,function(i,R){let[{channelId:h}]=i;return T.getChannel(h)?.isHidden?.()&&(R.props.hasMembersDrawer=!1),R});return u.push(y),a(),r})};function nt(){$e(),et(),tt()}const u=[];var ue={patchAll:function(){xe(),Ve(),Fe(),je(),Ye(),nt()},unpatchAll:function(){u.forEach(function(t){return t()}),u.length=0}},at={onLoad:function(){ue.patchAll(),w()},onUnload:function(){ue.unpatchAll(),w()},settings:ke};return K.default=at,Object.defineProperty(K,"__esModule",{value:!0}),K})({},vendetta.metro.common,vendetta.ui.assets,vendetta.ui.components,vendetta.storage,vendetta.plugin,vendetta.metro,vendetta.utils,vendetta.patcher);
