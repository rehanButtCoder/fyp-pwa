'use client'

import ServerComponent from "../servercomponent/page";

// import ServerComponent from "../servercomponent/page";

const ClientComponent = () => {
    console.log("ClientComponent");

    let a = 10
  return (
    <div>
      <h1>ClientComponent</h1>
      <ServerComponent a={a}/>
    </div>
  )
}

export default ClientComponent
