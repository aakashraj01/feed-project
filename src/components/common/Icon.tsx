interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon = ({ name, className = '', size }: IconProps) => {
  const icons: Record<string, string> = {
    heart: '/src/assets/icons/heart.svg',
    comment: '/src/assets/icons/comment.svg',
    send: '/src/assets/icons/send.svg',
    share: '/src/assets/icons/share.svg',
    login: '/src/assets/icons/login.svg',
    logo: '/src/assets/icons/logo.svg',
    bold: '/src/assets/icons/bold.svg',
    italic: '/src/assets/icons/italic.svg',
    underline: '/src/assets/icons/underline.svg',
    'list-unordered': '/src/assets/icons/list-unordered.svg',
    'list-ordered': '/src/assets/icons/list-ordered.svg',
    quote: '/src/assets/icons/quote.svg',
    code: '/src/assets/icons/code.svg',
    trash: '/src/assets/icons/trash.svg',
    emoji: '/src/assets/icons/emoji.svg',
    plus: '/src/assets/icons/plus.svg',
    mic: '/src/assets/icons/mic.svg',
    video: '/src/assets/icons/video.svg',
    'chevron-down': '/src/assets/icons/chevron-down.svg',
  };

  const sizeStyle = size ? { width: size, height: size } : {};

  return (
    <img 
      src={icons[name]} 
      alt={name} 
      className={className}
      style={sizeStyle}
    />
  );
};

