"use client";

import Link from 'next/link';
import Head from 'next/head';

export default function LocationPageTemplate({ city, nearbyAreas, localKeywords }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": `Krisna IVF - Best IVF Center in ${city}`,
        "image": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000",
        "@id": `https://krisnaivf.com/best-ivf-center-in-${city.toLowerCase()}`,
        "url": `https://krisnaivf.com/best-ivf-center-in-${city.toLowerCase()}`,
        "telephone": "+919119115355",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3rd Floor, House of Doctors, Plot No.4, Lal Niwas, Hira Bagh, Tonk Road",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302021",
          "addressCountry": "IN"
        },
        "description": `World-class fertility and IVF treatments for patients from ${city}, Rajasthan. High success rates and ethical care.`
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What is the cost of IVF treatment for patients from ${city}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of IVF treatment varies depending on the specific medical condition of the couple, the type of protocols used, and whether advanced techniques like ICSI or PGS are required. At Krisna IVF, we maintain complete transparency in our pricing for all patients, ensuring there are no hidden costs. A standard IVF cycle is highly affordable compared to national averages."
            }
          },
          {
            "@type": "Question",
            "name": `Why should patients from ${city} choose Krisna IVF?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Patients from ${city} consistently choose Krisna IVF because of our exceptionally high success rates, advanced embryology laboratory, and the personalized, compassionate care provided by Dr. Ssuniti and her team.`
            }
          },
          {
            "@type": "Question",
            "name": `How long is the IVF process for couples travelling from ${city}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A typical IVF cycle takes about 3 to 4 weeks. For out-of-town patients, we minimize travel by coordinating initial ultrasounds and blood tests locally. You will generally only need to visit our center for the crucial steps: egg retrieval and embryo transfer, which usually require a stay of just a few days."
            }
          },
          {
            "@type": "Question",
            "name": `What is the success rate of IVF at your clinic?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our clinic boasts one of the highest IVF success rates in Rajasthan, consistently achieving positive pregnancy outcomes. Success rates depend on maternal age, infertility factors, and lifestyle, but our use of advanced technology like time-lapse incubators significantly boosts these odds."
            }
          },
          {
            "@type": "Question",
            "name": `Is IVF a painful procedure?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IVF is largely painless. The hormone injections use very fine needles, similar to insulin pens. The egg retrieval is performed under short, mild anesthesia, so you will not feel any pain. Post-procedure, some women experience mild cramping, similar to menstrual cramps, which subsides quickly."
            }
          }
        ]
      }
    ]
  };

  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '100px 20px', textAlign: 'center' }}>
        <div className="page-header-content active" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ color: '#ffffff', fontSize: '3rem', marginBottom: '15px' }}>Best IVF Center in {city}</h1>
          <p style={{ color: '#f0f0f0', fontSize: '1.3rem', lineHeight: '1.6' }}>
            Empowering couples from {city} with world-class fertility care. Krisna IVF is recognized as the best ivf center in jaipur rajasthan india, delivering joy through advanced science and heartfelt compassion.
          </p>
          <div className="breadcrumb" style={{ marginTop: '30px' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home</Link> <span style={{ margin: '0 10px', color: 'rgba(255,255,255,0.6)' }}>/</span> <span style={{ color: '#fff' }}>Best IVF Center in {city}</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" style={{ padding: '80px 5%', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-teal-dark)', marginBottom: '30px', textAlign: 'center' }}>
            Transforming Dreams into Reality for Families in {city}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
                Infertility can be a profoundly emotional and challenging journey for any couple. If you reside in <strong>{city}</strong> and are struggling to conceive, you are not alone. Thousands of couples face similar hurdles every year, but with the advent of modern reproductive medicine, the dream of having a biological child is more achievable than ever before. 
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
                Krisna IVF, widely acknowledged as the <strong>best ivf center in jaipur rajasthan india</strong>, has been a beacon of hope for countless families traveling from {city}. We understand the unique apprehensions that out-of-town patients might have. That is why we have streamlined our processes to offer seamless, comprehensive, and highly successful fertility treatments tailored precisely to your physiological needs.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                Our philosophy is rooted in extreme clinical transparency, ethical medical practices, and an unwavering commitment to patient comfort. By integrating global standards of embryology with personalized emotional support, we ensure that your journey from {city} to our center is a deeply rewarding one.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000" 
                alt="Newborn baby resting peacefully" 
                style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Infertility */}
      <section className="section" style={{ padding: '80px 5%', background: '#fdfbf9' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#222', marginBottom: '25px' }}>Understanding Infertility: When to Seek Help from {city}</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
            Infertility is medically defined as the inability to conceive after 12 months of regular, unprotected intercourse for women under 35, and after 6 months for women over 35. For couples in {city}, identifying the root cause early is critical to improving success rates. Infertility is not solely a female issue; statistics show that male factor infertility accounts for nearly 40% of all cases, while another 40% is female factor, and 20% is unexplained or a combination of both.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ color: 'var(--brand-pink)' }}>Common Female Causes</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.7', color: '#555', marginTop: '15px' }}>
                <li>Polycystic Ovary Syndrome (PCOS)</li>
                <li>Endometriosis and Pelvic Inflammatory Disease</li>
                <li>Blocked or Damaged Fallopian Tubes</li>
                <li>Diminished Ovarian Reserve (Low Egg Count)</li>
                <li>Uterine Fibroids or Polyps</li>
                <li>Advanced Maternal Age</li>
              </ul>
            </div>
            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ color: 'var(--brand-teal)' }}>Common Male Causes</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.7', color: '#555', marginTop: '15px' }}>
                <li>Oligozoospermia (Low Sperm Count)</li>
                <li>Asthenozoospermia (Poor Sperm Motility)</li>
                <li>Teratozoospermia (Abnormal Sperm Morphology)</li>
                <li>Azoospermia (Absence of Sperm)</li>
                <li>Varicocele or Ejaculatory Duct Obstruction</li>
                <li>Hormonal Imbalances</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '30px' }}>
            Our diagnostic team utilizes advanced hormonal assays, 3D/4D ultrasound imaging, and comprehensive semen analysis to pinpoint the exact barriers to your fertility. Rather than taking a trial-and-error approach, we rely on evidence-based medicine to formulate a targeted treatment protocol for every patient visiting us from {city}.
          </p>
        </div>
      </section>

      {/* Comprehensive Treatments */}
      <section className="section" style={{ padding: '80px 5%', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-teal-dark)', marginBottom: '20px', textAlign: 'center' }}>
            Comprehensive Fertility Treatments Available for {city} Patients
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', textAlign: 'center', marginBottom: '50px' }}>
            As the <strong>best ivf center in jaipur rajasthan india</strong>, we offer a full spectrum of Assisted Reproductive Technologies (ART). Whether you need minor medical intervention or advanced micro-manipulation, our clinical expertise ensures you receive the highest standard of care.
          </p>
          
          {/* Treatment 1 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '15px' }}>In Vitro Fertilization (IVF)</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                IVF is a revolutionary procedure where eggs are retrieved from the woman's ovaries and fertilized with the man's sperm in our highly advanced, sterile laboratory. After fertilization, the resulting embryos are carefully nurtured in state-of-the-art incubators that mimic the human uterus environment. After 3 to 5 days, the healthiest embryo is expertly transferred back into the mother's uterus.
                IVF is highly recommended for women with blocked fallopian tubes, severe endometriosis, or when other treatments like IUI have failed. For our patients traveling from {city}, we meticulously plan the stimulation cycles so that you only need to travel for the most critical procedures.
              </p>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80" alt="Embryologist working with microscope" style={{ width: '100%', borderRadius: '15px' }} loading="lazy" />
            </div>
          </div>

          {/* Treatment 2 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '15px' }}>Intracytoplasmic Sperm Injection (ICSI)</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                For cases involving severe male factor infertility, ICSI is a game-changer. Unlike conventional IVF where many sperm are placed near an egg in a dish, ICSI involves the selection of a single, highly morphologically normal and motile sperm, which is then directly microinjected into the cytoplasm of a mature egg.
                This advanced technique bypasses the need for the sperm to penetrate the egg naturally, dramatically increasing fertilization rates. It is the treatment of choice for men with extremely low sperm counts or poor motility. Our senior embryologists possess exceptional micromanipulation skills, ensuring the highest success rates for this delicate procedure.
              </p>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80" alt="Medical professional holding baby feet" style={{ width: '100%', borderRadius: '15px' }} loading="lazy" />
            </div>
          </div>

          {/* Treatment 3 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '15px' }}>Intrauterine Insemination (IUI) & Donor Services</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                IUI is a simpler, less invasive fertility treatment where a concentrated, highly motile semen sample is placed directly into the uterine cavity around the time of ovulation. It is often the first line of treatment for unexplained infertility or mild male factor issues.
                Additionally, for couples who cannot conceive using their own gametes due to severe medical conditions, we offer ethical and thoroughly screened Donor Egg and Donor Sperm programs. Our donor programs strictly adhere to all national ART guidelines, ensuring complete anonymity, legal safety, and the highest standards of genetic and medical screening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Tech & EEAT */}
      <section className="section" style={{ padding: '80px 5%', background: '#f4fcfc' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-teal-dark)', marginBottom: '20px' }}>
            World-Class Embryology Laboratory & Clinical Excellence
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '40px' }}>
            The heart of any successful IVF clinic is its embryology laboratory. Krisna IVF boasts a Class 100 clean-room laboratory equipped with cutting-edge technology imported from leading medical manufacturers globally. We employ HEPA filtration and strict VOC (Volatile Organic Compounds) control to ensure the air quality is pristine, creating the perfect environment for embryo development outside the human body.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <i className="fa-solid fa-microscope" style={{ fontSize: '3rem', color: 'var(--brand-pink)', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Time-Lapse Incubators</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Allows continuous monitoring of embryo cell division without removing them from optimal conditions, leading to better selection and higher pregnancy rates.</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <i className="fa-solid fa-snowflake" style={{ fontSize: '3rem', color: 'var(--brand-teal)', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Advanced Vitrification</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Ultra-rapid freezing technology for preserving eggs, sperm, and embryos with near 100% survival rates post-thaw, maximizing your chances across multiple cycles.</p>
            </div>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <i className="fa-solid fa-user-doctor" style={{ fontSize: '3rem', color: 'var(--brand-pink)', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Expert Team</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Led by Dr. Ssuniti, an acclaimed Clinical Embryologist, our team has decades of combined experience in complex reproductive medicine and high-risk cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geo / Travel Section */}
      <section className="section" style={{ padding: '80px 5%', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#222', marginBottom: '25px', textAlign: 'center' }}>
            Connecting {city} to Advanced Fertility Care
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', textAlign: 'center', marginBottom: '30px' }}>
            We regularly welcome and successfully treat patients from <strong>{city}</strong> and surrounding regions like {nearbyAreas}. {localKeywords}
          </p>
          <div style={{ background: 'linear-gradient(135deg, #fdfdfd, #f9f9f9)', padding: '40px', borderRadius: '15px', border: '1px solid #eee' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--brand-teal-dark)' }}>Travel & Care Coordination for {city} Patients</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '15px' }}>
              Traveling for medical care can be daunting. We have designed a patient-centric workflow specifically for out-of-town couples. You can initiate your journey with a virtual online consultation from the comfort of your home in {city}. During this video call, our specialists will review your medical history, past reports, and recommend preliminary tests that you can undergo at your local diagnostic center.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
              Once your personalized protocol is ready, we coordinate your schedule so that your physical visits to our center are minimized. Typically, patients need to travel only for the crucial days of egg retrieval and embryo transfer. Our support staff is always available via WhatsApp and phone to assist with treatment scheduling, injection tutorials, and answering any queries you might have during the stimulation phase in {city}.
            </p>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="section" style={{ padding: '80px 5%', background: '#fdfbf9' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#222', marginBottom: '40px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="faq-item" style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-teal-dark)', marginBottom: '10px' }}>
              1. What is the cost of IVF treatment for patients from {city}?
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#555' }}>
              The cost of IVF treatment varies depending on the specific medical condition of the couple, the type of protocols used (such as antagonist or agonist), and whether advanced techniques like ICSI, Laser Assisted Hatching, or PGT-A are required. At Krisna IVF, we maintain complete transparency in our pricing for all patients, ensuring there are no hidden costs. A standard IVF cycle with us is highly affordable compared to national averages, offering immense value through premium clinical care.
            </p>
          </div>

          <div className="faq-item" style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-teal-dark)', marginBottom: '10px' }}>
              2. Why should patients from {city} choose Krisna IVF?
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#555' }}>
              Patients from {city} consistently choose Krisna IVF because of our exceptionally high success rates, advanced clean-room embryology laboratory, and the personalized, compassionate care provided. Being widely recognized as the <strong>best ivf center in jaipur rajasthan india</strong>, we adhere to strict international protocols, ensuring that complex infertility cases are handled with the utmost scientific rigor and ethical transparency.
            </p>
          </div>

          <div className="faq-item" style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-teal-dark)', marginBottom: '10px' }}>
              3. How long is the IVF process for couples travelling from {city}?
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#555' }}>
              A typical IVF cycle takes about 3 to 4 weeks from the start of ovarian stimulation to the embryo transfer. For out-of-town patients from {city}, we minimize travel by coordinating initial ultrasounds and blood tests locally with trusted diagnostic partners. You will generally only need to visit our center for the crucial steps: egg retrieval and embryo transfer, which usually require a stay of just a few days.
            </p>
          </div>

          <div className="faq-item" style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-teal-dark)', marginBottom: '10px' }}>
              4. What is the success rate of IVF at your clinic?
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#555' }}>
              Our clinic boasts one of the highest IVF success rates in Rajasthan, consistently achieving positive pregnancy outcomes. Success rates depend significantly on maternal age, the underlying infertility factors, and lifestyle choices. However, our use of advanced technology like time-lapse incubators and stringent lab quality controls significantly boosts these odds, even in patients with previous failed cycles.
            </p>
          </div>

          <div className="faq-item" style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--brand-teal-dark)', marginBottom: '10px' }}>
              5. Is IVF a painful procedure?
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#555' }}>
              IVF is largely painless. The hormone injections used during the stimulation phase utilize very fine, micro-needles (similar to insulin pens), causing minimal discomfort. The egg retrieval is performed under short, mild anesthesia, so you will be asleep and not feel any pain. Post-procedure, some women experience mild cramping, similar to menstrual cramps, which subsides quickly with rest and basic medication.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px' }}>Start Your Journey Today</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
          Do not let distance stand between you and your dream of parenthood. Contact us today to schedule an initial consultation and take the first step towards building your family.
        </p>
        <Link href="/contact" className="btn-primary" style={{ background: '#fff', color: 'var(--brand-teal)', boxShadow: 'none', padding: '15px 40px', fontSize: '1.1rem', borderRadius: '30px', fontWeight: 'bold' }}>
          Book an Appointment
        </Link>
      </section>
    </main>
  );
}
