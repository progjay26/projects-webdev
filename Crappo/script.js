AOS.init();
const hamburgerMenu = document.getElementById('hamburgerMenu')
const closeBtn = document.getElementById('closeBtn')
const links = document.getElementById('links')
const bitcoin = document.getElementById('bitcoin')
const ethereum = document.getElementById('ethereum')
const litecoin = document.getElementById('litecoin')
const btc = document.getElementById('btc')
const eth = document.getElementById('eth')
const lte = document.getElementById('lte')
const mineBtc = document.getElementById('start-btc')
const mineEth = document.getElementById('start-eth')
const mineLte = document.getElementById('start-lte')


hamburgerMenu.addEventListener('click',function(){
     hamburgerMenu.style.display = 'none'
     closeBtn.style.display = 'block'
     links.style.display = 'block'
})

closeBtn.addEventListener('click',function(){
     hamburgerMenu.style.display = 'block'
     closeBtn.style.display = 'none'
     links.style.display = 'none'
})

bitcoin.onclick = function(){
    bitcoin.style.backgroundColor = '#2B076E'
    bitcoin.style.color = 'white'
    btc.style.display = 'none'
    mineBtc.style.display = 'block'
    ethereum.style.backgroundColor = 'white'
    ethereum.style.color = 'black'
    eth.style.display = 'block'
    mineEth.style.display = 'none'
    litecoin.style.backgroundColor = 'white'
    litecoin.style.color = 'black'
    lte.style.display = 'block'
    mineLte.style.display = 'none'
}
ethereum.onclick = function(){
    bitcoin.style.backgroundColor = 'white'
    bitcoin.style.color = 'black'
    btc.style.display = 'block'
    mineBtc.style.display = 'none'
    ethereum.style.backgroundColor = '#2B076E'
    ethereum.style.color = 'white'
    eth.style.display = 'none'
    mineEth.style.display = 'block'
    litecoin.style.backgroundColor = 'white'
    litecoin.style.color = 'black'
    lte.style.display = 'block'
    mineLte.style.display = 'none'
}
litecoin.onclick = function(){
    bitcoin.style.backgroundColor = 'white'
    bitcoin.style.color = 'black'
    btc.style.display = 'block'
    mineBtc.style.display = 'none'
    ethereum.style.backgroundColor = 'white'
    ethereum.style.color = 'black'
    eth.style.display = 'block'
    mineEth.style.display = 'none'
    litecoin.style.backgroundColor = '#2B076E'
    litecoin.style.color = 'white'
    lte.style.display = 'none'
    mineLte.style.display = 'block'
}