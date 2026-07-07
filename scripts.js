
function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.
    
    header = `
    <header>
    <nav>
        <a href="index.html">
            <div class="logo">
                <img src="images/gbr-logo.png" alt="GbR 27" height="60px">
            </div>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="call-for-papers.html">Call for Papers</a></li>
            <li><a href="#">Venue</a></li>
            <li><a href="organization.html">Organization</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#" class="link-btn">Registration</a></li>
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `

    footer = `
    <footer>
        <p>© Copyright 2027. IAPR TC-15 - Original template by <a href="https://github.com/nahimsouza/conference-website/">nahimsouza</a>.</p>
    </footer>
    `

    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;

    // responsive menu
    document.querySelector('#menu').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('showmenu');
    });

}

window.onload = loadComponents;
