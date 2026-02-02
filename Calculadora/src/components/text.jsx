const textVariants = {
    default: 'text-xl',
    muted: 'text-xl text-(--text-secondary)',
    heading: 'text-2xl',
    blast: 'text-3xl'
}


const Text = ({as: Component = 'span', variant = 'deafult' , children, className = '', ...props}) => {

  const combinedClasses = `${textVariants[variant] || textVariants.default} ${className}`;

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  )
}

export default Text
