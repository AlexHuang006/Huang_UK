// 1. Send Verification Code
(function () {
    const code = document.querySelector('.form-item .code')
    let flag = true

    // click event 
    code.addEventListener('click', function (e) {
        e.preventDefault()
        // avoviding reclick
        if (flag) {
            flag = false

            let i = 10

            code.innerHTML = `${i}秒后重新获取`

            code.classList.remove('active')

            let timerId = setInterval(function() {
                i--

                code.innerHTML = `0${i}秒后重新获取`

                if (i === 0) {
                    clearInterval(timerId)

                    code.innerHTML = `重新获取`

                    flag = true

                    code.classList.add('active')
                }
            }, 1000)
        } 
    })
})();

// 2. Verification username
const username = document.querySelector('[name = username]')

function verifyName () {
    const msg = username.nextElementSibling

    const reg = /^[a-zA-Z0-9-_]{6,10}$/

    if (!reg.test(username.value)) {
        msg.innerHTML = '输入不合法，请输入6～10位'
        return false
    }

    msg.innerHTML = ''
    return true
}

username.addEventListener('change', verifyName)

// 3. Verification Phone number 
const phone = document.querySelector('[name = phone]')

function verifyPhone () {
    const msg = phone.nextElementSibling

    const reg = /^07\d{9}$/

    if (!reg.test(phone.value)) {
        msg.innerHTML = '输入不合法，请输入正确的手机号码'

        return false
    }

    msg.innerHTML = ''
    return true
}

phone.addEventListener('change', verifyPhone)

// 4. Verifivation phone code 
const phoneCode = document.querySelector('[name = code]')

function verifyCode () {
    const msg = phoneCode.nextElementSibling

    const reg = /^\d{6}$/

    if (!reg.test(phoneCode.value)) {
        msg.innerHTML = '输入不合法,6 位数字'
        return false
    }

    msg.innerHTML = ''
    return true
}

phoneCode.addEventListener('change', verifyCode)

// 5. Verification password
const password = document.querySelector('[name = password]')

function verifyPassword () {
    const msg = password.nextElementSibling

    const reg = /^[a-zA-Z0-9-_]{6,20}$/

    if (!reg.test(password.value)) {
        msg.innerHTML = '输入不合法,6~20位数字字母符号组成'
        return false
    }
    msg.innerHTML = ''
    return true
}

password.addEventListener('change', verifyPassword)

// 6. Confirm Password 
const confirm = document.querySelector('[name = confirm]')

function confirmPassword () {
    const msg = confirm.nextElementSibling

    if (confirm.value !== password.value) {
        msg.innerHTML = '两次密码输入不一致'
        return false
    }
    msg.innerHTML = ''
    return true
}

confirm.addEventListener('change', confirmPassword)

// 7. Submit
const form = document.querySelector('form')
const agree = document.querySelector('[name = agree]')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (!agree.checked) {
        return alert('请勾选同意协议')
        e.preventDefault()
    }
    if (!verifyName()) e.preventDefault()
    if (!verifyPhone()) e.preventDefault()
    if (!verifyCode()) e.preventDefault()
    if (!verifyPassword()) e.preventDefault()
    if (!confirmPassword()) e.preventDefault()
    
    localStorage.setItem('uname', username.value)
    
    alert('注册成功')
    location.href = './index.html'
})