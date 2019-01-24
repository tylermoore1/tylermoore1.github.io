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
