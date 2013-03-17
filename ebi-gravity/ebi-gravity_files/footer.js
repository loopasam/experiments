

/*
if(document.layers){
	document.write("<table  cellpadding='2' cellspacing='0'   width='100%' bgcolor='#dedede' border='1' bordercolor='#bfbfbf'><tr><td>");
	document.write("<font face='Arial, Impact' size='1' color='#404040'>");
	document.write("<a target='_top' href='//www.ebi.ac.uk/Information/termsofuse.html' title='Terms of Use'>Terms of Use</a> ");
	document.write("<img src='//www.ebi.ac.uk/inc/images/separator.gif' alt='Image' /> ");
	document.write("<a target='_top' href='//www.ebi.ac.uk/Information/funding/' title='Funding'>EBI Funding</a> ");
	document.write("<img src='//www.ebi.ac.uk/inc/images/separator.gif' alt='Image' /> ");
	document.write("<a target='_top' href='//www.ebi.ac.uk/Information/Contact/contact.html' title='Contact Us'>Contact EBI</a> ");
	document.write("<img src='//www.ebi.ac.uk/inc/images/separator.gif' alt='Image' /> &copy; ");
	document.write("<a target='_top' href='//www.ebi.ac.uk/' title='European Bioinformatics Institute Home Page'>European Bioinformatics Institute</a> 2006. ");
	document.write("EBI is an Outstation of the <a  href='http://www.embl.org/' target='_blank' title='European Molecular Biology Laboratory Home Page'>European Molecular Biology Laboratory</a>.");	  
	document.write("</font></td></tr></table>");
}
*/



  function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays==null) ? "" : ";expires=" + exdate.toUTCString()) + ";domain=.ebi.ac.uk;path=/";
    document.cookie = c_name + "=" + c_value;
  }
  function getCookie(c_name) {
    var i, x, y, ARRcookies=document.cookie.split(";");
    for (i=0; i<ARRcookies.length; i++)
    {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x = x.replace(/^\s+|\s+$/g,"");
      if (x==c_name) {
        return unescape(y);
      }
    }
  }

      
function mitigate() {
    
  updatecssjs = false;
  if ($('#headerdiv').length > 0) {
    $('#headerdiv').load('/web_guidelines/html/mitigation/headerdiv_replacement.txt .header', '',
      function(){
        // push heading into local-title
		if ($('#contents h1:first').length > 0) {
		  $('#headerdiv h1')[0].innerHTML = $('#contents h1')[0].innerHTML;
		  $('#contents h1:first').remove();
		}
		else {
		  $('#headerdiv h1')[0].innerHTML = 'European Bioinformatics Institute';
		}
		
/*
		// check for logo in the #leftmenu
		if ($('#leftmenu img[height=60]').length > 0) {
		  $('#headerdiv h1').before($('#leftmenu img[height=60]')[0]).wrap('<span>');
		  $('#local-title').addClass('logo-title');
		}
*/
		
        // set active item
		var section = window.location.pathname.split('/');
		$('#services').removeClass('active');

		switch(section[1]) {
		  case '':
			$('body').addClass('section-home');
		    break;
          case 'industry':
          case 'training':
          case 'research':
            $('#'+section[1]).addClass('active');
			$('body').addClass('section-'+section[1]);
            break;
          case 'Information':
            $('#about').addClass('active');
			$('body').addClass('section-about');
            break;
		  default:
            $('#services').addClass('active');
			$('body').addClass('section-services');
			break;
        }
        
        // remove EBI item in breadcrumb
        $('.breadcrumbs a[href="/"]').remove();
        $('.breadcrumbs a[href="http://www.ebi.ac.uk/"]').remove();
		$('.breadcrumbs a[href="/industry/ind-prog-index.html"]').remove();
	 	if ($('.breadcrumbs a[href="/Information/"]').length > 0) {
		  $('.breadcrumbs a[href="/Information/"]')[0].innerHTML = 'About us'; 
		}
        $('.breadcrumbs a:first').addClass('firstbreadcrumb');
		if ($('.breadcrumbs a').length < 2) {
		  $('.breadcrumbs').remove();
		}
		else {
  		  $('.breadcrumbs a:last').after(' > '+$('.breadcrumbs a:last')[0].innerHTML).remove();
		}
		$('.breadcrumbs').after('<br /><br />');
	  }
    ).css('position','').css('height','');
    updatecssjs = true;
  }
  if ($('#footerdiv').length > 0) {
    $('#footerdiv').load('/web_guidelines/html/mitigation/footerdiv_replacement.txt .footer');
    updatecssjs = true;
  }
  if (updatecssjs) {
    $('body').append('<div id="mitigation"></div>');
    $('#mitigation').load('/web_guidelines/html/mitigation/head_addition.txt');
  }
}

attemptCount=0;
function waitForJQuery(func) {
  attemptCount++;
  if (typeof jQuery != 'undefined') { // JQuery is loaded!
    mitigate();
    return;
  }
  if (attemptCount < 100) {
    setTimeout(waitForJQuery, 100); // Check 10x a second
  }
  return;
}

  var query = window.location.search;
  if (query.indexOf('mitigate=true') != -1) {
    setCookie('mitigate','true');
  }
  if (query.indexOf('mitigate=false') != -1) {
    setCookie('mitigate','false');
  }

  if (getCookie('mitigate') == 'true') {
    if (typeof jQuery == 'undefined') {
      var script = document.createElement('script');
      script.type = "text/javascript";
      script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js";
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    waitForJQuery();
  }
  
  
