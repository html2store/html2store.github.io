
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
  })
});
// Simple buy click hook
document.querySelectorAll('a[data-buy]').forEach(a=>{
  a.addEventListener('click',()=>{
    console.log('Buy click:', a.dataset.buy);
    // hook for analytics if desired
  });
});
