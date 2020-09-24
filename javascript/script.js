const body = document.querySelector('.main-body');
const listItem = document.querySelectorAll('.navbar ul li a');
listItem.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.className == 'btnAbout'){
            aboutDetail = showAboutDetail();
            body.innerHTML = aboutDetail;
        }
        if(e.target.className == 'btnSkills'){
            const skillsDetail = showSkillsDetail();
            body.innerHTML = skillsDetail;
        }
        if(e.target.className == 'btnPortfolio'){
            const portfolioDetail = showPortfolioDetail();
            body.innerHTML = portfolioDetail;
        }
        if(e.target.className == 'btnContact'){
            const contactDetail = showContactDetail();
            body.innerHTML = contactDetail;
        }
    });
});

const resize = () => {
    if(innerWidth < 768.98){
	    const allDetail = showAllDetail();
        body.innerHTML = allDetail;
    }
    else{
        body.innerHTML = showAboutDetail();
    }
}

addEventListener('resize', resize);
addEventListener('DOMContentLoaded', resize);


const hamburgerMenu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.sidebar');
hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('active');
});


function showAboutDetail(){
    return `<div class="about" id="about">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente sunt impedit voluptas, tenetur accusantium autem sit ab nemo quod laudantium iste eius enim in?</p>
    <div class="kotak">
        <div class="kotak-kotak">
            <span><i class="fa fa-code"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="kotak-kotak">
            <span><i class="fa fa-tablet"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="kotak-kotak">
            <span><i class="fa fa-desktop"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="kotak-kotak">
            <span><i class="fa fa-pencil"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</div>`
}

function showSkillsDetail(){
    return ` <div class="skills">
    <h2>Skills</h2>
    <div class="col">
        <span><i class="devicon-html5-plain colored"></i>HTML</span>
        <div class="bar">
            <span class="nilai html"><p>100%</p></span>
        </div>
        <span><i class="devicon-css3-plain colored"></i>CSS</span>
        <div class="bar">
            <span class="nilai css"><p>90%</p></span>
        </div>
        <span><i class="devicon-javascript-plain colored"></i>Javascript</span>
        <div class="bar">
            <span class="nilai js"><p>80%</p></span>
        </div>
        <span><i class="devicon-bootstrap-plain colored"></i>Bootstrap</span>
        <div class="bar">
            <span class="nilai bootstrap"><p>75%</p></span>
        </div>
        <span><i class="devicon-jquery-plain colored"></i>JQuery</span>
        <div class="bar">
            <span class="nilai jquery"><p>80%</p></span>
        </div>
        <span><i class="devicon-vuejs-plain colored"></i>VueJs</span>
        <div class="bar">
            <span class="nilai vue"><p>80%</p></span>
        </div>
        <span><i class="devicon-react-plain colored"></i>ReactJs</span>
        <div class="bar">
            <span class="nilai react"><p>80%</p></span>
        </div>
        <span><i class="devicon-sass-plain colored"></i>SASS</span>
        <div class="bar">
            <span class="nilai sass"><p>80%</p></span>
        </div>
    </div>
</div>`
}

function showPortfolioDetail(){
    return `<div class="portfolio">
    <h2>Portfolio</h2>
    <div class="container-card">
        <div class="card">
            <img src="img/1.jpg" alt="laptop">
            <h4>Portfolio 1</h4>
            <p>Lorem ipsum dolor sit amet. <a href="#">Open</a></p>
        </div>
        <div class="card">
            <img src="img/2.jpg" alt="laptop">
            <h4>Portfolio 2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Open</a></p>
        </div>
        <div class="card">
            <img src="img/3.jpg" alt="laptop">
            <h4>Portfolio 3</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Open</a></p>
        </div>
        <div class="card">
            <img src="img/4.jpg" alt="laptop">
            <h4>Portfolio 4</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Open</a></p>
        </div>
    </div>
</div>`
}

function showContactDetail(){
    return `<div class="contact">
    <h2>Contact Me</h2>
    <div class="contact-form">
        <input type="text" name="name" class="form-control name" placeholder="Your Name">
        <input type="email" name="email" class="form-control email" placeholder="Your Email">
        <textarea name="message" class="form-control" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" class="form-control submit" value="SEND">
    </div>
</div>`
}

function showAllDetail(){
    return `<div class="about" id="about">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente sunt impedit voluptas, tenetur accusantium autem sit ab nemo quod laudantium iste eius enim in?</p>
    <div class="kotak">
        <div class="kotak-kotak">
            <span><i class="fa fa-code"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="kotak-kotak">
            <span><i class="fa fa-tablet"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="kotak-kotak">
            <span><i class="fa fa-desktop"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="kotak-kotak">
            <span><i class="fa fa-pencil"></i></span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</div>
<div class="skills" id="skills">
    <h2>Skills</h2>
    <div class="col">
        <span><i class="devicon-html5-plain colored"></i>HTML</span>
        <div class="bar">
            <span class="nilai html"><p>100%</p></span>
        </div>
        <span><i class="devicon-css3-plain colored"></i>CSS</span>
        <div class="bar">
            <span class="nilai css"><p>90%</p></span>
        </div>
        <span><i class="devicon-javascript-plain colored"></i>Javascript</span>
        <div class="bar">
            <span class="nilai js"><p>80%</p></span>
        </div>
        <span><i class="devicon-bootstrap-plain colored"></i>Bootstrap</span>
        <div class="bar">
            <span class="nilai bootstrap"><p>75%</p></span>
        </div>
        <span><i class="devicon-jquery-plain colored"></i>JQuery</span>
        <div class="bar">
            <span class="nilai jquery"><p>80%</p></span>
        </div>
        <span><i class="devicon-vuejs-plain colored"></i>VueJs</span>
        <div class="bar">
            <span class="nilai vue"><p>80%</p></span>
        </div>
        <span><i class="devicon-react-plain colored"></i>ReactJs</span>
        <div class="bar">
            <span class="nilai react"><p>80%</p></span>
        </div>
        <span><i class="devicon-sass-plain colored"></i>SASS</span>
        <div class="bar">
            <span class="nilai sass"><p>80%</p></span>
        </div>
    </div>
</div>
<div class="portfolio" id="portfolio">
    <h2>Portfolio</h2>
    <div class="container-card">
        <div class="card">
            <img src="img/1.jpg" alt="laptop">
            <h4>Portfolio 1</h4>
            <p>Lorem ipsum dolor sit amet. <a href="#">Open</a></p>
        </div>
        <div class="card">
            <img src="img/2.jpg" alt="laptop">
            <h4>Portfolio 2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Open</a></p>
        </div>
        <div class="card">
            <img src="img/3.jpg" alt="laptop">
            <h4>Portfolio 3</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Open</a></p>
        </div>
        <div class="card">
            <img src="img/4.jpg" alt="laptop">
            <h4>Portfolio 4</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#">Open</a></p>
        </div>
    </div>
</div>
<div class="contact" id="contact">
    <h2>Contact Me</h2>
    <div class="contact-form">
        <input type="text" name="name" class="form-control name" placeholder="Your Name">
        <input type="email" name="email" class="form-control email" placeholder="Your Email">
        <textarea name="message" class="form-control" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" class="form-control submit" value="SEND">
    </div>
</div>`
}