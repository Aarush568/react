import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import './Detail.css';

function NotFound() {
  return (
    <section className="container not-found">
      <span className="icon-badge icon-badge--accent" style={{ margin: '0 auto 20px' }}>
        <Compass size={26} />
      </span>
      <h1>We couldn't find that page</h1>
      <p>The page you're looking for may have moved, or the link may be out of date.</p>
      <Link to="/" className="btn btn-primary-alt">
        Return to Homepage <ArrowRight size={17} />
      </Link>
    </section>
  );
}

export default NotFound;
