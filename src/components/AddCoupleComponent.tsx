import {Button, Input} from "antd";
import {useState} from "react";

interface Props {
    addCouple: (firstTeamName: string, secondTeamName: string) => void
}

const AddCoupleComponent = (props: Props) => {
    const [firstTeamName, setFirstTeamName] = useState('')
    const [secondTeamName, setSecondTeamName] = useState('')
    return (
        <div className="add-couple">
            <div>
                <span>Введите название первой команды/участника</span>
                <Input onChange={(event) => setFirstTeamName(event.target.value)} value={firstTeamName}/>
            </div>
            <div>
                <span>Введите название второй команды/участника</span>
                <Input onChange={(event) => setSecondTeamName(event.target.value)} value={secondTeamName}/>
            </div>
            <Button type={"default"} onClick={() => {
                props.addCouple(firstTeamName, secondTeamName)
                setFirstTeamName('')
                setSecondTeamName('')
            }}>Create couple</Button>
        </div>
    )
}
export default AddCoupleComponent
