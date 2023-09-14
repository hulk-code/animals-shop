

const MarkBook = ({markbook,remaining,totalCost}) => {
    return (
        <div>
            <p> totalCost:{totalCost} </p>
                <p>remaining:{remaining}</p>
          <div>
          <ul>
            <li>
               
                {markbook.name}
                </li>
                </ul>  
          </div>
        </div>
    );
};

export default MarkBook;