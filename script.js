const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.target),suffix=el.textContent.includes('+')?'+':'';let start=0;const duration=1300,t0=performance.now();function tick(now){const p=Math.min((now-t0)/duration,1),ease=1-Math.pow(1-p,3);el.textContent=Math.floor(start+(target-start)*ease)+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);counterObserver.unobserve(el)}),{threshold:.6});
document.querySelectorAll('.counter').forEach(el=>counterObserver.observe(el));
const hero=document.querySelector('.hero');if(hero){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);hero.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`)})}
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});
document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`translate(${x*.12}px,${y*.12}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
document.querySelectorAll('.project,.achievement-main,.achievement-card,.achievement-wide').forEach(card=>{card.addEventListener('pointermove',e=>{if(innerWidth<900)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*3}deg) rotateY(${x*3}deg) translateY(-6px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.exp-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.exp-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.exp-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.target)?.classList.add('active')}));
