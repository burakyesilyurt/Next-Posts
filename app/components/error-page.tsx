export const ErrorPage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className='grow flex h-4/5 flex-col items-center mt-24 justify-center'>
      <h1>{errorMessage}</h1>
    </div>
  )
}