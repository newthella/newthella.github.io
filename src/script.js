const IYA = document.querySelector('#iya');
const TIDAK = document.querySelector('#tidak');
IYA.addEventListener('click', () => {
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });
    document.querySelector('.wrapper > div').style.backgroundColor = '#6FD240';
    document.querySelector('.wrapper h1').innerText = 'Anda Benar!';
    document.querySelector('.wrapper > div > div > div:first-child').innerText = 'Anda adalah seorang Mahasiswa';
    document.querySelector('.wrapper > div > img').setAttribute('src','assets/22b0da421086d344420bcc7fb45598b1.png')
});
TIDAK.addEventListener('click', () => {
    document.querySelectorAll('button').forEach((button) => {
        button.remove();
    });
    document.querySelector('.wrapper > div').style.backgroundColor = '#E12E2E';
    document.querySelector('.wrapper h1').innerText = 'Anda Berbohong!';
    document.querySelector('.wrapper > div > div > div:first-child').innerText = 'Anda adalah seorang Teknisi';
    document.querySelector('.wrapper > div > img').setAttribute('src','assets/bcb2a8115cc9610a0c1a9d78ccb9a051.png')
});