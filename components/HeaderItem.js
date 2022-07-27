
function HeaderItem({title}) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-20 sm:w-fit">
        <p className="text-xl hover:text-gray-200 active:text-red-500">{title}</p>
    </div>
  )
}

export default HeaderItem