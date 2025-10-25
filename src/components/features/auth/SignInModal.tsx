import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../common/Modal';
import { Icon } from '../../common/Icon';
import { useAuth } from '../../../hooks/useAuth';
import { ROUTES } from '../../../utils/constants';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp?: () => void;
}

export const SignInModal = ({ isOpen, onClose, onSwitchToSignUp }: SignInModalProps) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const success = await login({ emailOrUsername, password });

    setIsLoading(false);

    if (success) {
      onClose();
      setEmailOrUsername('');
      setPassword('');
    } else {
      setError('Invalid email/username or password');
    }
  };

  const handleSignUpClick = () => {
    if (onSwitchToSignUp) {
      onSwitchToSignUp();
    } else {
      onClose();
      navigate(ROUTES.SIGN_UP);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[498px] bg-[#ebebeb] rounded-[30px] p-[11px]">
        <div className="bg-white rounded-[21px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.03)] px-[55px] pt-[30px] pb-[60px]">
          <div className="flex flex-col items-center mb-10">
            <div className="w-[53px] h-[53px] rounded-full bg-[#ebebeb] flex items-center justify-center mb-[20px]">
              <Icon name="login" size={24} />
            </div>
            <h2 className="font-bold text-xl text-black mb-[5px]">Sign in to continue</h2>
            <p className="font-normal text-sm text-black/[0.48] text-center">
              Sign in to access all the features on this app
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-[27px]">
            <div>
              <label className="font-semibold text-sm text-black block mb-[7px]">
                Email or username
              </label>
              <input
                type="text"
                placeholder="Enter your email or username"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
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

            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}

            <div className="pt-[14px]">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#5057ea] h-[50px] rounded-[11px] font-semibold text-sm text-white hover:bg-[#4048d8] transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-[15px] text-center">
          <p className="font-medium text-sm text-black/60">
            Do not have and account?{' '}
            <button
              onClick={handleSignUpClick}
              className="font-semibold text-[#5057ea] hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
};
