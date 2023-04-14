import Link from "next/link"
export const Header = () => {
  return (
    <>
      <header className="">
        <nav className="container flex items-center justify-between mx-32 pt-5">
          <div>
            <Link href='/' className="text-2xl font-bold uppercase tracking-widest">
              Next - Posts
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}