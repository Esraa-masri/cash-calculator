document.addEventListener("DOMContentLoaded", function () {

  const RATE = 100;

  function fixNumber(value) {
    if (!value) return 0;

    // تحويل الأرقام العربية إلى إنكليزية
    const map = {
      "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4",
      "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9"
    };

    value = value.replace(/[٠-٩]/g, d => map[d]);

    // استبدال الفاصلة بنقطة
    value = value.replace(",", ".");

    return Number(value) || 0;
  }

  window.calc = function () {
    const priceNew = fixNumber(document.getElementById("priceNew").value);
    const priceOld = fixNumber(document.getElementById("priceOld").value);
    const paidNew  = fixNumber(document.getElementById("paidNew").value);
    const paidOld  = fixNumber(document.getElementById("paidOld").value);

    const finalPriceNew = priceOld > 0 ? priceOld / RATE : priceNew;
    const totalPaidNew = paidNew + (paidOld / RATE);
    const changeNew = totalPaidNew - finalPriceNew;

    const resNew = document.getElementById("resNew");
    const resOld = document.getElementById("resOld");

    resNew.textContent =
      "الترجيع (الليرة الجديدة): " + Math.round(changeNew);

    resOld.textContent =
      "ما يعادلها (الليرة القديمة): " + Math.round(changeNew * RATE);

    resNew.style.color = changeNew < 0 ? "#f87171" : "";
  };
  window.resetAll = function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => input.value = "");

  document.getElementById("resNew").textContent = "—";
  document.getElementById("resOld").textContent = "—";

  document.getElementById("resNew").style.color = "";
};

  window.toggleDark = function () {
    document.body.classList.toggle("dark");
    const btn = document.querySelector(".dark-toggle");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  };

});
