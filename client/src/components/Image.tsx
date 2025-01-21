interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
  onLoadingComplete?: (img: HTMLImageElement) => void;
}

export function Image({ fill, priority, onLoadingComplete, ...props }: ImageProps) {
  return (
    <img 
      {...props}
      style={{
        ...props.style,
        ...(fill ? { 
          position: 'absolute',
          height: '100%',
          width: '100%',
          inset: 0,
          objectFit: 'cover'
        } : {})
      }}
      loading={priority ? "eager" : "lazy"}
      onLoad={(e) => {
        onLoadingComplete?.(e.currentTarget);
        props.onLoad?.(e);
      }}
    />
  );
}
