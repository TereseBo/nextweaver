import './formsection.scss'
export function Formsection({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="formsection">
            {children}
        </div>

    )}