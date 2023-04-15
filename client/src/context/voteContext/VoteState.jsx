import VoteContext from "./VoteContext";

export const VoteState = (props) => {
  return (
    <VoteContext.Provider value={{}}>
        {props.children}
    </VoteContext.Provider>
  )
}
