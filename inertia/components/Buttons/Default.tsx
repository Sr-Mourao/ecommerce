export function ButtonDefault(props: any) {
  const variantClasses: any = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-600 text-white hover:bg-green-700',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50',
  }

  return (
    <button
      className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200 ${variantClasses[props.variant]}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.icon && <span className="text-lg">{props.icon}</span>}
      {props.children}
    </button>
  )
}
