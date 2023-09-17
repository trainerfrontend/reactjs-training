const ListItem = ({ listdata }) => {
    const createList = () => {
        return listdata.map((item, key) => {
            return <li key={key}> {item} </li>
        })
    }
    return createList()
}

export default ListItem