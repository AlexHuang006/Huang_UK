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

            code.innerHTML = `${i}s, code sent`

            code.classList.remove('active')

            let timerId = setInterval(function() {
                i--

                code.innerHTML = `0${i}s, code sent`

                if (i === 0) {
                    clearInterval(timerId)

                    code.innerHTML = `Resend Code`

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
        msg.innerHTML = 'Enter at least 6 characters'
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
        msg.innerHTML = 'Enter your mobile phone number'

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
        msg.innerHTML = 'Enter at least 6 numeric characters'
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
        msg.innerHTML = 'Enter at least 6 characters'
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
        msg.innerHTML = 'Passwords do not match'
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
        alert('Please check the box to accept the Privacy Policy.')
        return
    }
    if (!verifyName()) return
    if (!verifyPhone()) return
    if (!verifyCode()) return
    if (!verifyPassword()) return
    if (!confirmPassword()) return
    
    localStorage.setItem('uname', username.value)
    
    alert('Registration Successful')
    location.href = './index.html'
})