
var winpopsmain=0;var winpops=0;var heights=410;function no_error(){return true;}
function resizer(){window.onerror=no_error;heights=document.body.scrollHeight;if(100>heights){setTimeout("resizerwait()",1500);}
if(heights==null){setTimeout("resizerwait()",1500);}
parent.resizeme(heights);}
function resizerwait(){heights=document.body.scrollHeight;if(100>heights){heights=530;}
if(heights==null){heights=530;}
parent.resizeme(heights);}
function resizeWindowToFit()
{if(window.top.outerHeight>screen.availHeight)
window.top.outerHeight=screen.availHeight;if(window.top.outerWidth>screen.availWidth)
window.top.outerWidth=screen.availWidth;}
var stradddomain='Access&nbsp;&#187;&nbsp;Add&nbsp;Domain';var streditdomain='Access&nbsp;&#187;&nbsp;Edit&nbsp;Domain';var strdomains='Access&nbsp;&#187;&nbsp;Domains';var strnewcsr='General&nbsp;&#187;&nbsp;Create&nbsp;CSR';var strsslcert='General&nbsp;&#187;&nbsp;Certificates';var strmycert='Current&nbsp;Certificates';var strviewcert='General&nbsp;&#187;&nbsp;View&nbsp;Certificates';var strnetworktools='General&nbsp;&#187;&nbsp;Network&nbsp;Tools';var strpassword='General&nbsp;&#187;&nbsp;Password';var strsettings='General&nbsp;&#187;&nbsp;File&nbsp;Settings';var struserlist='Status&nbsp;and&nbsp;Logs&nbsp;&#187;&nbsp;Active&nbsp;Users';var strrestart='General&nbsp;&#187;&nbsp;Restart';var strclientroutes='Virtual&nbsp;Passage&nbsp;&#187;&nbsp;Client&nbsp;Routes';var strtcptunneling='Access&nbsp;&#187;&nbsp;TCP&nbsp;Tunneling&nbsp;to&nbsp;SSL&nbsp;Enable&nbsp;Network&nbsp;Servers';var streditglobal='Access&nbsp;&#187;&nbsp;Users&nbsp;and&nbsp;Groups&nbsp;&#187;&nbsp;Global';var streditglobalpolicies='Global&nbsp;Policies';var streditglobalbookmarks='Global&nbsp;Bookmarks';var streditgroup='Access&nbsp;&#187;&nbsp;Users&nbsp;and&nbsp;Groups&nbsp;&#187;&nbsp;Groups';var streditgrouppolicies='Group&nbsp;Policies';var streditgroupbookmarks='Group&nbsp;Bookmarks';var stredituser='Access&nbsp;&#187;&nbsp;Users&nbsp;and&nbsp;Groups&nbsp;&#187;&nbsp;Users';var stredituserattributes='Access&nbsp;&#187;&nbsp;Users&nbsp;and&nbsp;Groups&nbsp;&#187;&nbsp;Users&nbsp;&#187;&nbsp;Login&nbsp;Policies';var strresource='Access&nbsp;&#187;&nbsp;Network&nbsp;Resources&nbsp;for&nbsp;User and Group&nbsp;Policies';var streditresource='Access&nbsp;&#187;&nbsp;Network&nbsp;Resources&nbsp;&#187;&nbsp;Edit&nbsp;Resource&nbsp;Object';var straddresource='Access&nbsp;&#187;&nbsp;Network&nbsp;Resources&nbsp;&#187;&nbsp;Add&nbsp;Resource&nbsp;Object';var stredituserpolicies='User&nbsp;Policies';var stredituserbookmarks='User&nbsp;Bookmarks';var strusersandgroups='Access&nbsp;&#187;&nbsp;Users&nbsp;and&nbsp;Groups&nbsp;&#187;&nbsp;Policies&nbsp;and&nbsp;Bookmarks';var strstatus='Status&nbsp;and&nbsp;Logs&nbsp;&#187;&nbsp;Status';var strlogconfig='Status&nbsp;and&nbsp;Logs&nbsp;&#187;&nbsp;Configuration';var streventlog='Status&nbsp;and&nbsp;Logs&nbsp;&#187;&nbsp;Event&nbsp;Log';var strsslvpnclient='Virtual&nbsp;Passage&nbsp;&#187;&nbsp;Client&nbsp;Addresses';var straddtunnel='Add&nbsp;Tunnel';var straddresource='Add&nbsp;Resource';var stradduser='Add&nbsp;User';var straddgroup='Add&nbsp;Group';var strstaticroutes='Network&nbsp;&#187;&nbsp;Routes';var stretchosts='Network&nbsp;&#187;&nbsp;Host&nbsp;Resolution';var strnetworkinterface='Network&nbsp;&#187;&nbsp;Interfaces';var strifacesettings='Network&nbsp;&#187;&nbsp;IP&nbsp;Address&nbsp;Configuration';var strdnssettings='Network&nbsp;&#187;&nbsp;DNS&nbsp;Settings';var strdate='General&nbsp;&#187;&nbsp;Date&nbsp;';var streditglobaldesktopicons='Global&nbsp;Desktop&nbsp;Icons';var bsubmit='Submit';var blogin='Login';var bexport='Export';var bimport='Import';var brestore='Restore';var bsavenow='Save&nbsp;Now';var brestart='Restart';var benter='Enter';var bupload='Upload';var bupgrade='Upgrade';var bcancel='Cancel';var bclearlog='Clear&nbsp;Log';var bnewcsr='New&nbsp;CSR';var bdelete='Delete';var breboot='Reboot';var badduser='Add&nbsp;User';var baddgroup='Add&nbsp;Group';var bexpandall='Expand&nbsp;All';var bcloseall='Close&nbsp;All';var baddpolicy='Add&nbsp;Policy';var baddbookmark='Add&nbsp;Bookmark';var bdeletegroup='Delete&nbsp;Group';var bdeleteuser='Delete&nbsp;User';var badddomain='Add&nbsp;Domain';var baddtunnel='Add&nbsp;Tunnel';var badd='Add';var swait='Please&nbsp;Wait...';var sreadonlyadmin='Read-only&nbsp;Administrator.';var ssamefirmware='same firmware with peer.';var ssuccess='Update&nbsp;Successful.';var ssuccess1='Update&nbsp;Successful. <a href="/cgi-bin/restart"><font class=linkblue><u>Restart</u></font></a> SSL VPN software now.';var ssuccess2='Update&nbsp;Successful.  If license data is not updated please try restarting the appliance';var serror='Update&nbsp;failed.';var serror2='Update&nbsp;failed.';var blank='';var bselectactive='Enable&nbsp;Cert';var buttonstring=0;var titlestring=0;var agent=navigator.userAgent.toLowerCase();var browser=navigator.appName;var version=navigator.appVersion;function printStatusBar(msg,color){var s=top.frames["sslvpnStatusFrame"];if(s&&s.document.getElementById&&s.document.getElementById('statusMsg')){s.document.getElementById('statusMsg').style.color=(color)?color:"black";s.document.getElementById('statusMsg').innerHTML=msg;}else{if(window.opener!=undefined)
{if(window.opener.top!=undefined&&(s=window.opener.top.frames["sslvpnStatusFrame"])&&s.document.getElementById&&s.document.getElementById('statusMsg')){s.document.getElementById('statusMsg').style.color=(color)?color:"black";s.document.getElementById('statusMsg').innerHTML=msg;}else{if(window.opener.opener!=undefined&&(s=window.opener.opener.top.frames["sslvpnStatusFrame"])&&s.document.getElementById&&s.document.getElementById('statusMsg')){s.document.getElementById('statusMsg').style.color=(color)?color:"black";s.document.getElementById('statusMsg').innerHTML=msg;}}}}}
function title(titlestring){document.write('<font  class="headingstylenomargin">&nbsp;'+titlestring+'&nbsp;</font>');}
function button(buttonstring){document.write('<font class=buttons>&nbsp;&nbsp;'+buttonstring+'&nbsp;&nbsp;</font>');}
function bbutton(buttonstring){document.write('<font class=bbuttons>&nbsp;'+buttonstring+'&nbsp;</font>');}
function pleaseWait(){printStatusBar(swait,"red");}
function error(buttonstring){printStatusBar("Error: "+buttonstring,"red");}
function success(buttonstring){printStatusBar(buttonstring);}
function bbutton2(buttonstring,titlename){if(agent.indexOf("msie")!=-1){document.write('<font class=bbuttons>&nbsp;'+buttonstring+'&nbsp;</font>');}
else{document.write('<a href="JavaScript:void();" title="'+titlename+'"><font class=bbuttons>&nbsp;'+buttonstring+'&nbsp;</font></a>');}}
docObj=(document.all)?"document.all.":"document.";function closechildren(){if(winpopsmain!=0){if(!winpopsmain.closed)winpopsmain.close();}
if(winpops!=0){if(!winpops.closed)winpops.close();}}
var thisRow1;function chgColor(rowNum){thisRow1=eval('"row" + rowNum + "Class"');document.getElementById(thisRow1).className='OnRowStyle2';}
function chgColorOut(rowNum){thisRow1=eval('"row" + rowNum + "Class"');document.getElementById(thisRow1).className='OddRowStyle2';}
function chgeven(rowNum){thisRow1=eval('"row" + rowNum + "Class"');document.getElementById(thisRow1).className='OnRowStyle2';}
function chgevenOut(rowNum){thisRow1=eval('"row" + rowNum + "Class"');document.getElementById(thisRow1).className='EvenRowStyle2';}
function chgmenu(rowNum){thisRow=eval(docObj+"row"+rowNum+"Class");thisRow.bgColor="#afafaf";}
function chgmenuOut(rowNum){thisRow=eval(docObj+"row"+rowNum+"Class");thisRow.bgColor="#eeebe9";}
function nothing(){}
function roll(o,event){var i,isnode,src,ftype,newsrc,nownode,eventType;for(i=0;i<o.childNodes.length;i++){nownode=o.childNodes[i];if(nownode.nodeType==1&&/img/i.test(nownode.nodeName)){isnode=i;break;}}
src=newsrc=o.childNodes[isnode].src;ftype=src.substring(src.lastIndexOf('.'),src.length);if(event)
eventType=event.type;else if(window.event)
eventType=window.event.type;switch(eventType)
{case"mouseover":case"focus":if(!/_o/.test(src))
newsrc=src.replace(ftype,'_o'+ftype);break;case"mouseout":case"blur":newsrc=src.replace('_o','');break;}
o.childNodes[isnode].src=newsrc;}
function ldimg(){var imgs,i;imgs=document.getElementsByTagName('img');for(i=0;i<imgs.length;i++){if(/roll/.test(imgs[i].className)){imgs[i].parentNode.onmouseover=function(event){roll(this,event);};imgs[i].parentNode.onmouseout=function(event){roll(this,event);};imgs[i].parentNode.onfocus=function(event){roll(this,event);};imgs[i].parentNode.onblur=function(event){roll(this,event);};}}}
function initTtTable(){var div=document.createElement('div');div.innerHTML='<table id="tt_table" style="display: none" width="200" border="0" cellpadding="0" cellspacing="0">'+'<tr>'+'<td id="tt_top_left" width="29"></td>'+'<td id="tt_top_side" width="150"></td>'+'<td id="tt_top_right" width="29"></td>'+'</tr>'+'<tr>'+'<td colspan="3">'+'<table width="100%" border="0" cellpadding="0" cellspacing="0">'+'<tr>'+'<td id="tt_left_side" width="13"></td>'+'<td id="tt_center"></td>'+'<td id="tt_right_side" width="13"></td>'+'</tr>'+'</table>'+'</td>'+'</tr>'+'<tr>'+'<td id="tt_bottom_left"></td>'+'<td id="tt_bottom_side"></td>'+'<td id="tt_bottom_right"></td>'+'</tr>'+'</table>';document.body.appendChild(div);preloadTooltipImages();}
function tt(anchorElement,contents,ttWidth){var ttTable=document.getElementById('tt_table');if(!anchorElement||!contents){return;}
if(!ttWidth||ttWidth===0){ttWidth=200;}
anchorElement.onmouseout=hideTt;if(!ttTable){initTtTable();ttTable=document.getElementById('tt_table');}
var aWidth=anchorElement.offsetWidth;var aHeight=anchorElement.offsetHeight;var aLeft,aTop;if(window.jQuery){var offset=jQuery(anchorElement).offset();aLeft=offset.left;aTop=offset.top;}else{aLeft=anchorElement.offsetLeft;aTop=anchorElement.offsetTop;var offsetParent=anchorElement.offsetParent;while(offsetParent){aLeft+=offsetParent.offsetLeft;aTop+=offsetParent.offsetTop;offsetParent=offsetParent.offsetParent;}}
var aRight=aLeft+aWidth;var aBottom=aTop+aHeight;ttTable.style.visibility='hidden';ttTable.style.display='';ttTable.style.left=ttTable.style.top=0;document.getElementById('tt_center').innerHTML=contents;ttTable.width=ttWidth;document.getElementById('tt_top_side').width=ttWidth-29-29;var ttHeight=ttTable.offsetHeight;document.getElementById('tt_top_left').className='';document.getElementById('tt_top_right').className='';document.getElementById('tt_bottom_left').className='';document.getElementById('tt_bottom_right').className='';var windowWidth=window.innerWidth?window.innerWidth:document.body.clientWidth;var scrollX=window.scrollX?window.scrollX:document.body.scrollLeft;var scrollY=window.scrollY?window.scrollY:document.body.scrollTop;if(aTop-ttHeight>scrollY){ttTable.style.top=(aTop-ttHeight)+'px';if(aLeft+ttWidth<scrollX+windowWidth){ttTable.style.left=Math.min(scrollX+windowWidth-ttWidth,aRight)+'px';document.getElementById('tt_bottom_left').className='caret';}else if(aRight-ttWidth>scrollX){ttTable.style.left=Math.max(scrollX,aLeft-ttWidth)+'px';document.getElementById('tt_bottom_right').className='caret';}else{ttTable.style.left=Math.min(scrollX+windowWidth-ttWidth,aRight)+'px';}}else{ttTable.style.top=aBottom+'px';if(aLeft+ttWidth<scrollX+windowWidth){ttTable.style.left=Math.min(scrollX+windowWidth-ttWidth,aRight)+'px';document.getElementById('tt_top_left').className='caret';}else if(aRight-ttWidth>scrollX){ttTable.style.left=Math.max(scrollX,aLeft-ttWidth)+'px';document.getElementById('tt_top_right').className='caret';}else{ttTable.style.left=Math.min(scrollX+windowWidth-ttWidth,aRight)+'px';}}
ttTable.style.visibility='visible';ttTable.style.display='';}
function hideTt(){document.getElementById('tt_table').style.display='none';}
var preloadedTooltipImages=false;function preloadTooltipImages(){var images;if(!preloadedTooltipImages){preloadedTooltipImages=true;images=['swl_tt_center.gif','swl_tt_bottom_side.gif','swl_tt_left_side.gif','swl_tt_right_side.gif','swl_tt_top_side.gif','swl_tt_bottom_left_corner.gif','swl_tt_bottom_right_corner.gif','swl_tt_top_left_corner.gif','swl_tt_top_right_corner.gif','swl_tt_bottom_left_caret.gif','swl_tt_bottom_right_caret.gif','swl_tt_top_left_caret.gif','swl_tt_top_right_caret.gif'];for(var i=0;i<images.length;++i){new Image(1,1).src='/images/'+images[i];}
images=null;}}
if(window.jQuery){jQuery(preloadTooltipImages);}
function htmlEncode(s){var str=new String(s);str=str.replace(/&/g,"&amp;");str=str.replace(/</g,"&lt;");str=str.replace(/>/g,"&gt;");str=str.replace(/"/g,"&quot;");return str;}
function urlEncode(s){var str=new String(s);str=str.replace(/\+/g,"%2B");return str;}
function showHelp(key){winpops1=window.open('/cgi-bin/onlineHelp?key='+key,'OnlineHelp','width=700,height=500,resizable,scrollbars,toolbar,location,menubar,status');}