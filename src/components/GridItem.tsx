// @ts-ignore
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
    // @ts-ignore
} from "react-router-dom";
interface Props {
    id: number;
    name: string
}

const GridItem = (props: Props) => {
    return (
        <div>
            <Link to={`/grid/${props.id}`}>
                Go to grid
            </Link>
            {props.id}
            {props.name}
        </div>
    )
}
export default GridItem;
