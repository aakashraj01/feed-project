interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon = ({ name, className = '', size }: IconProps) => {
  const icons: Record<string, string> = {
    heart: '/icons/heart.svg',
    comment: '/icons/comment.svg',
    send: '/icons/send.svg',
    share: '/icons/share.svg',
    login: '/icons/login.svg',
    logo: '/icons/logo.svg',
    bold: '/icons/bold.svg',
    italic: '/icons/italic.svg',
    underline: '/icons/underline.svg',
    'list-unordered': '/icons/list-unordered.svg',
    'list-ordered': '/icons/list-ordered.svg',
    quote: '/icons/quote.svg',
    code: '/icons/code.svg',
    trash: '/icons/trash.svg',
    emoji: '/icons/emoji.svg',
    plus: '/icons/plus.svg',
    mic: '/icons/mic.svg',
    video: '/icons/video.svg',
    'chevron-down': '/icons/chevron-down.svg',
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

