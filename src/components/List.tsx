import React from "react";
import { IState as IProps } from "../App";


const List: React.FC<IProps> = ({books}) => {

    const renderList = (): JSX.Element[] => {
      return books.map((book) => {
          return (
            <li className = "List">
                <div className ="List-header">
                    <img className ="List-img" src={book.img} alt="book cover"/>
                    <h2>{book.name}</h2>
                </div>
                <p>{book.author}</p>
                <p>{book.year}</p>
            </li>
          )
        })
      
    }
    return (
        <ul>
           {renderList()}
        </ul>
    )
}

export default List;