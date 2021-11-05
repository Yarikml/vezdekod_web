import GridItem from "../components/GridItem";
import { Button } from 'antd';
import {useState} from "react";
import { Input } from 'antd';

const Home = () => {
    const [text, setText] = useState('')
    const [grids, setGrids] = useState([
            {
                id: 1,
                name: 'First'
            },
            {
                id: 2,
                name: 'Second'
            },
         ]
    )

    const addGrid = () => {
        if (text != '') {
            setGrids([...grids, {id: Math.floor(Math.random() * 100),name: text}])
        }
        setText('')

    }
    return (
        <div>
            <Input placeholder={'Enter grid name'} onChange={(event) => setText(event.target.value)} value={text}/>
            <Button type={'primary'} onClick={() => addGrid()}>Add Grid +</Button>
            {grids.map(grid => <GridItem key={grid.name} id={grid.id} name={grid.name} />)}
        </div>
    )
}
export default Home;
