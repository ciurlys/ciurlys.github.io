    let tenCommandments = "1 And God spake all these words, saying, \n 2 I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.\n 3 Thou shalt have no other gods before me.\n 4 Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth:\n 5 Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;\n 6 And shewing mercy unto thousands of them that love me, and keep my commandments.\n 7 Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.\n 8 Remember the sabbath day, to keep it holy.\n 9 Six days shalt thou labour, and do all thy work:\n 10But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:\n 11 For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.\n 12 Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.\n 13 Thou shalt not kill.\n 14 Thou shalt not commit adultery.\n 15 Thou shalt not steal.\n 16 Thou shalt not bear false witness against thy neighbour.\n 17 Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's.";



    let form = document.querySelector('#form');
    form.addEventListener('submit', passCheck);
    let firstText = document.querySelector('.hidden-text-password')
    let secondText = document.querySelector('.hidden-text-passwordRepeat')
function passCheck(event){

    pass = form.password.value;
    passRepeat = form.passwordRepeat.value;

    if(pass == ''){
        alert('Enter password');
        form.password.style.border = "2px solid red";
        firstText.style.color = 'red';
        firstText.textContent = 'You must enter the password'
        event.preventDefault();
    }else if(passRepeat == ''){
        alert('Enter confirm password');
        form.passwordRepeat.style.border = "2px solid red";
        secondText.style.color = 'red';
        secondText.textContent = "You must confirm your password"
        firstText.textContent = '';
        event.preventDefault();
    }else if(pass != passRepeat){
        alert('Passwords must match');
        form.password.style.border = "2px solid red";
        form.passwordRepeat.style.border = "2px solid red";
        firstText.style.color = 'red';
        firstText.textContent = 'Passwords must match';
        secondText.textContent = '';
        event.preventDefault();
    }else{
        let all = document.querySelector('body');
        all.innerHTML = "<img src='final.jpg' width='100%' height='100%'>";
        alert(tenCommandments);
    }



}