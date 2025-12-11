import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      setError('Failed to log in: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Log In
            </h2>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold">Peaceful Streams</h1>
            <p className="mt-2">
              Peaceful Streams is a gentle, Christ-centered place created to help
              believers slow down, breathe, and draw closer to God through His Word.
              It’s a Bible website designed for encouragement, devotion, and
              reflection—like a quiet stream where the soul can rest.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 border rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-3 py-2 border rounded-lg"
            />

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Log In
            </button>
          </form>

          <div>
            <img className="bible-cross" src="/bible 1.jpg" alt="cross" />
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Need an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 