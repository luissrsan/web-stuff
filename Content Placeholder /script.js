
const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')
setTimeout(getData,2500)

function getData(){
    header.innerHTML=` <img 
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
    alt=""
    />`
    title.innerHTML = ` Lorem ipsum dolor sit amet "
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Fugit in`
    profile_img.innerHTML=` <img src="http://randomuser.me/api/portraits/men/45.jpg"/>`
    name.innerHTML = `John Doe`
    date.innerHTML=`Oct 08,2020`

    animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg=>bg.classList.remove('animated-bg-text'))
}