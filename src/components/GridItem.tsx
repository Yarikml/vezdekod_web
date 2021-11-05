// @ts-ignore
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
    // @ts-ignore
} from "react-router-dom";
import {Button} from "antd";
interface Props {
    id: number;
    name: string
}

const GridItem = (props: Props) => {
    return (
        <div className="grid-item">
            <div>
                {props.name}
            </div>
            <Link to={`/grid/${props.id}`}>
                <Button type={"default"}>
                    Go to grid
                </Button>
            </Link>
        </div>
    )
}
export default GridItem;
