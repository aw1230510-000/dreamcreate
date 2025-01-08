/* ----🍔---- */
document.getElementById("navbtn").onclick = function(){
    document.querySelector('html').classList.toggle('open');
}

// メニュー内のリンクがクリックされたときにメニューを閉じる
const menuLinks = document.querySelectorAll('.nav a'); // メニュー内のすべてのリンクを取得

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    document.querySelector('html').classList.remove('open'); // 'open' クラスを削除してメニューを閉じる
  });
});