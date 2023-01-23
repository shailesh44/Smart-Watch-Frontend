
import React from "react"
import Messagebroad from "../Messagebroad"

export default class Databroadcast extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: [
            {
                id: "1",
                body: "Hello",
                date: "2017-04-22T09:25:50",

            },
            {
                id: "2",
                body: "Hello",
                date: "2017-04-21T04:31:22",

            },
            {
                id: "3",
                body: "How are you?",
                date: "2017-04-21T03:08:31",

            },
            {
                id: "4",
                body: "Meeting soon",
                date: "2017-04-18T01:10:32",

            }
        ]
      }
    }

  render() {
    return (
      <div id="dashboard">
        <Messagebroad messages={this.state.messages}/>
      </div>
    )
  }
}