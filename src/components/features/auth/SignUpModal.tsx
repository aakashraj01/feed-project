import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../common/Modal';
import { Icon } from '../../common/Icon';
import { useAuth } from '../../../hooks/useAuth';
import { ROUTES } from '../../../utils/constants';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignIn?: () => void;
}

export const SignUpModal = ({ isOpen, onClose, onSwitchToSignIn }: SignUpModalProps) => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await signup({ email, username, password, confirmPassword });
      onClose();
      setEmail('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInClick = () => {
    if (onSwitchToSignIn) {
      onSwitchToSignIn();
    } else {
      onClose();
      navigate(ROUTES.SIGN_IN);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[498px] bg-[#ebebeb] rounded-[30px] p-[11px]">
        <div className="bg-white rounded-[21px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.03)] px-[55px] pt-[30px] pb-[48px] flex flex-col">
          <div className="flex flex-col items-center mb-[46px]">
            <div className="w-[53px] h-[53px] rounded-full bg-[#ebebeb] flex items-center justify-center mb-[30px]">
              <Icon name="login" size={24} />
            </div>
            <h2 className="font-bold text-xl text-black mb-[5px]">Create an account to continue</h2>
            <p className="font-normal text-sm text-black/[0.48] text-center">
              Create an account to access all the features on this app
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
            <div className="space-y-[27px]">
              <div>
                <label className="font-semibold text-sm text-black block mb-[7px]">
                  Email or username
                </label>
                <input
                  type="text"
                  placeholder="Enter your email or username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#f4f4f4] h-[46px] px-[14px] rounded-[11px] font-normal text-sm text-black placeholder:text-black/[0.48] border-none outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-black block mb-[7px]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#f4f4f4] h-[46px] px-[14px] rounded-[11px] font-normal text-sm text-black placeholder:text-black/[0.48] border-none outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-sm text-black block mb-[7px]">
                  Repeat password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password again"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-[#f4f4f4] h-[46px] px-[14px] rounded-[11px] font-normal text-sm text-black placeholder:text-black/[0.48] border-none outline-none"
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 font-medium">{error}</p>
              )}
            </div>

            <div className="mt-auto pt-[22px]">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#5057ea] h-[50px] rounded-[11px] font-semibold text-sm text-white hover:bg-[#4048d8] transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>

        <div className="pt-[17px] text-center">
          <p className="font-medium text-sm text-black/60">
            Already have an account?{' '}
            <button
              onClick={handleSignInClick}
              className="font-semibold text-[#5057ea] hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
};
