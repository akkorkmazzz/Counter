let count = 0;

const text = document.querySelector("#main-number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){

    btn.addEventListener("click",function(e){

        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")){

            count--;

        }else if(styles.contains("increase")){

            count++;

        }else{

            count = 0;
        }
        text.textContent = count;
    });

});