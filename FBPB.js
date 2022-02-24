
function cppin() {
  
  /* code by https://github.com/sym-crypto */
  
  /* Get the text field */
  var end = 20; /// 20 pin
  var cnt = 0;
  var usr = document.getElementById("user").value;
  const result = Math.random().toString(36).substring(0,8);
  alert("user..." + usr)
  
  function generate() {
    var pin1 = Math.floor(Math.random() * 9);
    var pin2 = Math.floor(Math.random() * 9);
    var pin3 = Math.floor(Math.random() * 9);
    var pin4 = Math.floor(Math.random() * 9);
    var pin5 = Math.floor(Math.random() * 9);
    var pin6 = Math.floor(Math.random() * 9);
    var pin7 = Math.floor(Math.random() * 9);
    var pin8 = Math.floor(Math.random() * 9);
    var gpin = pin1 +""+ pin2 +""+ pin3 +""+ pin4 +""+ pin5 +""+ pin6 +""+ pin7 +""+ pin8;
  var lst = document.getElementById('lpsw');
  lst.innerHTML += ("\n  " + gpin + "  \n");
    ///alert("pin.." + gpin);
  }

  while(true){
    generate();
    cnt++;
    if(cnt==end){
      alert("p i n . \n g e n e r a t e");
      break
    }
    
  }

  
};

function loadprofile() {
  
  var publicfb = 'https://www.facebook.com/public/';
  var profile = document.getElementById('user').value;
  window.open(publicfb + profile);
  
}

function loadrecovery() {
 var lnk = 'https://m.facebook.com/login/identify/?ctx=recover&c&multiple_results=0&ars=m_account_switcher&from_login_screen=0&_rdr'
 window.open(lnk);
}
