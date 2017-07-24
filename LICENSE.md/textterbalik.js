// JavaScript Document

var normalt="zyxwvutsrqponmlkjihgfedcba?+_-"
var changedt="zʎxʍʌnʇsɹbdouɯ1ʞظıɥbɟǝpɔqɐ？＋＿－"


function changet(_in, _out)
{
  var s="";
  var n=_in.value.toLowerCase();

  ///if (_in.value.length=="0") _arab.value="";
  
  for(i=0; i<n.length; i++)
  {
    var c=n.charAt(i);
    for(j=0; (j<normalt.length)&&(c!=normalt.charAt(j)); j++);
    if (j<normalt.length) { 
      s+=changedt.charAt(j);} else {
      s+=c;
    }
  }

  _out.value=s;

}

function focusFirst() {

  if (els = oTD.getElementsByTagName("input")) {
    els[0].focus();
  }
}

function highlight(field) {
field.focus();
  field.select();
}
