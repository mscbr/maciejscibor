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
        
            if(scrollpos > 280){
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

    //mask sliding off from project tiles in #projects section
    function slideHover() {
        var websitesMask = document.getElementById("websites-mask");
        var websites = document.getElementById("websites");
        var appsMask = document.getElementById("apps-mask");
        var apps = document.getElementById("web-apps");
        var dsMask = document.getElementById("ds-mask");
        var ds = document.getElementById("data-science");
        // ... more variables

        //ading event listeners
        websitesMask.addEventListener("mouseover", downsize);
        websites.addEventListener("mouseover", downsize);
        appsMask.addEventListener("mouseover", downsizeApps);
        apps.addEventListener("mouseover", downsizeApps);
        dsMask.addEventListener("mouseover", downsizeData);
        ds.addEventListener("mouseover", downsizeData);

        websitesMask.addEventListener("mouseout", resize);
        websites.addEventListener("mouseout", resize);
        appsMask.addEventListener("mouseout", resizeApps);
        apps.addEventListener("mouseout", resizeApps);
        dsMask.addEventListener("mouseout", resizeData);
        ds.addEventListener("mouseout", resizeData);


        function downsize() {
            websitesMask.classList.add("proj-mask-off");
        }
        function resize() {
            websitesMask.classList.remove("proj-mask-off");
        }
        function downsizeApps() {
            appsMask.classList.add("proj-mask-off");
        }
        function resizeApps() {
            appsMask.classList.remove("proj-mask-off");
        }
        function downsizeData() {
            dsMask.classList.add("proj-mask-off");
        }
        function resizeData() {
            dsMask.classList.remove("proj-mask-off");
        }

    }
    slideHover();
}

$(document).ready(main);