function checkForm(form)
{
  //validates if name input is blank
  if(form.namefield.value == "") {
    alert("Error: name input is empty");
    form.namefield.focus();
    return false;
  }
  
  var re = /^[/w ]+$/;
  
  //validates if name input has invalid character
  if(!re.test(form.namefield.value)) {
    alert("Error: name input contains invalid characters!");
    form.namefield.focus();
    return false;
  }
  
    //validates if email input is blank
  if(form.emailfield.value == "") {
    alert("Error: email input is empty");
    form.emailfield.focus();
    return false;
  }
  
      //validates if comment input is blank
  if(form.commentfield.value == "") {
    alert("Error: comment input is empty");
    form.commentfield.focus();
    return false;
  }
  
  return true;
}
