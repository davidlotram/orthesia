
(function(){
  const toast = document.getElementById("toast");
  function showToast(msg){
    if(!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(window.__toastT);
    window.__toastT = setTimeout(()=>toast.classList.remove("show"), 1400);
  }
  async function copyText(t){
    try{
      await navigator.clipboard.writeText(t);
      showToast("Lien copié ✅");
    }catch(e){
      const ta=document.createElement("textarea");
      ta.value=t; document.body.appendChild(ta);
      ta.select(); document.execCommand("copy");
      ta.remove();
      showToast("Lien copié ✅");
    }
  }
  document.querySelectorAll("[data-copy]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const val = btn.getAttribute("data-copy") || "";
      copyText(val);
    });
  });
})();
