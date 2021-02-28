$(document).ready(function () {
    
    "use strict";
    
    // Preloader
    
    $(window).load(function () { // makes sure the whole site is loaded
        $('.page-preloader spinner').fadeOut(); // will first fade out the loading animation
        $('.page-preloader').delay(350).fadeOut('slow');
        // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })

    //Multistep Form
    var form1 = document.querySelector('#form1');
    var form2 = document.querySelector('#form2');
    var form3 = document.querySelector('#form3');
    var form4 = document.querySelector('#form4');
    
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var address = document.querySelector('#inputAddress');
    var city = document.querySelector('#inputCity');
    var state = document.querySelector('#inputState');
    var zip = document.querySelector('#inputZip');
    var birthdate = document.querySelector('#DOB');

    
    function checkAge(){
    var x = new Date($("#DOB").val());  
    var Cnow = new Date();  
    if (Cnow.getFullYear() - x.getFullYear() >= 18)   
    {  
        return true;  
    }  else 
    {  
        return false
    }   
}

    $('#next1').click(function(){
        if(!name.checkValidity() || !email.checkValidity()){

         document.getElementById("demo").innerHTML = name.validationMessage || email.validationMessage;

        } else{
        form1.style.left = '-550px';
        form2.style.left = '20px';
        }
    });

    $('#next2').click(function(){
        if(!address.checkValidity() || !city.checkValidity() || !state.checkValidity() || !zip.checkValidity()){

         document.getElementById("demo2").innerHTML = address.validationMessage || city.validationMessage || state.validationMessage || zip.validationMessage;

        } else{
        form2.style.left = '-550px';
        form3.style.left = '20px';
        }
    });

    $('#next3').click(function(){
        if(!birthdate.checkValidity()){

         document.getElementById("demo3").innerHTML = birthdate.validationMessage;

        } if(!checkAge()){
        
         document.getElementById("message").innerHTML = "You Must Be 18 or Older";

        } else {
        form3.style.left = '-550px';
        form4.style.left = '20px';
        }
    });

    //Counter

    const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


    
});