import React from 'react'
export default function Chat(props) {
  return (
    <div>
    <form>
      <label for="name">Чат с {props.name}</label><br/>
      <input type="text" id="name" placeholder="Введите текст"/>
      <input type="submit"/>
    </form>
    </div>
  )
}
