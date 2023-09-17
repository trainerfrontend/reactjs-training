const MOCK = [
    { "name": "reactjs", "duration": 23, "id": 1 },
    { "name": "angular", "duration": 18, "id": 2 },
    { "name": "vue", "duration": 12, "id": 3 }
]

const createList = () => {
    return MOCK.map((item, key) => {
        return <li key={item.id}><h2>{item.name}</h2><p>{item.duration}</p></li>
    })
}

const List = () => {

    return <ul>
        {createList()}
    </ul>
}

export default List