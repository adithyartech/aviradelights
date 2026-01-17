function toggleMenu(){
  const el = document.getElementById("navLinks");
  el.classList.toggle("open");
}

/* Reveal animation (on load/scroll) */
(function(){
  const els = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("show"));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
})();

/* About tabs (English/Tamil) */
function openTab(tabId, btn){
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  btn.classList.add("active");
}
