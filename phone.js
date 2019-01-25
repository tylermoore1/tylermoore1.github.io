$(document).ready(function() { // do this when the document is loaded
	$("#idContent_Dialer").show(); // show the element with ID "element"
	$("#idContent_ContactList").hide(); // hide the element with ID "otherElement"
  $("#idContent_AddContact").hide();
});

$("#idDialer").click(function() { // when "button_id" is clicked
	$("#idContent_Dialer").show(); // show element
  $("#idContent_ContactList").hide(); // hide the element with ID "otherElement"
  $("#idContent_AddContact").hide();
});

$("#idContactList").click(function() { // when "button_id" is clicked
	$("#idContent_ContactList").show(); // show element
  $("#idContent_Dialer").hide(); // hide the element with ID "otherElement"
  $("#idContent_AddContact").hide();
});

$("#idAddContact").click(function() { // when "button_id" is clicked
	$("#idContent_AddContact").show(); // show element
  $("#idContent_Dialer").hide(); // hide the element with ID "otherElement"
  $("#idContent_ContactList").hide();
});

$(".phone").click(function() {
	var phone_number = $("#idDialerNumber").val();
	//do 12 because phone numbers are length of 10 plus two dashes
	if (phone_number.length == 12)
	{
		alert("Phone number is already full");
	}
	else
	{
		if (phone_number.length == 3 || phone_number.length == 7)
		{
			phone_number += "-";
		}
		var number = this.id;
		number = number.slice(-1);
		phone_number += number;

		$("#idDialerNumber").val(phone_number);
	}

});

$("#idDialerClear").click(function() {
	$("#idDialerNumber").val("");
});
