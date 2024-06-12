document.getElementById("os");

function Clear()
{
 os.value="";
}

function del()
{
 os.value=os.value.slice(0 ,-1);
}

function display(num)
{
  os.value=os.value+num
  console.log(os.value)
}
// secret function to auto calculate is  eval
function equal()
{
  os.value=eval(os.value);
  console.log(os.value)
}
