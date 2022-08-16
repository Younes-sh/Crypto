const form = document.querySelector('#form')
const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

form.addEventListener('submit' , (event)=>{
    event.preventDefault()

    checkInputs()
})

const checkInput = () =>{
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


    if (usernameValue === ''){
        setError(username , 'Pleas enter your username')
    }else{
        setSuccess(username)
    }

    if(emailValue === ''){
        setError(email , 'Pleas enter your email')
    }else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password , 'Pleas enter your password')
    }else{
        setSuccess(password)
    }

    if(password2Value === ''){
        setError(password2 , 'Pleas confirm your password')
    }else if(passwordValue !== password2Value){
        setError(password2 , "it/'s not correct confirm password")
    }
    else{
        setSuccess(password2)
    }
}
const setError = (input , massage) => {
    const formControl = input.parentElement
    const small = formeControl.querySelector('small')  

    formeControl.className = 'forme-control error'
    small.onnerText = message
}
const setSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-contrrol success'
}

