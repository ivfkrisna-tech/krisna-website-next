import Link from 'next/link';

export const metadata = {
  title: 'Best IVF Center in Jaipur | Krisna IVF',
  description: 'Looking for the best IVF center in Jaipur? Krisna IVF provides world-class fertility treatments with high success rates.',
};

export default function BestIVFCenterJaipur() {
  return (
    <main>
      <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--brand-teal), var(--brand-teal-dark))', padding: '80px 20px', textAlign: 'center' }}>
        <div className="page-header-content active">
          <h1 style={{ color: '#ffffff' }}>Best IVF Center in Jaipur</h1>
          <p style={{ color: '#f0f0f0', fontSize: '1.2rem', marginTop: '5px' }}>Top-rated fertility treatments with compassion and care.</p>
          <div className="breadcrumb" style={{ marginTop: '20px' }}>
            <Link href="/" style={{ color: '#fff' }}>Home</Link> <span style={{ margin: '0 10px', color: 'rgba(255,255,255,0.6)' }}>/</span> <span style={{ color: '#fff' }}>Best IVF Center in Jaipur</span>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Welcome to the Best IVF Center in Jaipur</h2>
          <p style={{ marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
            At Krisna IVF, we are proud to be recognized as the <strong>best ivf center in jaipur rajasthan india</strong>. We understand that the journey to parenthood can be challenging, which is why we combine advanced medical technology with personalized, compassionate care. Our expert team of specialists is dedicated to providing you with the highest standard of fertility treatments, including IVF, IUI, and ICSI.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', background: 'var(--brand-pink)', color: '#fff', padding: '15px 30px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
            Book an Appointment Today
          </Link>
        </div>
      </section>
    </main>
  );
}
