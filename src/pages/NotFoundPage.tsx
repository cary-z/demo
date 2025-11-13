import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
      <p className="text-base text-slate-600">The page you are looking for doesn&apos;t exist.</p>
      <p className="text-base text-slate-600">
        Go back to the{' '}
        <Link className="font-semibold text-blue-600 hover:text-blue-700" to="/">
          home page
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFoundPage;
