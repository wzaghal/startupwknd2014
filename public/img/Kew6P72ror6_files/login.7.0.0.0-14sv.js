
window.SWL_LOGIN=function($){var submitUrl='/cgi-bin/userLogin';var mainValidator,otpValidator,rsaValidator;var nelaunchxpsversion;var time_cost=0,timeout_epcinstall=300000;function resetMainForm(preserveErrorBanner){$('#password').val('');$('#userPassFormContainer .processing').hide();$('#userPassFormContainer .buttons').show();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');if(!preserveErrorBanner){SWL_LOGIN.hideError();}}
function setMainFormFocus(){var f=$('#username:blank, #password:blank').get(0);f.blur();f.focus();}
function hideRsa(){SWL_LOGIN.hideError();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#rsaContainer').fadeOut('fast');setMainFormFocus();}
function hideRadiusChallenge(){SWL_LOGIN.hideError();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#radiusChallengeContainer').fadeOut('fast');setMainFormFocus();}
function hideChangePw(){SWL_LOGIN.hideError();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#changePwContainer').fadeOut('fast');setMainFormFocus();}
function cancelEpc(){$('input[name=epcresult]').val('false');$('#epcValidateForm').submit();}
function needUpdate(){var needUpdate=false;var installedVersion;var plugins=window.navigator.plugins;var n=0;while(plugins.item(n)!=null){var plugin_name=plugins.item(n).name.substring(0,20);if(plugin_name=="NetExtender Launcher"){installedVersion=plugins.item(n).name.substring(21);break;}
n++;}
if(null==installedVersion){return true;}
var parts;var parts2;parts1=installedVersion.split(/\./);parts2=nelaunchxpsversion.split(/\./);for(var i=0;i<parts1.length;i++){if(parts2.length<=i||parseInt(parts2[i])<parseInt(parts1[i]))
break;if(parseInt(parts2[i])>parseInt(parts1[i])){needUpdate=true;break;}}
return needUpdate;}
function xpinstallCallback(url,status){if(status==0){window.navigator.plugins.refresh(true);}}
function installNELaunchXP(){window.navigator.plugins.refresh();$('#epcprocess').text('Please install the plugin and try again');if(InstallTrigger!=null){if(needUpdate()){var NELaunchXPXpi={"NetExtender":"/npNELaunch.xpi"};InstallTrigger.install(NELaunchXPXpi,xpinstallCallback);return true;}
else
return true;}
else
alert('InstallTrigger == null');return false;}
var base64key="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function decodeBase64(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=base64key.indexOf(input.charAt(i++));enc2=base64key.indexOf(input.charAt(i++));enc3=base64key.indexOf(input.charAt(i++));enc4=base64key.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
return output;}
function getSessionId()
{var session="";var cookies=document.cookie.split(";");var i,c_name;for(i=0;i<cookies.length;i++)
{c_name=cookies[i].substr(0,cookies[i].indexOf("=")).replace(/^\s+|\s+$/g,"").toLowerCase();if(c_name=="swap")
{session=decodeBase64(cookies[i].substr(cookies[i].indexOf("=")+1));break;}}
return session;}
function epcLauncherStart(){var agent=navigator.userAgent.toLowerCase();if(agent.indexOf("chrome")!=-1){if(needUpdate()){$('#epcprocess').html("Click <a href='https://chrome.google.com/webstore/detail/netextender-launcher/comamnkieeagpjjdfonbapjefalbbgoj'>here</a> to download EPC plugin from Chrome Web Store");return false;}}
else if(agent.indexOf('gecko')!=-1){if(needUpdate()){if(!installNELaunchXP()){location.reload(true);}}else{}}
isIE=(agent.indexOf("msie")!=-1);if(isIE&&EPCLaunchX1.object==null){window.location.href='/cgi-bin/userLogout';return false;}
if(!isIE){try{EPCLaunchX1=document.nelauncher_plugin;}catch(err){alert(err);return false;}}
if((!isIE)&&(typeof EPCLaunchX1=="undefined")){SWL_LOGIN.showError("Failed to load EPC plugin object");return false;}
if((!isIE)&&(typeof EPCLaunchX1=="undefined")){window.location="/cgi-bin/sslvpnclient?launcherror=nopluginsupport";return false;}
if((!isIE)||(typeof EPCLaunchX1!="undefined"&&EPCLaunchX1.object)){return true;}
return false;}
function showRadiusChallenge(jsonData){$('#radiusChallengeContainer').load('/cgi-bin/radiusChallengeLogin',jsonData,function(){$('input').attr('autocomplete','off');$('#userPassFormContainer:visible').fadeOut('fast',function(){resetMainForm();});$(this).fadeIn('fast',function(){$('#radiusChallengeContainer input:first').get(0).focus();$('#cancelRadius').click(function(){SWL_LOGIN.hideError();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#radiusChallengeContainer').fadeOut('fast');setMainFormFocus();});});if(jsonData.status==='needchallenge'){rsaValidator=$('form[name=radiusChallengeForm]').validate({submitHandler:function(form){$(form).ajaxSubmit({dataType:'json',beforeSubmit:function(){$('#radiusChallengeContainer .buttons').hide();$('#radiusChallengeContainer .processing').show();},success:function(data){if(data.status==='success'){window.location.href=data.redirect;return;}else if(data.status==='needchallenge'){showRadiusChallenge(data);}
else if(data.status==='needOtp'){SWL_LOGIN.showOtp(data);}else{hideRadiusChallenge();SWL_LOGIN.showError(data.err);}},error:function(XMLHttpRequest,textStatus,errorThrown){$('#radiusChallengeContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#radiusChallengeContainer .processing').hide();$('#radiusChallengeContainer .buttons').show();}});$('#radiusChallengeContainer').find(':text, :password, :submit, select').attr('disabled','disabled');},showErrors:function(errorMap,errorList){}});}});}
function showRsa(jsonData){$('#rsaContainer').load('/cgi-bin/rsaLogin',jsonData,function(){$('input').attr('autocomplete','off');$('#userPassFormContainer:visible').fadeOut('fast',function(){resetMainForm();});$(this).fadeIn('fast',function(){if(jsonData.err){SWL_LOGIN.showError(jsonData.err);}});if(jsonData.status==='newpin'){rsaValidator=$('form[name=newpinForm]').validate({submitHandler:function(form){$(form).ajaxSubmit({dataType:'json',beforeSubmit:function(){$('#rsaContainer .buttons').hide();$('#rsaContainer .processing').show();},success:function(data){if(data.status==='success'){hideRsa();SWL_LOGIN.showError(data.message,true);}else if(data.status==='nomatch'){$('#rsaContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#rsaContainer input[type=password]').val('');$('#rsaContainer input:first').get(0).focus();$('#rsaContainer .processing').hide();$('#rsaContainer .buttons').show();SWL_LOGIN.showError(data.message);}else{hideRsa();SWL_LOGIN.showError(data.message);}},error:function(XMLHttpRequest,textStatus,errorThrown){hideRsa();}});$('#rsaContainer').find(':text, :password, :submit, select').attr('disabled','disabled');},showErrors:function(errorMap,errorList){}});$('#rsaContainer input:first').get(0).focus();$('#cancelRsa').click(hideRsa);}else if(jsonData.status==='syspin'){$('form[name=syspinForm]').ajaxForm({dataType:'json',beforeSubmit:function(){$('#rsaContainer .buttons').hide();$('#rsaContainer .processing').show();},success:function(data){if(data.status==='success'){hideRsa();SWL_LOGIN.showError(data.message,true);}else if(/newpin|syspin/.test(data.status)){showRsa(data);return;}else{hideRsa();SWL_LOGIN.showError(data.message);}},error:function(XMLHttpRequest,textStatus,errorThrown){hideRsa();}});$('#sysPinYes').click(function(){$('#sysreply').val('y');$('form[name=syspinForm]').submit();});$('#sysPinNo').click(function(){$('#sysreply').val('n');$('form[name=syspinForm]').submit();});}else if(jsonData.status==='nextcode'){rsaValidator=$('form[name=nextcodeForm]').validate({submitHandler:function(form){$(form).ajaxSubmit({dataType:'json',beforeSubmit:function(){$('#rsaContainer .buttons').hide();$('#rsaContainer .processing').show();},success:function(data){if(data.status==='success'){window.location.href=data.redirect;}else{hideRsa();SWL_LOGIN.showError(data.message);}},error:function(XMLHttpRequest,textStatus,errorThrown){hideRsa();}});},showErrors:function(errorMap,errorList){}});$('#rsaContainer input:first').get(0).focus();$('#cancelRsa').click(hideRsa);}});}
$(document).ready(function(){$('input').attr('autocomplete','off');$('#username').get(0).focus();$.cookie('SessURL',SWL_LOGIN.parseLoginHref(window.location.href),{expires:7,path:'/'});if(document.ajaxBasedLogin!==false){$('input[name=web]').remove();$('form[name=Login]').append('<input type="hidden" name="ajax" value="true">').ajaxForm({dataType:'json',url:submitUrl,beforeSubmit:function(formDataArray,formJQuery,ajaxOpts){var form=document.Login;if(form.username.value===""){SWL_LOGIN.showError("Please enter a user name");form.username.focus();return false;}
if(form.password.value===""){SWL_LOGIN.showError("Please enter a password");form.password.focus();return false;}
$.cookie('svDomainName',$('#domain').val(),{expires:365,path:'/cgi-bin/welcome'});$.cookie('svDomainName',$('#domain').val(),{expires:365,path:'/cgi-bin/welcome/'});$.cookie('nxAutoLaunched',null);$('#userPassFormContainer .buttons').hide();$('#userPassFormContainer .processing').show();SWL_LOGIN.hideError();return true;},success:function(data){var form=document.Login;if(data.status==='success'){window.location.href=data.redirect;}else if(data.status==='needOtp'){SWL_LOGIN.showOtp(data);}else if(data.status==='needChangePw'){SWL_LOGIN.showChangePw(data);}else if(data.status==='needClientCert'){form.verifyCert.value=1;$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');if(!$.browser.mozilla){form.action='/cert-bin/certVerifyLogin';form.ajax.disabled=true;form.submit();$('#userPassFormContainer').find(':text, :password, :submit, select').attr('disabled','disabled');}else{form.action='/cert-bin/certVerifyLogin';form.ajax.disabled=true;form.submit();$('#userPassFormContainer').find(':text, :password, :submit, select').attr('disabled','disabled');}
return;}else if(/newpin|syspin|nextcode/.test(data.status)){showRsa(data);}else if(data.status==='needchallenge'){showRadiusChallenge(data);}else if(data.status==='epccheck'){SWL_LOGIN.showEpcValidate(data);}else{SWL_LOGIN.showError(data.message);$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#password').val('');$('#userPassFormContainer .processing').hide();$('#userPassFormContainer .buttons').show();setMainFormFocus();}},error:function(XMLHttpRequest,textStatus,errorThrown){$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#password').val('');$('#userPassFormContainer .processing').hide();$('#userPassFormContainer .buttons').show();setMainFormFocus();}}).bind('form-submit-notify',function(){$('#userPassFormContainer').find(':text, :password, :submit, select').attr('disabled','disabled');});}});return{parseLoginHref:function(href){var ques=href.indexOf('?');if(ques>=0)
return href.substring(0,ques);else
return href;},epcInstallWait:function(epcversion)
{if(time_cost>timeout_epcinstall){SWL_LOGIN.showError("Epc install failed");time_cost=0;return;}
SWL_EPC.isAgentInstalled(epcversion);if(0>EPCLaunchX1.statusId){time_cost+=200;setTimeout('SWL_LOGIN.epcInstallWait("'+epcversion+'")',200);return;}
time_cost=0;$('#epcprocess').text('Checking EPC ...');SWL_EPC.epcCheck();if(0>EPCLaunchX1.statusId){if(-4==EPCLaunchX1.statusId)
{}
else if(-5==EPCLaunchX1.statusId)
{$('#epcfailedmsg').text("Failed to start EPC Agent");}
else
{$('#epcfailedmsg').text("EPC check failed");}
$('#epcvalidating').hide();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#userPassFormContainer .processing').hide();$('#userPassFormContainer .buttons').show();$('#epcValidateContainer').fadeOut('fast');var epcdetail=EPCLaunchX1.strFailedProfilesDetail;if(epcdetail!=null)
{epcdetail=epcdetail.replace(/;/g,"<br>");epcdetail=epcdetail.replace(/\\/g,"\\\\");$('#invalid_text').html("Login failed - Unable to login due to EPC<br>"
+"<div style='float:right; text-decoration:underline;' onmouseover=\"tt(this, '"+epcdetail+"', 500)\">View Details</div>");$('#invalid').css('visibility','visible');$('#invalid').removeClass('successIcon');}
else
SWL_LOGIN.showError("Epc check failed");}
else{$('input[name=epcresult]').val('true');$('#epcValidateForm').submit();}},showError:function(err,success){$('#invalid_text').text(err);$('#invalid').css('visibility','visible');if(success){$('#invalid').addClass('successIcon');}else{$('#invalid').removeClass('successIcon');}},hideError:function(){$('#invalid').css('visibility','hidden');},showEpcValidate:function(jsonData){$('#epcValidateContainer').load('/cgi-bin/epcValidate',jsonData,function(){$('input').attr('autocomplete','off');$(this).fadeIn('fast',function(){$('#epcprocess').text('Validate EPC ...');$('#epcvalidating').show();$('#epcValidateContainer .processing').show();$('#epccheckfailed').hide();});$('#userPassFormContainer:visible').fadeOut('fast');$('#otpContainer').fadeOut('fast');$('#cancelEpc').click(cancelEpc);var agent=navigator.userAgent.toLowerCase();if((agent.indexOf("linux")!=-1)||(agent.indexOf("mac os x")!=-1)){return;}
if((agent.indexOf("msie")!=-1)&&(EPCLaunchX1.object==null)){$('#epcprocess').text('Please refresh page to login after EPC plugin installed');if(new String(window.location).indexOf("epcValidate")==-1){var reloadurl=window.location.pathname;reloadurl=reloadurl+"?epcValidate=true&epcServer="+jsonData.server;reloadurl=reloadurl+"&epcNexpversion="+jsonData.nexpversion;reloadurl=reloadurl+"&epcVersion="+jsonData.epcversion;reloadurl=reloadurl+"&epcRedirect="+jsonData.redirect;window.location.href=reloadurl;}
return;}
nelaunchxpsversion=jsonData.nexpversion;if(false===epcLauncherStart())
{SWL_LOGIN.showError("Install EPC plugin and try again");return;}
if((typeof(EPCLaunchX1)!='undefined')){EPCLaunchX1.InitLauncher();EPCLaunchX1.serverAddress=jsonData.server;EPCLaunchX1.serverPort=(window.location.port=="")?443:window.location.port;if('undefined'!=typeof(jsonData.sessionid))
EPCLaunchX1.sessionId=jsonData.sessionid;else
EPCLaunchX1.sessionId=getSessionId();EPCLaunchX1.isSSLTunnel=1;SWL_EPC.isAgentInstalled(jsonData.epcversion);if(0>EPCLaunchX1.statusId){SWL_EPC.downloadAgent();if(0>EPCLaunchX1.statusId){alert("Download Epc Agent failed.");return;}
$('#epcprocess').text('Installing EPC Agent...');time_cost=500;setTimeout('SWL_LOGIN.epcInstallWait("'+jsonData.epcversion+'")',500);return;}
$('#epcprocess').text('Checking EPC ...');SWL_EPC.epcCheck();if(0>EPCLaunchX1.statusId){if(-4==EPCLaunchX1.statusId)
{}
else if(-5==EPCLaunchX1.statusId)
{$('#epcfailedmsg').text("Failed to start EPC Agent");}
else
{$('#epcfailedmsg').text("EPC check failed");}
$('#epcvalidating').hide();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#userPassFormContainer .processing').hide();$('#userPassFormContainer .buttons').show();$('#epcValidateContainer').fadeOut('fast');var epcdetail=EPCLaunchX1.strFailedProfilesDetail;if(epcdetail!=null)
{epcdetail=epcdetail.replace(/;/g,"<br>");epcdetail=epcdetail.replace(/\\/g,"\\\\");epcdetail=epcdetail.replace(/'/g,"\\\'");$('#invalid_text').html("Login failed - Unable to login due to EPC<br>"
+"<div style='float:right; text-decoration:underline;' onmouseover=\"tt(this, '"+epcdetail+"', 500)\">View Details</div>");$('#invalid').css('visibility','visible');$('#invalid').removeClass('successIcon');}
else
SWL_LOGIN.showError("Epc check failed");}
else{window.location.href=jsonData.redirect;return;}}
else
alert('activex ojbect not found');});},showOtp:function(jsonData){$('#otpContainer').load('/cgi-bin/otp',jsonData,function(){$('input').attr('autocomplete','off');$('#radiusChallengeContainer').fadeOut('fast',function(){resetMainForm();});$('#userPassFormContainer').fadeOut('fast',function(){resetMainForm();});$(this).fadeIn('fast',function(){$('#otpPassword').get(0).focus();$('#cancelOtp').click(function(){SWL_LOGIN.hideError();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#otpContainer').fadeOut('fast');setMainFormFocus();});});otpValidator=$('form[name=otpForm]').validate({submitHandler:function(form){$(form).ajaxSubmit({dataType:'json',beforeSubmit:function(){$('#otpContainer .buttons').hide();$('#otpContainer .processing').show();},success:function(data){if(data.status==='success'){window.location.href=data.redirect;return;}else if(data.status==='noPass'){SWL_LOGIN.showError("Please enter your temporary password and try again.");}else if(data.status==='epccheck'){SWL_LOGIN.showEpcValidate(data);return;}else{SWL_LOGIN.showError(data.message);if(data.status==='lockout'){$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#otpContainer').fadeOut('fast');setMainFormFocus();}}
$('#otpContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#otpPassword').val('').get(0).focus();$('#otpContainer .processing').hide();$('#otpContainer .buttons').show();},error:function(XMLHttpRequest,textStatus,errorThrown){$('#otpContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#otpContainer .processing').hide();$('#otpContainer .buttons').show();}});$('#otpContainer').find(':text, :password, :submit, select').attr('disabled','disabled');},rules:{oldPass:{required:':password:filled'},newPass1:{required:':password:filled'},newPass2:{required:':password:filled',equalTo:'#newPass1'}},messages:{newPass2:{equalTo:'Both "New Password" fields must be the same'}}});});},showChangePw:function(jsonData){SWL_LOGIN.showError("You must change your password before logging in.");$('#changePwContainer').load('/cgi-bin/loginChangePass',jsonData,function(){$('input').attr('autocomplete','off');$('#userPassFormContainer').fadeOut('fast',function(){$('#changePwContainer').find('input[name=username]').val($('#username').val()).end().find('input[name=domain]').val($('#domain').val());resetMainForm(true);});$(this).fadeIn('fast',function(){$('#oldPass').get(0).focus();$('#cancelChangePw').click(function(){SWL_LOGIN.hideError();$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#changePwContainer').fadeOut('fast');setMainFormFocus();});});changePwValidator=$('form[name=changePwForm]').validate({submitHandler:function(form){$(form).ajaxSubmit({dataType:'json',beforeSubmit:function(){$('#changePwContainer .buttons').hide();$('#changePwContainer .processing').show();},success:function(data){if(data.status==='success'){hideChangePw();SWL_LOGIN.showError("Your password has been changed.  Please log in again.",true);return;}else if(data.status==='incomplete'){SWL_LOGIN.showError("Please fill in all fields and try again.");}else{SWL_LOGIN.showError(data.message);if(data.status==='lockout'){$('#userPassFormContainer').find(':text, :password, :submit, select').removeAttr('disabled');$('#userPassFormContainer').fadeIn('fast');$('#changePwContainer').fadeOut('fast');setMainFormFocus();}}
$('form[name=changePwForm]').get(0).reset();$('#changePwContainer').find('input[name=username]').val($('#username').val()).end().find('input[name=domain]').val($('#domain').val());$('#changePwContainer').find(':text, :password, :submit, select').removeAttr('disabled').end().find('.processing').hide().end().find('.buttons').show();},error:function(XMLHttpRequest,textStatus,errorThrown){$('#changePwContainer').find(':text, :password, :submit, select').removeAttr('disabled').end().find('.processing').hide().end().find('.buttons').show();}});$('#changePwContainer').find(':text, :password, :submit, select').attr('disabled','disabled');},showErrors:function(errorMap,errorList){if(this.numberOfInvalids()>0){SWL_LOGIN.showError("Please fill in all fields and try again.");}else{SWL_LOGIN.hideError();}}});});}};}(jQuery);