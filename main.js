//JS engine for mscbr. Development portfolio

function main() {

    //changing navbar orientation due to the scroll position
    function toSidebar() {
        var scrollpos = window.scrollY;
        var navbar = document.getElementById("navbar");
        
        function add_class_on_scroll() {
            navbar.classList.add("sidebar");
        }
        
        function remove_class_on_scroll() {
            navbar.classList.remove("sidebar");
        }
        
        window.addEventListener('scroll', function(){ 
            //Here you forgot to update the value
            scrollpos = window.scrollY;
        
            if(scrollpos > 140){
                add_class_on_scroll();
            }
            else {
                remove_class_on_scroll();
            }
            // console.log(scrollpos);
        });
    }
    toSidebar();

    //smooth scrolling to anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

$(document).ready(main);