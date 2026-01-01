document.addEventListener("DOMContentLoaded", function () {
  
    const RATE = 100;



  window.calc = function () {
    const priceNew = Number(document.getElementById("priceNew").value || 0);
    const priceOld = Number(document.getElementById("priceOld").value || 0);
    const paidNew  = Number(document.getElementById("paidNew").value || 0);
    const paidOld  = Number(document.getElementById("paidOld").value || 0);

    const finalPriceNew = priceOld > 0 ? priceOld / RATE : priceNew;
    const totalPaidNew = paidNew + (paidOld / RATE);
    const changeNew = totalPaidNew - finalPriceNew;

    const resNew = document.getElementById("resNew");
    const resOld = document.getElementById("resOld");

    resNew.textContent = "الترجيع (الليرة الجديدة): " + Math.round(changeNew);
    resOld.textContent = "ما يعادلها (الليرة القديمة): " + Math.round(changeNew * RATE);

    resNew.style.color = changeNew < 0 ? "#f87171" : "";
  };

  window.toggleDark = function () {
    document.body.classList.toggle("dark");
    const btn = document.querySelector(".dark-toggle");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  };
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

