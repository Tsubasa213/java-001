// JavaScriptの基本構文に関する例をコンソールに出力する

console.log("JavaScriptの基本構文を学びましょう！");

// 1. 変数の宣言
var message = "こんにちは、JavaScript!";
let count = 10;
const pi = 3.14159;

console.log(message);
console.log("カウント: " + count);
console.log("円周率: " + pi);

// 2. 条件分岐
let age = 20;
if (age >= 18) {
    console.log("成人です。");
} else {
    console.log("未成年です。");
}

// 3. 繰り返し処理
for (let i = 0; i < 5; i++) {
    console.log("ループ番号: " + i);
}

// 4. 関数
function greet(name) {
    return "こんにちは、" + name + "!";
}

console.log(greet("太郎"));

// 5. オブジェクトと配列
let person = {
    name: "花子",
    age: 25,
    greet: function() {
        console.log("こんにちは、" + this.name + "です。");
    }
};

let fruits = ["りんご", "バナナ", "オレンジ"];

console.log(person.name);
person.greet();
console.log(fruits[0]);


// document.querySelectorAll('.copy-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const code = button.nextElementSibling.innerText;
//         navigator.clipboard.writeText(code).then(() => {
//             const originalText = button.innerText;
//             button.innerText = 'コピー完了!';
//             setTimeout(() => {
//                 button.innerText = originalText;
//             }, 1000); // 1秒後に元のテキストに戻す
//         }).catch(err => {
//             console.error('コピーに失敗しました: ', err);
//         });
//     });
// });

// コードブロックにコピーボタンを追加する
document.querySelectorAll('pre').forEach((pre) => {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'コピー';

    // コピーボタンがクリックされたときの処理
    button.addEventListener('click', () => {
        const code = pre.innerText;
        navigator.clipboard.writeText(code).then(() => {
            const originalText = button.innerText;
            button.innerText = 'コピー完了!';
            setTimeout(() => {
                button.innerText = originalText;
            }, 1000);
        }).catch(err => {
            console.error('コピーに失敗しました: ', err);
        });
    });

    // コードブロックにボタンを追加
    pre.appendChild(button);
});