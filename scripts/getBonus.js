document.getElementById('get-bonus-btn').addEventListener('click', function(){
    showASection('bonus-section');
    removeAllBg()
    document.getElementById('get-bonus-btn').classList.remove('btn-ghost')
    document.getElementById('get-bonus-btn').classList.add('btn-primary')
    document.getElementById('get-bonus-btn').classList.remove('text-black')
    document.getElementById('get-bonus-btn').classList.add('text-white')
})