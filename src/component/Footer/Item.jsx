//rafc

const Item = ({title,Links}) => {
  return (
    <div className="mb-8 md:mr-8">
        <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>

            {
                Links.map((link)=>{
                    return (<li key={link.name}>
                        <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer" href={link.link}>{link.name}</a>
                    </li>)

                })
            }
        </ul>
    </div>
  )
}

export default Item;