import { ActionButton } from "./action-button"
export const FixedLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="fixed bottom-5 right-5 md:bottom-4 md:right-12 lg:bottom-20 lg:right-16">
      <div>
        {children}
      </div>
    </div>
  )
}