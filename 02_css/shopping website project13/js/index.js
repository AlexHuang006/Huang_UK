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
}, 1000)

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
    }, 1000)
})

// 3.3 click event for indicator 
indicator.forEach((item, index) => {
    item.addEventListener('click', function () {
        clearInterval(timeId)
        toggleBanner(index)
        i = index
    })
})

// 4. Products area 1 for content 
const container1 = document.querySelector('.recommend1 .bd ul')
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

container1.innerHTML = liArray.join('')

// 5. Products area 2 for content
const container2 = document.querySelector('.recommend2 .bd ul')
const contentData2 = [
    {url: './uploads/recommend1.png', h: 'KN95 Mask', h2: 'Good quality & Price'},
    {url: './uploads/recommend2.png', h: 'Tea & Black Tea', h2: 'Good quality & Price'},
    {url: './uploads/recommend3.png', h: 'Books', h2: 'Good quality & Price'},
    {url: './uploads/recommend4.png', h: 'Home & Sofa', h2: 'Good quality & Price'}
]

const liArray2 = []
for (i = 0; i < contentData2.length; i++) {
    liArray2.push(`
        <li>
            <a href="#">
                <div class="pic"><img src="${contentData2[i].url}" alt=""></div>
                <div class="txt">
                    <h4>${contentData2[i].h}</h4>
                    <p>${contentData2[i].h2}</p>
                </div>
            </a>
        </li>
        `)
}

container2.innerHTML = liArray2.join('')

// 6. Prodcuts area 3 for content
const container3 = document.querySelector('.recommend3 .bd ul')
const contentData3 = [
    {url: './uploads/hot1.png'},
    {url: './uploads/hot2.png'},
    {url: './uploads/hot3.png'},
    {url: './uploads/hot4.png'},
    {url: './uploads/hot5.png'},
]

const liArray3 = []
for (i = 0; i < contentData3.length; i++) {
    liArray3.push(`
        <li>
            <a href="#">
                <img src="${contentData3[i].url}" alt="">
            </a>
        </li>
        `)
}

container3.innerHTML = liArray3.join('')

// 7. Products area 4
// 7.1 get content 
// const container4 = document.querySelector('.recommend4 .content .right .a1')
const contentData4 = [
    [
        {url: './uploads/fresh1.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '121'},
        {url: './uploads/fresh2.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '221'},
        {url: './uploads/fresh3.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '321'},
        {url: './uploads/fresh4.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '9.21'},
        {url: './uploads/fresh5.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '3.21'},
        {url: './uploads/fresh6.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '21'},
        {url: './uploads/fresh7.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '21'},
        {url: './uploads/fresh8.png', h: 'Highly recommend snacks', p1: 'Flavour', p2: 'Snacks name', price: '21'}
        ],
    [
            {url: './uploads/fresh8.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '31'},
            {url: './uploads/fresh2.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '31'},
            {url: './uploads/fresh7.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '2.31'},
            {url: './uploads/fresh4.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '31'},
            {url: './uploads/fresh5.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '3.31'},
            {url: './uploads/fresh1.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '31'},
            {url: './uploads/fresh7.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '6.31'},
            {url: './uploads/fresh2.png', h: 'Highly recommend snacks2', p1: 'Good', p2: 'Snacks name', price: '31'},
        ],
    [
            {url: './uploads/fresh7.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '4.34'},
            {url: './uploads/fresh8.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '34'},
            {url: './uploads/fresh2.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '34'},
            {url: './uploads/fresh4.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '34'},
            {url: './uploads/fresh5.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '5.34'},
            {url: './uploads/fresh6.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '1.34'},
            {url: './uploads/fresh3.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '34'},
            {url: './uploads/fresh1.png', h: 'Highly recommend snacks3', p1: 'Great', p2: 'Snacks name3', price: '2.34'},
        ]
]


for (i = 0; i < contentData4.length; i++) {
    const liArray4 = []
    for (j = 0; j < contentData4[i].length; j++) {
        liArray4.push(`
                <li>
                    <a href="#">
                        <div class="pic"><img src="${contentData4[i][j].url}" alt=""></div>
                        <div class="txt">
                            <div class="info">
                                <h4>${contentData4[i][j].h}</h4>
                                <p>${contentData4[i][j].p1}</p>
                                <p>${contentData4[i][j].p2}</p>
                            </div>
                            <p class="price">£<span>${contentData4[i][j].price}</span></p>
                        </div>
                    </a>
                    <div class="cover">
                        <p>Finding more</p>
                        <p></p>
                        <p>more<span class="iconfont icon-arrow-right-bold"></span></p>
                    </div>
                </li>
            `)
    }
    document.querySelector(`.recommend4 .content .right ul:nth-child(${i+1})`).innerHTML = liArray4.join('')
    // console.log(`${i}`)
    // console.log(liArray4)
}



// 7.2 
const navigation2 = document.querySelectorAll('.recommend4 .tittle .right ul li')

navigation2.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        document.querySelector('.recommend4 .tittle .right ul .active').classList.remove('active')
        document.querySelector(`.recommend4 .tittle .right ul li:nth-child(${index + 1}) a`).classList.add('active')
        document.querySelector('.recommend4 .content .right .active').classList.remove('active')
        // console.log(`delete a${index}`)
        document.querySelector(`.recommend4 .content .right ul:nth-child(${index+1})`).classList.add('active')
    })
})

// 8. Article 
const container5 = document.querySelector('.recommend5 .topic_bd ul')
const contentData5 = [
    {url: './uploads/topic1.png', price: '21'},
    {url: './uploads/topic2.png', price: '26'},
    {url: './uploads/topic3.png', price: '30'}
]

const liArray5 = []
for (i = 0; i < contentData5.length; i++) {
    liArray5.push(`
        <li>
                    <a href="#">
                        <div class="pic">
                            <img src="${contentData5[i].url}" alt="">
                            <div class="cover">
                                <div class="left">
                                    <h4>The Delicious Food For Yourself</h4>
                                    <p>Good & Tasty</p>
                                </div>
                                <div class="right">
                                    £<span>${contentData5[i].price}</span><span>from</span>
                                </div>
                            </div>
                        </div>
                        <div class="txt">
                            <div class="left">
                                <p>
                                    <i class="iconfont icon-favorites-fill"></i>
                                    <span>1220</span>
                                </p>
                                <p>
                                    <i class="iconfont icon-browse"></i>
                                    <span>1800</span>
                                </p>
                            </div>
                            <div class="right">
                                <p>
                                    <i class="iconfont icon-comment"></i>
                                    <span>246</span>
                                </p>
                            </div>
                        </div>
                    </a>
        </li>
        `)
}

container5.innerHTML = liArray5.join('')

// 10. elevator
function appear1 () {
    const elevator = document.querySelector('.elevator')

    window.addEventListener('scroll', function() {
        const n = document.documentElement.scrollTop
        // if (n > 300) {
        //     elevator.style.opacity = 1
        // } else {
        //     elevator.style.opactiy = 0
        // }

        elevator.style.opacity = n > 300 ? 1 : 0
    })

    const backTop = document.querySelector('#backTop')

    backTop.addEventListener('click', function () {
        document.documentElement.scrollTop =0
    })
}

function appear2 () {
    const list = document.querySelector('.elevator-list')
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            const old = document.querySelector('.elevator .active')

            if (old) {
                old.classList.remove('active')
            }
            
            e.target.classList.add('active')

            const top = document.querySelector(`.recommen${e.target.dataset.name}`).offsetTop
            // console.log(top)

            document.documentElement.scrollTop = top
        }
    })
}

function appear3 () {
    window.addEventListener('scroll', function () {
        const old = document.querySelector('.elevator .active')
    
            if (old) {
                old.classList.remove('active')
            }
    
        const recommend1 = document.querySelector('.recommend1')
        const recommend2 = document.querySelector('.recommend2')
        const recommend3 = document.querySelector('.recommend3')
        const recommend4 = document.querySelector('.recommend4')
        const recommend5 = document.querySelector('.recommend5')
        const n = document.documentElement.scrollTop
        if (n >= recommend1.offsetTop && n < recommend2.offsetTop) {
            document.querySelector('[data-name=d1]').classList.add('active')
        } else if (n >= recommend2.offsetTop && n < recommend3.offsetTop) {
            document.querySelector('[data-name=d2]').classList.add('active')
        } else if (n >= recommend3.offsetTop && n < recommend4.offsetTop) {
            document.querySelector('[data-name=d3]').classList.add('active')
        } else if (n >= recommend4.offsetTop && n < recommend5.offsetTop) {
            document.querySelector('[data-name=d4]').classList.add('active')
        }
    })
}

appear1()
appear2()
appear3()

// 11. login
const li1 = document.querySelector('.shortcut li:first-child')
const li2 = li1.nextElementSibling

function render () {
    const uname = localStorage.getItem('uname')

    if (uname) {
        li1.innerHTML = `<a href="#"><i class="iconfont icon-favorites-fill"></i>${uname}</a>`
        li2.innerHTML = `<a href="#">Log out</a>`
    } else {
        li1.innerHTML = `<a href="./login.html">Login</a>`
        li2.innerHTML = `<a href="./register.html">Register</a>`
    }
}
render()

li2.addEventListener('click', function () {
    localStorage.removeItem('uname')
    render()
})