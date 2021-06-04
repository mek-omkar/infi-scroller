import './List.css';

import React from 'react';

export type Data = {
    titles: any,
    values: any
}

export type ListData = {
    data: Data,
    onScrollFn: any
}

const List: React.FC<ListData> = ({
    data,
    onScrollFn
  }: ListData) => {
    
    return <div className="list-container" onScroll={onScrollFn}>
        <table className="list">
        <thead>
            <tr key="list-titles-0" className="list-tr">
            {   
                Object.values(data.titles)
                  .map((val:any, index:number) => {
                    return (<th key={index.toString()} className="list-th">{val}</th>)
                })
            }
            </tr>
        </thead>
        <tbody>    
            {   
                Object.values(data.values)
                  .map((row:any, rowIndex:number) => {
                    return (
                    <tr key={"tr-"+rowIndex.toString()} className="list-tr">
                        {
                            Object.values(row)
                                .map((val:any, colIndx:number) => {
                                    return <td key={"td-"+rowIndex.toString()+"-"+colIndx.toString()} className="list-td">{val}</td>              
                                })
                        }
                    </tr>)
                })
            }
        </tbody>
        </table>
    </div>
}
  
export default List;
