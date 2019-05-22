function myFunc(){
    var button = document.querySelectorAll('button');
    console.log('I like this post');
    if(button.className = 'pre-btn'){
        alert('Thank you for liking this post')
    } else {
         alert('I did not like this post');
    }
 }

var btn = document.querySelectorAll('button');
for(var i=0; i<btn.length; i++) {
    btn[i].addEventListener('click', myFunc, false);
}
