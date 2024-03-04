// Lấy phần tử input và nút toggle
var input = document.getElementById('password');
var toggle = document.getElementById('toggle');

// Thêm sự kiện click cho nút toggle
toggle.addEventListener('click', function() {
    // Kiểm tra nếu kiểu của input là password thì đổi thành text và ngược lại
    if (input.type === 'password') {
        input.type = 'text';
        toggle.classList.replace("uil-eye", "uil-eye-slash");
    } else {
        input.type = 'password';
        toggle.classList.replace("uil-eye-slash", "uil-eye");
    }
})

//True False
let btn = document.getElementById('click');
let user = document.getElementById('user');
let password = document.getElementById('password');

btn.addEventListener('click', function(event){
    event.preventDefault();
    let userValue = user.value;
    let passwordValue = password.value;
    let acc = true, pas = true;

    //user space
    if (userValue.includes(' ')) {
        acc = false; 
    }
    let specialChars = /[!@#$%^&*()_+{},.:"'\|~`<>?/"]/;
    if (specialChars.test(userValue)) {
        acc = false;
    }
    
    //pass length
    if (passwordValue.length < 8)
        pas = false;
    //pass lowercase
    if (!/[a-z]/.test(passwordValue)) {
        pas = false;
    }
    //pass upper case
    if (!/[A-Z]/.test(passwordValue)) {
        pas = false;
    }
    //pass number
    if (!/[0-9]/.test(passwordValue))
        pas = false;
    //pass special
    if (!specialChars.test(passwordValue)) {
        pas = false;
    }
    if(passwordValue.includes(' ')){
        pas = false;
    }
    if (pas === false)
    {
        alert("Làm ơn nhập lại giúp tôi có đủ chữ hoa, chữ thường, kí tự đặc biệt, chữ số và đừng có dấu cách nhé :))))");
    }
    else if (acc === false){
        alert("User name Chỉ bao gồm các kí tự chữ cái và số thôi nhé")
    }
    else
    {
        alert("Đăng nhập thành công, bạn quá xuất sắc");
    }
});
