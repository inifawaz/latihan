import { keywords, elements} from './base.js';


// fungsi ini digunakan untuk mendapatkan keywords acak
const ambilTemaAcak = () => {
    // tentukan angka acaknya
    const indexArray1 = Math.floor(Math.random() * (keywords.length -1)) + 0;
    const indexArray2 = Math.floor(Math.random() * (keywords.length -1)) + 0;
    // cek dulu jika angka acaknya sama maka ulangi lagi
    if(indexArray1 !== indexArray2) {
        // masukkan keywords kedalam element
        elements.tema1.innerText = keywords[indexArray1];
        elements.tema2.innerText = keywords[indexArray2];
    } else {
        ambilTemaAcak()
    }
}
// panggil fungsi ini setiap kali di referesh
ambilTemaAcak()

const pilihTema = (e) => {
    e.target.classList.add('active')
    if (document.querySelector('.tema-1').classList.contains('active') ) {
        console.log('tr')
        document.querySelector('.main__control p').style.display = 'none'
        elements.questionBx.style.display = 'block';
    } else {
        document.querySelector('.tema-1').remove()
    }

    if (document.querySelector('.tema-2').classList.contains('active') ) {
        console.log('tr')
        document.querySelector('.main__control p').style.display = 'none'
        elements.questionBx.style.display = 'block';

    } else {
        document.querySelector('.tema-2').remove()
    }

    const pilihanAnda = document.querySelector('.main__options a').textContent;
    
    ambilGambar(pilihanAnda)
}

document.querySelectorAll('.main__options a').forEach(element => {
    element.addEventListener('click', pilihTema)
})

const ambilGambar = async (e, page = 1) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${e}&client_id=VDgQBVt0VaNBWdQhXQVM0VRvzsJvc46uSmgFVqN5b3E`);
        const responseJson = await response.json();
        const urlImgs = responseJson.results;
        cetakGambar(urlImgs)
        console.log(urlImgs)
        
    } catch(error) {
        console.log(error)
    }
}

const cetakGambar = (e) => {
    elements.fotoBx.innerHTML = ''
    e.forEach(element => {
        elements.fotoBx.innerHTML += `
            <img src=${element.urls.small}>
        `
    })
}

const nextPage = () => {
    let currentPage = parseInt(elements.btnNext.dataset.count)
    currentPage += 1
    elements.btnNext.dataset.count = currentPage;
    console.log(currentPage)
    const query = document.querySelector('.main__options a').textContent
    ambilGambar(query, currentPage)
}

elements.btnNext.addEventListener('click', nextPage)

elements.btnStop.addEventListener('click', () => {
    elements.stopSection.style.bottom = '0'
})

elements.btnExit.addEventListener('click', () => {
    elements.stopSection.style.bottom = '-100%'
})