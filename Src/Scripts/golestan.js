// ==UserScript==
// @name        golestan
// @namespace   Sagar V
// @author      Sagar V
// @include     https://golestan.sbu.ac.ir/Forms/AuthenticateUser/login.htm
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function(){
	var script=document.createElement('script');
    script.innerHTML=`c=0;
		Ip="/_Images/";ip="/_images/";tp="/_Templates/";scp="/_Scripts/";stp="/_styles/";Stp="/_Styles/";ap="/Forms/AuthenticateUser/";
		

		all   =new Array(
						 '/blank.htm',0,
						 scp+'printTemplate.htm?tck=r',0,
                         stp+'comm_butt2.htc',0,
                         stp+'select.htc',0,
                         stp+'simplegrid.htc',0,
                         stp+'validation.htc',0,
                         stp+'webservice.htc',0,
                         Stp+'helpStyle.css',0,
                         Stp+'winlessmovable.htc',0,
                         stp+'main.css',0,
                         stp+'MenuStyle.css',0,
					     stp+'Toolb.htc',0,
					     stp+'npui.css',0,
					     
					     ap+'Message.XSLT',0,
					     ap+'Golestan.htm',0,
					     ap+'NewsPage.htm',0,
					     ap+'LoginPage.htm',0,
					     ap+'TopPage.htm',0,
					     ap+'main.htm',0,

					     tp+'Commander.htm',0,
					     tp+'Message_Page.htm',0,
					     tp+'help.htm',0,

					     scp+'Commander.js',0,
					     scp + 'npobj.js', 0,
					     scp + 'faci.js', 0,
					     scp+'Forms1_5.js',0,
					     scp+'help.js',0,
					     scp + 'Message.js', 0,
					     scp + 'npnfwin.js', 0,

					     '/_scripts/jqnpsrv.js', 0,
					     '/_scripts/npgrd.js', 0,
					     scp + 'Forms1_5_npgrid.js', 0,
					     
					     Ip+'Status_OK.gif',0,
					     ip+'tabs.png',0,
					     ip+'ftabs.png',0,
					     ip+'corner.png',0,
					     ip+'c1.png',0,
					     ip+'jqnpgridicons.png',0,
					     
						 '/Forms/F0202_PROCESS_REP_FILTER/command.htm',0);
		nall=0;
		for(k=0;k<all.length;k=k+2){
			if(all[k+1]==1)nall=nall+4;
			else nall++;
		}
		imstat=new Array('','_clicked','_focus','_disable');
		function check(){
			var x=new XMLHttpRequest() || new ActiveXObject("MSXML2.XMLHTTP");
			x.open("HEAD",document.location,true);
			x.send();
 			var sd=new Date(x.getResponseHeader('Last-Modified'));
			var cd=new Date(document.lastModified);
			if(sd-cd>3660000){
				//alert('با توجه به تغييرات جديد سيستم ، جهت مشاهده کامل صفحات لطفا فايل هاي ذخيره شده در مرورگر خودرا حذف کنيد');
				document.cookie = "reloading=1";
				window.location.reload(true);
				return false;
			}
			return true;
		}
		function a(){
		    for (k = 0; k < nall; k++) {
		        td = document.createElement('TD');
		        td.className = 'e';
		        Pr.appendChild(td);
		    }
		    if (!check()) {
			    //window.open("/_Templates/howtoclearcache.htm","_blank");
			    //top.close();
			    return;
			}
			var aCookie = document.cookie.split("; ");
			var cook=0;
			for (var i=0; i < aCookie.length; i++)
			{
				var aCrumb = aCookie[i].split("=");
				if ("reloading" == aCrumb[0]) {
					cook=unescape(aCrumb[1]);
					break;
				}
			}
			var ind=0;
			for( i=0;i<all.length;i=i+2){
				if(all[i+1]==1)
					for(j=0;j<4;j++){
						var r=new XMLHttpRequest() || new ActiveXObject("MSXML2.XMLHTTP");
						r.open("GET", all[i]+imstat[j]+".gif", true);
						if(cook==1)	r.setRequestHeader('If-Modified-Since','Sat,01 Jan 2000 00:00:00 GMT');
						getobj(r,ind++);
					}
				else{
					var r=new XMLHttpRequest() || new ActiveXObject("MSXML2.XMLHTTP");
					r.open("GET", all[i], true);
					if(cook==1)	r.setRequestHeader('If-Modified-Since','Sat,01 Jan 2000 00:00:00 GMT');
					getobj(r,ind++);
				}
			}
			document.cookie = "reloading=0; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
		}


		function getobj(o,ind){
			o.onreadystatechange=function(){
				if(o.readystate==4){
					Pr.cells(c).className="f";
					c++;
					if(c==nall){
		                if (location.search){
		                    top.location = "main.htm" + location.search ; 
		                 }
		                else
					top.location="main.htm";
					}
				}
			}
			o.send();
		}`;
    //alert(script);
    document.getElementsByTagName('script')[0].parentNode.removeChild(document.getElementsByTagName('script')[0]);
    document.head.appendChild(script);
})();
