import Link from "next/link";
function HomePage() {
  return (
    <div>
      <Link href="components/dashboard/rooms"><h1>Dashboard</h1></Link>
      <Link href="components/output"><h1>Output</h1></Link>
    </div>
  )
}

export default HomePage
