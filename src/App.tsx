import React from "react";
import lipBalmHoney from "./lip-balm-honey.jpeg";
import lipBalmVanilla from "./lip-balm-vanilla.jpeg";
import asalCareLogo from "./asal-care.png";
import qrCode from "./qr-code.png";
import beeQueenImage from "./bee-queen.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          width={400}
          src={asalCareLogo}
          alt="ASAL CARE Logo"
          className="Logo"
        />
      </header>

      <section className="Product-section">
        <div className="Product-intro">
          <h2>ل بشرة عسلية</h2>
          <p>منتجات طبيعية للعناية بالبشرة مستخلصة من العسل ومنتجات النحل</p>
        </div>
        <h2>منتجاتنا</h2>

        <div className="Products-container">
          <div className="Product-item">
            <img src={lipBalmHoney} alt="مرطب عسلي" className="Product-image" />
            <h3>مرطب عسلي</h3>
            <p>مرطب شفاه طبيعي بنكهة العسل النقي لشفاه ناعمة ومرطبة</p>
          </div>

          <div className="Product-item">
            <img
              src={lipBalmVanilla}
              alt="مرطب عسلي بالفانيلا"
              className="Product-image"
            />
            <h3>مرطب عسلي بالفانيلا</h3>
            <p>مرطب شفاه بالعسل والفانيلا للترطيب والنعومة مع رائحة منعشة</p>
          </div>
        </div>

        <div className="Purchase-info">
          <h4>متوفر في فلسطين من خلال تطبيق دروبي</h4>
          <a
            href="https://www.doroubi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="Doroubi-link"
          >
            www.doroubi.com
          </a>
        </div>

        <div className="Coming-soon">
          <h3>قريباً</h3>
          <ul>
            <li>شفاه - مقشر عسلي</li>
            <li>شفاه - مقشر عسلي بالفانيلا</li>
          </ul>
        </div>
      </section>

      <div className="Social-media-section">
        <div>تابعونا على إنستجرام</div>
        <a
          href="https://www.instagram.com/asalcare_com"
          target="_blank"
          rel="noopener noreferrer"
          className="Instagram-link"
          dir="ltr"
        >
          <span>@asalcare_com</span>
        </a>
      </div>

      <section className="Heritage-section">
        <h2>تراثنا في تربية النحل</h2>
        <div className="Heritage-content">
          <div className="Heritage-text">
            <p>
              نحن نفتخر بتراثنا العريق في تربية النحل وجمع منتجاته الطبيعية
              بعناية وحب. فمنذ أجيال، عملت عائلتنا في مجال تربية النحل، حيث نقوم
              بجمع العسل ومنتجاته بطرق تقليدية تحافظ على جودة المنتج وفوائده
              الطبيعية.
            </p>
            <p>
              نعتني بخلايا النحل لدينا كما نعتني بأفراد عائلتنا، ونضمن أن كل
              قطرة عسل وكل منتج يحمل اسمنا يتم إنتاجه بأعلى معايير الجودة
              والنقاء. هذا الالتزام بالتراث والجودة هو ما يميز منتجاتنا ويجعلها
              فريدة من نوعها.
            </p>
          </div>
          <div className="Heritage-image">
            <img width={400} src={beeQueenImage} alt="تربية النحل" />
          </div>
        </div>
      </section>

      <footer className="App-footer">
        <div>تواصل معنا عبر واتس اب</div>
        <div>00970-592532312</div>
        <img src={qrCode} alt="رمز الاستجابة السريعة" className="QR-code" />
        <p>© 2025 ASAL CARE. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}

export default App;
