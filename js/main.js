/* ════════════════════════════════════════
   MACKRINE RUTH — Portfolio Scripts
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded',()=>{

/* ── Theme ── */
const t=document.querySelector('.theme-btn'),r=document.documentElement,i=t?.querySelector('i')
const s=localStorage.getItem('theme')||'dark'
r.setAttribute('data-theme',s)
if(i)i.className=s==='dark'?'ri-moon-line':'ri-sun-line'
t?.addEventListener('click',()=>{
  const n=r.getAttribute('data-theme')==='dark'?'light':'dark'
  r.setAttribute('data-theme',n)
  localStorage.setItem('theme',n)
  if(i)i.className=n==='dark'?'ri-moon-line':'ri-sun-line'
})

/* ── Mobile Menu ── */
const m=document.querySelector('.menu-btn'),n=document.querySelector('.nav')
m?.addEventListener('click',()=>n?.classList.toggle('open'))
n?.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>n.classList.remove('open')))

/* ── Active Nav ── */
const p=window.location.pathname.split('/').pop()||'index.html'
n?.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active')})

/* ── Scroll Header ── */
const h=document.querySelector('.header')
let st=false
window.addEventListener('scroll',()=>{
  const sy=window.scrollY
  if(sy>50&&!st){h?.classList.add('scrolled');st=true}
  else if(sy<=50&&st){h?.classList.remove('scrolled');st=false}
},{passive:true})

/* ── Scroll Reveal ── */
const R=document.querySelectorAll('.reveal')
if(R.length){
  const o=new IntersectionObserver(e=>{
    e.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}})
  },{threshold:.08,rootMargin:'0px 0px -40px 0px'})
  R.forEach(e=>o.observe(e))
}

/* ── Project Filters ── */
const B=document.querySelectorAll('.filter-btn'),C=document.querySelectorAll('.project-card')
B.forEach(b=>{
  b.addEventListener('click',()=>{
    B.forEach(x=>x.classList.remove('active'));b.classList.add('active')
    const f=b.getAttribute('data-filter')
    C.forEach(c=>{
      if(f==='all'||c.getAttribute('data-cat')===f){
        c.style.display='block'
        requestAnimationFrame(()=>{c.style.opacity='1';c.style.transform='translateY(0)'})
      }else{
        c.style.opacity='0';c.style.transform='translateY(20px)'
        setTimeout(()=>{c.style.display='none'},300)
      }
    })
  })
})

/* ── Simple Carousels ── */
try{console.log('Carousel initialized')
document.querySelectorAll('.project-carousel').forEach(function(c,i){
  try{
    var slides=c.querySelectorAll('.carousel-slide'),dots=c.querySelectorAll('.carousel-dot'),cur=0
    var ms=parseInt(c.getAttribute('data-interval'))||4000
    function show(n){
      slides.forEach(function(s,j){s.classList.toggle('active',j===n)})
      dots.forEach(function(d,j){d.classList.toggle('active',j===n)})
      cur=n
    }
    show(0)
    setInterval(function(){show((cur+1)%slides.length)},ms)
    dots.forEach(function(d,j){d.addEventListener('click',function(){show(j)})})
  }catch(e){console.warn('Carousel '+i+' error:',e)}
})
}catch(e){console.error('Carousel init failed:',e)}

/* ── Contact Form ── */
const form=document.getElementById('contactForm')
form?.addEventListener('submit',e=>{
  e.preventDefault()
  const btn=form.querySelector('button[type="submit"]'),orig=btn.textContent
  btn.textContent='Sending...';btn.disabled=true
  fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}})
    .then(r=>{if(r.ok){
      form.innerHTML=`<div style="text-align:center;padding:40px 0">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--accent-subtle);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:1.4rem;color:var(--accent)">✓</div>
        <h3 style="margin-bottom:6px">Message Sent!</h3>
        <p style="color:var(--text-secondary);font-size:.92rem">Thank you! I'll respond within 24–48 hours.</p>
      </div>`
    }else throw Error()})
    .catch(()=>{btn.textContent=orig;btn.disabled=false;alert('Please email me at yovanmackrineruth@gmail.com')})
})

/* ── Typewriter ── */
const el=document.querySelector('.typewriter')
if(el){
  const w=['Web Developer.','Software Engineer.','Problem Solver.','Tech Enthusiast.']
  let i=0,j=0,d=0
  const tick=()=>{
    const c=w[i]
    el.textContent=d?c.substring(0,j--):c.substring(0,j++)
    if(!d&&j===c.length+1){d=1;setTimeout(tick,1800);return}
    if(d&&j===0){d=0;i=(i+1)%w.length}
    setTimeout(tick,d?40:90)
  }
  tick()
}

})
