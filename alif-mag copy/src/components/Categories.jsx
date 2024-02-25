import React from "react";

function Categories({value,onChangeCategory}) {

  const categories=[
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]
  return(
    <div className="categories">
              <ul>
              {
                categories.map((obj,index)=> <li className={value ===index ? 'active' :''} onClick={()=>onChangeCategory(index)} key={index}>{obj}</li>)
              }
              </ul>
            </div>
  )
}
export default Categories;