document.getElementById('order').addEventListener('click', function(event) {
    event.preventDefault(); // フォーム送信を防ぐ
    let err_flg = '0'; // エラーフラグの初期値

    // 名前
    let name = document.getElementById('name').value;
    if (!name.match(/./)) {
        err_flg = '1';
        document.getElementById('mess').textContent = '入力されていません';
    }

    // フリガナ
    let furigana = document.getElementById('furigana').value;
    if (!furigana.match(/^[\u30A0-\u30FF]+$/)) {
        err_flg = '2';
        document.getElementById('mess').textContent = 'カタカナで入力してください';
    }

    // メール
    let mail = document.getElementById('mail').value;
    if (!mail.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        err_flg = '3';
        document.getElementById('mess').textContent = 'メールアドレスが間違えています。';
    }

    // お問い合わせ内容
    let details = document.getElementById('details').value;
    if (!details.match(/./)) {
        err_flg = '4';
        document.getElementById('mess').textContent = 'お問い合わせ内容が入力されていません';
    }

    // セレクトボックス
    let select = document.getElementById('select-options').value;
    // エラーがない場合、データをローカルストレージに保存
    if (err_flg === '0') {
        let formData = {
            name: name,
            furigana: furigana,
            mail: mail,
            select: select,
            details: details
        };
        // ローカルストレージにデータを保存
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('保存データ:', formData);
        // 次のページへ遷移
        location.href = 'order2.html';
        
    } else {
        // エラーがあった場合
        console.log('入力エラー:', document.getElementById('mess').textContent);
        document.getElementById('mess').textContent = '受付できません。';
    }
 });