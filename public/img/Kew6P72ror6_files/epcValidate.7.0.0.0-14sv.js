
var EPC_progBar=0;function progressBar(oBt,oBc,oBg,oBa,oWi,oHi,oDr){EPC_progBar++;this.id='EPC_progBar'+EPC_progBar;this.dir=oDr;this.width=oWi;this.height=oHi;this.amt=0;document.write('<table border="0" cellspacing="0" cellpadding="'+oBt+'"><tr><td bgcolor="'+oBc+'">'+'<table border="0" cellspacing="0" cellpadding="0"><tr><td height="'+oHi+'" width="'+oWi+'" bgcolor="'+oBg+'">');if(document.layers){document.write('<ilayer height="'+oHi+'" width="'+oWi+'"><layer bgcolor="'+oBa+'" name="EPC_progBar'+EPC_progBar+'"></layer></ilayer>');}else{document.write('<div style="position:relative;top:0px;left:0px;height:'+oHi+'px;width:'+oWi+';">'+'<div style="top:0px;left:0px;height:0px;width:0;font-size:1px;background-color:'+oBa+';" id="EPC_progBar'+EPC_progBar+'"></div></div>');}
document.write('</td></tr></table></td></tr></table>\n');this.setBar=resetBar;this.setCol=setColour;}
function getRefToDivNest(divID,oDoc){if(!oDoc){oDoc=document;}
if(document.layers){if(oDoc.layers[divID]){return oDoc.layers[divID];}else{for(var x=0,y;!y&&x<oDoc.layers.length;x++){y=getRefToDivNest(divID,oDoc.layers[x].document);}
return y;}}
if(document.getElementById){return document.getElementById(divID);}
if(document.all){return document.all[divID];}
return document[divID];}
function resetBar(a,b){this.amt=(typeof(b)=='undefined')?a:b?(this.amt+a):(this.amt-a);if(isNaN(this.amt)){this.amt=0;}if(this.amt>1){this.amt=1;}if(this.amt<0){this.amt=0;}
var theWidth=Math.round(this.width*((this.dir%2)?this.amt:1));var theHeight=Math.round(this.height*((this.dir%2)?1:this.amt));var theDiv=getRefToDivNest(this.id);if(!theDiv){window.status='Progress: '+Math.round(100*this.amt)+'%';return;}
if(theDiv.style){theDiv=theDiv.style;theDiv.clip='rect(0px '+theWidth+'px '+theHeight+'px 0px)';}
var oPix=document.childNodes?'px':0;theDiv.width=theWidth+oPix;theDiv.pixelWidth=theWidth;theDiv.height=theHeight+oPix;theDiv.pixelHeight=theHeight;if(theDiv.resizeTo){theDiv.resizeTo(theWidth,theHeight);}
theDiv.left=((this.dir!=3)?0:this.width-theWidth)+oPix;theDiv.top=((this.dir!=4)?0:this.height-theHeight)+oPix;}
function setColour(a){var theDiv=getRefToDivNest(this.id);if(theDiv.style){theDiv=theDiv.style;}
theDiv.bgColor=a;theDiv.backgroundColor=a;theDiv.background=a;}
function moveProgressbar(){if(progress_bar!=null){progress_bar.setBar(0.04,true);if(progress_bar.amt>=1.0)
progress_bar.setBar(0.04);}}
window.SWL_EPC=function($){return{isAgentInstalled:function(version){EPCLaunchX1.CheckNACAgentInstalled(version);},downloadAgent:function(){EPCLaunchX1.DownloadNACAgent();},epcCheck:function(){EPCLaunchX1.EPCCheck(1,0);},upgradeAgent:function(){}}}(jQuery)