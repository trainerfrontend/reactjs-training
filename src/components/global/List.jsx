import ListItem from './ListItem';

const MOCK = ["reactjs", "redux2", "angular", "vue", "vue", "jquery"]

const List = () => {

    return <ul>
        <ListItem listdata={MOCK} />
    </ul>
}

export default List