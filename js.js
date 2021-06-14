function checkForm(form)
{
  //validates if input is blank
  if(form.inputfield.value == "") {
    alert("Error: input is empty");
    form.inputfield.focus();
    return false;
  }
  
  var re = /^[/w ]+$/;
  
  //validates if input has invalid character
  if(!re.test(form.inputfeild.value)) {
    alert("Error: input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }
  
  return true;
}
