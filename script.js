$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

 //   toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing menu animation script-- un comment above var for animation
    /*var typed=new Typed(".typing",{
        strings: ["Developer","Freelancer","Designer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    })*/
});
function sendEmail(name, email, message){
Email.send({
    Host: "smtp.gmail.com",
    Username: "vamshik",
    Password: "rbcafmwpyvacgpjg",
    secureToken : "c338d85f-1acc-4c67-b197-1d5aa83fc3e4",
    To : "vamshiladdu418@gmail.com",
    From : "vamshiladdu418@gmail.com",
    Subject : '${name} sent you a message',
    Body : 'Name: ${name} <br/> Email: ${email} <br/> ${subject} <br/> Message: ${message}',
}).then((message)=>alert("mail sent successfully"));
}