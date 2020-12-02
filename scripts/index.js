let input = document.getElementById('word');
let word = document.getElementById("wordcount");
let btn = document.getElementById('check');
let publish = document.getElementById('demo');
input.addEventListener('keyup', function() {
    document.getElementById('demo').innerHTML = `Character Length ${input.value.length}`;
});
input.addEventListener('keyup', function() {
    // let wordCount = 1;
    let sen = document.getElementById('word').value;
    // for (let i = 0; i <= sen.length; i++) {
    //     if (sen.charAt(i) == ' ') {
    //         wordCount++;
    //     }
    // }
    let text = sen.split(" ");
    let wordCount = text.length;
    document.getElementById('wordlength').innerHTML = `Word Found ${wordCount} `;
})