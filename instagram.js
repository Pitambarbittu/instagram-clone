import bio from './JS/bio.js'
import gallery from './JS/gallery.js'
import nav from './JS/nav.js'


const App = () => {
    return `
    ${nav()}
    <div class="container">
    ${bio()}
    ${gallery()}
    </div>
   
    `
}

document.getElementById('root').innerHTML = App();

const button=document.getElementById('follow-btn')
button.addEventListener('click',(e)=>{
    button.innerText = "following"
    
    
});



   