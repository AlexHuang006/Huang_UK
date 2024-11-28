// 3. banner part 
const bannerData = [
    {url: './uploads/banner1.png'},
    {url: './uploads/banner2.png'},
    {url: './uploads/banner3.png'},
]

const banner = document.querySelector('.banner .wrapper')
const img = document.querySelector('.banner .wrapper .pic img')
const indicator = document.querySelectorAll('.banner .wrapper ol li')

// 3.1 automatic banner play 
function toggleBanner (i) {
    img.src = bannerData[i].url
    document.querySelector('.banner .wrapper ol .current').classList.remove('current')
    document.querySelector(`.banner .wrapper ol li:nth-child(${i + 1}`).classList.add('current')
}

let i = 0
let timeId = setInterval(function() {
    i++
    if (i >= bannerData.length) {
        i = 0
    }
    toggleBanner(i)
}, 2000)

// 3.2 Mouse enter or leave to stop or continue banner play 
banner.addEventListener('mouseenter', function () {
    clearInterval(timeId)
})
banner.addEventListener('mouseleave', function () {
    clearInterval(timeId)

    timeId = setInterval(function() {
        i++
        if (i >= bannerData.length) {
            i = 0
        }
        toggleBanner(i)
    }, 2000)
})

// 3.3 click event for indicator 
indicator.forEach((item, index) => {
    item.addEventListener('click', function () {
        clearInterval(timeId)
        toggleBanner(index)
        i = index
    })
})

// 4. Praoducts area 1 for content 
const container = document.querySelector('.recommend1 .bd ul')
const contentData = [
    {url: './uploads/goods1.png', h: 'KN95 Mask', price: '7.9'},
    {url: './uploads/goods2.png', h: 'Tea & Black Tea', price: '56.8'},
    {url: './uploads/goods3.png', h: 'Books', price: '5.8'},
    {url: './uploads/goods4.png', h: 'Home & Sofa', price: '357.9'}
]

const liArray = []
for (i= 0; i < contentData.length; i++) {
    liArray.push(`
        <li>
            <a href="#">
                <div class="pic"><img src="${contentData[i].url}" alt=""></div>
                <div class="txt">
                    <h4>${contentData[i].h}</h4>
                    <p>£<span>${contentData[i].price}</span></p>
                </div>
            </a>
        </li>
    `)
}

container.innerHTML = liArray.join('')