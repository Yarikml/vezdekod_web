import {Button, Input} from "antd";
import AddCoupleComponent from "../components/AddCoupleComponent";
import {useRef, useState} from "react";
import TeamComponent from "../components/TeamComponent";

interface Team {
    id: number;
    name: string;
    round: number;
    isWin: boolean | undefined;
}

const TournamentGrid = () => {
    const [couples, setCouples] = useState<undefined | [Team[]]>()
    const [winners, setWinners] = useState<undefined | Team[]>()
    const [winners1, setWinners1] = useState<undefined | Team[]>()



    const addCouple = (firstTeamName: string, secondTeamName: string) => {

        if (couples != undefined) {
            //setCouples([...couples, ...couple])
            const couple: Team[] = [
                {
                    id: couples.length * 2,
                    name: firstTeamName,
                    round: 1,
                    isWin: undefined
                },
                {
                    id: couples.length * 2 + 1,
                    name: secondTeamName,
                    round: 1,
                    isWin: undefined
                }
            ]
            // @ts-ignore
            setCouples([...couples, couple])
        } else {
            const couple: Team[] = [
                {
                    id: 0,
                    name: firstTeamName,
                    round: 1,
                    isWin: undefined
                },
                {
                    id: 1,
                    name: secondTeamName,
                    round: 1,
                    isWin: undefined
                }
            ]
            setCouples([couple])
        }
    }
    const setWin = (id: number, checked: boolean) => {
        let couple = getCouple(id)

        let resultCouple
        // @ts-ignore
        couple!.find(team => {
            if (team.id === id) {
                team.round++
                // @ts-ignore
                ///setCouples(oldCouples => [...oldCouples])

                // @ts-ignore
                if (winners !== undefined) {
                    setWinners([...winners, team])

                } else {
                    setWinners([team])

                }

            } else {
                team.isWin = !checked
            }
        })
    }

    const setWin1 = (id: number, checked: boolean) => {
        let couple = getCouple(id)

        let resultCouple
        // @ts-ignore
        couple!.find(team => {
            if (team.id === id) {
                team.round++
                // @ts-ignore
                ///setCouples(oldCouples => [...oldCouples])

                if (winners1 !== undefined) {
                    setWinners1([...winners1, team])

                } else {
                    setWinners1([team])

                }

            } else {
                team.isWin = !checked
            }
        })
    }

    const getCouple = (id: number) => {

        let result
        couples?.find(couple => {
            couple.find(team => {
                if (team.id == id) {
                    result = couple
                }
            })
        })
        return result
    }

    return (
        <div className="tournament-grid">
            <div className="add-couple-container">
                <AddCoupleComponent addCouple={addCouple} />
            </div>
            <div className="grid-container">
                <div className="first">
                    {couples?.map(couple => couple.map(team => <TeamComponent id={team.id} round={team.round} isWin={team.isWin} name={team.name} getCouple={getCouple} setWin={setWin}  />))}
                </div>
                <div className="second">
                    {winners?.map(winner => <TeamComponent id={winner.id} round={winner.round} isWin={winner.isWin} name={winner.name} getCouple={getCouple} setWin={setWin1}  />)}
                </div>
                <div className="third">
                    {winners1?.map(winner => <TeamComponent id={winner.id} round={winner.round} isWin={winner.isWin} name={winner.name} getCouple={getCouple} setWin={setWin1}  />)}
                </div>
            </div>


        </div>
    )
}
export default TournamentGrid;
