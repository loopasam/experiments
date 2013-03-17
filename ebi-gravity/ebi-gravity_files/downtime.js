//var warningDate = "<span style='color: #555555; font-style: italic;'>Wednesday, 5th October 2011</span>";
//var warningMSG = "One of our data centres will be offline from <span class='red_bold'>Friday&nbsp;21&nbsp;October&nbsp;2011&nbsp;at&nbsp;14.00&nbsp;(GMT+1)</span> to <span class='red_bold'>Monday&nbsp;24&nbsp;October&nbsp;at&nbsp;12.00&nbsp;(GMT+1)</span>. The Hinxton data centre will be shut down so that we can install a more energy-efficient heating and cooling system. Many of our services will <a href='http://www.ebi.ac.uk/downtime.html'>still be available</a> during this period, as they will be run from the London data centres. ";

var warningDate = '';
var warningMSG = '';

if(warningDate != ""){
	document.write("<div class='normaltextcommentsbox'><span>" + warningDate + "<br /><span style='text-align: center; font-weight: bold;'>Please Note: </span>" + warningMSG + "</span></div><br />");
}
