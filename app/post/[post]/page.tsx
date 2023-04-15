import { Card } from "@/components/card"

export const metadata = {
  title: 'Test',
}

export default function Post({ params }: {
  params: { post: string };
}) {
  console.log(params);
  return (
    <div className="grow flex min-h-screen flex-col items-center p-24">


    </div>
  )
}