let num = 0;
document.getElementsByTagName('h1')[0].innerText = num;

document.getElementById('first').addEventListener('click', function () {
    num = num + 1;
    document.getElementsByTagName('h1')[0].innerText = num;
})

document.getElementById('second').addEventListener('click', function () {
    num = 0;
    document.getElementsByTagName('h1')[0].innerText = num;
})
