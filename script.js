/* ============ EDIT HERE ONLY ============ */
const site = {
  showreel:{video:"", thumbnail:""},           // YouTube / Vimeo / .mp4 URL
  stats:[{n:"1+",l:"Years Experience"},//{n:"300+",l:"Videos Produced"}
    ,{n:"4+",l:"Platforms Worked On"}],
  contact:{email:"hk.harshapshv@gmail.com",phone:"+91 8639051767",linkedin:"https://www.linkedin.com/in/sri-harsha-vardan-8106332a1/"}
};
const experience = [
  {company:"TLB City",role:"Video Production Manager",year:"2025 – Present",description:"Produced interviews, promotional videos, live streams and digital content."}
];
const skills = [
  ["🎬","Video Editing","Tight cuts, pacing and story flow."],["🧭","Content Strategy","Content planned around audience goals."],
  ["📖","Storytelling","Narratives that hold attention."],
  ["🎨","Color Grading","Consistent, filmic looks."],["🎧","Audio Editing","Clean, balanced sound."],
  ["✨","Motion Graphics","Titles and animated polish."],["📱","Social Media Content","Platform-native reels and shorts."]
];
// format: "v" vertical, "h" horizontal, "s" square | filter: Reels, Interviews, Events, Brands
// video: YouTube / Vimeo / .mp4 URL. thumbnail: image URL (leave "" for placeholder)
const projects = [
  {title:"Painting Competition",category:"Reels",filter:"Reels",format:"v",featured:true,thumbnail:"assets/reelcover.png",video:"assets/reel1.mp4",description:"Vertical short-form reel - 2024."},
  {title:"Authors Reality Show",category:"Reality Show Trailer",filter:"Reality Show Trailer",format:"h",featured:true,thumbnail:"assets/realityshow.jpg",video:"https://www.youtube.com/watch?v=DckLgLdH6DE",description:"Trailer of Reality Show."},
  {title:"Wars and Wings",category:"Book trailer",filter:"Books",format:"h",featured:true,thumbnail:"assets/b3.png",video:"assets/b3.mov",description:"Sea of Dreams"},
  {title:"Runway Model",category:"Event Video Edit",filter:"Events",format:"h",featured:true,thumbnail:"assets/DSC07592.png",video:"youtube.com/watch?si=RauBloyCfOPZ7L0V&v=jvujyFtO6U4&feature=youtu.be",description:"Models runway show."},
  {title:"Sketching Motivation",category:"Reels",filter:"Reels",format:"v",featured:true,thumbnail:"assets/reel2cover.jpg",video:"assets/reel 2.mov",description:"Sketch shoot reel - 2024."},
  {title:"Runway Model",category:"Event Video Edit",filter:"Events",format:"h",featured:false,thumbnail:"assets/model.png",video:"https://www.youtube.com/watch?v=hlf8pq7s62E",description:"Live stream production."},
  {title:"Mirrored Heart",category:"Book Trailer",filter:"Books",format:"h",featured:false,thumbnail:"assets/b2.png",video:"https://www.youtube.com/watch?v=tkF_uCIUHlM",description:"Mirrored Heart - A Poetic Journey."},
  {title:"Authors Reality Show",category:"Reality Show",filter:"Reality Show Trailer",format:"h",featured:false,thumbnail:"assets/rs6.png",video:"assts/rs6.mov",description:"Season 6."}
];
const process_ = [
  ["01", "Understand", "Learn about your brand, audience and goals."],
  ["02", "Prepare", "Plan the content, visuals and production details."],
  ["03", "Produce", "Create and capture high-quality content."],
  ["04", "Refine", "Edit, enhance and perfect every detail."],
  ["05", "Launch", "Deliver content ready for social media and marketing."]
];
const testimonials = [
  {quote:"Delivered beyond expectations — every video felt premium and on-brand.",name:"Client Name, Company"},
  {quote:"Reliable, creative and fast. Our reels have never performed better.",name:"Client Name, Company"}
];
/* ========================================= */

const $=s=>document.querySelector(s);
const grads=["linear-gradient(135deg,#3a2a00,#111)","linear-gradient(135deg,#1a1a2a,#0a0a0a)","linear-gradient(135deg,#2a1a1a,#111)","linear-gradient(135deg,#102a2a,#0a0a0a)"];
const bgStyle=(p,i)=>p.thumbnail?`background-image:url('${p.thumbnail}')`:`background:${grads[i%4]}`;

// embed builder
function embed(url){
  if(!url) return `<div class="none"><p>Add a video URL to this project in the <b>projects</b> array.</p></div>`;
  let m;
  if(m=url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/)) return `<iframe src="https://www.youtube.com/embed/${m[1]}?autoplay=1" allow="autoplay;fullscreen" allowfullscreen></iframe>`;
  if(m=url.match(/vimeo\.com\/(?:video\/)?(\d+)/)) return `<iframe src="https://player.vimeo.com/video/${m[1]}?autoplay=1" allow="autoplay;fullscreen" allowfullscreen></iframe>`;
  return `<video src="${url}" controls autoplay playsinline></video>`;
}
function openModal(url,vert){$('#mbox').innerHTML=embed(url);$('#modal').classList.toggle('vert',!!vert);$('#modal').classList.add('open')}
function closeModal(){$('#modal').classList.remove('open');$('#mbox').innerHTML=''}
$('#x').onclick=closeModal;$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.querySelectorAll('[data-reel]').forEach(el=>el.onclick=()=>openModal(site.showreel.video));
$('#heroBg').setAttribute('style',site.showreel.thumbnail?`background-image:url('${site.showreel.thumbnail}')`:'background:linear-gradient(135deg,#3a2a00,#111 70%)');

// render
$('#stats').innerHTML=site.stats.map(s=>`<div><b>${s.n}</b><small>${s.l}</small></div>`).join('');
$('#tl').innerHTML=experience.map(e=>`<div class="exp rv"><span class="yr">${e.year}</span><h3>${e.role}</h3><div class="gold bebas" style="font-size:1.3rem;letter-spacing:.1em">${e.company}</div><p>${e.description}</p></div>`).join('');
$('#skillGrid').innerHTML=skills.map(s=>`<div class="skill rv"><i>${s[0]}</i><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('');
const cardHTML=(p,i)=>`<div class="card ${p.format} rv" data-f="${p.filter}" data-i="${i}"><div class="bg" style="${bgStyle(p,i)}"></div><span class="cap">${p.category}</span><div class="ov"><small>${p.category}</small><h3>${p.title}</h3><p>${p.description}</p></div></div>`;
$('#featured').innerHTML=projects.map((p,i)=>p.featured?cardHTML(p,i):'').join('');
$('#galleryGrid').innerHTML=projects.map(cardHTML).join('');
document.querySelectorAll('.card').forEach(c=>c.onclick=()=>{const p=projects[c.dataset.i];openModal(p.video,p.format==='v')});
const cats=["All",...new Set(projects.map(p=>p.filter))];
$('#filters').innerHTML=cats.map((c,i)=>`<button class="${i?'':'on'}" data-c="${c}">${c}</button>`).join('');
$('#filters').onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('#galleryGrid .card').forEach(c=>{
    const show=b.dataset.c==='All'||c.dataset.f===b.dataset.c;
    c.classList.add('fade');
    setTimeout(()=>{c.classList.toggle('hide',!show);requestAnimationFrame(()=>c.classList.remove('fade'))},300);
  });
};
$('#steps').innerHTML=process_.map(s=>`<div class="step rv"><b>${s[0]}</b><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('');

// slider

//if(testimonials.length){
//  $('#slider').innerHTML=testimonials.map((t,i)=>`<div class="tm ${i?'':'on'}"><q>“${t.quote}”</q><cite>— ${t.name}</cite></div>`).join('');
//  $('#dots').innerHTML=testimonials.map((t,i)=>`<span class="${i?'':'on'}" data-i="${i}"></span>`).join('');
//  let cur=0;const go=n=>{cur=n%testimonials.length;document.querySelectorAll('.tm').forEach((t,i)=>t.classList.toggle('on',i===cur));document.querySelectorAll('#dots span').forEach((d,i)=>d.classList.toggle('on',i===cur))};
//  $('#dots').onclick=e=>{if(e.target.dataset.i)go(+e.target.dataset.i)};
//  setInterval(()=>go(cur+1),6000);
//}

// contact
const c=site.contact;
$('#links').innerHTML=[["Email",`mailto:${c.email}`,c.email],["Phone",`tel:${c.phone}`,c.phone],["LinkedIn",c.linkedin]].map(l=>`<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}${l[2]?': '+l[2]:''}</a>`).join('');
$('#cta').href=`mailto:${c.email}`;

// scroll reveal + parallax
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv,h2').forEach(el=>io.observe(el));
addEventListener('scroll',()=>{const y=scrollY;if(y<innerHeight*1.2){$('#heroTitle').style.transform=`translateY(${y*.12}px)`;$('#heroThumb').style.transform=`translateY(${y*-.06}px)`}},{passive:true});
