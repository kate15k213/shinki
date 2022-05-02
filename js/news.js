
$(function () {

  (function () {

    //HTMLのid値を使って以下のDOM要素を取得
    const downbutton = document.getElementById('down');
    const upbutton = document.getElementById('up');
    const text = document.getElementById('textbox');
    //ボタンが押されたらカウント減
    downbutton.addEventListener('click', (event) => {
    //0以下にはならないようにする
    if(text.value >= 1) {
      text.value--;
    }
    });

    //ボタンが押されたらカウント増
    upbutton.addEventListener('click', (event) => {
      text.value++;
    })
    //HTMLのid値を使って以下のDOM要素を取得
    const downbuttona = document.getElementById('downa');
    const upbuttona = document.getElementById('upa');
    const texta = document.getElementById('textboxa');
    //ボタンが押されたらカウント減
    downbuttona.addEventListener('click', (event) => {
    //0以下にはならないようにする
    if(texta.value >= 1) {
      texta.value--;
    }
    })
    //ボタンが押されたらカウント増
    upbuttona.addEventListener('click', (event) => {
          texta.value++;
    })
    //HTMLのid値を使って以下のDOM要素を取得
    const downbuttonb = document.getElementById('downb');
    const upbuttonb = document.getElementById('upb');
    const textb = document.getElementById('textboxb');
    //ボタンが押されたらカウント減
    downbuttonb.addEventListener('click', (event) => {
    //0以下にはならないようにする
    if(textb.value >= 1) {
      textb.value--;
    }
    });
    //ボタンが押されたらカウント増
    upbuttonb.addEventListener('click', (event) => {
      textb.value++;
    })

    (function () {

    })

  })();

});
