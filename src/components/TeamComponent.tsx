import {Switch} from "antd";


interface Props {
    name: string;
    isWin: boolean | undefined;
    id: number;
    getCouple: (id: number) => void;
    round: number
    setWin: (id: number, checked: boolean) => void
}

const TeamComponent = (props: Props) => {
    return (
        <div className="team-component">
            <div>
                {props.name}
            </div>
            <div>
                Присудить выигрышь <Switch checked={props.isWin} onChange={(checked => props.setWin(props.id, checked))} />
                Round is {props.round}
            </div>
        </div>
    )
}
export default TeamComponent
